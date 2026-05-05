---
name: prisma-schema
description: Standards for Prisma schema changes, migrations, and model design. Trigger when a PR modifies prisma/schema.prisma, anything under prisma/migrations/, or files that import @prisma/client in ways that suggest schema-level changes.
---

# Prisma schema & migrations

Schema changes are the highest-stakes PRs in this codebase. A bad migration can lose data, lock the production database, or silently corrupt relationships in ways that take weeks to surface. Review accordingly.

## Universal model conventions

Every model in `prisma/schema.prisma` must have:

```prisma
model Example {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // domain fields below
}
```

- `id` is always a UUID, never an auto-increment integer. UUIDs are safe to expose in URLs, distributable across systems, and don't leak business volume metrics ("oh, they only have 247 users").
- `createdAt` and `updatedAt` exist on every model, no exceptions. Even tables that "feel static" eventually need them.
- `updatedAt` uses `@updatedAt` so Prisma maintains it automatically.

## Naming conventions

- Model names: PascalCase singular (`Post`, `MediaItem`, not `posts` or `Posts`)
- Field names: camelCase (`publishedAt`, not `published_at` or `PublishedAt`)
- Relation fields: descriptive of the relationship (`author`, `posts`, not `user` and `userPosts`)
- Enum names: PascalCase singular (`PostStatus`, not `POST_STATUSES`)
- Enum values: SCREAMING_SNAKE_CASE (`DRAFT`, `PENDING_REVIEW`, `PUBLISHED`)
- Foreign key fields: `<relation>Id` (`authorId`, not `author_id` or `author_uuid`)

## Relations: be explicit

Every relation needs:

- An explicit `@relation` name when there are multiple relations between the same two models, or when the relation is non-obvious
- An explicit `onDelete` behavior — `Cascade`, `Restrict`, `SetNull`, or `NoAction`. Never leave it as the default
- Both sides of the relation defined (the `@relation` field on the child and the back-reference on the parent)

Example of doing it right:

```prisma
model Post {
  id       String @id @default(uuid())
  authorId String
  author   User   @relation("PostAuthor", fields: [authorId], references: [id], onDelete: Restrict)
}

model User {
  id    String @id @default(uuid())
  posts Post[] @relation("PostAuthor")
}
```

## Indexes are not optional

Every foreign key needs an index. Prisma does NOT create them automatically on the child side. Forgetting this turns into a performance disaster the moment you have non-trivial data.

```prisma
model Post {
  authorId String
  author   User @relation(fields: [authorId], references: [id], onDelete: Restrict)

  @@index([authorId])  // required
}
```

Also index any field used in `WHERE` clauses, `ORDER BY`, or unique lookups. Composite indexes are fine; document why they're composite if it's not obvious.

## Migration discipline

Every schema change produces a migration. The migration is committed in the same PR as the schema change.

### Required practices

- Run `npx prisma migrate dev --name <descriptive-name>` to generate the migration. Migration name should describe the change ("add_post_status_enum", not "update_schema")
- Commit both `prisma/schema.prisma` and the generated `prisma/migrations/<timestamp>_<name>/migration.sql`
- Migrations are immutable once committed. Never edit a migration file after the fact — add a new migration that fixes the prior one
- Migration names are timestamped; preserve that ordering. Never rename or reorder migrations

### Destructive operations require approval

The following operations require explicit out-of-band approval before merging — even if the migration runs cleanly in dev:

- `DROP TABLE`
- `DROP COLUMN` (a non-additive column removal)
- `ALTER COLUMN` that narrows a type (varchar(500) → varchar(100), nullable → non-nullable on a populated table, etc.)
- Renames of any column on a table with existing production data
- Changes to a primary key
- Changes to a unique constraint that could fail on existing data

For these operations, the PR must include in its body:
1. The data migration plan (how existing rows are handled)
2. The rollback plan (how to revert if production breaks)
3. Explicit confirmation from the owner that the destructive operation has been approved

A reviewer who sees a destructive operation without these three things blocks the PR. No exceptions.

### Additive changes are safe

Adding a new model, adding a new optional column, adding a new index, adding a new enum value — these are non-destructive and don't need special handling. Just normal review.

## Enum changes deserve care

Adding an enum value: safe.

Removing an enum value: dangerous. Existing rows may reference the value being removed. Treat as a destructive operation requiring approval and a data migration plan.

Renaming an enum value: requires a multi-step migration (add new value → backfill rows → remove old value). Don't do it in a single migration.

## Seed scripts

`prisma/seed.ts` (or equivalent) must be:

- Idempotent — running it twice produces the same result as running it once
- Safe in production — never delete or overwrite real data; use upserts keyed on stable identifiers
- Optional — the app must work without ever running the seed

If a seed script does anything destructive (`prisma.user.deleteMany()` etc.), it must include an explicit guard against running in production:

```ts
if (process.env.NODE_ENV === "production") {
  throw new Error("Seed script must not run in production");
}
```

## Generated client

The generated Prisma client lives at `src/generated/prisma/` and is gitignored. It's regenerated on every `prisma generate` and during build. PRs should never include changes to generated client output — that's a sign the gitignore isn't working or the generator output path changed.

## Block the PR if

- Any model is missing `id`, `createdAt`, or `updatedAt`
- Any `id` field uses `@id @default(autoincrement())` instead of UUID
- Any foreign key is missing its corresponding `@@index`
- Any relation has no explicit `onDelete` behavior
- A destructive migration (drop table, drop column, narrow type, rename) lacks data migration plan, rollback plan, and explicit approval in the PR body
- An enum value is removed without a migration plan
- `prisma/schema.prisma` is modified without a corresponding migration in `prisma/migrations/`
- A migration in `prisma/migrations/` is modified or deleted instead of being superseded by a new migration
- Generated client output (`src/generated/prisma/*`) is committed
- Seed script lacks production guard on destructive operations
- Naming conventions violated (snake_case fields, plural model names, etc.)

## What automated tools miss

`prisma validate` catches syntax. It does not catch:

- Missing indexes on foreign keys
- Missing `onDelete` behaviors
- Destructive migrations without plans
- Naming inconsistency
- Whether a migration is actually safe against production data

These need human (or skill-aware reviewer) judgment. Cite line numbers and the specific rule when blocking.