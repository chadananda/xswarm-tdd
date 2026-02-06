---
name: security-scan
description: Detect and prevent API keys, tokens, and secrets from being committed to Git repositories. Mandatory QA step for coder agents before implementation completion. Uses xswarm-ai-sanitize for zero-install scanning via npx.
license: MIT
---

# Security Scan - API Key & Secret Detection

## Overview

**Problem:** AI agents sometimes accidentally hardcode API keys, tokens, and secrets into source code, configs, or documentation, creating security vulnerabilities when committed to Git.

**Solution:** This skill provides fast, automated secret detection using [xswarm-ai-sanitize](https://github.com/chadananda/xswarm-ai-sanitize) — zero-install via npx, 607+ patterns, directory scanning, .gitignore-aware.

**Used by:** Coder agent as mandatory QA step before signaling completion.

---

## Primary Use Case

### Coder Agent QA Workflow (Mandatory)

**After implementing code, before reporting completion:**

1. **Run security scan**
   ```bash
   npx xswarm-ai-sanitize detect .
   ```

2. **If NO secrets found (exit 0)** — proceed to report completion

3. **If secrets FOUND (exit 1)** — DO NOT proceed. Invoke @stuck with the file:line details. Remediate and re-scan.

**This is non-negotiable.** No code proceeds to testing with secrets present. The scan exists because AI agents are especially prone to hardcoding credentials they encounter during implementation.

---

## Quick Start

**No installation required.** xswarm-ai-sanitize runs via npx:

```bash
# Scan entire project directory (respects .gitignore)
npx xswarm-ai-sanitize detect .

# Scan specific paths
npx xswarm-ai-sanitize detect src/ .env config/

# JSON output for CI/CD
npx xswarm-ai-sanitize detect --json .

# Scan everything (ignore .gitignore)
npx xswarm-ai-sanitize detect --no-gitignore .
```

### Output Format

```
src/config.js:23:15 [CRITICAL] aws_access_key_id
    ...AWS_ACCESS_KEY_ID=AKIA...EXAMPLE...

.env.example:3:1 [HIGH] env_file_secret
    OPENAI_API_KEY=sk-proj-...
```

Each finding shows: `file:line:column [SEVERITY] pattern_name` with a context preview.

### Exit Codes

| Code | Meaning | Use |
|------|---------|-----|
| 0 | No secrets found | Safe to proceed |
| 1 | Secrets detected | Block commit, invoke @stuck |

---

## What Gets Detected

xswarm-ai-sanitize detects **607+ secret patterns** plus entropy analysis:

| Category | Examples | Count |
|----------|----------|-------|
| AI/ML Providers | OpenAI, Anthropic, Hugging Face, Groq, Cohere | 25+ |
| Cloud Providers | AWS, Azure, GCP, DigitalOcean, Linode | 40+ |
| Version Control | GitHub, GitLab, Bitbucket tokens | 25+ |
| CI/CD | CircleCI, Travis, Jenkins, Buildkite, Vercel | 25+ |
| Payment | Stripe, PayPal, Square, Plaid, Coinbase | 25+ |
| Communication | Slack, Discord, Telegram, Twilio, SendGrid | 30+ |
| Databases | MongoDB, PostgreSQL, MySQL, Redis, Supabase | 30+ |
| Auth/Identity | Auth0, Okta, Clerk, Firebase | 20+ |
| Private Keys | RSA, EC, DSA, OpenSSH, PGP, PKCS8 | 10+ |
| Generic | High-entropy strings (Shannon threshold 4.5) | catch-all |

**See:** [reference/secret-patterns.md](reference/secret-patterns.md) for regex patterns.

---

## What Gets Scanned

### Included (all committable files by default)
- Source code, configs, documentation, scripts, IaC manifests, build configs

### Excluded (respects .gitignore)
- `node_modules/`, `vendor/`, `venv/`, `dist/`, `build/`, `.git/`, `./tmp/`

**Principle:** If it won't be committed, it won't be scanned. This prevents false positives from dependencies and build artifacts.

---

## Coder Agent Workflow

### Step 1: Scan after implementation

```bash
npx xswarm-ai-sanitize detect .
```

### Step 2a: Clean (exit 0)

```
Security scan: PASSED
Ready to report completion.
```

### Step 2b: Secrets found (exit 1)

```
Security scan: FAILED

Secrets detected:
- src/config.py:23:15 [CRITICAL] openai_project_key
- scripts/deploy.sh:45:8 [CRITICAL] aws_access_key

Cannot proceed. Invoking @stuck.
```

### Step 3: Invoke @stuck (DO NOT proceed)

Provide the exact output with file:line details. The stuck agent will present remediation options to the user.

### Step 4: Remediate

Common fixes:

```python
# BEFORE (hardcoded secret)
API_KEY = "sk-proj-abc123def456..."

# AFTER (load from environment)
import os
API_KEY = os.getenv("OPENAI_API_KEY")
if not API_KEY:
    raise ValueError("OPENAI_API_KEY not set in environment")
```

```bash
# Add to .env (gitignored)
OPENAI_API_KEY=sk-proj-actual-key

# Ensure .env is gitignored
grep -q "^\.env$" .gitignore || echo ".env" >> .gitignore
```

### Step 5: Re-scan and proceed

```bash
npx xswarm-ai-sanitize detect .
# Exit 0 → safe to report completion
```

---

## JSON Output for CI/CD

```bash
npx xswarm-ai-sanitize detect --json .
```

```json
{
  "version": "1.0.0",
  "summary": {
    "totalFiles": 45,
    "totalFindings": 2,
    "criticalCount": 1,
    "highCount": 1,
    "mediumCount": 0
  },
  "results": [
    {
      "file": "src/config.js",
      "findings": [
        {
          "line": 23,
          "column": 15,
          "severity": "critical",
          "type": "aws_access_key_id",
          "preview": "AWS_ACCESS_KEY_ID=AKIA...EXAMPLE..."
        }
      ]
    }
  ]
}
```

Use in GitHub Actions:
```yaml
- run: npx xswarm-ai-sanitize detect --json . > report.json
```

---

## False Positives

### Common Sources

- Example keys in documentation (`YOUR-KEY-HERE`, `EXAMPLE`)
- Test fixtures with obvious fakes
- High-entropy strings that aren't secrets (UUIDs, hashes, long URLs)

### Managing False Positives

For documentation files with example patterns, use obviously fake placeholders:

```markdown
# SAFE — clearly a placeholder
export OPENAI_API_KEY="sk-proj-YOUR-KEY-HERE"
```

For test data, use clearly labeled fakes:

```python
def test_api_client():
    fake_key = "sk-proj-test-EXAMPLE-not-real-key"
    client = APIClient(api_key=fake_key)
```

**Note:** xswarm-ai-sanitize's entropy analysis may flag long random-looking strings (URLs, XSD references). These are typically MEDIUM severity and can be evaluated in context.

---

## Sanitize Mode (Beyond Detection)

xswarm-ai-sanitize can also **redact** secrets in place of just detecting them — useful for cleaning content before it reaches AI agent memory:

```bash
# Redact secrets from text
cat .env | npx xswarm-ai-sanitize sanitize -q

# Block mode (exit 1 if secrets found, no redaction)
npx xswarm-ai-sanitize sanitize --block config.yml
```

The `detect` command is for pre-commit scanning. The `sanitize` command is for AI agent pipelines where content should be cleaned before processing.

---

## Security Best Practices

1. **Never commit secrets.** Use .env files or secret management services — hardcoded secrets are the #1 AI-generated vulnerability.
2. **Always .gitignore .env.** Environment files should never be committed.
3. **Use environment variables.** Load secrets at runtime via `os.getenv()` / `process.env`.
4. **Rotate leaked keys.** If a secret was committed, rotate immediately — treat the old key as compromised.
5. **Document placeholders.** Use `YOUR-KEY-HERE` in examples — real-looking fakes trigger GitHub Push Protection.
6. **MCP configs gitignored.** Server configs often contain auth tokens.
7. **Regular audits.** Periodic full scans with `npx xswarm-ai-sanitize detect .`

---

## Reference Documentation

- **[reference/secret-patterns.md](reference/secret-patterns.md)** - Detectable secret types with regex patterns
- **[reference/false-positives.md](reference/false-positives.md)** - Managing allowlists
- **[reference/remediation.md](reference/remediation.md)** - Step-by-step guide to fixing leaked secrets
- **[reference/gitleaks-guide.md](reference/gitleaks-guide.md)** - Legacy Gitleaks CLI reference (for projects still using gitleaks)

## Examples

- **[examples/coder-workflow-example.md](examples/coder-workflow-example.md)** - Complete coder agent workflow
- **[examples/remediation-example.md](examples/remediation-example.md)** - Step-by-step secret remediation

---

**For coder agents:** This skill is mandatory QA. No shortcuts. No proceeding with secrets present. Security is non-negotiable.
