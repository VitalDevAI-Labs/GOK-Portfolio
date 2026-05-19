# task-20260517-017: Phase 5 — Add Project Filtering to /featured-works

- **Date:** 2026-05-17
- **Status:** done
- **Stage:** Phase 5 — Portfolio Redesign (Multi-Page)
- **Requirements:** Add category filtering to /featured-works page with URL query params

## Goal
Create interactive category filtering on /featured-works page. Allow users to filter projects by category (All, Frontend, Fullstack, Cloud, Design). Update URL with query params (?category=fullstack) for shareable links.

## Plan
1. Create `CategoryFilter.tsx` component with pill buttons
2. Create `FeaturedWorksPage.tsx` with filtering logic
3. Use `useSearchParams` to read category from URL
4. Filter projects dynamically based on selected category
5. Update /featured-works route to use new component
6. Test: build passes, filtering works, URL updates

## Log

**Step 1: Create CategoryFilter component**
- Location: `src/components/CategoryFilter.tsx`
- Exports: `categories` array (All, Frontend, Fullstack, Cloud, Design)
- Uses `useRouter` and `useSearchParams` to handle navigation
- On click: updates URL with `?category=categoryId`
- Button styles: active button highlighted with accent color/border
- Hover state: non-active buttons show preview of accent color

**Step 2: Create FeaturedWorksPage component**
- Location: `src/components/FeaturedWorksPage.tsx`
- Uses `Suspense` to handle async search params
- Reads `category` query param from URL
- Filters projects: `category === 'all'` shows all, else filters by category
- Shows result count: "Showing 4 projects" or "Showing 1 project"
- Empty state: "No projects found in this category"
- Reuses existing ProjectCard component for display

**Step 3: Update /featured-works route**
- Modified `src/app/(shared)/featured-works/page.tsx`
- Changed from `<Projects />` to `<FeaturedWorksPage />`
- Metadata unchanged (title, description)
- Now supports query params: `/featured-works?category=cloud`

**Step 4: Build verification**
- `npm run build` → ✅ Success (2.8s)
- Routes: 4 detected
- /featured-works size: 2.81 kB (up from 1.34 kB, due to filter logic)
- First Load JS: 105 kB (up from 104 kB, adds CategoryFilter logic)
- TypeScript: ✅ No errors
- Dev server: ✅ Ready in 3.3s

**Step 5: Filtering logic verification**
- URL: /featured-works → Shows all 4 projects
- URL: /featured-works?category=fullstack → Shows 1 project (Dev Task Manager)
- URL: /featured-works?category=cloud → Shows 2 projects (CLI Organizer, API Rate Limiter)
- URL: /featured-works?category=design → Shows 1 project (Portfolio Site)
- URL: /featured-works?category=frontend → Shows 0 projects (empty state)

## Files Changed
- `src/components/CategoryFilter.tsx` — created (new file)
- `src/components/FeaturedWorksPage.tsx` — created (new file)
- `src/app/(shared)/featured-works/page.tsx` — updated imports + component

## Directory Structure Updated
```
src/components/
├── CategoryFilter.tsx                    ✨ NEW - Filter pills component
├── FeaturedWorksPage.tsx                 ✨ NEW - Page with filtering logic
├── Projects.tsx                          (unchanged, used on homepage)
└── ProjectCard.tsx                       (reused for display)
```

## Outcome
✅ **Done** — Project filtering fully implemented on /featured-works.

### What This Enables
- **Interactive filtering:** Click category pills to filter projects
- **URL query params:** Links like `/featured-works?category=cloud` are shareable
- **Browser history:** Back button works, history preserved
- **Responsive:** Pills wrap on mobile, centered layout
- **Performance:** Static page + client-side filtering (no server load)

### Filtering Behavior
| URL | Shows | Count |
|-----|-------|-------|
| `/featured-works` | All projects | 4 |
| `/featured-works?category=all` | All projects | 4 |
| `/featured-works?category=fullstack` | Dev Task Manager | 1 |
| `/featured-works?category=cloud` | CLI Organizer, API Rate Limiter | 2 |
| `/featured-works?category=design` | Portfolio Site | 1 |
| `/featured-works?category=frontend` | (none) | 0 |

### Component Architecture
```
/featured-works (route)
  └─ FeaturedWorksPage (client component)
     ├─ CategoryFilter (client component)
     │  └─ Pill buttons for each category
     └─ ProjectCard components
        └─ Filtered by selected category
```

### Code Patterns Used
**CategoryFilter:**
- `useRouter` for navigation
- `useSearchParams` for reading category
- Pill buttons with active state styling
- Hover effects on inactive buttons

**FeaturedWorksPage:**
- `Suspense` boundary for search params
- Dynamic filtering: `projects.filter(p => p.category === selectedCategory)`
- Result count display
- Empty state message
- Inline button handler: `onClick={() => handleCategoryClick(categoryId)}`

### User Experience Flow
1. Visit `/featured-works` → See all 4 projects + All pill highlighted
2. Click "Cloud" pill → URL updates to `?category=cloud`, shows 2 projects
3. Click "Fullstack" pill → URL updates to `?category=fullstack`, shows 1 project
4. Click "All" pill → URL updates to `/featured-works`, shows all 4 projects
5. Share URL: `example.com/featured-works?category=cloud` → Friend sees cloud projects

### Next Steps (Phase 6)
Timeline optimization for /professional-journey:
- Enhanced styling for timeline cards
- Responsive mobile layout improvements
- Optional: Add pagination if experiences grow >5

### Build Status
- TypeScript: ✅ No errors
- Build: ✅ 2.8s, 4 routes
- Dev: ✅ Ready in 3.3s
- Bundle impact: +1.47 kB to /featured-works (acceptable)
- First Load JS: +1 kB (CategoryFilter + search params logic)

### Code Quality
- ✅ Uses Next.js hooks correctly (useRouter, useSearchParams)
- ✅ Suspense boundary for async operations
- ✅ Reuses ProjectCard component (no duplication)
- ✅ Proper TypeScript types (Category interface)
- ✅ Accessible button states with visual feedback
- ✅ Graceful empty state handling
- ✅ URL-driven state (bookmarkable, shareable)
