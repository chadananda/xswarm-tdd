# API Launch Sequence (12 Weeks)

## Pre-Launch Foundation (Weeks 1-4)

### Week 1: Infrastructure
- [ ] Documentation site live (Astro/Mintlify/ReadMe) — minimum: quickstart, auth, API reference
- [ ] SDK v1 published for primary language (npm/PyPI)
- [ ] Free tier API keys available via self-service signup (no sales call, no approval)
- [ ] Status page live (Checkly, Better Uptime, or Instatus)
- [ ] Developer blog published with "Why we built [API]" post
- [ ] Social profiles created: Twitter/X, LinkedIn, GitHub org
- [ ] GitHub repos public: SDKs, example apps, OpenAPI spec

### Week 2: Content Foundation
- [ ] 2 BOFU articles published: "[API] vs [Competitor 1]", "Best [category] APIs in [year]"
- [ ] Quickstart tutorials for 2 languages published on docs site
- [ ] README optimized on all SDK repos (badges, quickstart, links)
- [ ] First dev.to cross-post published

### Week 3: Community Seeding
- [ ] Active in 3-5 developer communities (answering questions, not pitching)
- [ ] Stack Overflow: answering questions in relevant tags
- [ ] API directory submissions started (first 10 directories from api-distribution.md list)
- [ ] GitHub "awesome" list PRs submitted (3-5 relevant lists)

### Week 4: Outreach Start
- [ ] Cold outreach list: 50 developers who would benefit from this API
- [ ] First 10 personalized outreach emails sent (reference their public work, not a template)
- [ ] Podcast pitch list built: 20-30 developer podcasts
- [ ] First 5 podcast pitches sent

## Pre-Launch Beta (Weeks 5-7)

### Week 5: Beta Invites
- [ ] Invite 20-30 beta developers from outreach and community responses
- [ ] Set up feedback collection (GitHub Discussions, Discord channel, or Canny)
- [ ] Publish 2 integration tutorials (e.g., "Using [API] with Next.js", "Python + [API]")
- [ ] First video: "Getting Started with [API]" (5-10 min walkthrough)

### Week 6: Marketplace Prep
- [ ] RapidAPI listing submitted (documentation + pricing tiers)
- [ ] Postman collection published in Public API Network
- [ ] Zapier integration submitted (if applicable — unlocks non-developer audience)
- [ ] n8n community node PR submitted (if applicable)

### Week 7: Launch Prep
- [ ] Product Hunt: hunter confirmed, assets ready (logo, 240x240; gallery, 1270x760; description, 260 chars)
- [ ] Hacker News Show HN post drafted (keep it honest, technical, humble)
- [ ] Community announcement posts drafted for each community (3-5 posts, each platform-native tone)
- [ ] Beta developer testimonials collected (3-5 quotes with name + company)
- [ ] Launch day social posts scheduled (Twitter thread, LinkedIn post)
- [ ] Email to beta users: "We're launching next week — here's how you can help"

## Launch Week (Week 8)

### Monday (Day Before)
- [ ] Final check: docs, SDKs, free tier, status page all working
- [ ] Private preview link shared with beta developers
- [ ] Supporter network activated for Product Hunt upvotes (email 50+ people with direct PH link)

### Launch Day (Tue/Wed/Thu — avoid Mon and Fri)

| Time (US Eastern) | Action |
|-------------------|--------|
| 12:01 AM | Product Hunt goes live |
| 6:00 AM | Twitter launch thread posted |
| 8:00 AM | LinkedIn announcement posted |
| 9:00 AM | Hacker News Show HN submitted |
| 9:30 AM | Community announcements posted (dev.to, Reddit, Discord) |
| 12:00 PM | Midday update thread — share early traction numbers |
| 3:00 PM | Respond to every comment and question so far |
| 6:00 PM | Evening summary — thank supporters, share day's stats |
| 9:00 PM | Email to waitlist/beta: "We launched! Here's what happened" |

### Rest of Launch Week
- Respond to every comment, issue, and DM within 2 hours
- Publish 1 reactive blog post based on launch feedback ("The most common question we got was...")
- Track: signups, first API calls, time-to-first-call, error rate

## Post-Launch Scale (Weeks 9-12)

### Week 9: Analyze and Double Down
- [ ] Analyze which channels drove signups — rank by volume and quality (signups that made API calls, not just registered)
- [ ] Double down on top 2 performing channels
- [ ] Kill channels that produced <5% of signups
- [ ] Start weekly changelog email to registered developers
- [ ] Publish 2 more tutorials based on most-asked questions from launch week

