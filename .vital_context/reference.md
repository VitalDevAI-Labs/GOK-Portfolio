# Quick Reference — GOK Portfolio

## Common Commands

```bash
# Development
npm run dev           # Start dev server at localhost:3000

# Build & Check
npm run build         # Production build
npm run lint          # Lint code

# Deploy (Phase 4)
vercel                # Deploy to Vercel (install vercel CLI first)
```

---

## File Structure (Quick Lookup)

```
src/app/layout.tsx        ← Root layout, fonts, metadata, dark bg
src/app/page.tsx          ← Home page, composes all sections
src/app/globals.css       ← Global CSS, Tailwind base
src/components/Nav.tsx    ← Navigation bar
src/components/Hero.tsx   ← Hero section
src/components/Projects.tsx ← Projects grid
src/components/About.tsx  ← About section
src/components/Skills.tsx ← Skills section
src/data/bio.ts           ← Owner bio, name, role, email
src/data/projects.ts      ← Project list
src/data/skills.ts        ← Skills list
public/resume.pdf         ← Resume (add when available)
```

---

## Environment Variables

No environment variables required for Phase 1–3 (fully static).

For Phase 4 (deploy), Vercel handles build env automatically.

---

## Key URLs

| Resource | URL |
|----------|-----|
| Dev server | http://localhost:3000 |
| Vercel deploy (planned) | TBD |

---

## Content Status

| Content | Status | Notes |
|---------|--------|-------|
| Owner display name | TBD | Placeholder: "GOK" |
| Role tagline | TBD | Placeholder: "Full-Stack Engineer" |
| Personal tagline | TBD | Placeholder text |
| Bio paragraph | TBD | Placeholder text |
| Projects (3–5) | TBD | Placeholder projects |
| Skills list | TBD | Placeholder list |
| Contact email | TBD | |
| Resume PDF | TBD | Place at `/public/resume.pdf` |
| Profile photo | Optional | Place at `/public/photo.jpg` if used |
