# Phase 2: Developer Strategy & Positioning

## Setup

Read `api-viability-report.md` from the current working directory. This is your primary context for the entire phase — do not ask about anything already covered there.
Read `references/developer-personas.md` for the developer persona model and interview prompts.
Read `references/api-pricing-models.md` for API pricing patterns and selection criteria.
Read `templates/api-strategy-brief.md` for the required output structure.

Open by summarizing Phase 1 findings to the user in 3-4 sentences: the API idea, the viability score, the strongest factor, and the factor that needs the most attention in strategy work. Then say: "Now we'll sharpen exactly who integrates this, how you position it in a crowded API landscape, and what you charge."

---

## Developer ICP Development

Work through the developer persona model to build a precise Ideal Customer Profile. This is not a generic 5-layer buyer persona — developers evaluate APIs differently from SaaS buyers. Research between each layer, not just at the end. Ask the user 2-3 targeted questions during this section — not all at once.

---

### Layer 1: Primary Persona — Who Integrates

Identify the developer who writes the integration code. Be specific about their technical context.

WebSearch:
- "who builds [category] integrations" developer type
- "[category] API" site:dev.to OR site:medium.com tutorials — what role wrote them
- "[product category] integration" job postings — what skills required
- "[category] SDK" GitHub — what languages are the community forks in
- "[competitor API] case studies" — what kind of companies and roles are quoted

Share findings: what kind of developer typically integrates APIs like this — frontend, backend, full-stack, data engineer, DevOps. What languages dominate in their repos. What frameworks show up in the integration examples.

Ask the user: "Is the developer who integrates this also the one who decides to use it — or does someone else find the API and hand it off to a developer to implement?"

---

### Layer 2: Secondary Persona — Who Approves

Identify who signs off on API adoption, especially once past the free tier. This person rarely writes code but controls budget and vendor decisions.

WebSearch:
- "API procurement process" [company size range] engineering manager OR CTO
- "how do startups evaluate API vendors"
- "[category] API enterprise procurement" security review
- "developer tool budget approval" [company size]

Share findings: at what price point does a developer's personal credit card decision become a manager approval? What's the typical sign-off chain at startups vs mid-market vs enterprise for an API spend? What security or compliance gates exist?

Note the gap between the developer who champions and the approver who buys — your docs speak to the developer, but your pricing page and security content must speak to the approver.

---

### Layer 3: Evaluation Behavior — How Developers Decide

Map the exact sequence of how a developer evaluates an API before integrating it. This determines where you need to be excellent.

WebSearch:
- "how developers evaluate APIs" criteria survey
- "[category] API reviews" site:g2.com OR site:producthunt.com — what do developers praise or complain about
- "API documentation quality" developer expectations
- "[category] API" site:news.ycombinator.com — what Hacker News says
- "developer tool trial friction" API free tier conversion

Share findings: name specific things developers report matter most — docs quality, free tier generosity, SDK availability in their language, sandbox environment, response time, error message clarity, GitHub stars as social proof. Quote specific reviewer language if you find it.

Ask the user: "Do you know if the developers who would use this are early adopters — happy to try new tools with rough edges — or pragmatists who need to see production references and a security review first?"

---

### Layer 4: Watering Holes — Where Developers Live

Find the specific communities where your target developers discover tools. Be concrete — name actual communities, not channel categories.

WebSearch:
- "[target developer type] Slack communities OR Discord servers" list
- "[technology stack] developer community forum subreddit"
- "[category] API" site:news.ycombinator.com discussions
- "[developer type] newsletter" top subscribed
- "[technology] conference" 2025 2026 developer events