### Week 10: Case Studies and Social Proof
- [ ] Recruit 2-3 developers for detailed case studies (offer free paid tier in exchange)
- [ ] Publish first case study: "How [Developer/Company] uses [API] to [outcome]"
- [ ] Add customer logos to docs site and landing page
- [ ] Start monthly developer newsletter

### Week 11: Partnerships and Scale
- [ ] Partnership outreach to 5 adjacent tools (mutual listing swaps, co-marketing)
- [ ] Submit to 10 more API directories
- [ ] Second SDK published (if first was JS, now Python — or vice versa)
- [ ] CLI tool published (if applicable — accelerates enterprise adoption)

### Week 12: Review and Plan
- [ ] Full metrics review: MAU, MRR, TTFC, error rate, SDK downloads
- [ ] Content audit: which articles drove signups, which had traffic but no conversion
- [ ] Plan Q2 content calendar (weeks 13-26)
- [ ] Evaluate paid acquisition readiness (threshold: ≥25 active users, NPS >30)
- [ ] Set Q2 targets for: MAU, MRR, SDK downloads, docs traffic

## Developer Email Sequences

### Onboarding Drip (7 emails)

| Day | Subject | Purpose | CTA |
|-----|---------|---------|-----|
| 0 | "Your API key is ready — make your first call" | Welcome + quickstart | Make first API call |
| 1 | "[API feature] in 3 lines of code" | Core feature tutorial | Try core endpoint |
| 3 | "How [persona] uses [API] to [outcome]" | Use case inspiration | Explore use case guide |
| 5 | "Your SDK is ready: npm install [package]" | SDK adoption | Install SDK, try type-safe calls |
| 7 | "3 things most developers miss in [API]" | Advanced features | Try advanced endpoint |
| 10 | "Join 500+ developers building with [API]" | Community + support | Join Discord/community |
| 14 | "Ready for production? Here's your upgrade path" | Upgrade nudge | View pricing, upgrade |

Tone rule: plain text emails perform better than HTML newsletters for developer onboarding. No headers, no images, short paragraphs.

### Changelog Digest (Weekly or Bi-weekly)
- Format: New endpoints, updated SDKs, deprecation notices, breaking change warnings
- Tone: brief, technical, scannable — developers don't read marketing emails
- Include: migration guides for any breaking changes (never just a warning, always a path forward)

### Monthly Newsletter
- Content: tutorial roundup (3 best posts), community highlight, roadmap preview, one tip
- Tone: valuable first, promotional last — 80% educational, 20% product
- Target: engaged developers who haven't upgraded yet
- Unsubscribe rate benchmark: <0.3% per send (higher = your content isn't valuable enough)

## Metrics Dashboard

**North Star**: Monthly Active API Consumers (unique API keys making ≥1 call/month)

### Weekly KPIs

| Metric | Target (Month 1) | Target (Month 3) | How to Measure |
|--------|------------------|-------------------|----------------|
| API calls (total) | 10K | 100K | Gateway analytics |
| New signups | 50 | 200 | Auth provider |
| Time-to-first-call | <5 min | <3 min | Signup-to-first-call timestamp delta |
| Error rate (5xx) | <0.5% | <0.1% | Gateway analytics |
| Support tickets | <20 | <10/week | Helpdesk (Linear, Zendesk) |

### Monthly KPIs

| Metric | Target Month 1 | Target Month 3 | Target Month 6 |
|--------|----------------|----------------|----------------|
| MAU (API consumers) | 50 | 300 | 1,000 |
| MRR | $500 | $3K | $10K |
| Churn (monthly) | <10% | <8% | <5% |
| Docs page views | 5K | 20K | 50K |
| SDK downloads/month | 500 | 2K | 10K |

### Health Indicators

| Indicator | Healthy Threshold | What It Signals |
|-----------|------------------|----------------|
| LTV:CAC | >3:1 | Sustainable acquisition cost |
| Error rate | <0.1% | Reliability (developer trust depends on this) |
| Time-to-first-call | <5 min | DX quality — under 5 min is the Stripe standard |
| Docs bounce rate | <40% | Docs quality — if >40%, docs aren't answering questions |
| Support tickets/dev | <0.5/month | Self-service quality — more tickets = better docs needed |
| API call growth MoM | >20% | Healthy adoption trajectory |

### Instrumentation Checklist

To measure these metrics you need:
- API gateway with per-key analytics (Kong, AWS API Gateway, Apigee, Tyk)
- Signup timestamp stored and joined to first-API-call timestamp (calculate TTFC)
- Error rate by endpoint and by customer (catch which endpoints or which customers have problems)
- Docs analytics (Fathom, Plausible, or GA4 with privacy-friendly setup)
- SDK download counts from npm/PyPI (public, no instrumentation needed)
- Email open/click rates (for drip sequence optimization)
