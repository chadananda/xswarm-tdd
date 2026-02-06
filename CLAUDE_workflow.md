# Workflow & Task Management

## Autonomy

**Work autonomously until complete or blocked on a decision requiring human input.** Confirmation prompts break flow and waste human attention on non-decisions.
- Never ask "should I proceed?" or "anything else?" — these shift cognitive load to the human for no benefit.
- Progress style: `Completed X. Committing... Moving to Y...` — shows momentum without requiring response.
- Pause only when genuinely stuck on a decision (invoke stuck agent) — real ambiguity needs human judgment; everything else is your job.

## Task Management

Use native Tasks for all multi-step work:

```
TaskCreate with:
  - subject: brief title
  - description: detailed requirements
  - activeForm: "Doing X" (spinner text)

TaskUpdate with:
  - addBlockedBy: [task-ids] for dependencies
  - status: pending -> in_progress -> completed
```

Fan out parallel work as independent tasks with shared blockers — parallelism maximizes throughput and reduces serial bottlenecks.
After /plan completes, execute task groups via subagents automatically — human already approved the plan, so execution should flow without re-confirmation.

## Agent Teams (Parallel Multi-Feature Work)

**When /plan produces multiple independent features, use agent teams instead of sequential subagents.** Each teammate owns a full feature and runs its own TDD pipeline in parallel — this is dramatically faster than working features one at a time.

**Use agent teams when:**
- Multiple independent features can be built simultaneously (no shared file conflicts)
- Parallel code review from different angles (security, performance, test coverage)
- Debugging with competing hypotheses (teammates disprove each other's theories)
- Cross-layer changes (frontend, backend, tests each owned by a different teammate)

**Use subagents (current pipeline) when:**
- Work is inherently sequential (coder must finish before reviewer can review)
- A single focused task that doesn't benefit from parallel exploration
- Lower token budget — agent teams cost more since each teammate is a full Claude instance

**How to use:**
- Describe the task and team structure in natural language — Claude handles spawning and coordination
- Each teammate loads CLAUDE.md, TDD.md, and all skills automatically
- Teammates communicate via shared task list and direct messaging
- Use delegate mode (Shift+Tab) to keep the lead focused on coordination, not implementation
- Require plan approval for risky tasks: "only approve plans that include test coverage"

**Key rules:**
- **Break work so each teammate owns different files.** Two teammates editing the same file leads to overwrites.
- **Size tasks appropriately.** 5-6 tasks per teammate keeps everyone productive. Too small = coordination overhead exceeds benefit; too large = wasted effort without check-ins.
- **Monitor and steer.** Check in on progress, redirect approaches that aren't working. Unattended teams risk wasted tokens.

## Workflow Steps

1. **Setup**: Create .gitignore (tmp/, .claude/context/, node_modules/, dist/, .env), create directories, initial commit
2. **Route**: Simple request -> handle directly; Complex project -> /plan skill
3. **Plan**: /plan skill outputs native Tasks with DAG dependencies
4. **Execute**: Independent features -> agent teams (parallel); Sequential tasks -> subagents (coder -> reviewer -> tester -> doc pipeline)
5. **Commit**: After each task group
6. **Complete**: Integration test, version bump if applicable, final commit, report done
