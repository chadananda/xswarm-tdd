---
name: plan-api
description: End-to-end API product planner — market validation, developer strategy, technical specification, and 52-week developer marketing calendar. Four linear phases, each producing a deliverable document.
allowed-tools: Read, Write, Bash(*), WebSearch, WebFetch, AskUserQuestion
model: sonnet
argument-hint: "[idea] or [validate|strategy|technical|marketing|resume]"
---

# /plan-api — End-to-End API Product Planner

Takes an API product idea from concept to developer GTM with a 52-week marketing calendar. Four linear phases: validate → strategy → technical → marketing. Each phase produces a deliverable document; each subsequent phase reads all prior documents to build context.

## Command Routing

Parse `$ARGUMENTS` to determine entry point:

| Input | Action |
|-------|--------|
| `validate [idea]` | Phase 1 only |
| `strategy` | Phase 2 (requires `api-viability-report.md`) |
| `technical` | Phase 3 (requires `api-strategy-brief.md`) |
| `marketing` | Phase 4 (requires `api-technical-prd.md`) |
| `resume` | Detect last completed phase, continue from next |
| `[idea text]` (no subcommand) | Full 4-phase pipeline starting with idea |
| *(empty)* | Ask user for their API product idea, then full pipeline |

## Phase State Detection

Check which output files exist in the current working directory:

```
api-viability-report.md  → Phase 1 complete
api-strategy-brief.md    → Phase 2 complete
api-technical-prd.md     → Phase 3 complete
api-marketing-prd.md     → Phase 4 complete
```

For `resume`: find the last existing file and start the next phase. If none exist, start Phase 1.

## Phase Gating

- **Phase 1 → 2**: Viability score must be ≥10 (Yellow zone). If Red zone, iterate on weakest factors before proceeding.
- **Phase 2 → 3**: `api-viability-report.md` must exist. Read it for context.
- **Phase 3 → 4**: `api-viability-report.md` + `api-strategy-brief.md` must exist. Read both.
- **Phase 4**: All three prior documents must exist. Read all for context.

## Phase Execution

For each phase, read the corresponding sub-skill file and follow its instructions exactly:

| Phase | Sub-skill | References (load on demand) | Output |
|-------|-----------|----------------------------|--------|
| 1: Validate | `skills/plan-validate-api.md` | `references/api-viability-scoring.md` | `api-viability-report.md` |
| 2: Strategy | `skills/plan-strategy-api.md` | `references/developer-personas.md`, `references/api-pricing-models.md` | `api-strategy-brief.md` |
| 3: Technical | `skills/plan-technical-api.md` | `references/api-tech-stacks.md`, `references/wrapper-matrix.md` | `api-technical-prd.md` |
| 4: Marketing | `skills/plan-marketing-api.md` | `references/developer-content.md`, `references/api-distribution.md`, `references/api-video-podcast.md`, `references/api-launch-sequence.md` | `api-marketing-prd.md` |

**Reference loading**: Read reference files at the START of each phase, not all at once. This keeps context focused.

## Output Templates

Each sub-skill writes its output document using the corresponding template from `templates/`. Read the template first, then fill in every section with specific, researched content. Never leave placeholder text.

## Conversation Style

- **Tough-love advisor**: Challenge assumptions with data. Don't be a yes-man.
- **One question at a time**: Never dump multiple questions. Ask, wait, research, challenge, score.
- **Specific numbers**: "RapidAPI has 4.2M developers and charges 20% rev-share" not "there are many API marketplaces."
- **WebSearch between questions**: Research competitor APIs, pricing pages, developer communities, marketplace listings before asking the next question. Share findings to inform the conversation.
- **Show your work**: When scoring, explain exactly why with evidence from research.

## File Paths

All sub-skill, reference, and template paths are relative to this SKILL.md location:
`~/.claude/skills/plan-api/`
