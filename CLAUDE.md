# Portfolio Repo

## Stack
- Framework: <Next.js 15 / Astro / Vite+React / etc>
- Language: TypeScript (strict)
- Styling: <Tailwind / CSS modules / etc>
- Content: <MDX / sanity / etc>

## Conventions
- Components in `src/components/`, one per file, PascalCase filenames
- Pre-PR checklist: `npm run lint && npm run typecheck && npm run build`
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`)

## Branching
- `main` is the default branch; branch protection rules are not currently enforced (will be added separately)
- One branch per feature: `feat/<kebab-slug>`
- One PR per branch, squash merge, delete branch on merge
- No force-push after a review has been left

## CI
- GitHub Actions config: `.github/workflows/ci.yml`
- Required checks: `lint`, `typecheck`, `build`

## Out of scope without asking
- Dependency upgrades (separate PR)
- Schema/content model changes
- Anything touching `src/lib/analytics/` (manual review only)