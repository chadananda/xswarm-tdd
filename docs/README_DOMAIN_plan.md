# Domain: plan — Project Planning

**~10 lines loaded** on activation.

Interactive requirements gathering and task decomposition. Transforms vague requirements into executable task DAGs using native Claude Code Tasks.

- **Phase 0 (Interactive):** 5W1H analysis + MoSCoW prioritization + Given-When-Then scenarios. Resolves ambiguity before any code is written. Blocks until user approves.
- **Phase 1 (Autonomous):** Codebase research — finds existing utilities, coding patterns, dependency versions. Anti-hallucination checklist: verify every module, import path, and version before specifying.
- **Phase 2:** Task decomposition into XS/S/M units (no task > 60 min). Test-first ordering: pure functions before integration.
- **Phase 3:** Output native Tasks with DAG dependencies for parallel execution.

**Key principle:** Good specs enable mechanical execution. Every task spec includes file paths, imports, patterns to follow, and success criteria. Bad spec: "Implement JWT authentication." Good spec: "Size: S | File: src/routes/api/auth/login.ts | Imports: { hashPassword } from src/lib/auth/hash | Pattern: Follow src/routes/api/admin/auth/+server.ts lines 23-45 | Success: POST /api/auth/login returns 200+JWT on valid creds, 401 on invalid."
