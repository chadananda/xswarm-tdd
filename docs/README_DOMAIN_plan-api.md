# Domain: plan-api — API Product Planner

**~7 lines in domain file**, pointing to a comprehensive skill with **~2,000 lines across 18 files** — all loaded on demand per phase. Zero cost when not in use.

Takes an API product idea from concept to developer go-to-market with a 52-week marketing calendar. Same 4-phase architecture as plan-saas (validate → strategy → technical → marketing) but with API-specific domain knowledge throughout:

```
Phase 1: VALIDATE        Phase 2: STRATEGY       Phase 3: TECHNICAL      Phase 4: MARKETING
┌────────────────┐      ┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│ 6-question     │      │ Developer      │      │ OpenAPI 3.1    │      │ 52-week        │
│ interview with │─────▶│ personas       │─────▶│ spec skeleton  │─────▶│ editorial      │
│ API research   │      │ API positioning│      │ Gateway config │      │ calendar       │
│ 5-factor score │      │ Usage pricing  │      │ SDK targets    │      │ Video/shorts   │
│                │      │ DX strategy    │      │ Wrapper matrix │      │ Podcast plan   │
│ → api-viability│      │ → api-strategy-│      │ → api-technical│      │ → api-marketing│
│   -report.md   │      │   brief.md     │      │   -prd.md      │      │   -prd.md      │
└────────────────┘      └────────────────┘      └────────────────┘      └────────────────┘
  Score ≥10 to proceed
```

### Key differences from plan-saas

| Aspect | plan-saas | plan-api |
|--------|-----------|----------|
| Audience | Business buyers | Developers (+ their managers) |
| Viability factors | Product/Acquisition/Market/Defendability/Buildability | DeveloperDemand/Alternatives/Integration/Monetization/Maintainability |
| ICP model | 5-layer general | Developer personas (frontend/backend/DevOps/PM) |
| Pricing | Flat/tiered/seat/freemium | Usage-based (calls/bandwidth), tiered quotas, marketplace rev-share |
| Technical output | Tech stack + MVP scope + architecture | OpenAPI spec + gateway config + SDK plan + wrapper matrix |
| Content calendar | 12-week | 52-week (API products have longer adoption cycles) |
| Distribution | SEO + communities + Product Hunt | Marketplaces (RapidAPI, Postman) + registries (npm, PyPI) + dev communities |
| Extra channels | — | Video/shorts, podcast outreach, syndicated content (dev.to, Medium, Hashnode) |

### The reference file architecture

```
skills/plan-api/                         # 18 files, ~2,000 lines total
├── SKILL.md                             # Orchestrator: routing, phase gating
├── skills/                              # 4 sub-skills
│   ├── plan-validate-api.md             # Phase 1 API viability interview + scoring
│   ├── plan-strategy-api.md             # Phase 2 developer personas + positioning + pricing
│   ├── plan-technical-api.md            # Phase 3 OpenAPI + gateway + SDKs + wrappers
│   └── plan-marketing-api.md            # Phase 4 52-week marketing calendar + video + podcast
├── references/                          # 9 domain knowledge files
│   ├── api-viability-scoring.md         # API-specific 5-factor scoring rubric
│   ├── developer-personas.md            # Developer persona model + evaluation behavior
│   ├── api-pricing-models.md            # Usage-based, tiered, marketplace pricing
│   ├── api-tech-stacks.md              # Gateway, auth, SDKs, doc tools
│   ├── wrapper-matrix.md               # 15+ platform build-vs-wrap framework
│   ├── developer-content.md            # Dev content types, editorial calendar, syndication
│   ├── api-distribution.md             # Marketplaces, registries, communities, backlinks
│   ├── api-video-podcast.md            # Video/shorts calendars, podcast outreach
│   └── api-launch-sequence.md          # 12-week launch, email, social, metrics
└── templates/                           # 4 output templates
    ├── api-viability-report.md
    ├── api-strategy-brief.md
    ├── api-technical-prd.md
    └── api-marketing-prd.md
```

**Commands:** `/plan-api [idea]` (full pipeline), `/plan-api validate|strategy|technical|marketing` (individual phases), `/plan-api resume` (detect and continue).
