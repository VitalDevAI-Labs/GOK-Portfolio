# Bug Tracking

> Log bugs that required meaningful investigation or had user-visible impact. Check this file before investigating any issue — it may already be documented.

---

## Status Board

| ID | Title | Severity | Status | Owner |
|----|-------|----------|--------|-------|
| BUG-001 | `[Symptom summary]` | Critical/High/Med/Low | Open/Fixed/Won't Fix | `[name]` |

---

## Bug Entry Template

```yaml
- id: BUG-001
  title: "Describe the symptom, not the fix"
  severity: critical | high | medium | low
  status: open | in-progress | fixed | won't-fix
  reported: YYYY-MM-DD
  environment: "OS / device / version"
  steps_to_reproduce:
    - "Step 1"
    - "Step 2"
  expected: "What should happen"
  actual: "What actually happens"
  root_cause: "Once known"
  resolution: "The fix + code references"
  task_log: "tasks/task-YYYYMMDD-NNN-*.md (if applicable)"
```

---

## Patterns & Known Limitations

| Pattern | Description | Mitigation |
|---------|-------------|------------|
| `[recurring issue]` | `[details]` | `[how to avoid/handle]` |

---

## Incident Response
1. Assign severity
2. Create `tasks/task-*.md` for the investigation
3. Update this doc with root cause + resolution once fixed
