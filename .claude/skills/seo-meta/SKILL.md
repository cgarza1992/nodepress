---
name: seo-meta
description: SEO meta tags, Open Graph, and structured data requirements for christophergarza.dev. Trigger when a PR adds or modifies pages, layouts, head metadata, sitemaps, robots configuration, or JSON-LD.
---

# SEO & social meta — christophergarza.dev

Every public-facing page needs a complete metadata set. This skill defines the standard. It pairs with the `buildMetadata` helper at `src/lib/seo.ts` — pages should never assemble metadata by hand.

## Site constants

These live in `src/lib/seo.ts` and must never be hardcoded elsewhere. If you see a string literal for the domain, name, or socials anywhere outside this config file, that's a block.

```ts
export const siteConfig = {
  name: "Christopher Garza",
  domain: "https://www.christophergarza.dev",
  description:
    "Senior Software Engineer, Frontend at the seam between marketing and engineering. Building the technical systems behind pricing, conversion, and analytics for enterprise products. React • TypeScript • Next.js • Node.js",
  jobTitle: "Senior Software Engineer, Frontend",
  author: {
    name: "Christopher Garza",
    image: "https://www.christophergarza.dev/profile_triumph_pic.jpg",
    sameAs: [
      "https://github.com/cgarza1992",
      "https://www.linkedin.com/in/christopher-garza-dev/",
    ],
  },
  locale: "en_US",
  defaultOgImage: "https://www.christophergarza.dev/og/default.png",
} as const;
```

## How metadata gets applied

Pages call `buildMetadata` from `src/lib/seo.ts`, which returns a Next.js `Metadata` object. The helper is the single source of truth for tag shape — never bypass it.

```ts
export const metadata = buildMetadata({
  title: "WP Engine Hosting Plans",
  description: "Built the purchase funnel bridging WP Engine's marketing site and product portal. Redux-driven plan selection, Salesforce integration, Optimizely A/B testing.",
  path: "/case-studies/wpe-plans",
  ogImage: "/og/wpe-plans.png",
  type: "article",
});
```

The helper handles: title suffix (` | Christopher Garza`), absolute URLs, canonical, og:* tags, locale, and `metadataBase`. It does not set `twitter` fields explicitly — see the Twitter tags policy below for why.

## Required tag shape on every page

After `buildMetadata` runs, the rendered HTML must contain:

```html
<title>{Page-specific title} | Christopher Garza</title>
<meta name="description" content="{120-160 char page-specific summary}">
<link rel="canonical" href="https://www.christophergarza.dev{path}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">  <!-- "article" for case studies -->
<meta property="og:url" content="https://www.christophergarza.dev{path}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="https://www.christophergarza.dev{ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{describes the image}">
<meta property="og:site_name" content="Christopher Garza">
<meta property="og:locale" content="en_US">
```

### Title rules
- 50–60 characters total including the suffix
- Page-specific portion first, ` | Christopher Garza` appended by the helper
- Homepage uses `Senior Software Engineer, Frontend | Christopher Garza`
- No duplicate titles across pages

### Description rules
- 120–160 characters
- Page-specific — the homepage description must not appear on case studies
- Includes the primary entity/action of the page in natural language

### Canonical rules
- Absolute URL, HTTPS, with `www.` (the live site uses `www.`)
- Self-referential on the canonical version of the page
- No trailing slash unless the URL actually has one
- Strip query params and tracking parameters (utm_*, fbclid, etc.)

## Open Graph image specs

LinkedIn matters most for this site — recruiters share links there constantly, and LinkedIn aggressively caches OG data. Make the OG image worth sharing.

- **Dimensions: 1200 × 630 px** (1.91:1) — universal default
- **Minimum: 600 × 315 px** — anything smaller renders tiny or gets dropped
- **File format: PNG or JPG** — WebP is supported by all majors as of 2026 but PNG is safest for shared cards
- **File size: under 300 KB** — WhatsApp drops images larger than that on mobile
- **HTTPS only** — HTTP `og:image` URLs are blocked by every platform
- **Safe zone: keep text and logos within the central 80%** — platforms crop edges differently
- **One default image, optional per-route overrides** — `/og/default.png` for everything; case studies may add `/og/{slug}.png`

If a per-route OG image is referenced but the file doesn't exist in `/public/og/`, that's a block.

## Twitter tags policy

Next.js 16 automatically derives `twitter:*` tags from the `openGraph` block in a Metadata object. These framework-emitted tags are acceptable — their content mirrors the OG block, which is the whole point of having OG metadata in the first place. Suppressing them is not possible without dropping the `openGraph` block entirely (verified empirically: setting `twitter: null` or casting individual fields to `null` does not prevent emission; Next.js 16 `postProcessMetadata()` and `resolveTwitter()` unconditionally backfill twitter title/description/image from openGraph).

What's forbidden is **manually adding** `twitter:*` fields. Specifically:

- Setting `twitter.card`, `twitter.creator`, `twitter.site`, or any `twitter` property in a Metadata export
- Hardcoding `<meta name="twitter:*">` tags in JSX
- Overriding the framework's auto-derived twitter content with platform-specific copy

