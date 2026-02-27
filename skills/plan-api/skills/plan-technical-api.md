# Phase 3: Technical Specification & Integration Architecture

## Setup

Read `api-viability-report.md` and `api-strategy-brief.md` from the current working directory. Both must exist — if either is missing, tell the user which file is missing and stop.
Read `references/api-tech-stacks.md` for stack recommendations and known anti-patterns.
Read `references/wrapper-matrix.md` for the full platform integration assessment rubric.
Read `templates/api-technical-prd.md` to understand the required output structure before writing anything.

Open with a one-sentence context summary: "[API name] for [developer persona] at [$X/month entry pricing] — built to solve [core problem from viability report]." Then proceed without re-asking anything already established.

---

## OpenAPI 3.1 Specification Skeleton

Generate a starter OpenAPI 3.1 spec based on the API's purpose from Phase 1 and the developer ICP from Phase 2. This is a working skeleton — not pseudocode, not a description of a spec. Write actual YAML.

The spec must include:

**Info block**: title, version (start at 1.0.0), description (2-3 sentences, developer-facing), contact (support email placeholder), license, termsOfService URL placeholder.

**Server URLs**: two entries — sandbox (`https://sandbox.api.[product].com/v1`) and production (`https://api.[product].com/v1`). Sandbox must accept any valid API key and return mock data.

**Auth scheme**: Choose based on the integration complexity decision from Phase 2. Default to API key in header (`X-API-Key`) for simplicity — this minimizes time-to-first-call. Add OAuth 2.0 only if the API accesses user-owned data (social accounts, calendars, files). Document both if both are needed. Justify the choice.

**3-5 core endpoints**: Design around the Must-Have value prop. Each endpoint needs:
- Path and HTTP method
- Summary and description (developer-facing)
- Request parameters or body schema with types and descriptions
- Response schema (success and error cases)
- Rate limit annotation in the description
- Example request and response in the spec

**Consistent error response schema**: Every error response uses the same structure. Required fields: `error` (string, machine-readable code), `message` (string, human-readable), `docs_url` (string, direct link to relevant docs page), `request_id` (string, for support debugging). No endpoint returns a different error shape.

**Rate limit headers**: Document these as response headers on every endpoint — `X-RateLimit-Limit` (calls allowed in window), `X-RateLimit-Remaining` (calls left in current window), `X-RateLimit-Reset` (Unix timestamp when window resets). This lets developers build adaptive retry logic.

WebSearch:
- "[category] API OpenAPI spec examples" site:github.com
- "[competitor] openapi.yaml" OR "[competitor] swagger.json"
- "OpenAPI 3.1 best practices" API design
- "API versioning strategy" URL vs header vs query param

Share findings: are there existing OpenAPI specs for competitors you can reference for field naming conventions? What versioning approach do the successful APIs in this space use?

Ask the user: "Does this endpoint structure match what you'd actually build? Anything missing from the core 3-5 — or anything here that shouldn't be in v1?"

---

## API Gateway Configuration

Recommend a gateway based on the pricing tiers and developer personas from Phase 2. Default recommendation is Zuplo for developer-first APIs (excellent DX, built-in rate limiting, free tier). Alternatives with rationale:
- Kong Gateway if the team has existing infrastructure expertise or needs on-prem
- AWS API Gateway if the backend is already on AWS and operational simplicity outweighs cost
- Cloudflare Workers if edge latency is a core product differentiator

WebSearch:
- "Zuplo vs Kong vs AWS API Gateway developer experience 2024 2025"
- "[chosen gateway] rate limiting configuration"
- "[chosen gateway] pricing" at current traffic estimates
- "API gateway metering usage tracking" per-API-key

Define the gateway configuration requirements:

**Rate limiting**: Map tiers from Phase 2 pricing to rate limit rules. Example: "Free tier = 100 requests/minute, Growth = 1,000/minute, Scale = 10,000/minute." Every tier needs burst handling — what happens when a developer hits the limit (429 with Retry-After header, not silent drop).

**Auth validation**: API key validation at the gateway layer — never at the application layer. Key format, rotation policy, revocation mechanism.

