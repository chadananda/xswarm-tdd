# Developer Personas for API Products

API products have a distinct buyer model: the evaluator (developer who integrates), the approver (manager or CTO), and the end-user (often the same as the evaluator). Unlike SaaS, developers evaluate on technical merit first — pricing and business terms are secondary until they decide the API works.

## Persona 1: Frontend Developer

**Profile**: Builds UIs, works in React/Vue/Svelte, primary language is TypeScript/JavaScript.

| Dimension | Detail |
|-----------|--------|
| Evaluation criteria | Docs quality, npm package size, TypeScript types, React/Vue code examples, CDN availability, browser CORS support |
| Discovery method | Twitter/X developer community, dev.to articles, YouTube tutorials, Reddit r/webdev and r/reactjs, ProductHunt |
| Deal killers | No TypeScript types, complex auth (OAuth instead of simple API key), large bundle size (>50KB), no CDN, CORS errors, no browser-compatible SDK |
| Budget authority | Small — personal card for <$50/mo, team lead approval for $50-200/mo |
| Community hangouts | r/reactjs, r/webdev, Reactiflux Discord, Vue Land Discord, Frontend Focus newsletter |
| Evaluation timeline | Hours to days — self-serve, credit card, instant signup |

**Messaging that resonates**: "Works in the browser," "TypeScript-first," "5-minute quickstart," "zero config."

**Messaging to avoid**: Enterprise, compliance, procurement, SLAs — irrelevant at their level.

## Persona 2: Backend Developer

**Profile**: Builds APIs, services, and infrastructure. Primary languages: Python, Go, Node.js, Java, Rust.

| Dimension | Detail |
|-----------|--------|
| Evaluation criteria | API design quality (REST/GraphQL consistency), error message quality, rate limit transparency, OpenAPI spec availability, SDK quality for their language, sandbox/test environment |
| Discovery method | Hacker News, GitHub trending repos, Stack Overflow, tech blogs (Martin Fowler, Increment, The Pragmatic Engineer), language-specific newsletters |
| Deal killers | Poor error messages (generic 400/500 with no detail), no Python or Go SDK, no sandbox/test mode, inconsistent API design (mixed conventions), no OpenAPI spec |
| Budget authority | Medium — can expense $100-500/mo with manager approval, escalates above that |
| Community hangouts | r/programming, Hacker News (hn.algolia.com), r/golang, r/python, r/rust, r/node |
| Evaluation timeline | Days to a week — technical evaluation in sandbox before committing |

**Messaging that resonates**: "Idiomatic SDK for [language]," "OpenAPI spec included," "predictable error handling," "sandbox included."

**Messaging to avoid**: No-code, drag-and-drop, non-technical marketing language.

## Persona 3: Data Engineer

**Profile**: Builds pipelines, ETL/ELT workflows, data integrations. Tools: dbt, Airflow, Spark, Python.

| Dimension | Detail |
|-----------|--------|
| Evaluation criteria | Batch/bulk endpoints (not just single-record), webhook support for event-driven ingestion, data export formats (JSON, Parquet, CSV), rate limits for high-volume operations, cursor-based pagination for large datasets |
| Discovery method | dbt Community Slack, Airbyte connector catalog, Data Engineering Weekly newsletter, Locally Optimistic Slack, r/dataengineering |
| Deal killers | No bulk endpoints (record-by-record is a non-starter for ETL), rate limits too low for batch jobs, no webhook support, inconsistent or undocumented data schemas, no idempotency guarantees |
| Budget authority | Medium-high — data infrastructure budgets are often separate and substantial; can approve $500-2K/mo |
| Community hangouts | r/dataengineering, dbt Community Slack, Data Engineering Weekly, Locally Optimistic, LATAM Data Engineering |
| Evaluation timeline | A week to a month — need to validate throughput, schema consistency, and reliability before committing |

**Messaging that resonates**: "Bulk endpoints," "webhook support," "consistent schema," "idempotent writes," "cursor pagination."

**Messaging to avoid**: Consumer use cases, per-request pricing (they need per-batch or flat rate).

## Persona 4: DevOps / Platform Engineer

**Profile**: Builds and maintains infrastructure, CI/CD, Kubernetes, cloud infrastructure. Cares about reliability and operability.

| Dimension | Detail |
|-----------|--------|
| Evaluation criteria | Uptime SLA (99.9% minimum, 99.99% preferred), monitoring integration (Datadog, Grafana), IaC support (Terraform provider, Pulumi), security certifications (SOC 2, ISO 27001), status page quality |
| Discovery method | CNCF landscape, Terraform Registry (browsing providers), Helm Hub, infrastructure engineering newsletters (Last Week in AWS, SRE Weekly), KubeCon talks |
| Deal killers | No SLA or SLA weaker than their internal requirements, no Terraform provider, no SSO/SAML (can't provision team access), poor or absent status page, no audit logs |
| Budget authority | High — infrastructure budget is often pre-approved; can approve $1K-10K+/mo within existing vendor categories |
| Community hangouts | r/devops, r/sysadmin, CNCF Slack, KubeCon, SREcon, Platform Engineering Slack |
| Evaluation timeline | Weeks to months — security review, Terraform evaluation, SLA review before production approval |

**Messaging that resonates**: "99.99% uptime SLA," "Terraform provider available," "SOC 2 Type II certified," "dedicated status page," "audit logs."

**Messaging to avoid**: No-code, startup language, "move fast" — they care about stability.

## Persona 5: Engineering Manager / CTO (Secondary — Approver)

**Profile**: Approves vendor spend, evaluates build-vs-buy, cares about vendor risk and team productivity.

| Dimension | Detail |
|-----------|--------|
| Evaluation criteria | Pricing predictability (no surprise bills), vendor stability (will this company exist in 2 years?), security compliance (SOC 2, GDPR), support quality and SLA, team adoption velocity |
| Discovery method | Peer recommendations from CTO peer groups, Gartner/Forrester reports, engineering leadership newsletters (Pragmatic Engineer, Software Lead Weekly), LinkedIn |
| Deal killers | Unpredictable usage-based billing with no caps, startup with no funding history, no SOC 2 or GDPR compliance, no enterprise support tier, no case studies from companies at similar scale |
| Budget authority | Full departmental authority — can approve any spend within budget, escalates to CFO for multi-year contracts |
| Community hangouts | CTO Craft Slack, Engineering leadership conferences (LeadDev, CTO Summit), LinkedIn |
| Evaluation timeline | Weeks to months — waits for developer recommendation, then validates vendor risk |

**Messaging that resonates**: "Trusted by [recognizable companies]," "SOC 2 Type II," "enterprise support," "predictable pricing with hard caps," "dedicated customer success."

## Identifying Your Primary Persona

| Signal | Primary Persona |
|--------|-----------------|
| API primarily renders data in a UI | Frontend Developer |
| API is server-to-server, data processing | Backend Developer |
| API feeds a data warehouse or pipeline | Data Engineer |
| API is infrastructure/monitoring/security | DevOps/Platform Engineer |
| Average contract >$1K/mo | CTO/EM is co-decision-maker |

## Interview Questions to Validate Persona Fit

1. "Walk me through the last time you integrated a new third-party API. What did you evaluate first?"
2. "What was the last API you stopped using? Why?"
3. "Who else is involved when you add a new paid API dependency to your stack?"
4. "What would make you choose one API over another if the features were equal?"
5. "What's the biggest frustration you have with APIs you currently use?"
