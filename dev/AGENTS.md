# Dev Harness — Agent Guide

## Files

| File | Purpose |
|------|---------|
| `dev/tasks.json` | Flat task list with id, phase, spec, status, verify_cmd |
| `dev/progress.md` | Running log — current phase, last task, blockers |
| `dev/AGENTS.md` | This file — TOC and session protocol |
| `domains/dev.md` | Domain rules (source of truth for steps) |
| `scripts/verify-harness.js` | Pre-commit enforcement script |
| `.git/hooks/pre-commit` | Hook that runs verify-harness.js |

## Session Protocol

1. **Read** `dev/tasks.json` and `dev/progress.md` — understand current state.
2. **Pick** the first task with `"status": "fail"` in phase order (tdd → pipeline → quality → safety).
3. **Implement** the task according to its `spec`.
4. **Run** the task's `verify_cmd` — confirm it passes.
5. **Update** `dev/tasks.json` — flip `"status": "fail"` to `"status": "pass"`.
6. **Append** to `dev/progress.md` — add a row with timestamp, task ID, action taken, and result.
7. **Commit** — the pre-commit hook enforces that every pass flip has a matching verify_cmd execution and progress.md update in staged files.
8. **Repeat** from step 2 until all tasks pass.

## Phase Order

1. **tdd** — Red-Green-Refactor (3 tasks)
2. **pipeline** — coder → code-simplifier → reviewer → tester → doc (5 tasks)
3. **quality** — ctx-blocks, style, YAGNI (3 tasks)
4. **safety** — TUI and web verification (2 tasks)

## Rules

- Never skip phases — complete all tasks in a phase before moving to the next.
- Never flip a task to `pass` without running its `verify_cmd` first.
- Every commit touching `tasks.json` must also touch `progress.md`.
- If blocked, note the blocker in `progress.md` and move to the next unblocked task.
