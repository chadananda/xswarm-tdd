# Domain: plan-saas — SaaS Project Planner

**~8 lines in domain file**, pointing to a comprehensive skill with **~1,770 lines across 18 files** — all loaded on demand per phase. Zero cost when not in use.

Takes a SaaS idea from napkin sketch to implementation-ready repo with a 12-month marketing calendar. Four linear phases, each producing a deliverable document that feeds into the next:

```
Phase 1: VALIDATE        Phase 2: STRATEGY       Phase 3: TECHNICAL      Phase 4: MARKETING
┌────────────────┐      ┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│ 6-question     │      │ 5-layer ICP    │      │ Tech stack     │      │ Keyword        │
│ interview with │─────▶│ Positioning    │─────▶│ MVP scope      │─────▶│ universe       │
│ web research   │      │ Pricing        │      │ User stories   │      │ Content        │
│ 5-factor score │      │ research       │      │ Architecture   │      │ calendar       │
│                │      │                │      │ Milestones     │      │ Guerrilla plan │
│ → viability-   │      │ → strategy-    │      │ → software-    │      │ → marketing-   │
│   report.md    │      │   brief.md     │      │   prd.md       │      │   prd.md       │
└────────────────┘      └────────────────┘      └────────────────┘      └────────────────┘
  Score ≥10 to proceed
```

### Phase 1: Validate
Tough-love interview — one question at a time with WebSearch between each to research competitors, market data, and channels. Scores across 5 factors (0-3 each, multiplicative):

| Factor | What it measures | Score 3 example |
|--------|-----------------|-----------------|
| Product | 10x better than alternatives | Creates new category, paradigm shift |
| Acquisition | Path to finding users | Built-in virality, distribution moat |
| Market | Size and growth | >$1B TAM with strong tailwinds |
| Defendability | Hard to copy | Structural moats: network effects, proprietary data |
| Buildability | Can execute | Unfair advantage: domain + skills + assets |

Zones: 0-9 Red (iterate), 10-19 Yellow (proceed with caution), 20-49 Green (build it), 50-99 Elite (raise capital), 100+ Unicorn.

### Phase 2: Strategy
Develops the Ideal Customer Profile using a 5-layer model (problem identity → buyer profile → psychographics → watering holes → buying behavior). Creates a positioning framework with tagline and elevator pitch. Researches competitor pricing pages to recommend specific tiers and prices with dollar amounts.

### Phase 3: Technical
Opinionated tech stack (Vue/Svelte over React, PostgreSQL default, PaaS hosting, managed auth/payments). Ruthless MVP scoping with MoSCoW — explicit "Won't Have" list with reasons to prevent scope creep. User stories with acceptance criteria. Architecture, data model, API surface. 4-6 development milestones with infrastructure cost estimates.

### Phase 4: Marketing
The most comprehensive phase — produces a complete GTM playbook:
- **Keyword universe** (20-30 keywords, BOFU/MOFU/TOFU classified)
- **Content architecture** (pillar/cluster model with internal linking strategy)
- **12-week content calendar** with specific article titles and target keywords
- **Guerrilla marketing** (build-in-public, viral waitlist, community infiltration, Product Hunt prep, micro-influencer outreach)
- **Channel strategy** (3 primary + 2 secondary with ICP-tied reasoning)
- **12-week launch sequence** with hour-by-hour launch day plan
- **Email sequences** (7-email onboarding drip + newsletter framework)
- **Metrics dashboard** (north star metric + weekly/monthly KPIs)

### The reference file architecture

```
skills/plan-saas/                        # 18 files, ~1,770 lines total
├── SKILL.md                             # Orchestrator: routing, phase gating
├── skills/                              # 4 sub-skills (~710 lines)
│   ├── plan-validate.md                 # Phase 1 interview + scoring
│   ├── plan-strategy.md                 # Phase 2 ICP + positioning + pricing
│   ├── plan-technical.md                # Phase 3 stack + MVP + architecture
│   └── plan-marketing.md                # Phase 4 GTM + content + launch
├── references/                          # 9 domain knowledge files (~790 lines)
│   ├── viability-scoring.md             # Scoring rubrics + challenge prompts
│   ├── icp-framework.md                 # 5-layer ICP model
│   ├── pricing-models.md               # SaaS pricing patterns + tier design
│   ├── saas-tech-stacks.md             # Stacks by product type + anti-patterns
│   ├── seo-strategy.md                 # SEO funnel + keyword research + GEO
│   ├── content-marketing.md            # Content types by funnel stage
│   ├── guerrilla-playbook.md           # Tactics + benchmarks
│   ├── distribution-channels.md        # Channel deep dives + prioritization
│   └── launch-sequence.md              # 12-week timeline + launch day plan
└── templates/                           # 4 output templates (~190 lines)
    ├── viability-report.md
    ├── strategy-brief.md
    ├── software-prd.md
    └── marketing-prd.md
```

Each phase loads only its relevant references (~60-140 lines), not the full ~790 lines. Same just-in-time pattern as the SEO domain, scaled up.

**Commands:** `/plan-saas [idea]` (full pipeline), `/plan-saas validate|strategy|technical|marketing` (individual phases), `/plan-saas resume` (detect and continue).
