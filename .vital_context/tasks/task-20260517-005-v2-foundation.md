# task-20260517-005: V2 Foundation — globals, EdgeFrame, Nav
- **Date:** 2026-05-17
- **Status:** done
- **Stage:** V-2 New UX, branch: V-2-New-UX
- **Requirements:** V2-UX-001

## Goal
Establish the V2 design system foundation: updated CSS tokens, Merriweather font, EdgeFrame component, and redesigned Nav. All existing components inherit token changes automatically.

## Plan
1. globals.css — update accent/bg/border/muted tokens, add radius/category/nav tokens, @theme block, EdgeFrame CSS classes
2. layout.tsx — add Merriweather (serif), expose --font-serif variable
3. EdgeFrame.tsx — new decorative fixed vertical lines with violet glow
4. Nav.tsx — frosted glass bg, larger logo, "Let's Connect" CTA button
5. page.tsx — wire EdgeFrame before Nav

## Log
- accent changed: #22d3ee → #a855f7 (cyan → violet) — all components inherit via CSS var
- muted changed: #737373 → #9b9b9b (lighter)
- border changed: #1f1f1f → #222028
- bg changed: #0a0a0a → #0d0d0d
- Merriweather: weight array ['400','700','900'] required (non-variable font)
- EdgeFrame uses max(24px, calc(50% - 600px)) to align to 1200px container
- Nav: backdropFilter + WebkitBackdropFilter for Safari frosted glass
- @theme block exposes tokens as Tailwind utilities for new components
- Build passes ✓ — 2.1 kB route size

## Files Changed
- `src/app/globals.css` — updated tokens, @theme, EdgeFrame classes
- `src/app/layout.tsx` — Merriweather added, --font-serif exposed
- `src/components/EdgeFrame.tsx` — created
- `src/components/Nav.tsx` — frosted glass, logo size, Let's Connect CTA
- `src/app/page.tsx` — EdgeFrame wired in

## Outcome
Done. V2 design foundation live on V-2-New-UX branch. Next: Hero section redesign (task-20260517-006).
