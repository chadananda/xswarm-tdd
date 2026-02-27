# Phase 1: API Market Viability Assessment

## Setup

Read `references/api-viability-scoring.md` for detailed scoring rubrics and challenge prompt templates.
Read `templates/api-viability-report.md` for the required output structure.
If `$ARGUMENTS` contains an idea description, use it as context — do not re-ask "what's your API idea."
Announce to the user: "I'll walk you through a 6-question API viability interview. Between questions I'll research competitor APIs, developer demand signals, and pricing landscapes. This process scores your idea across 5 factors — a score under 10 means we iterate before proceeding."

## Interview Flow

Ask questions one at a time. After each response: run WebSearch, share findings, then challenge before scoring.
Never batch questions. Never skip the research step. Never score without showing evidence.

---

### Question 1: Problem & Developer Pain

Ask: "What API gap exists? What are developers building manually today that your API would handle for them?"

After response, WebSearch:
- "[topic] API" site:rapidapi.com
- "[topic] API documentation" existing solutions
- "[topic] API" site:github.com stars
- "[problem] developer workaround" OR "build vs buy"
- "[category] API comparison" OR "[category] API alternatives"

Share findings: name specific APIs that already exist in this space, their RapidAPI subscriber counts if visible, their GitHub star counts, and any obvious gaps you found. Be specific — "I found Clearbit, Hunter.io, and FullContact — here's what each does and where they fall short."

Challenge: "I found [X] existing APIs that do this — what's meaningfully different about yours? If a developer lands on your docs today, why do they not just use [named competitor]?"

Score using rubric from `references/api-viability-scoring.md`:
- 0: Saturated space with multiple well-documented, well-funded solutions; no visible gap
- 1: Existing APIs cover most of this, but have documented pain points (poor docs, high latency, narrow coverage)
- 2: Existing solutions are partial, expensive, or require significant wrapping — real gap exists
- 3: Critical developer need with no good API solution — developers are building this themselves

**If score is 0**: This is a disqualifying factor. Name the specific APIs that already do this well. Ask: "Given that [API X] exists, is there a narrower problem they don't solve, a specific data source they miss, or a pricing model that makes them inaccessible to your target developer? What's the actual gap?" Wait for response. Re-score if the new framing reveals a genuine niche.

---

### Question 2: Developer Demand Signals

Ask: "What evidence exists that developers are actively looking for something like this? Have you seen Stack Overflow questions, GitHub issues, forum threads, or Reddit posts asking for it?"

After response, WebSearch:
- "[topic] API" site:stackoverflow.com
- "how to [integrate/build] [capability]" site:stackoverflow.com
- "[topic] API" site:github.com issues OR discussions
- "[topic] API" site:reddit.com/r/webdev OR r/programming OR r/learnprogramming
- "[category] developer community" requests OR "feature request"

Share findings: report specific question counts, upvote totals, GitHub issue thread counts, named forum posts with engagement data. A Stack Overflow question with 50 upvotes and no accepted answer is a strong signal. A GitHub issue thread with 200 thumbs-up is even stronger. Be quantitative.

Challenge: "The demand signal I found is [strong/moderate/weak] — specifically, [X] Stack Overflow questions averaging [Y] upvotes, and [Z] GitHub issues. Is there stronger evidence you've seen that I should factor in? Or is this genuinely an emerging need where demand hasn't crystallized yet?"

Score:
- 0: No findable evidence developers want or need this — no forum posts, questions, or requests
- 1: Some signal but weak — a few low-engagement questions, no community momentum
- 2: Clear demand signal — multiple high-upvote questions, active issue threads, community discussion
- 3: Strong community demand with unmet needs — top-voted requests, repeated pattern across multiple platforms, people hacking around the gap

**If score is 0**: Ask: "Is this an emerging need where developers don't know to ask for it yet? If so, what's the leading indicator — what are they searching for when they hit this problem?" Wait for response. Re-score if the user surfaces concrete evidence.

---

### Question 3: Integration Complexity

Ask: "How complex is adoption? What's the expected auth model, typical payload size, latency requirement, and time for a developer to go from signup to first successful API call?"

