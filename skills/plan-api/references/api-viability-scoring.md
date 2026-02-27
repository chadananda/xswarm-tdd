# API Viability Scoring Rubric

Multiplicative scoring: Score_1 × Score_2 × Score_3 × Score_4 × Score_5. One zero kills everything — intentional.

## Factor 1: DeveloperDemand (Developer Need)

| Score | Meaning |
|-------|---------|
| 0 (Disqualifier) | No evidence developers want this. No Stack Overflow questions, no GitHub issues, no forum requests. |
| 1 (Weak) | Weak signals — scattered mentions, low upvote counts, niche use case with no ecosystem around it. |
| 2 (Strong) | Clear demand — active threads, GitHub issues with 50+ reactions, recurring requests in dev communities. |
| 3 (Exceptional) | Strong unmet need — hundreds of questions, multiple failed/abandoned attempts to build it, developers building fragile custom solutions to fill the gap. |

Challenge prompts:
- "Show me 5 Stack Overflow questions that prove developers are actively struggling with this."
- "What abandoned GitHub repos or failed open-source projects tried to solve this?"

Research queries:
- `site:stackoverflow.com [problem domain] api`
- `site:github.com [problem domain] "looking for an api"`
- `[problem domain] api "anyone know" OR "is there a way" site:reddit.com`
- `[problem domain] api feature request OR "wish there was"`
- `"built my own" OR "rolled my own" [problem domain] api`

## Factor 2: Alternatives (Competitive Gap)

| Score | Meaning |
|-------|---------|
| 0 (Disqualifier) | Perfect existing solutions — mature, cheap, well-documented, widely adopted. Market is captured. |
| 1 (Weak) | Good enough solutions exist. Developers complain but use them. Switching cost for incumbents is high. |
| 2 (Strong) | Existing solutions are partial, expensive, or require significant customization. Clear differentiation possible. |
| 3 (Exceptional) | Critical gap — no existing solution covers this use case. Developers are duct-taping together 3+ services to approximate it. |

Challenge prompts:
- "What do developers do today? Walk through the exact steps of the workaround."
- "What's the weakest thing about the best existing alternative?"

Research queries:
- `[problem domain] api alternatives`
- `[top competitor] api review complaints OR "what I hate about"`
- `[top competitor] api alternative site:reddit.com OR site:hackernews.com`
- `[problem domain] api "not good enough" OR "too expensive" OR "too complex"`
- `RapidAPI [problem domain] category` (check what exists and star counts)

## Factor 3: Integration (Developer Experience Ease)

| Score | Meaning |
|-------|---------|
| 0 (Disqualifier) | Painful, complex adoption — requires infrastructure changes, custom auth flows, days of setup, or proprietary SDKs with no docs. |
| 1 (Weak) | Moderate friction — workable but requires a full day, multiple dependencies, or significant boilerplate. |
| 2 (Strong) | Easy integration — working in under an hour with solid docs, clear examples, and an official SDK for at least 2 major languages. |
| 3 (Exceptional) | Under 5 minutes to first successful API call. One `npm install` or `pip install`, clear quickstart, working playground in the browser, copy-paste examples that run immediately. |

Challenge prompts:
- "Time yourself reaching a real API response from zero. How long did it actually take?"
- "What's the hardest part of the integration, and how are you eliminating it?"

Research queries:
- `[competitor api] "time to hello world" OR "getting started" developer experience`
- `stripe developer experience onboarding` (use as gold standard reference)
- `[problem domain] api sdk python OR javascript`
- `twilio developer experience study` (benchmark)
- `[problem domain] api "takes too long" OR "hard to set up" site:reddit.com`

## Factor 4: Monetization (Willingness to Pay)

| Score | Meaning |
|-------|---------|
| 0 (Disqualifier) | No willingness to pay — this is expected to be free (like browser APIs, OS APIs), or the market normalizes free tiers from VC-backed incumbents. |
| 1 (Weak) | Low price ceiling — developers would pay but budget is tiny (<$20/month). Hard to build a business. |
| 2 (Strong) | Clear willingness to pay — competitors charge meaningfully, developers expense similar tools without friction. |
| 3 (Exceptional) | Clear price benchmarks from multiple incumbents, developers actively pay $100-1000+/month for similar utilities, and cost scales naturally with usage (usage-based model fits the domain). |

Challenge prompts:
- "What are developers already paying for in this category? Find 3 real pricing pages."
- "What's the comparable utility spend? (Twilio, SendGrid, Stripe) — is your API in that tier?"

Research queries:
- `[problem domain] api pricing`
- `[top 3 competitors] pricing page`
- `RapidAPI [problem domain] pricing` (marketplace data)
- `[problem domain] api "per request" OR "per call" cost`
- `[problem domain] api budget OR "how much does" site:reddit.com`

## Factor 5: Maintainability (Operational Stability)

| Score | Meaning |
|-------|---------|
| 0 (Disqualifier) | Constant breaking changes — underlying data source or platform changes frequently. Every update breaks integrations. Developers abandon APIs that aren't reliable. |
| 1 (Weak) | High maintenance burden — underlying dependencies are unstable, scraping required, or third-party terms changes could kill the product. |
| 2 (Strong) | Moderate stability — underlying data or compute is controllable, versioning is achievable, breaking changes are infrequent. |
| 3 (Exceptional) | Stable, low-support operation — you control the data/algorithm, versioned API surface, deprecation policy possible, webhook or async patterns reduce synchronous coupling. |

Challenge prompts:
- "What's the worst thing that could happen to your data source or infrastructure? How often does it happen?"
- "If your API breaks at 2am, can you fix it before your biggest customer notices?"

Research queries:
- `[data source or dependency] api stability changelog`
- `[underlying platform] terms of service changes history`
- `[problem domain] api "deprecated" OR "breaking change"`
- `[data source] rate limits OR "scraping allowed"`
- `[competitor api] uptime history OR status page incidents`

## Score Zones

| Zone | Range | Interpretation |
|------|-------|----------------|
| Red | 0-9 | Below viability threshold. At least one factor is broken. Do not proceed. |
| Yellow | 10-19 | Promising but risky. Shore up the weakest factor before building. |
| Green | 20-49 | Solid foundation. Build a prototype and validate with real developer users. |
| Elite | 50-99 | Strong across all factors. Consider raising capital or accelerating. |
| Unicorn | 100+ | Exceptional. All factors near maximum. Rare and highly defensible. |

Maximum possible score: 3 × 3 × 3 × 3 × 3 = 243. A score of 0 on any single factor = 0 total.
