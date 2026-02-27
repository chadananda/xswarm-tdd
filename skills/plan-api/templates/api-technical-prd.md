# API Technical PRD: [API Product Name]

## Vision
<!-- One paragraph: what this API does, who uses it, what developer success looks like. -->

## OpenAPI 3.1 Specification Skeleton

### Info Block
<!-- title, description, version, contact, license, termsOfService -->

### Servers
<!-- Sandbox URL, Production URL -->

### Authentication
<!-- Scheme(s): API key, OAuth 2.0, or both. Header/query parameter names. -->

### Core Endpoints
<!-- For each endpoint: Method, Path, Summary, Request body schema, Response schema, Error codes. 3-5 core endpoints minimum. -->

### Error Response Schema
<!-- Consistent error format: { error: { code, message, details } }. Standard HTTP status codes used. -->

### Rate Limit Headers
<!-- X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset format and behavior. -->

## Gateway Configuration

### Provider & Rationale
<!-- Recommended gateway (Zuplo/Kong/AWS API Gateway) and why. -->

### Rate Limiting Tiers
<!-- Table: Tier | Requests/min | Requests/day | Burst | Aligned to pricing tier -->

### Auth Validation
<!-- API key lookup, JWT verification, OAuth token validation — implementation approach. -->

### Caching Strategy
<!-- What to cache, TTLs, cache invalidation approach. -->

### CORS Configuration
<!-- Allowed origins, methods, headers for browser-based consumers. -->

### Usage Metering
<!-- How API calls are counted and reported for billing. -->

## SDK Generation Plan

### Generation Approach
<!-- OpenAPI Generator vs Stainless/Speakeasy vs hand-crafted — decision and rationale. -->

### SDK Targets
<!-- Table: Language | Registry | Package Name | Install Command | Priority | Status -->

### SDK Quickstart Snippet
<!-- One representative code snippet showing the ideal developer experience. -->

## Wrapper/Integration Matrix
<!-- Table: Platform | Type | Build Effort | Developer Reach | Priority | Launch Phase | Build vs Wrap | Est. Dev Time -->

## Documentation Site Plan

### Site Structure
<!-- Getting Started, API Reference, Guides, SDKs, Changelog, Status Page — with page descriptions. -->

### Technology
<!-- Framework choice (Astro/Mintlify/ReadMe) and rationale. -->

### Auto-Generation
<!-- How API reference docs are generated from OpenAPI spec. -->

## Infrastructure

### Architecture
<!-- System components: API gateway, compute, database, cache, monitoring. One sentence per component. -->

### Cost Estimate
<!-- Table: Service | Launch (0-1K calls/day) | Growth (10K calls/day) | Scale (100K calls/day) | Notes -->

### Monitoring & Observability
<!-- Uptime monitoring, APM, error tracking, API analytics — specific tools recommended. -->

## Development Milestones
<!-- Table: Milestone | Scope | Timeline | Deliverable | Definition of Done -->
