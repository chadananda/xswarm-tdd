# API Pricing Models

## Model Comparison

| Model | When to Use | Real Examples | Pros | Cons |
|-------|-------------|---------------|------|------|
| Pay-per-call | Transactional, variable usage, clear cost-per-unit | Twilio ($0.0085/SMS), OpenAI ($0.002/1K tokens), Clearbit ($0.03/enrich) | Revenue scales with value delivered, easy for customers to forecast small usage | Unpredictable for high-volume customers, scary for developers building prototypes |
| Tiered quotas | Predictable usage with natural size brackets | Stripe (flat % + per-call), SendGrid (free/40K/100K/1M emails/month) | Predictable revenue, easy to communicate, natural upsell triggers | Cliff edges cause churn at tier boundaries, hard to optimize limits |
| Freemium with rate limits | Developer tools, network-effect products | GitHub API (5K req/hr authenticated), Spotify API (no commercial without approval), Mapbox (free 50K/month) | Drives adoption and ecosystem, low barrier to evaluate | Most users never convert, requires volume to justify infrastructure cost |
| Marketplace revenue share | Distribution priority over direct revenue | RapidAPI (takes 20-30% of revenue), AWS Marketplace (3-5% fee) | Zero sales overhead, built-in discovery | Revenue share is permanent tax, pricing control is limited, brand dilution |
| Enterprise custom pricing | High-volume or compliance-sensitive customers | Plaid (negotiated), Persona (negotiated), Clearbit Enterprise | High ACVs, relationship-based, lock-in | Long sales cycles, expensive to support, hard to scale |

## Free Tier Design

The free tier's job is to get developers to their "aha moment" — not to be generous.

**Goal**: Enough to build and test a proof of concept; not enough to run production traffic.

| Dimension | Typical Range | Rationale |
|-----------|---------------|-----------|
| Daily call limit | 100-1,000 calls/day | Enough for development, too low for real apps |
| Monthly call limit | 1K-10K calls/month | Common alternative to daily limits |
| Feature restrictions | No SLA, no webhooks, no team seats | Features that matter only in production |
| Support level | Community/docs only | Email support is a conversion trigger |
| Rate limit | Lower than paid (e.g., 10 req/sec vs 100 req/sec) | Caps free-tier infrastructure cost |

**Conversion triggers** — the moments free users upgrade:
1. Hitting rate limit mid-project (most common)
2. Needing production-grade SLA for a real customer
3. Needing team access (more than one seat)
4. Needing webhooks or bulk endpoints (production patterns)
5. Outgrowing daily/monthly call cap

**Anti-pattern**: Limits too low to finish an integration. Developer abandons rather than upgrading. Research competitor free tiers before setting limits.

## Overage Handling

How you handle users who exceed their plan limits is a major DX decision with revenue implications.

| Approach | Developer Experience | Revenue Impact | Best For |
|----------|---------------------|----------------|---------|
| Throttle (429 responses) | Predictable, no surprise bills, dev-friendly | Leaves revenue on table if demand is real | Developer-first products, freemium |
| Auto-charge overages | Maximizes revenue capture | Developers hate surprise bills; churn risk | Usage-based products where value is clear |
| Hard cap (block at limit) | Safest for developer budgets | Hard revenue ceiling | Security-sensitive or free-tier products |
| Notification + grace period | Best balance — warn before blocking | Slightly lower revenue, much better retention | Production APIs where predictability matters |

**Recommendation for most API products**: Throttle on free tier, notification + 24hr grace period on paid tiers. Auto-charge overages only if you have explicit opt-in and clear per-call pricing in the dashboard.

## Pricing Research Methodology

1. Find 5-8 competitors with public pricing pages — use Google: `[problem domain] api pricing`
2. Document the per-unit cost at each tier (per call, per 1K, per 10K, per GB, per seat)
3. Check RapidAPI category for marketplace pricing benchmarks — sort by "Most Popular"
4. Note free tier limits precisely — this sets the market expectation
5. Identify the pricing unit the market uses: per-call, per-compute (seconds), per-bandwidth (GB), per-seat, or per-result

## Free / Pro / Enterprise Tier Design

**Free**
- Hooks developers into the ecosystem
- 100-1,000 calls/day or 5K-50K calls/month
- No SLA
- Community support only (docs, Discord, GitHub Issues)
- Rate limited (10 req/sec)
- Purpose: reach first working integration

**Pro** (target: $29-299/mo depending on domain)
- Production-ready
- 100K-1M calls/month
- 99.9% uptime SLA
- Email support with 24-48hr response
- Usage dashboard and alerting
- Higher rate limits (100 req/sec)
- Webhooks and batch endpoints
- Purpose: production deployment for indie developers and small teams

**Enterprise** (target: $1K-10K+/mo or negotiated ACV)
- Custom call volume
- 99.99% uptime SLA with credits
- Dedicated customer success manager
- Priority support with <4hr response SLA
- SSO/SAML for team provisioning
- Audit logs and compliance reports (SOC 2, GDPR DPA)
- Custom data retention and residency
- Purpose: large teams with compliance requirements

## Pricing Psychology for APIs

| Technique | Implementation | Effect |
|-----------|---------------|--------|
| Annual commitment discount | 20-30% off monthly rate for annual prepay | Improves cash flow, reduces churn |
| Volume discounts | Per-unit price drops at 100K, 1M, 10M calls | Retains high-volume customers who'd otherwise negotiate |
| Startup programs | Free Pro tier for 6-12 months (apply via form) | Builds ecosystem, creates case studies, earns loyalty |
| Developer credits | $50-200 credits on signup (instead of free tier) | Encourages real usage without permanent free infrastructure load |
| Partner pricing | Discounted rate for integration partners who build on your API | Incentivizes ecosystem development |

**Pricing page best practices**: Show cost-per-unit at each tier explicitly. Include a calculator if pricing is usage-based. List what's included in free vs paid. Make the upgrade CTA appear directly in the rate-limit error response — not just on the pricing page.