**Request/response transformation**: Document any transformations needed — header injection, response envelope normalization, field renaming for backward compatibility.

**Caching strategy**: What responses can be cached and for how long. Read-heavy endpoints (reference data, lookups) should be cached aggressively. Write endpoints never. Cache-Control headers required on every response.

**CORS policy**: Which origins are allowed. For a public API: permissive (`*`) for GET endpoints, explicit origin list for authenticated endpoints. Document this so SDK generators configure correctly.

**Usage metering**: Every API call must emit a metering event (API key, timestamp, endpoint, response code, latency). This powers billing, analytics, and anomaly detection. Define the metering event schema here.

---

## SDK Generation Targets

Based on the developer persona language priorities from Phase 2, define the SDK strategy.

**Generation approach**: Choose one approach and justify it.
- OpenAPI Generator (open source, broad language support, rough output that needs cleanup)
- Stainless or Speakeasy (managed service, polished output, idiomatic code, paid)
- Hand-crafted (maximum quality and control, high ongoing maintenance cost — only if the API has complex state or streaming)

WebSearch:
- "Stainless vs Speakeasy vs OpenAPI Generator SDK quality 2024"
- "[category] API SDK" GitHub — what quality level do developers expect
- "[chosen approach]" pricing and language support

For each priority language, define:

**TypeScript/JavaScript (npm)**:
- Package name: `[product]-js` or `@[org]/[product]`
- Registry: npmjs.com
- Install: `npm install [package-name]`
- Quickstart snippet: 5-line example — import, init with API key, one call, handle response
- Features: TypeScript types generated from OpenAPI schema, ESM + CJS dual build, Node.js 18+ and browser support

**Python (PyPI)**:
- Package name: `[product]-python` or `[product]`
- Registry: pypi.org
- Install: `pip install [package-name]`
- Quickstart snippet: 5-line example
- Features: type hints from OpenAPI, async support (asyncio), Python 3.9+

**Go (pkg.go.dev)**:
- Module path: `github.com/[org]/[product]-go`
- Install: `go get github.com/[org]/[product]-go`
- Quickstart snippet

**Additional SDKs** (post-launch, rank by developer persona demand): Ruby, PHP, Java, Rust. List them with the registry name and estimated build effort in developer-days.

For each SDK, document: error handling pattern (exceptions vs result types), retry logic (exponential backoff with jitter, default 3 retries), logging hooks, and how to configure base URL for sandbox vs production.

---

## Wrapper & Integration Matrix

Full platform assessment for all relevant integration types. Populate based on the developer audience and use case — not every API needs every platform.

For each entry: Platform | Type | Build Effort | Developer Reach | Priority | Launch Phase | Marketplace | Notes

**Tier 1 — Launch (Day 1)**:
- TypeScript/npm SDK
- Python/PyPI SDK
- REST API directly (no wrapper needed — just docs)
- Postman collection (publish to Postman Public API Network)

**Tier 2 — Month 1-2**:
- Zapier integration (Zap trigger + action) — reach: 6M+ users, marketplace listing required
- n8n community node — open source, developer-heavy audience, publish to npm as `n8n-nodes-[product]`
- Make (formerly Integromat) module — visual workflow tool, enterprise-adjacent

**Tier 3 — Month 3-6**:
- CLI tool — install via npm or Homebrew, useful for developer debugging and scripting
- VS Code extension — if the API involves code generation, linting, or content
- GitHub Action — if the API fits CI/CD workflows (testing, deployment, data)
- Slack app — if the API produces notifications or summaries worth surfacing in chat

**Tier 4 — Post-launch backlog**:
- WordPress plugin — massive install base but developer effort is high for limited API relevance
- Chrome extension — depends heavily on use case
- Raycast extension — small but high-quality developer audience
- Apple Shortcuts — consumer-adjacent, lower priority for developer APIs
- AWS/Azure Marketplace — enterprise tier signal, high listing effort

For each integration in Tier 1-2: estimate developer-days to build, name the marketplace if one exists, and note any certification or review requirements.

