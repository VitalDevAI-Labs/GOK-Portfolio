# Product Backlog

> Approved-but-not-scheduled work. When an item is ready, add it to the Active Tasks table in [CONTEXT.md](CONTEXT.md) and start a task log.

---

## Backlog

| ID | Title | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| `PB-001` | `[Short outcome]` | H/M/L | idea / groomed / ready | `[context]` |

---

## Entry Template

```yaml
- id: PB-001
  title: "Outcome-based title"
  priority: high | med | low
  status: idea | groomed | ready
  summary: >
    1-2 sentences on user value.
  acceptance_hints:
    - "Testable condition"
  dependencies: []
  notes: >
    Links to research/decisions.
```

---

## Status Model
- **idea** — captured, not vetted
- **groomed** — scoped, acceptance hints drafted
- **ready** — meets Definition of Ready, can move to CONTEXT.md active tasks

## Definition of Ready
- Acceptance hints are testable
- Blocking dependencies known
- Design link present if UI work involved

## Promotion
When `status = ready`: add to Active Tasks in `CONTEXT.md`, create `tasks/task-*.md` when work starts.

---

## Parking Lot (unvetted ideas)

```
- id: IDEA-001
  title: "What if..."
  next_step: "Discovery / Prototype"
```
