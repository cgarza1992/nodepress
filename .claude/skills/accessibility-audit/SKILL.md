---
name: accessibility-audit
description: WCAG 2.1 AA conformance checklist for reviewing web UI changes. Trigger when a PR touches markup, components, forms, navigation, color, focus, or interaction patterns.
---

# Accessibility audit (WCAG 2.1 AA)

Use this when reviewing any PR that modifies user-facing markup or styling. The target is WCAG 2.1 Level AA — the baseline most laws (EAA, ADA-aligned guidance, Section 508) reference. WCAG 2.2 adds nine more criteria; if the project commits to 2.2, append those, but don't conflate them.

## Block the PR if any of these fail

### Semantic structure
- Page has exactly one `<h1>`. Heading levels are sequential — no jumps from `h2` to `h4`.
- Landmarks present: `<header>`, `<nav>`, `<main>`, `<footer>`. Only one `<main>` per page.
- Lists use `<ul>` / `<ol>` / `<li>` — never styled `<div>`s.
- Buttons are `<button>`. Links are `<a href>`. A clickable `<div>` is a block.

### Images & media
- Every `<img>` has an `alt` attribute. Decorative images use `alt=""`. Informative images describe the information, not the file (`alt="Quarterly revenue up 12%"`, not `alt="chart.png"`).
- SVG icons used as buttons have an accessible name (`aria-label` on the button, or visually-hidden text).
- Video has captions. Audio has a transcript.

### Color & contrast
- Body text contrast ≥ 4.5:1 against its background.
- Large text (≥18pt or ≥14pt bold) and UI component boundaries ≥ 3:1.
- Information is never conveyed by color alone (error states need an icon or text label, not just red).
- Focus indicators have ≥ 3:1 contrast against the background they appear on.

### Keyboard
- Every interactive element is reachable with `Tab` in a logical order.
- Every interactive element has a visible focus indicator. Removing the browser default (`outline: none`) without a replacement is a block.
- No keyboard traps. `Esc` closes modals and dropdowns.
- Skip-to-content link present on pages with significant nav.

### Forms
- Every input has a programmatically associated `<label>` (via `for`/`id` or wrapping). `placeholder` is not a label.
- Required fields are marked in text, not just color.
- Error messages are associated with their input via `aria-describedby` and announced (use `role="alert"` or `aria-live="polite"` on the error region).
- Error text describes the fix, not just the failure ("Email must include @", not "Invalid").

### ARIA (use sparingly)
- No `role` that contradicts the element (`<button role="link">` is wrong — use `<a>`).
- `aria-hidden="true"` is never on a focusable element.
- Custom widgets (tabs, accordions, comboboxes) follow the ARIA Authoring Practices Guide patterns. If they don't match a known pattern, ask why a native element wasn't used.

### Motion & timing
- `prefers-reduced-motion` is honored — no parallax, autoplay, or large transitions for users who opt out.
- No content auto-updates faster than every 5 seconds without a way to pause.
- Nothing flashes more than 3 times per second.

## Tools to run

- **axe DevTools** browser extension — run on the changed pages, report any violations
- **Lighthouse → Accessibility** — should be ≥ 95; below that, investigate
- **Keyboard pass** — tab through every interactive element on changed pages; everything reachable, focus visible, logical order
- **Screen reader spot-check** — VoiceOver (macOS: Cmd+F5) or NVDA (Windows). Read through the changed flow once.

## What automated tools miss

Roughly 30% of WCAG issues. Always supplement with:
- A keyboard-only pass
- A screen reader spot-check on at least the primary user flow in the diff
- Reading the DOM to verify semantic intent matches visual presentation

## Review output

If anything in the "Block the PR" list fails, request changes with the specific criterion cited (e.g. "WCAG 1.4.3 Contrast — the muted text on the about card is 3.1:1, needs 4.5:1"). For nice-to-haves, leave them as comments, not blockers.