WebSearch:
- "Zapier developer platform integration requirements"
- "n8n community node publishing" requirements
- "[category] API" existing Zapier integration — does one already exist
- "RapidAPI listing requirements" API provider

---

## Documentation Site Plan

Define the documentation architecture. Default: Astro-based static site with Starlight (developer documentation theme). Alternatives: Mintlify (hosted, zero-ops), Docusaurus (React-based, larger ecosystem).

WebSearch:
- "Mintlify vs Docusaurus vs Astro Starlight API docs 2024"
- "[competitor] docs site" — what platform do they use, what's the structure

**Site structure**:

```
/                     → Landing page (not docs homepage — conversion focused)
/docs/                → Docs homepage (quickstart-first)
/docs/quickstart/     → 5-minute getting started guide
/docs/authentication/ → API key management, OAuth flow if applicable
/docs/api-reference/  → Auto-generated from OpenAPI spec (one page per endpoint)
/docs/guides/         → Use-case tutorials (one per major integration pattern)
/docs/sdks/           → Per-SDK install + quickstart page
/docs/errors/         → Complete error code reference with resolution steps
/docs/changelog/      → Version history, breaking changes, deprecation notices
/docs/status/         → Link to status page (Instatus or Statuspage.io)
/docs/rate-limits/    → Rate limit policy, tier table, retry guidance
```

**API Reference generation**: Auto-generate from OpenAPI spec using the chosen gateway's built-in tooling or a dedicated tool (Redoc, Stoplight Elements, or Scalar). The reference page for each endpoint must include: description, auth requirement, request parameters with types and examples, response schemas with examples, error codes, and a live "Try it" widget using the sandbox URL.

**Search**: Algolia DocSearch (free for open-source/developer docs) or Pagefind (self-hosted). Required from day one — developers leave docs that don't have search.

---

## Infrastructure Cost Estimate

Two scenarios: launch (0-1K API calls/day) and early scale (100K calls/day). Use real current pricing.

| Service | 0-1K calls/day | 100K calls/day |
|---------|----------------|----------------|
| API Gateway (Zuplo or equivalent) | $0 (free tier) | $X/month |
| Compute (serverless or containers) | $X/month | $X/month |
| Database (PostgreSQL managed) | $X/month | $X/month |
| Caching (Redis managed) | $0 (optional at launch) | $X/month |
| CDN (Cloudflare) | $0 (free tier) | $X/month |
| Monitoring (Sentry + Datadog or equivalent) | $X/month | $X/month |
| Docs hosting (Vercel or Netlify) | $0 | $0 |
| Status page (Instatus) | $0 | $X/month |
| SDK CI/CD (GitHub Actions) | $0 | $0 |
| **Total burn** | **$X/month** | **$X/month** |

WebSearch the specific services being recommended. Use real current prices from their pricing pages — never use "approximately free."

---

## Development Milestones

Define 5-6 milestones with calendar week estimates. Base on actual scope, not a generic template.

- M1 (Week 1-2): API skeleton — gateway config, auth, core endpoint stubs, error schema, OpenAPI spec committed
- M2 (Week 2-4): Core endpoint logic — business logic for 3-5 core endpoints, sandbox environment, rate limiting active
- M3 (Week 4-5): SDK v1 — TypeScript and Python SDKs generated and published, automated tests against sandbox
- M4 (Week 5-6): Docs site — quickstart, API reference auto-generated, error reference, changelog
- M5 (Week 6-7): Billing integration — Stripe metering, free tier enforcement, tier upgrade flow, usage dashboard
- M6 (Week 7-8): Beta — invite first 10-20 developers, collect integration friction data, fix top issues

Each milestone: deliverables list, definition of done (not "complete" — a testable criterion).

---

## Output

Read `templates/api-technical-prd.md`. Write `api-technical-prd.md` in the current working directory.

Fill every section with specifics. Real framework names, real service names with real prices, actual OpenAPI YAML for the spec skeleton, actual package names for SDKs, real endpoint paths. No placeholder text. If a section is not applicable to this API, write one sentence explaining why.

Confirm completion: "api-technical-prd.md written. Ready for Phase 4 (developer GTM) when you are."
