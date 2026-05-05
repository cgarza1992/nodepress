---
name: ci-watcher
description: Poll GitHub Actions on a PR until success, failure, or timeout.
tools: Bash
model: sonnet
---
Input: PR number.

Loop `gh pr checks <num>` every 30 seconds, max 20 minutes total.

Output exactly one of:
- `ALL_GREEN`
- `FAILED: <check-name>` with the last 50 lines of that check's log via `gh run view --log-failed`
- `TIMEOUT` after 20 minutes