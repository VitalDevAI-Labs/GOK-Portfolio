# task-20260517-003: Phase 3 Polish — Contact, Resume, SEO
- **Date:** 2026-05-17
- **Status:** done
- **Stage:** Stage 2, Phase 3
- **Requirements:** V2-REQ-001, V2-REQ-002, V2-REQ-004

## Goal
Add Contact section with mailto + resume download, Footer, and full SEO/OG metadata.

## Plan
1. Contact section — mailto link + resume download button
2. Footer — copyright, GitHub, LinkedIn links
3. SEO — full Metadata object in layout.tsx (title template, OG, Twitter card, robots)
4. Wire into page.tsx, verify build

## Log
- Contact is a client component (hover handlers); Footer is a server component
- siteUrl set to placeholder 'https://gok.dev' — update when domain is confirmed
- metadataBase required by Next.js for absolute OG URLs
- title template set: '%s | GOK' for future sub-pages
- Build passes ✓ — 1.92 kB route size

## Files Changed
- `src/components/Contact.tsx` — created
- `src/components/Footer.tsx` — created
- `src/app/layout.tsx` — full SEO/OG metadata added
- `src/app/page.tsx` — Contact + Footer wired in

## Outcome
Done. Full page: Hero → Projects → About → Skills → Contact → Footer. SEO tags present. Ready for Phase 4 (deploy to Vercel).
