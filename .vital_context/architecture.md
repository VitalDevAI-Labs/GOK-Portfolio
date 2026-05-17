# Technical Architecture

## Stack

| Layer | Technology | Version | Why |
|-------|-----------|---------|-----|
| Frontend | Next.js | 15.2.x | File-based routing, SSG, Vercel-native |
| UI Framework | React | 19.0 | Latest stable |
| Language | TypeScript | 5.x | Type safety |
| Styling | Tailwind CSS | v4 | Utility-first, fast iteration |
| Content | Local TS data files | — | No CMS overhead for solo portfolio |
| Hosting | Vercel (planned) | — | Free tier, Next.js-native |

---

## Architecture Diagram

```
┌─────────────────────────────┐
│        Browser              │
│  (Recruiter / Hiring Mgr)   │
└─────────────┬───────────────┘
              │ HTTPS
              ▼
┌─────────────────────────────┐
│   Next.js 15 (Static/SSG)   │
│   Hosted on Vercel          │
│                             │
│  src/app/          ← routes │
│  src/components/   ← UI     │
│  src/data/         ← content│
└─────────────────────────────┘
No backend. No database. No auth.
All content lives in src/data/*.ts files.
```

---

## Data Models

### `src/data/projects.ts` — Portfolio projects
```typescript
export interface Project {
  id: string
  title: string
  description: string        // 1-3 sentences
  techStack: string[]        // e.g. ['React', 'Node.js', 'PostgreSQL']
  githubUrl: string
  liveUrl?: string           // optional
  featured: boolean          // show in hero/top of grid
}
```

### `src/data/skills.ts` — Skills list
```typescript
export interface SkillGroup {
  category: string           // e.g. 'Languages', 'Frameworks', 'Tools'
  items: string[]
}
```

### `src/data/bio.ts` — Owner bio
```typescript
export interface Bio {
  name: string               // Display name
  role: string               // e.g. 'Full-Stack Engineer'
  tagline: string            // One-line personal statement
  bio: string                // 2-4 sentence paragraph
  email: string
  github?: string
  linkedin?: string
  resumeUrl: string          // e.g. '/resume.pdf'
}
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout — dark theme, fonts, metadata
│   ├── page.tsx             # Home page — composes all sections
│   └── globals.css          # Global CSS, Tailwind base
├── components/
│   ├── Nav.tsx              # Top navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Projects.tsx         # Projects grid
│   ├── ProjectCard.tsx      # Individual project card
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   └── Contact.tsx          # Contact section
├── data/
│   ├── projects.ts          # Project list (placeholder → real)
│   ├── skills.ts            # Skills list (placeholder → real)
│   └── bio.ts               # Owner bio (placeholder → real)
└── types/
    └── index.ts             # Shared TypeScript types
```

---

## Key Decisions

| # | Decision | Chose | Over | Why |
|---|----------|-------|------|-----|
| 1 | Content source | Local TS data files | Headless CMS, Notion | No auth, no API calls, edit = push |
| 2 | Dark mode | Locked dark (no toggle) | OS-preference / toggle | Intentional aesthetic, not an a11y feature |
| 3 | Routing | Single page (scroll) | Multi-page | Portfolio UX standard; simpler nav |
| 4 | Fonts | Google Fonts via next/font | Self-hosted | Zero config, cached by CDN |
| 5 | Animations | CSS transitions / Tailwind | Framer Motion | No extra dep for Phase 1; add if needed |
| 6 | Contact | mailto link | Form with backend | No server needed; simple for Phase 1 |
| 7 | V2 accent | Violet `#a855f7` | Cyan `#22d3ee` | New UX design spec on V-2-New-UX branch |
| 8 | V2 fonts | Merriweather (headings) + Inter (body) + JetBrains Mono | Inter-only | Serif headings per design spec; body stays sans-serif |
| 9 | V2 styling | CSS variables (tokens) + Tailwind v4 (layout in new components) | Full rewrite | Existing inline styles auto-inherit token changes; no component rewrites needed |
| 10 | V2 EdgeFrame | Fixed decorative 1px lines via CSS classes in globals.css | Inline only | Glow toggled via media query — cleaner than JS resize listeners |

---

## Constraints & Limitations

- No backend — all content is static TS files, no API routes needed for Phase 1–2
- Resume PDF must be manually placed in `/public/resume.pdf`
- Real owner content (name, bio, projects) is placeholder until owner supplies it
- Tailwind v4 uses a different config approach than v3 — no `tailwind.config.js`, config is in CSS
