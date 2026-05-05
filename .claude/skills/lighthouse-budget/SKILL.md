---
name: lighthouse-budget
description: Performance budgets and Core Web Vitals thresholds for reviewing PRs. Trigger when changes affect bundle size, images, fonts, third-party scripts, render-blocking resources, hydration, or any user-facing rendering path.
---

# Performance budget

Two layers: **field metrics** (Core Web Vitals from real users via CrUX) are what Google ranks on; **lab metrics** (Lighthouse local runs) are what we check on every PR because field data takes 28 days to update.

## Field targets — Core Web Vitals (75th percentile)

These are the actual ranking signals as of 2026.

| Metric | Good | Needs improvement | Poor | What it measures |
|---|---|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | 2.5–4.0s | > 4.0s | Time to render the largest visible element |
| INP (Interaction to Next Paint) | < 200ms | 200–500ms | > 500ms | Responsiveness across all interactions, full session |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.1–0.25 | > 0.25 | Unexpected layout movement |

Note: INP replaced FID in March 2024. If anything in the codebase still references FID, flag it for cleanup.

## Lab targets — Lighthouse on every PR

Run mobile, slow 4G, 4× CPU throttle (Lighthouse defaults). These are stricter than the field targets so we catch regressions before they hit real users.

| Metric | Target | Alert at |
|---|---|---|
| Performance score | ≥ 90 | < 90 |
| LCP | < 2.0s | > 2.0s |
| TBT (Total Blocking Time) | < 200ms | > 200ms |
| CLS | < 0.05 | > 0.05 |
| Speed Index | < 3.0s | > 3.0s |

TBT is the lab proxy for INP — a high TBT in lab usually means a high INP in field. Treat it as the early-warning metric.

## Resource budgets per page

| Resource | Budget |
|---|---|
| Total transfer (gzip/br) | < 500 KB |
| JS (transferred) | < 170 KB |
| CSS (transferred) | < 60 KB |
| Images per page | < 1 MB total |
| Fonts | ≤ 2 families, ≤ 4 weights, all `font-display: swap` |
| Third-party requests | < 10 |

## Block the PR if

- Performance score drops below 90 on any page in the diff
- Any Core Web Vital regresses past its "good" threshold
- A new dependency adds > 30 KB gzipped to a route's JS bundle without justification
- Images are served as PNG/JPEG when WebP/AVIF would work (LCP killers)
- Any image > 200 KB
- Any image without explicit `width` and `height` attributes (CLS)
- Fonts loaded without `font-display: swap` (LCP)
- Render-blocking JS or CSS in `<head>` that isn't critical
- New third-party script without a documented reason and a measurement of its impact

## Common LCP wins
- Preload the LCP image: `<link rel="preload" as="image" href="..." fetchpriority="high">`
- Use `priority` on Next.js `<Image>` for the hero
- Inline critical CSS, defer the rest
- Self-host fonts; preload the woff2 file used in the first paint

## Common INP wins
- Break long tasks (> 50ms) into smaller chunks via `scheduler.yield()` or `setTimeout`
- Defer non-critical JS until after interaction
- Avoid synchronous work in event handlers — move it to `requestIdleCallback` or off-thread
- Audit React re-renders — memoize expensive components, virtualize long lists

## Common CLS wins
- Explicit `width`/`height` on every image, video, iframe
- Reserve space for ads and embeds
- Don't inject content above existing content after first paint
- Avoid layout-shifting font swaps — preload the web font or use `size-adjust` on the fallback

## Tools

- `npx unlighthouse --site <url>` — full-site Lighthouse audit
- Chrome DevTools → Performance Insights → Web Vitals
- `npx @next/bundle-analyzer` (or framework equivalent) on every PR that touches JS
- PageSpeed Insights for field data once the site is live
- Web Vitals Chrome extension for live-page checks during review

## Review output

Run Lighthouse on the deployed preview (Vercel/Netlify build URL), compare to a baseline run on `main`. Cite specific deltas. Block on regressions, comment on improvements with concrete next steps.