Manual twitter metadata implies platform-specific tuning that the site doesn't need. Let the framework do it; don't fight it.

## Structured data (JSON-LD)

Inject via a `<JsonLd>` component using `dangerouslySetInnerHTML` with `JSON.stringify`. JSON-LD does not go in the `metadata` export — Next.js metadata API doesn't support it. If you see JSON-LD in `generateMetadata`, that's a block.

Validate every schema with Google's Rich Results Test before merging.

### Homepage — `Person` schema

Required on `/`. Build from `siteConfig` — do not duplicate strings that already live in config.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Christopher Garza",
  "url": "https://www.christophergarza.dev",
  "image": "https://www.christophergarza.dev/profile_triumph_pic.jpg",
  "jobTitle": "Senior Software Engineer, Frontend",
  "description": "Senior Software Engineer, Frontend at the seam between marketing and engineering. Building the technical systems behind pricing, conversion, and analytics for enterprise products.",
  "knowsAbout": [
    "React",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Conversion Rate Optimization",
    "A/B Testing",
    "Component Architecture",
    "Analytics Infrastructure",
    "Segment"
  ],
  "sameAs": [
    "https://github.com/cgarza1992",
    "https://www.linkedin.com/in/christopher-garza-dev/"
  ]
}
```

### Case studies — `Article` schema

Required on every `/case-studies/{slug}` route. Use real dates from git log when available; omit `datePublished` / `dateModified` rather than fabricating them.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Case study title}",
  "datePublished": "{YYYY-MM-DD if known}",
  "dateModified": "{YYYY-MM-DD if known}",
  "author": {
    "@type": "Person",
    "name": "Christopher Garza",
    "url": "https://www.christophergarza.dev"
  },
  "publisher": {
    "@type": "Person",
    "name": "Christopher Garza"
  },
  "image": "https://www.christophergarza.dev/og/{slug}.png",
  "mainEntityOfPage": "https://www.christophergarza.dev/case-studies/{slug}",
  "description": "{120-160 char summary, matches the page meta description}"
}
```

### Optional — `BreadcrumbList`

Helps Google show breadcrumb trails in search results. Acceptable on case studies once they're stable.

### What NOT to add
- No `Organization` schema — this is a personal portfolio
- No `Product` schema for the demos
- No `Review` or `Rating` schema unless backed by real third-party reviews
- No invented schema types or fields not in schema.org
- No `BlogPosting` on case studies — they're `Article`, not blog posts

## Sitemap & robots

Both are Next.js dynamic routes, not static files. If `public/sitemap.xml` or `public/robots.txt` exist as static files alongside the dynamic routes, that's a block — they conflict and cause confusion.

`src/app/sitemap.ts` must include every public route. New routes added in a PR must be added to the sitemap in the same PR.

`src/app/robots.ts` must:
- Allow `/` for `*`
- Disallow `/api/`
- Reference the sitemap URL

## Subdomains

The Storybook (`storybook.christophergarza.dev`) and demo subdomains (`fastspring.christophergarza.dev`, `partners.christophergarza.dev`) are out of scope for the main repo's metadata work, but if a PR touches their config:

- Each should `noindex` to avoid diluting the main domain in search results
- Each should have its own `robots.txt` with `Disallow: /` or a site-wide `<meta name="robots" content="noindex">`

## Block the PR if

- Any new public page is missing a unique `<title>` or `meta description`
- Any page assembles metadata by hand instead of calling `buildMetadata`
- The domain, site name, or socials are hardcoded outside `src/lib/seo.ts`
- Any manually-set `twitter:*` field is introduced (Metadata.twitter export, hardcoded meta tag, etc.) — framework-emitted twitter tags from openGraph are fine
- `og:image` is missing, points to a non-existent file in `/public/og/`, or uses HTTP
- `og:image` dimensions don't match `og:image:width` / `og:image:height`
- Canonical is missing, points to dev/staging, includes query params, or omits `www.`
- Structured data is present but invalid (must validate via Rich Results Test)
- JSON-LD is placed inside the `metadata` export instead of rendered as a `<script>` tag
- New routes aren't added to `sitemap.ts`
- `noindex` is left on a public page by mistake
- `public/sitemap.xml` or `public/robots.txt` exist as static files alongside the dynamic routes
- `Person` schema's `sameAs` includes anything other than the LinkedIn and GitHub URLs in `siteConfig.author.sameAs`
- Case study schema uses `BlogPosting` instead of `Article`
- Schema includes fabricated dates or invented fields

## Validators to run

- **Rich Results Test** — `https://search.google.com/test/rich-results?url=<preview-url>`
- **Schema Markup Validator** — `https://validator.schema.org/` for structured data not yet eligible for rich results
- **LinkedIn Post Inspector** — `https://www.linkedin.com/post-inspector/` (the only way to force LinkedIn to refresh its OG cache)
- **OpenGraph.xyz** or **Share Preview** — visual check on Slack / iMessage / LinkedIn rendering
- **Local curl check** during PR review:
  ```bash
  curl -sL <preview-url> | grep -iE '<(title|meta|link|script)' | head -40
  ```
  