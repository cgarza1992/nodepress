# Portfolio Repo

## Stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict)
- Database/ORM: Prisma
- Styling: Tailwind
- Content: Plain components for now; planned migration to database-backed content with WYSIWYG editing

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

## PR and commit authorship

- Never add AI attribution footers, generation notices, or co-author trailers to PR descriptions or commit messages.
- Specifically forbidden: any variant of "Generated with Claude Code", the robot emoji footer, "Co-Authored-By: Claude", or similar attribution lines.
- When invoking `gh pr create`, the `--body` value ends with the last substantive content (acceptance criteria, testing notes, file changes). No footer, no separator, no trailing attribution.
- The Git author is whatever the local Git config specifies. Do not override or append to it.