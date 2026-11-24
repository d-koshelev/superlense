# Operator acceptance

These evidence levels are separate:

1. `AUTOMATED_TESTS`
2. `DETERMINISTIC_UI_CHECKS`
3. `COPILOT_VISUAL_AUDIT`
4. `INDEPENDENT_REVIEW`
5. `OPERATOR_VISUAL_ACCEPTANCE`

```text
AUTOMATED_TESTS: PASS
+
COPILOT_VISUAL_AUDIT: PASS
≠
OPERATOR_ACCEPTED
```

Only Dmitry can set `OPERATOR_VISUALLY_ACCEPTED`. The CLI records acceptance only from explicit confirmation plus named evidence and never promotes as a side effect of a successful test.
