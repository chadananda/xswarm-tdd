# API Distribution Channels

## API Marketplace Deep Dives

### RapidAPI
- **Listing requirements**: OpenAPI spec, pricing tiers, documentation, test endpoint
- **Pricing**: 20% revenue share on paid tiers
- **Promotion**: Featured API program, category rankings, RapidAPI blog features
- **Audience**: 4M+ developers, strong for discovery
- **Tips**: High-quality thumbnails, complete docs, responsive support boost rankings

### Postman Public API Network
- **Listing**: Postman Collection + documentation + environment variables
- **Pricing**: Free listing
- **Promotion**: Postman Blog, API Network search, workspace followers
- **Audience**: 30M+ Postman users
- **Tips**: Include "Run in Postman" button on your docs site

### AWS Marketplace (if enterprise-ready)
- **Requirements**: AWS account, product page, EULA, pricing model
- **Pricing**: 3-15% referral fee based on revenue
- **Audience**: Enterprise buyers with AWS billing preference
- **Tips**: Only worth it if targeting enterprise — long approval process (4-8 weeks)

### Azure Marketplace (if enterprise-ready)
- **Requirements**: Microsoft Partner account, product validation
- **Audience**: Enterprise buyers with Azure billing preference
- **Tips**: Similar dynamics to AWS — target only if enterprise is your ICP

## Package Registry Strategies

### npm (JavaScript/TypeScript)
- README quality is everything — it IS your landing page for JS developers
- Include: badges (build status, npm version, downloads), quickstart, API reference link
- Naming: `@company/api-name` scoped package preferred for namespace clarity
- Weekly downloads are publicly visible — builds social proof as you grow

### PyPI (Python)
- README renders from long_description in setup.py/pyproject.toml
- Include: installation, quickstart, link to full docs
- Type hints required for modern Python adoption — publish py.typed marker
- Trove classifiers help PyPI search surface your package

### Go Modules
- Host on GitHub, auto-indexed by pkg.go.dev
- Documentation is auto-generated from code comments — write them
- Versioning via git tags (v1.0.0, v2.0.0 for breaking changes)
- Go community values minimal dependencies — keep your dependency tree lean

### RubyGems
- README + rdoc documentation
- Include: Gemfile snippet, quickstart, changelog
- gemspec metadata (homepage, source_code_uri) populates RubyGems listing

## Developer Community Engagement

### Reddit — Answer questions authentically, never self-promote

Key subreddits by topic:

| Category | Subreddits |
|----------|-----------|
| General dev | r/webdev, r/programming, r/learnprogramming |
| Language | r/node, r/Python, r/golang, r/ruby |
| Cloud/infra | r/devops, r/aws, r/googlecloud, r/kubernetes |
| Data | r/dataengineering, r/MachineLearning, r/datascience |
| APIs | r/webdev, r/softwarearchitecture |

Rule: 10:1 ratio — 10 helpful comments for every 1 mention of your product. Best for TOFU awareness and developer trust building.

### Hacker News — Only for genuinely interesting launches/articles
- Show HN for launches, Ask HN for feedback
- Never astroturf — the community detects and punishes it permanently
- Best posting time: 8-10 AM US Eastern on weekdays
- Best for: launch day, major technical blog posts with genuine insight

### Stack Overflow — Answer related questions, link to docs when relevant
- Monitor tags related to your API category
- Create a tag for your API once adoption justifies it (typically 50+ questions)
- Answers rank in Google for years — high-leverage SEO asset
- Best for: long-tail SEO, developer trust, passive discovery

### Discord / Slack Communities — Join and contribute genuinely

| Community | Platform | Focus |
|-----------|---------|-------|
| Reactiflux | Discord | React/JS ecosystem |
| Python Discord | Discord | Python development |
| DevOps Chat | Slack | Infrastructure, DevOps |
| SpeakeasyAPI | Discord | API design and tooling |
| APIs You Won't Hate | Discord | API design community |

Run your own Discord once you have 100+ developers — community is a retention and support moat.

## Backlink Playbook

| Strategy | Effort | Links/Month | Quality |
|----------|--------|-------------|---------|
| API directory submissions (20+ dirs) | Low | 10-20 | Medium |
| GitHub "awesome" list PRs | Low | 2-5 | High |
| Guest posts on dev blogs | High | 2-4 | Very High |
| Open-source SDK repos | Medium | 5-10 | High |
| Tool/resource page outreach | Medium | 3-5 | Medium |
| Conference talk slides | Medium | 1-2 | High |

### API Directories to Submit

Submit to all of these at launch:

- **ProgrammableWeb** (programmableweb.com) — oldest, high domain authority
- **APIs.guru** (apis.guru) — OpenAPI spec directory, free
- **Public APIs GitHub repo** (github.com/public-apis/public-apis) — 300K+ stars, massive link equity
- **API List** (apilist.fun) — curated, developer-friendly UI
- **RapidAPI** (rapidapi.com) — marketplace + directory
- **Postman API Network** (postman.com/explore) — integrated with tooling
- **Any API** (any-api.com) — simple directory, fast submission
- **API Tracker** (apitracker.io) — monitoring + directory
- **Apithe** (apithe.com) — smaller but niche-focused
- **OpenAPI Directory** (openapi.directory) — spec-based, auto-discovery

### GitHub "Awesome" List PRs

Search GitHub for `awesome-[your-category]` lists. Example targets:

- awesome-apis, awesome-python, awesome-javascript, awesome-go
- Domain-specific: awesome-nlp, awesome-geocoding, awesome-sms, awesome-payments
- Framework-specific: awesome-react, awesome-django, awesome-fastapi

PR format: single line addition with your API, matching the list's existing format exactly.

## Conference/Meetup Speaking

- Target developer conferences in your API's domain — not generic startup conferences
- CFP (Call for Proposals) strategy: pitch technical talks, not product demos
  - Bad: "Introducing [API] — A New Way to [Category]"
  - Good: "War Stories from Building a High-Throughput [Category] API at Scale"
- Local meetups: lower barrier, great for testing content before submitting to major CFPs
- Conference talk → blog post → video → social content pipeline
- Major developer conference CFPs: API World, Nordic APIs Summit, APIDays, KubeCon, PyCon, NodeConf