Output must include named, real watering holes: specific subreddit names (r/webdev, r/node, r/python), Discord server names, Slack communities, named newsletters (TLDR, JavaScript Weekly, PyCoder's Weekly), YouTube channels, podcasts, and any annual conferences. Generic answers ("they use Twitter") are not acceptable — name accounts, hashtags, and communities specifically.

Ask the user: "Are you already a member of any of these communities? Do you have any credibility or presence built with this developer audience?"

---

### Layer 5: Deal Killers — What Ends Evaluation

Identify what immediately stops a developer from adopting an API. These are not just "bad marketing" — they are structural reasons developers bounce.

WebSearch:
- "[category] API" "deal breaker" OR "abandoned" OR "switched away" developer forums
- "why developers stop using APIs" common reasons
- "[category] API" negative reviews — what drove churn
- "[language] SDK" missing — developer complaints
- "API rate limits too low" [category] forum discussion

Share findings: name real deal killers reported in this API category — missing SDK in a key language, rate limits too aggressive for the use case, no sandbox mode, opaque error messages, vendor lock-in fears, pricing opacity, missing SLA. Quantify where possible: "3 G2 reviews cited no Python SDK as the reason they switched."

---

## API Positioning

Synthesize the developer ICP research into a complete positioning framework.

**Category**: Is this a new category or entering an existing one? Entering existing is faster to explain; new requires more developer education. Name the category you're entering or creating.

**For [developer type]**: One sentence describing the exact integrator. "For backend engineers at growth-stage startups" not "for developers."

**Who [need]**: The specific capability gap or painful workaround. Use language from the forum and review research — the words developers actually use.

**Unlike [alternative]**: Name the primary alternative. This is what they're doing right now — rolling their own, using a partial solution, or using a competitor API.

**We [differentiator]**: The single most important thing that makes integration better, faster, or cheaper. One thing, not a list.

**Value proposition**: "We give [developer type] [outcome] in [timeframe/mechanism] unlike [alternative]."

**Tagline**: 5-7 words. Technical and direct — developers distrust marketing language. Avoid adjectives like "powerful" and "seamless."

**Elevator pitch for a developer conversation** (the version you'd say at a conference): Problem (1 sentence) → How your API solves it (1 sentence) → What makes it worth switching (1 sentence).

Present the full framework to the user. Ask: "Would you actually say this to a developer you met at a conference? What feels off — too vague, wrong audience, or overstating the differentiation?" Iterate if the user identifies a gap — positioning that the founder won't say is useless.

---

## API Pricing Model

Research competitor pricing thoroughly before making any recommendations.

WebSearch for each major competitor pricing page (aim for 4-5 APIs):
- "[competitor 1] API pricing plans"
- "[competitor 2] pricing free tier"
- "[category] API pricing comparison" RapidAPI
- "[category] API usage-based pricing" per-call per-request
- "best free tier API" [category] developer forum discussion

Present a pricing landscape table: API name, model (usage-based/freemium/tiered/flat/enterprise), free tier (calls/month), paid entry price, what paid includes, enterprise tier signal.

Then recommend a specific pricing structure with justification. For APIs, the standard model is:

**Free tier** (required for developer adoption): Specific monthly call limit that lets a developer prototype and demonstrate value to their team. Too low = friction before proof; too high = no conversion pressure. Name a specific number — "5,000 calls/month free" not "generous free tier."

**Growth tier** ($X/month or $X per 1K calls): The first paid tier targeted at startups. Include rate limit, monthly call ceiling, SLA if any. Give exact dollar amounts.

**Scale tier** ($X/month or $X per 10K calls): Mid-market usage. What changes — higher rate limits, priority support, dedicated endpoint.

**Enterprise tier** (custom pricing): What triggers custom — volume thresholds, SLA requirements, white-labeling, on-prem deployment, compliance needs.

**Overage policy**: Hard cap vs throttle vs overage billing at $X per 1K calls above tier. This is a developer experience decision — hard caps are predictable, overages can surprise.

Justify pricing with specific data: "RapidAPI listings in this category range from $0.001-0.005/call. Your differentiation on [factor] supports the higher end. Competitor X charges $49/month for 50K calls — positioning at $39/month undercuts on price while offering [differentiator]."

Ask the user: "Where does this feel off relative to what you'd actually charge? Any concerns about the free tier limit — too generous, not generous enough?"

---

## Developer Experience (DX) Strategy

DX is a product decision, not a marketing decision. Define it here so Phase 3 builds it correctly.

**Time-to-first-call target**: State the specific goal in minutes. 5 minutes is excellent. 10 is acceptable. Anything over 15 will hurt activation.

**Onboarding flow**: Describe the exact steps from landing on the docs homepage to a successful API call. Step 1: sign up (email only, no credit card for free tier). Step 2: dashboard → API key. Step 3: copy quickstart snippet. Step 4: run. Count the steps — name any that can be cut.

**Sandbox/playground**: Yes or no, with rationale. A browser-based playground (like Stripe's request builder) lets developers test without local setup. If the API is complex, this is non-negotiable.

**Error message standard**: Developers judge API quality by error messages. Define the contract: every error must include error code, human-readable message, and a docs link. No generic "400 Bad Request."

**SDK priority list**: Based on developer persona research, rank languages by priority. First 3 SDKs at launch, remaining post-launch. Name the package registry for each (npm, PyPI, RubyGems, pkg.go.dev).

---

## Wrapper & Integration Priority Matrix

Rank integration targets by developer reach × build effort to determine launch vs post-launch priority.

WebSearch:
- "Zapier [category] integration" existing — does it exist, how popular
- "n8n [category] node" OR "Make [category] module"
- "[category] API" VS Code extension OR CLI tool
- "no-code [category] integration" developer community discussion

Present the matrix with top 5 launch targets and post-launch backlog:

| Integration | Type | Build Effort | Developer Reach | Priority | Phase |
|-------------|------|--------------|-----------------|----------|-------|
| npm SDK | Native | Low | High | P1 | Launch |
| Python SDK | Native | Low | High | P1 | Launch |
| Zapier | No-code | Medium | Medium | P2 | Month 2 |
| ... | ... | ... | ... | ... | ... |

Populate with real integrations relevant to this API category. Don't use this template verbatim — fill it with the actual platforms that matter for this developer audience.

---

## Output

Read `templates/api-strategy-brief.md`. Write `api-strategy-brief.md` in the current working directory.
Fill every section with specific, researched content.
The developer ICP section must name real communities, quote real developer language from forums and reviews, and name specific SDK languages.
The positioning section must include all framework elements — no blanks.
The pricing section must cite actual competitor prices with dollar amounts and call volume specifics.
No placeholder text. No generic descriptions.

---

## Transition

If running the full pipeline: announce that strategy is complete, name the output file, give a one-sentence summary of the developer ICP and pricing recommendation. Then proceed to Phase 3 by reading `skills/plan-technical-api.md`.

If strategy-only (`strategy` argument): deliver `api-strategy-brief.md`, summarize the developer ICP in one paragraph, and suggest: "Run `/plan-api technical` when you're ready to spec the build."
