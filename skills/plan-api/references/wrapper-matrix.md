# Platform Wrapper and Integration Matrix

Wrappers and platform integrations multiply distribution surface without changing core API functionality. Each wrapper targets a distinct audience. Not all wrappers are worth building — use the priority scoring model to sequence work.

## Platform Assessment Matrix

| Platform | Type | Marketplace | Review Time | Monetization | Maintenance | Dev Reach |
|----------|------|-------------|-------------|--------------|-------------|-----------|
| npm package | Package registry | npmjs.com | None (auto-publish) | N/A (free) | Low-Med | Very High |
| PyPI package | Package registry | pypi.org | None (auto-publish) | N/A (free) | Low-Med | Very High |
| Zapier | No-code automation | Zapier Partner Program | 2-4 weeks | Rev share (20%) | Low | High |
| n8n | Workflow automation | n8n Community Nodes | 1-2 weeks | None | Low | Medium |
| Make (Integromat) | No-code automation | Make Partner Program | 2-4 weeks | Rev share (~20%) | Low | Medium |
| WordPress Plugin | CMS ecosystem | wordpress.org | 1-4 weeks (manual review) | Free/Premium (Freemius) | Medium | High |
| Chrome Extension | Browser | Chrome Web Store | 1-3 days | Free/Paid (CWS billing) | Medium | Medium |
| VS Code Extension | IDE | VS Marketplace | ~1 day (automated) | Free | Medium | Medium |
| Slack App | Messaging | Slack App Directory | 2-4 weeks | Free (billing via your system) | Medium | Medium |
| Figma Plugin | Design | Figma Community | ~1 week | Free | Low-Med | Niche |
| JetBrains Plugin | IDE | JetBrains Marketplace | 1-2 weeks | Free/Paid (JB billing) | High | Medium |
| Raycast Extension | Launcher | Raycast Store | ~1 week | Free | Low | Niche |
| Alfred Workflow | macOS launcher | Packal / GitHub | None | N/A | Low | Niche |
| Apple Shortcuts | iOS/macOS | Shareable link (no store) | None | N/A | Low | Niche |
| CLI Tool | Terminal | Homebrew / npm / pip | None (auto) | N/A | Medium | High |
| Terraform Provider | IaC | Terraform Registry | 1-2 weeks | N/A | High | Medium |

## Build-vs-Wrap Decision Tree

```
Does the platform have a mature plugin/integration SDK?
├── Yes → Build native integration (better DX, more control over UX)
│   └── Is your API surface simple (CRUD, <10 endpoints, stateless)?
│       ├── Yes → Estimate 1-2 weeks build time
│       └── No (complex state, webhooks, streaming, auth flows) → Estimate 3-6 weeks
└── No (HTTP-only, webhook-based, or undocumented internals) → Wrap via HTTP adapter
    └── Estimate 3-5 days build time (write once, thin wrapper)
```

**Native integration**: Write idiomatic code using the platform's SDK, patterns, and conventions. Passes platform review more easily, better performance, better user experience. Higher effort.

**HTTP adapter/wrapper**: Thin layer that calls your API directly over HTTP. Faster to build, less platform-native feel, but functional. Good for platforms with simple execution models (Zapier, n8n, Make, Apple Shortcuts).

## Priority Scoring Model

Score = (Developer Reach × 0.4) + (Strategic Value × 0.3) + (Inverse Build Effort × 0.3)

**Developer Reach**:
| Reach | Score |
|-------|-------|
| Very High (npm, PyPI, CLI) | 5 |
| High (Zapier, WordPress, CLI) | 4 |
| Medium (VS Code, Terraform, Slack, n8n) | 3 |
| Niche (Raycast, Figma, Alfred, Shortcuts) | 1 |

**Strategic Value**:
| Value | Score |
|-------|-------|
| Must Have (directly in developer workflow) | 5 |
| Should Have (significant audience) | 3 |
| Could Have (niche but visible) | 2 |
| Nice Have (marginal reach) | 1 |

**Inverse Build Effort** (lower effort = higher score):
| Effort | Score |
|--------|-------|
| Low (1-5 days) | 5 |
| Medium (1-3 weeks) | 3 |
| High (1-2 months) | 1 |

**Example calculation for npm package**: (5 × 0.4) + (5 × 0.3) + (5 × 0.3) = 2.0 + 1.5 + 1.5 = **5.0** (max score — build first)

**Example calculation for Alfred Workflow**: (1 × 0.4) + (1 × 0.3) + (5 × 0.3) = 0.4 + 0.3 + 1.5 = **2.2** (low priority — build after core integrations)

## Sequencing Recommendation

| Phase | Integrations | Rationale |
|-------|-------------|-----------|
| Launch | npm + PyPI SDKs, CLI tool | Reach every developer who can `pip install` or `npm install` |
| Month 1-2 | Zapier + n8n | Unlock no-code/low-code audience with minimal effort |
| Month 2-4 | VS Code extension or Raycast | Puts API in developer's active workflow |
| Month 3-6 | Terraform provider | Unlocks DevOps/platform engineers, enterprise buyers |
| Month 6+ | WordPress plugin, Slack app, JetBrains plugin | Specific verticals justified by traction data |
| Ongoing | Make, Figma, Alfred, Shortcuts | Long-tail; build only if user demand is explicit |

## Post-Launch Maintenance Cost Estimates

Maintenance cost per wrapper per month (engineering time):

| Wrapper Type | Hours/Month | Primary Maintenance Drivers |
|-------------|-------------|----------------------------|
| npm / PyPI SDK | 2-4 hrs | New API endpoints, Node/Python version compat, dep updates |
| CLI tool | 2-3 hrs | New endpoints, shell compat (bash/zsh/fish), install path issues |
| Zapier integration | 1-2 hrs | Trigger/action updates when API schema changes |
| n8n community node | 1-2 hrs | API schema changes, n8n breaking changes (releases frequently) |
| Make (Integromat) | 1-2 hrs | Module updates when API changes |
| VS Code extension | 3-4 hrs | VS Code API deprecations, TypeScript updates, marketplace compliance |
| JetBrains plugin | 4-6 hrs | IntelliJ platform version compatibility, Kotlin/Java toolchain updates |
| WordPress plugin | 4-6 hrs | WP major version compat, PHP version matrix, security patching |
| Terraform provider | 4-8 hrs | Terraform SDK updates (v5+), provider protocol changes, state drift bugs |
| Chrome extension | 2-4 hrs | Manifest V3 changes, Chrome API deprecations, store policy updates |
| Slack app | 2-3 hrs | Slack API deprecations (Slack loves deprecating things), block kit updates |

**Total maintenance budget rule of thumb**: Each active wrapper costs ~2-5 hrs/month. Before building wrapper #10, verify you have the ongoing maintenance capacity. 10 wrappers = ~30-40 hrs/month of maintenance minimum.

## Marketplace Submission Checklist

Before submitting to any marketplace review:
- [ ] Privacy policy URL (required by all major marketplaces)
- [ ] Terms of service URL
- [ ] Support email or URL
- [ ] Tested on latest stable platform version
- [ ] Tested on minimum supported platform version
- [ ] Screenshots/demo GIF prepared (1280x800 minimum for most stores)
- [ ] Short description (80 chars) and long description written
- [ ] All API calls use HTTPS
- [ ] API keys stored in platform-native secure storage (not localStorage, not plaintext)
- [ ] No hardcoded credentials in submitted code
- [ ] Error states handled (network failure, rate limit, invalid key)
