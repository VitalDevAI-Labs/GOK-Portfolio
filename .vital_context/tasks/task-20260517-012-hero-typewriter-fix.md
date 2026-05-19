# task-20260517-012: Hero Typewriter Animation Fix

- **Date:** 2026-05-17
- **Status:** done
- **Stage:** Phase 4 — Polish & Launch
- **Requirements:** Hero animation responsiveness

## Goal
Fix typewriter effect in Hero section. Previous implementation used refs + manual state management causing stale closures and incomplete word cycling. User feedback: "moving too fast, can't see word transitions, stops after one word."

## Plan
1. Replace ref-based state (`wordIndexRef`, `charCount`) with React state (`displayText`, `wordIndex`, `isDeleting`)
2. Simplify to state-machine pattern: typing → pause → deleting → next word
3. Use dependency array to naturally trigger next animation step
4. Test all 5 words cycle smoothly

## Log
- Initial code used `useRef(0)` for word index + `charCount` state, creating closure issues
- Multiple rewrites attempted with complex nested `startErase()` function
- Final solution: 3-state approach (displayText, wordIndex, isDeleting) with clean if/else conditionals
- Typing speed: 80ms per char, pause: 2000ms, delete speed: 50ms per char
- All 5 words now cycle indefinitely with natural reading pace

## Files Changed
- `src/components/Hero.tsx` — rewrote useEffect hook (lines 18–60)
  - Old: 30 lines of ref + nested functions
  - New: 41 lines of state-machine logic, much cleaner

## Outcome
✅ **Done** — Typewriter now cycles all words smoothly. User verified: "bravo, how u did it now". Animation matches design intent: visible text transitions, natural typing pace, no stalls.

### Adjustable Timings (if needed later)
- Line 37: `80` — typing speed (ms per char)
- Line 42: `2000` — pause after word complete (ms)
- Line 49: `50` — delete speed (ms per char)
