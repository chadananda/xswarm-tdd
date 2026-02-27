# API Tech Stack Decisions

## API Gateway Options

| Gateway | Best For | Pricing Model | Pros | Cons |
|---------|----------|---------------|------|------|
| Zuplo | API-first products, developer-facing APIs | Free tier generous; $250/mo Growth | API-native (rate limiting, key auth, analytics built-in), programmable policies in TypeScript, excellent DX | Newer, smaller ecosystem than Kong |
| Kong | Enterprise, complex routing, plugin ecosystem | OSS free; Enterprise negotiated | Massive plugin library, battle-tested, self-hosted option, Kubernetes-native | Complex to configure, heavyweight for small APIs |
| AWS API Gateway | AWS-native stacks, serverless (Lambda) backends | $3.50/million calls (REST) | Native Lambda integration, IAM auth, pay-per-request, no ops | Cold start latency, verbose config, AWS lock-in |
| Cloudflare Workers | Edge-first, global low latency, geo-aware routing | Free 100K req/day; $5/mo for 10M | Sub-10ms cold start, global edge network, built-in rate limiting, DDoS protection | V8 sandbox limitations (no native modules), learning curve |
| Tyk | Open-source priority, self-hosted required | OSS free; Cloud from $500/mo | Strong GraphQL support, open-source, on-prem for compliance | Less polished DX, smaller community than Kong |

**Recommendation for new API products**: Start with Zuplo (built-in key management, rate limiting, analytics, developer portal) or Cloudflare Workers (if edge latency matters). Migrate to Kong only when plugin requirements justify the complexity.

## Auth Schemes

| Scheme | When to Use | Setup Complexity | Developer Experience |
|--------|-------------|------------------|----------------------|
| API Key | Server-to-server, simple integrations, all use cases at launch | Low | Excellent — one header, works everywhere |
| OAuth 2.0 | Acting on behalf of users, accessing user-owned data (calendars, email, repos) | High | Moderate — familiar but requires redirect flows |
| JWT (Bearer token) | Stateless microservice auth, short-lived sessions | Medium | Good — standard, tooling widely available |
| API Key + OAuth 2.0 | Mature APIs serving both server and user-data use cases | Medium (two systems) | Excellent — developer chooses the right tool |
| mTLS | Zero-trust enterprise, financial services, healthcare | Very High | Poor for external devs — enterprise-only |

**Recommendation**: Launch with API key auth (header `Authorization: Bearer sk_...` or custom `X-API-Key`). Add OAuth 2.0 only when your API needs access to user-owned resources. Never launch with OAuth-only — it kills prototype adoption.

**Key format conventions**: Prefix keys with product identifier (`sk_live_`, `sk_test_`, `pk_`) — Stripe popularized this pattern for good reason. Test vs live key distinction prevents production accidents.

## SDK Generation Tools

| Tool | Approach | Languages | Quality | Cost |
|------|----------|-----------|---------|------|
| OpenAPI Generator | Open-source, code-gen from OpenAPI spec | 40+ languages | Variable — often needs manual cleanup | Free |
| Stainless | Premium managed, spec-driven | TypeScript, Python, Go, Java, Ruby | Excellent — used by OpenAI, Anthropic, Stripe | $500-2K+/mo |
| Speakeasy | Premium managed, spec-driven | 10+ languages, Terraform provider gen | Very good — strong docs generation | $300-1K+/mo |
| Fern | Premium managed, spec-driven | TypeScript, Python, Java, Go, Ruby | Very good — strong TypeScript | $300-1K+/mo |
| Hand-crafted | Manual, language-idiomatic | Your choice | Highest — full control | Engineering time |

**SDK priority order** (by developer demand): Python, TypeScript/JavaScript, Go, Java/Kotlin, Ruby. Ship Python and TypeScript first — they cover 80%+ of developer use cases for most APIs.

**Recommendation for launch**: Hand-craft Python and TypeScript SDKs for launch quality. Use Stainless or Speakeasy to generate additional languages after product-market fit.

## Documentation Tools

| Tool | Approach | Pricing | Best For |
|------|----------|---------|---------|
| Mintlify | MDX-based, component-rich, AI search | Free for OSS; $150/mo Pro | Developer-first APIs, modern aesthetic, fast setup |
| ReadMe | Enterprise-grade, API explorer, usage analytics per-key | From $99/mo | API companies with large developer bases, need per-key analytics |
| Redocly | OpenAPI-native, reference docs focus, CI/CD integration | OSS free; Pro from $79/mo | OpenAPI-first teams, comprehensive reference docs |
| Astro + Starlight | Custom static site, full control | Free | Teams with design requirements, complex doc structures |
| Docusaurus | React-based, Meta-backed, plugin ecosystem | Free | Teams already in React ecosystem |

**Recommendation**: Mintlify for most new API products — fastest to high-quality docs, built-in API playground, good SEO. Use ReadMe when per-developer analytics (who's calling what) becomes important.

**Must-have doc pages**: Quickstart (< 5 min to first call), Authentication guide, API Reference (every endpoint), Error codes (every error explained with fix), SDKs & Libraries, Changelog, Status page link.

## Monitoring and Observability

| Layer | Tool Options | Purpose |
|-------|-------------|---------|
| Uptime monitoring | Checkly, Better Uptime, Pingdom | Detect downtime before customers do |
| APM / tracing | Datadog, New Relic, Grafana Cloud, Honeycomb | Latency debugging, slow endpoint detection |
| Error tracking | Sentry | Stack traces, error grouping, release tracking |
| API analytics | Moesif, ReadMe Metrics, Treblle | Per-endpoint usage, per-customer call volumes, error rates by consumer |
| Log management | Datadog Logs, Grafana Loki, AWS CloudWatch | Searchable request logs |

**Minimum viable observability stack at launch**: Checkly (uptime) + Sentry (errors) + Moesif (API analytics). Add Datadog or Grafana when you need distributed tracing.

**Moesif** is purpose-built for API analytics — it tracks usage by API key, shows which endpoints are called most, surfaces 4xx/5xx rates per customer, and integrates with billing providers (Stripe). Essential for API businesses at any scale.

## API Versioning Strategies

| Strategy | Pros | Cons | Used By |
|----------|------|------|---------|
| URL path versioning (`/v1/`, `/v2/`) | Explicit, easy to route, easy to test in browser, curl-friendly | URL changes with each version, bookmarks break | Stripe, Twilio, GitHub, most REST APIs |
| Header versioning (`Accept: application/vnd.api+json;version=2`) | Clean URLs, no routing changes | Hard to test in browser, easy to forget in SDK code | GitHub (content negotiation), some enterprise APIs |
| Query parameter (`?version=2`) | Easy to test, easy to override per-request | Messy URLs, easy to accidentally omit | Rare — mostly legacy APIs |
| Date-based (`/2024-01-15/`) | Exact reproducibility, no ambiguity | Unusual, harder to communicate | Stripe (secondary system for customers) |

**Recommendation**: URL path versioning (`/v1/`). It's the industry standard, universally understood, and trivially simple to route. Never change v1 behavior once customers depend on it — add v2 when breaking changes are required.

**Deprecation policy**: Announce deprecation 6-12 months before removing a version. Email all API key holders who called deprecated endpoints in the past 30 days. Keep deprecated versions alive until usage drops to zero or near-zero.
