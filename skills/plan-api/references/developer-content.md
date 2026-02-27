# Developer Content Marketing

## Content Types That Work for APIs

| Type | Funnel Stage | Effort | Value | Example |
|------|-------------|--------|-------|---------|
| Quickstart tutorial | BOFU | Medium | Very High | "Get started with [API] in 5 minutes" |
| Integration guide | MOFU | Medium | High | "How to use [API] with Next.js" |
| Comparison article | BOFU | Medium | High | "[API] vs [Competitor]: Developer's Guide" |
| Migration guide | BOFU | High | Very High | "Migrating from [Competitor] to [API]" |
| Use-case deep dive | MOFU | Medium | Medium | "Building [real app] with [API]" |
| "How we built it" post | TOFU | Low | Medium | Technical blog about API architecture decisions |
| API design article | TOFU | Medium | Medium | Thought leadership on API best practices |
| Code sample library | BOFU | High | Very High | Production-ready examples in every supported language |
| Changelog/release notes | Retention | Low | High | What's new, what's deprecated |

## 52-Week Editorial Calendar Framework

- Weeks 1-4: Foundation (BOFU comparison + quickstart per SDK language)
- Weeks 5-12: Tutorial series (one integration guide per week, covering major frameworks)
- Weeks 13-26: Use-case deep dives + guest posts on developer blogs (2 guest posts/month)
- Weeks 27-39: Industry/vertical content + thought leadership articles
- Weeks 40-52: Advanced tutorials + case studies + retrospective content
- 1 article/week (API adoption cycles are longer than SaaS — quality over quantity)

## Syndication Strategy

**dev.to**: Great for tutorials, how-to content. Use dev.to frontmatter (title, tags, canonical_url). Best posting days: Mon-Wed.

**Medium**: Good for thought leadership, broader audience. Publication submission for reach. Always set canonical URL.

**Hashnode**: Developer-focused, good for technical deep dives. Hashnode blog integration for custom domain.

**What to syndicate**: MOFU and TOFU content only. NEVER syndicate BOFU (comparison, pricing) — keep those on your own domain.

**Canonical URL**: ALWAYS point to your own domain. Syndicated posts are distribution, not primary.

**Timing**: Publish on your site first, wait 3-7 days, then syndicate.

**Cadence**: 2-3 syndicated posts/month.

## Code Sample Quality Rules

- Every code sample must be runnable as-is (copy-paste-execute)
- Real API keys masked as `YOUR_API_KEY` with clear instructions for replacement
- Error handling included — show what happens on failure, not just success
- Multiple languages — at minimum: JavaScript, Python, cURL
- Version-pinned dependencies — `npm install api-sdk@^2.0.0` not just `npm install api-sdk`

## SEO for Developer Content

**Keyword patterns**
- "[language] [topic] API" — e.g., "Python OCR API", "JavaScript geolocation API"
- "how to [verb] with [API category]" — e.g., "how to extract text with OCR API"
- "best [category] API for [use case]" — e.g., "best speech-to-text API for React"

**SERP features to target**
- Featured snippets: Use proper code blocks (```language) — Google pulls these for code queries
- "People Also Ask": Add FAQ sections to every tutorial — answer the obvious follow-up questions
- Sitelinks: Structured docs site with clear hierarchy boosts sitelinks eligibility

**Technical SEO**
- Proper code block formatting with language identifiers
- Meta descriptions that include code-adjacent keywords ("tutorial", "example", "quickstart")
- Page load speed matters — lazy-load syntax highlighting libraries

**Long-tail wins**
- "[framework] + [API category] tutorial" has significantly less competition than "[API category] tutorial"
- Target: "Next.js image recognition API tutorial" not "image recognition API tutorial"
- Specificity compounds: rank for 50 long-tail terms instead of fighting for 1 head term

## Content Quality Benchmarks

| Signal | Target |
|--------|--------|
| Time-on-page for tutorials | >4 minutes |
| Bounce rate for tutorials | <45% |
| Code copy clicks (if tracked) | >30% of visitors |
| Syndicated post traffic ratio | <25% (own domain should dominate) |
| Organic traffic growth | 15-20% MoM in first year |
