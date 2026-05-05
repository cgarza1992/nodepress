---
name: content-modeling
description: Standards for deciding when content gets its own model, when it extends an existing model, and when it's a block within rendered content. Trigger when a PR adds new content types, modifies the Post/Page/Block models, or introduces what feels like "just one more meta field."
---

# Content modeling

The single most expensive mistake a CMS makes is "everything is a Post with custom fields." It feels flexible. It's actually how WordPress ended up needing ACF as middleware to bridge the gap between content and frontend. We're explicitly avoiding that.

This skill defines when something is a Post, a Page, a Block, a custom content type, or a separate model entirely.

## The four-question test

When introducing new content, walk these questions in order. The first one that applies determines the model.

### 1. Is it static, route-bound, and singular?

Examples: the home page, an "about" page, a contact page, a privacy policy.

→ **It's a Page.** One row per route, edited rarely, lives at a fixed URL.

### 2. Is it part of a series with a publication date and author?

Examples: blog posts, news articles, release notes.

→ **It's a Post.** Many rows, ordered by date, has author/status/published-at semantics.

### 3. Does it have its own lifecycle, queryable as a collection, AND has fields no Post would ever have?

Examples: case studies (have client, role, outcome metrics, completion date), products (have price, SKU, inventory), team members (have role, bio, social links, photo), events (have start/end times, location, RSVP capacity).

→ **It's a custom content type.** New Prisma model, dedicated table, dedicated admin UI, dedicated query patterns.

The "fields no Post would ever have" check is critical. A "tutorial" with a difficulty rating and prerequisites is still arguably a Post (just with metadata). A "case study" with metrics, client logos, and a structured timeline is genuinely different — those fields don't generalize.

### 4. Is it a piece of structured content that appears *inside* other content?

Examples: a callout box, a code example, a pricing table, an image gallery, a CTA button, a metric card.

→ **It's a Block.** Stored as part of the parent's `content` JSON tree, rendered by a typed block component.

Blocks never have their own database row unless they're reused across multiple parents. If a CTA appears on three pages and changes once need to propagate everywhere, *then* it becomes a separate model with its own table and the parents reference it.

## When in doubt, prefer fewer types

A new Prisma model is a real cost: schema migrations, admin UI, API routes, types, tests, fixtures. Don't add one for a single use case if extending an existing model works.

The wrong escape hatch is "let me just add another nullable column to Post." The right escape hatch is "this isn't actually a Post, let's name it correctly."

If you can't name the new content type without using the word "Post" in the name (e.g. "TutorialPost", "CaseStudyPost"), it might genuinely be a Post variant. If the name stands on its own (e.g. "CaseStudy", "TeamMember"), it deserves its own model.

## The block content tree

All long-form content (Posts, Pages, custom content types with body content) stores its body as a structured JSON tree of typed blocks, never as raw HTML or markdown.

```json
{
  "type": "doc",
  "blocks": [
    { "type": "heading", "level": 1, "text": "Title" },
    { "type": "paragraph", "text": "Lead paragraph." },
    { "type": "image", "src": "/uploads/abc.jpg", "alt": "...", "caption": "..." },
    { "type": "code", "language": "ts", "code": "..." },
    { "type": "callout", "variant": "info", "blocks": [...] }
  ]
}
```

Why structured trees over HTML or markdown:

- Renderable identically server-side and client-side from the same source
- Validatable — each block type has a schema, malformed content fails fast
- Queryable — "find all posts containing a specific block type" is trivial
- Migrate-able — block schema can evolve without rewriting all content
- Composable — blocks can contain other blocks (callouts, columns, etc.)

The block schema is defined in TypeScript with Zod (or equivalent) for runtime validation. Any new block type requires:

1. A Zod schema for the block's shape
2. A React component that renders it
3. An admin UI form for editing it
4. A migration plan if existing content needs to be updated

## Taxonomies (categories, tags, etc.)

Taxonomies are their own models, never enums.

- An enum is a closed set defined at compile time (PostStatus, UserRole)
- A taxonomy is an open set the user can extend at runtime (Category, Tag)

If users can create new values through the admin UI, it's a taxonomy. If only developers can add values via code, it's an enum.

Taxonomies use a many-to-many relationship with their content types via an explicit join table. Don't store comma-separated tag strings in a column.

## Status workflows

Any content type with publication semantics uses a status enum, never a `published: boolean`.

```prisma
enum PostStatus {
  DRAFT
  PENDING_REVIEW
  SCHEDULED
  PUBLISHED
  PRIVATE
  TRASH
}
```

The state machine matters more than the field name. Define the legal transitions in code:

- DRAFT → PENDING_REVIEW (author submits)
- PENDING_REVIEW → DRAFT (editor sends back)
- PENDING_REVIEW → SCHEDULED or PUBLISHED (editor approves)
- SCHEDULED → PUBLISHED (cron job at publishedAt)
- PUBLISHED → PRIVATE (unpublish)
- ANY → TRASH (delete)
- TRASH → DRAFT (restore)

Illegal transitions return an error. Don't enforce this at the database layer; enforce it in the service layer where you can return a meaningful error to the user.

## Revisions

Any content with significant editorial weight (Posts, Pages, custom content types with body content) needs revision history. Revisions are a separate table.

```prisma
model PostRevision {
  id        String   @id @default(uuid())
  postId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Restrict)
  content   Json     // snapshot of the post's content at the time of revision
  createdAt DateTime @default(now())

  @@index([postId])
  @@index([authorId])
}
```

A new revision is created on every save (not just publish). The current state of the Post itself is the working copy; revisions are the history.

## Block the PR if

- A new content type is added without walking the four-question test (the PR body should reference which question put the type in its category)
- A new model is named with "Post" in the name when it's clearly distinct content (CaseStudyPost, ProductPost) — rename
- An existing model gets a nullable column that's only used by one specific use case — strong signal it should be a separate type
- Long-form body content is stored as raw HTML or markdown instead of structured JSON blocks
- A new block type is added without a Zod schema, render component, and admin form
- Tags or categories are stored as comma-separated strings instead of a proper taxonomy
- A `published: boolean` field is added instead of a status enum
- A taxonomy is implemented as an enum (closed set when it should be open)
- Revision history is missing for a content type with editorial weight
- A status workflow allows illegal transitions because no state machine is enforced

## Defer to a follow-up PR

Some things deserve their own PR rather than getting bundled into a content modeling change:

- Migration of existing content from old shape to new shape
- Admin UI for new block types
- Public rendering for new block types

The schema change can land first; the supporting work follows. Just be explicit in the PR body about what's deferred.
