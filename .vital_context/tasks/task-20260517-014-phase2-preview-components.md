# task-20260517-014: Phase 2 — Preview Components Extraction

- **Date:** 2026-05-17
- **Status:** done
- **Stage:** Phase 5 — Portfolio Redesign (Multi-Page)
- **Requirements:** Extract featured-only preview versions of Projects and Experience for homepage

## Goal
Create lightweight preview components (featured projects only, featured experiences only) to show on homepage while maintaining ability to link to full dedicated pages. Prevents homepage bloat while teasing deeper content.

## Plan
1. Create `ExperiencePreview.tsx` — shows first 2 experiences only, links to `/professional-journey`
2. Create `ProjectsPreview.tsx` — shows first 3 featured projects only, links to `/featured-works`
3. Update homepage to use Preview components instead of full components
4. Test: build passes, homepage renders with truncated content
5. Verify: buttons link to new routes (will be created in Phase 3)

## Log

**Step 1: Create ExperiencePreview component**
- Location: `src/components/sections/ExperiencePreview.tsx`
- Extracted TimelineEntry and TimelineCard from Experience.tsx
- Key change: `slice(0, 2)` shows only first 2 experiences (Lead AI Engineer + Senior Full Stack)
- Updated button from `#projects` anchor to `Link href="/professional-journey"`
- Identical styling/layout to full Experience component

**Step 2: Create ProjectsPreview component**
- Location: `src/components/sections/ProjectsPreview.tsx`
- Extracted from Projects.tsx, keeps same structure
- Key change: `filter(p => p.featured).slice(0, 3)` shows 3 featured projects only
- Updated "View All" anchor to `Link href="/featured-works"`
- Same grid layout, same ProjectCard component reuse

**Step 3: Update homepage**
- Modified `src/app/(shared)/page.tsx`
- Replaced `import Projects` → `import ProjectsPreview`
- Replaced `import Experience` → `import ExperiencePreview`
- Replaced `<Projects />` → `<ProjectsPreview />`
- Replaced `<Experience />` → `<ExperiencePreview />`

**Step 4: Build verification**
- `npm run build` → ✅ Success (compiled in 1.6s)
- No TypeScript errors
- File size unchanged (6.4 kB)
- `npm run dev` → ✅ Success (ready in 2.5s)

**Step 5: Semantic verification**
- ExperiencePreview shows current role (Lead AI Engineer) with purple glow
- ExperiencePreview shows one past role (Senior Full Stack)
- ProjectsPreview shows 3 cards (all with featured: true)
- Both have "View Full" CTAs linking to dedicated pages
- Homepage is now ~50% shorter (previews instead of full sections)

## Files Changed
- `src/components/sections/ExperiencePreview.tsx` — created (new file)
- `src/components/sections/ProjectsPreview.tsx` — created (new file)
- `src/app/(shared)/page.tsx` — updated imports + component usage
- `src/components/Experience.tsx` — unchanged (still exists for Phase 3)
- `src/components/Projects.tsx` — unchanged (still exists for Phase 3)

## Directory Structure Updated
```
src/components/
├── sections/                               # NEW: Preview & section components
│   ├── ExperiencePreview.tsx              # NEW: Featured experience cards for homepage
│   └── ProjectsPreview.tsx                # NEW: Featured project cards for homepage
├── Experience.tsx                         # Keep for full /professional-journey page
└── Projects.tsx                           # Keep for full /featured-works page
```

## Outcome
✅ **Done** — Preview components created and integrated into homepage.

### What This Achieves
- Homepage is more focused: shows curated content, not everything
- CTA buttons prepare users for navigation: "View Full Timeline" → `/professional-journey`
- Zero layout/styling changes: previews use identical structure to full components
- Reusable: ProjectsPreview and ExperiencePreview are isolated and can be moved, tested, or modified independently
- Next pages ready: when `/professional-journey` and `/featured-works` routes created in Phase 3, these CTAs will work

### Visual Behavior
**Homepage now:**
- Shows Hero (unchanged)
- Shows 3 featured projects (of 4 total)
- Shows About + Skills (unchanged)
- Shows 2 featured experiences (of 3 total)
- Shows Contact (unchanged)

**Full pages will show (coming in Phase 3):**
- `/professional-journey` → All 3 experiences with full timeline
- `/featured-works` → All 4 projects with category filtering

### Next Steps (Phase 3)
Create new page templates:
- `src/app/(shared)/professional-journey/page.tsx` — render full Experience component
- `src/app/(shared)/featured-works/page.tsx` — render full Projects component (enhanced with filtering)
- Add headers/breadcrumbs to sub-pages

### Build Status
- TypeScript: ✅ No errors
- Build: ✅ 1.6s, 109 kB First Load
- Dev: ✅ Ready in 2.5s
- Routes: ✅ `/` renders with previews

### Code Quality
- ✅ Components are pure (no side effects)
- ✅ Reused types from @/types
- ✅ Consistent styling approach (inline + CSS variables)
- ✅ Link components use next/link for optimized routing
- ✅ No hardcoded values: uses `.slice()` and `.filter()` for data limiting
