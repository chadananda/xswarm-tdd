# Developer Video and Podcast Strategy

## Video Types

### Monthly Demo Videos (5-10 min)
- API walkthrough: "Getting Started with [API] — Your First Call in 5 Minutes"
- New feature demos: "What's New in [API] v2.3 — Batch Endpoints"
- Integration tutorials: "Building a [Real App] with [API] + [Framework]"
- Production: screen recording + voiceover, code editor focus, terminal output
- Tools: OBS (recording), ScreenFlow/Camtasia (editing), VS Code with large font (18-20px), dark theme

### Bi-Weekly Shorts (30-60 sec)
- Quick tips: "Did you know [API] supports [feature]?"
- Error fixes: "Getting 429? Here's how to handle rate limits"
- Code snippets: "3 lines to [accomplish task] with [API]"
- "Did you know": Hidden features, shortcuts, undocumented patterns
- Production: screen recording, minimal editing, text overlay for key points

## Platform Strategy

| Platform | Content | Posting Cadence | Format |
|----------|---------|----------------|--------|
| YouTube | Long-form demos + tutorials | Monthly | 5-10 min, 1080p, chapters |
| YouTube Shorts | Quick tips + code snippets | Bi-weekly | 30-60 sec, vertical |
| Twitter/X | Shorts + GIFs of code | 2-3/week | 30-60 sec, square/vertical |
| LinkedIn | Demo highlights + shorts | 1/week | 30-90 sec, square |

## Production Approach

- Minimal production: screen recording + voiceover is sufficient for developer content
- No talking head required — developers want to see code, not faces
- Large font in editor (18-20px), dark theme (Dracula, One Dark, Catppuccin), clear terminal
- Script key points but speak naturally — don't read word for word
- Always include in description: timestamps, code repo link, docs link, relevant SDK versions
- YouTube chapters (using timestamps in description) increase average view duration significantly

## Video-to-Content Repurposing Pipeline

```
Long-form video (10 min)
├── Extract 3-5 shorts (30-60 sec clips)
├── Transcribe → blog post (with code samples cleaned up)
├── Key quotes → tweet thread (5-7 tweets with code screenshots)
└── Summary → newsletter excerpt (3 paragraphs + link)
```

Repurposing ROI: one 10-minute video becomes 8-12 pieces of distribution-ready content.

## YouTube Optimization

| Element | Best Practice |
|---------|--------------|
| Title | "[Verb] [outcome] with [API/tool] in [time]" — specific and searchable |
| Thumbnail | Dark background, large readable code or terminal, 1-2 words of text |
| Description | First 2 lines visible without expanding — include primary keyword |
| Tags | API name, language, framework, problem category |
| End screen | Subscribe + link to related tutorial (keep them in the funnel) |
| Pinned comment | Code repo link + docs link + timestamp index |

## Podcast Outreach Strategy

### Target List Building

Search for developer podcasts by: language (e.g., "Python podcast"), topic (e.g., "API design podcast"), audience (e.g., "DevOps podcast"). Use Listen Notes (listennotes.com), Apple Podcasts charts, Spotify.

**General dev podcasts**
- Changelog (changelog.com) — broad developer audience, weekly, high prestige
- Software Engineering Daily (softwareengineeringdaily.com) — deep technical interviews
- Syntax (syntax.fm) — JS/web focused, Wes Bos and Scott Tolinski, large audience
- JS Party (changelog.com/jsparty) — JavaScript ecosystem
- Real Python Podcast (realpython.com/podcasts) — Python practitioners

**API/web-focused podcasts**
- APIs You Won't Hate Podcast — API design, small but highly relevant audience
- PodRocket (podcastindex.org) — web dev, LogRocket audience
- HTTP 203 (developers.google.com) — Google Chrome developer podcast

**Language-specific podcasts**
- Talk Python to Me (talkpython.fm) — Python, 500K+ listeners, Michael Kennedy host
- Go Time (changelog.com/gotime) — Go ecosystem
- Rustacean Station (rustacean-station.org) — Rust community
- Ruby Rogues (rubyrogues.com) — Ruby/Rails ecosystem

**DevOps / infrastructure podcasts**
- DevOps Paradox (devopsparadox.com) — Viktor Farcic, strong DevOps audience
- Arrested DevOps (arresteddevops.com) — culture + technical DevOps
- Screaming in the Cloud (lastweekinaws.com) — AWS ecosystem, Corey Quinn

**Startup / tech podcasts**
- Indie Hackers (indiehackers.com/podcast) — bootstrapped founders, developer audience
- Software Social (softwaresocial.dev) — indie SaaS, Tuple/Josh Pigford style
- My First Million (mfmpod.com) — broader tech but idea-generation focused

### Pitch Template

**Subject line**: "[Topic expertise], not a product pitch — guest idea for [Podcast Name]"

**Body structure**:
1. One sentence on why you listen to their show specifically (not generic flattery)
2. Three topic angles that demonstrate expertise — NOT product pitches
3. Brief bio: what you've built, relevant numbers (API calls/month, users, years)
4. Why their audience specifically would benefit

**Topic angle examples (never pitch your product as the topic)**
- "War stories from building a [type] API at scale — the 3 mistakes we made"
- "Why developer experience is the new SEO: lessons from 0 to 10K API consumers"
- "The state of [technology/pattern] in 2026 — what changed and what developers should know"
- "Rate limiting strategies that don't destroy your developer relationships"
- "How we got our first 100 paying API customers without a sales team"

### Outreach Cadence

| Week | Action |
|------|--------|
| 1 | Send 5-8 pitches to top-tier podcasts |
| 3 | Follow up once on non-responses (subject: "Re: [original subject]") |
| 5 | Send 5-8 pitches to mid-tier podcasts |
| Ongoing | 3-5 new pitches per month |
| Target | 1 appearance/month starting Month 3 |

Rule: one follow-up only. If no response after follow-up, move on — no second follow-up.

### Podcast → Content Pipeline

Each appearance generates:
- Blog post summary (500-800 words, key points + your own expansion)
- Social clips (30-60 sec audio or quote graphics)
- Newsletter mention with episode link
- Backlink from podcast show notes (always send hosts a follow-up with your bio link and company URL)