After response, WebSearch:
- "[similar API category] time to first call" developer experience
- "[category] API onboarding" developer friction
- "[competitor API] quickstart guide" how many steps
- "best API onboarding examples" developer experience patterns
- "[auth method] API integration complexity" OAuth OR API key

Share findings: benchmark against best-in-class onboarding. Stripe's first successful charge in under 5 minutes is the gold standard. Report how many steps [competitor] onboarding takes, what the average developer reports in reviews. If you find "great docs" or "painful setup" language in reviews, quote it.

Challenge: "The integration complexity bar is real — if a developer can't make a successful API call within 5-10 minutes, most will abandon and find an alternative. Based on what you've described, your integration path sounds like [X steps / Y minutes]. What can you cut to get below 5 minutes to first call?"

Score:
- 0: Painful integration — OAuth dance required, complex payload schemas, server-to-server only, 30+ minutes to first call
- 1: Moderate friction — multi-step setup, requires configuration, 15-30 minutes to first meaningful call
- 2: Reasonable integration — API key + simple request, 5-15 minutes to first call, clear quickstart
- 3: Drop-in simplicity — API key from dashboard, copy-paste code snippet, first successful call under 5 minutes

**If score is 0**: Ask: "What's the minimum viable version of this API? Could you offer a simplified endpoint — fewer params, sensible defaults — specifically designed for the 'get started in 5 minutes' flow, even if power users need the full version?" Wait for response. Re-score if the simplified path is viable.

---

### Question 4: Monetization Potential

Ask: "Who pays for APIs like this? Is it individual developers on a credit card, startups expensing it, or enterprise procurement? What does the pricing landscape look like?"

After response, WebSearch:
- "[category] API pricing" site:rapidapi.com
- "[competitor 1] pricing" AND "[competitor 2] pricing"
- "[category] API" pricing plans freemium
- "developers pay for API" [category] willingness
- "[category] API revenue model" usage-based OR subscription

Share findings: present a pricing landscape table with 3-5 named competitors, their model (freemium/tiered/usage-based/flat), their entry price, what free tier includes (if any), and their paid tier starting price. Name the APIs — "Twilio charges $0.0075/SMS, Mailgun starts at $0 for 1K emails/month, SendGrid free tier is 100 emails/day."

Challenge: "Based on the pricing landscape, the market has anchored around $[X] for [Y] volume. Do free alternatives exist that developers can use instead of paying? What makes developers open their wallet here versus using a free alternative or building it themselves?"

Score:
- 0: Developers won't pay — free alternatives dominate, pricing pressure is extreme, usage-based math doesn't work
- 1: Some willingness to pay but low ceiling — developers treat this as a commodity, margins are thin
- 2: Clear monetization path — proven pricing models in the space, developers and/or startups pay for reliability/volume
- 3: Strong monetization with clear willingness to pay — enterprise buyers, compliance requirements, high switching costs once integrated

**If score is 0**: Ask: "Is there a specific segment — enterprise, regulated industry, high-volume use case — where the willingness to pay is meaningfully different? Or a value-add layer (SLA, dedicated support, higher rate limits) that changes the economics?" Wait for response. Re-score if a viable paid segment emerges.

---

### Question 5: Maintainability

Ask: "How stable is the underlying data or service this API wraps? How often will you need to push breaking changes, and what does the support burden look like once developers are integrated?"

After response, WebSearch:
- "[category] API versioning" deprecation strategy
- "[competitor] API changelog" breaking changes history
- "[underlying data source] stability" rate of change
- "[category] API support" common issues developer complaints
- "API backward compatibility" [industry] best practices

Share findings: report how often comparable APIs push breaking changes, how they handle deprecation (versioned endpoints vs sunset periods), what developer forums say about their support burden, and any known stability issues with the underlying data source. If the underlying source changes frequently (e.g., scraping a website, pulling from a social platform), flag the risk explicitly.

Challenge: "APIs with frequent breaking changes create churn — developers who integrate once and then face a migration are unlikely to forgive or re-integrate. The [competitor] changelog shows [X] breaking changes in the last 12 months. Based on how your underlying [data source/service] works, what's your realistic breaking change cadence?"

