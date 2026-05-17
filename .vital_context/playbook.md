# Stage Playbook

## Stage 0: Foundations — `done`

**Goals:**
- Initialize Next.js 15 + Tailwind CSS v4 scaffold
- TypeScript configured

**Requirements:** `V0-REQ-001, V0-REQ-002`

**Acceptance Criteria:**
- ✅ Project builds with zero errors (`npm run build`)
- ✅ `npm run dev` starts dev server

**Definition of Done:**
- ✅ App boots and renders a page at localhost:3000

**Hand-off:** Clean Next.js 15 + Tailwind v4 scaffold ready for UI development.

---

## Stage 1: Core Experience — `active`

### Phase 1: Foundation UX — `done`

**Window:** 2026-05-16 onwards

**Goals:**
- Global dark layout locked and styled
- Fonts loaded (monospace accent + body)
- Navigation bar visible
- Hero section with placeholder content rendered

**Requirements:** `V1-REQ-001, V1-REQ-002, V1-REQ-003, V1-REQ-004`

**Key Tasks:** `task-20260516-001`

**Acceptance Criteria:**
- ✅ `npm run build` passes with zero errors
- ✅ Background is dark (#0a0a0a) — CSS variable on html/body, no OS media query
- ✅ Fonts loaded — Inter (body) + JetBrains Mono (accent) via next/font
- ✅ Nav shows name/logo left + section links right
- ✅ Hero shows placeholder name, role, tagline, and 2 CTA buttons

**Definition of Done:**
- ✅ Opening localhost:3000 shows a dark-themed page with nav + hero
- ⬜ Responsive — readable on mobile and desktop (verify in browser)
- ✅ No broken build

**Risks:** Tailwind v4 config differences from v3 — verify dark background is applied globally

**Hand-off:** Dark layout + fonts locked. Nav and Hero built as client components. bio.ts, types/index.ts created. page.tsx composes sections with 60px top padding for fixed nav.

---

### Phase 2: Core Content — `active`

**Goals:**
- Projects grid from local TS data
- About section
- Skills section

**Requirements:** `V1-REQ-005, V1-REQ-006, V1-REQ-007`

**Acceptance Criteria:**
- ⬜ Projects render from `src/data/projects.ts`
- ⬜ GitHub links are clickable
- ⬜ About and Skills sections visible on scroll

**Definition of Done:**
- ⬜ Full page scrollable from Hero → Projects → About → Skills
- ⬜ No placeholder [brackets] visible to a visitor

**Hand-off:** pending

---

## Stage 2: Polish & Conversion — `pending`

**Goals:**
- Contact + Resume download functional
- Scroll animations
- SEO/OG tags

**Requirements:** `V2-REQ-001, V2-REQ-002, V2-REQ-003, V2-REQ-004`

**Hand-off:** pending

---

## Stage 3: Launch — `pending`

**Goals:**
- Deploy to Vercel
- Lighthouse scores ≥90

**Requirements:** `V3-REQ-001, V3-REQ-002, V3-REQ-003`

**Hand-off:** pending