Score:
- 0: Highly volatile — underlying source changes frequently, breaking changes will be constant, support burden will be enormous
- 1: Moderate instability — changes needed periodically, requires active maintenance, developer migrations expected
- 2: Reasonably stable — changes are infrequent and manageable, clear versioning strategy possible
- 3: Highly stable and automatable — underlying data/service rarely changes, webhook/async patterns reduce support burden, low maintenance overhead

**If score is 0**: Ask: "Is there a way to abstract the volatility away from developers — a stable API contract on top of an unstable source, with you absorbing the change cost internally? What would that versioning strategy look like?" Wait for response. Re-score if a viable stability layer is described.

---

### Question 6: Competitive Moats

Ask: "What makes this API hard to replicate once you've launched? Data advantage? Network effects? Exclusive data partnerships? Speed and first-mover in a fast-moving space?"

After response, WebSearch:
- "API moats" [category] competitive advantages
- "[successful API in category] why developers stick with it"
- "[category] API" open source alternatives
- "[competitor] API" proprietary data OR exclusive
- "build vs buy [category] API" developer decision

Share findings: identify what moat patterns exist for successful APIs in this space (proprietary data, aggregated network, exclusive partnerships, deep integration hooks, training data advantages). Also flag what undercuts moats — open-source alternatives, platform providers offering similar functionality natively (e.g., OpenAI building what was a wrapper startup's product).

Challenge: "What stops a well-funded competitor — or a platform you depend on — from building this in a weekend? Specifically, [named competitor or platform] already does [X] — does that eliminate your moat in [scenario]? What's your 18-month defensibility story?"

Score:
- 0: Easily replicated — no structural advantages, feature-level differentiation only, any developer could build a clone
- 1: Soft moats only — brand recognition, docs quality, slight head start, but structurally replicable
- 2: Real but fragile moats — switching cost from deep integration, some proprietary data, but vulnerable to a well-funded entrant
- 3: Strong structural moats — exclusive data source, network effects (each API consumer improves the product), proprietary training data, deep platform lock-in

**If score is 0**: Ask: "What moat could you realistically build over 12-18 months? Could you aggregate data that improves with usage? Build a developer ecosystem that creates switching costs? Secure an exclusive data partnership?" Wait for response. Re-score if a viable moat strategy emerges.

---

## Scoring

Calculate: DeveloperDemand × Alternatives × Integration × Monetization × Maintainability = Total

Present each factor score with a one-sentence justification referencing specific evidence from research. Never announce a final score without showing the evidence behind each factor.

Zones:
- 0-9 Red: Below viability threshold — iterate before proceeding
- 10-19 Yellow: Promising but needs refinement — at least one weak factor to address
- 20-49 Green: Solid foundation — worth building and validating with developers
- 50-99 Elite: Strong potential — real developer-market fit signal
- 100+ Unicorn: Exceptional — execute immediately

**Gate: score must be ≥10 to proceed to Phase 2.**

If Red zone: identify the 1-2 lowest-scoring factors. Ask targeted questions to improve each score. Re-score after each significant new insight. Do not proceed to Phase 2 until score reaches Yellow or above. If two rounds of iteration don't move the score, tell the user directly: "This version of the idea scores [X]. Here are the two pivots most likely to reach Yellow: [option 1], [option 2]."

---

## Output

Read `templates/api-viability-report.md`. Write `api-viability-report.md` in the current working directory.
Fill every section with specific data from research and interview responses.
No placeholder text. Every competitor API named must be real and researched. Every demand signal must cite a source (Stack Overflow question count, GitHub issue count, forum post). Every pricing number must reference a named API's actual pricing page.
Include all 5 factor scores with the evidence and research that determined each score.

---

## Transition

If running the full pipeline (idea or resume, not validate-only):
Announce total score, zone, and the one sentence each factor earned. Then proceed to Phase 2 by reading `skills/plan-strategy-api.md`.

If validate-only (`validate [idea]` argument):
Announce score and zone. Deliver `api-viability-report.md`. Provide next-step recommendations based on zone:
- Red: "Focus on improving [factor 1] and [factor 2] before building. Here are the specific pivots most likely to reach Yellow: [concrete options]."
- Yellow: "Promising. Validate [weakest factor] with 10 developer conversations before Phase 2. Specifically, ask developers about [targeted question]."
- Green+: "Solid foundation. Phase 2 strategy work will sharpen your developer ICP and pricing model."
