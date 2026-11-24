# Rule Defect Workflow

1. Record the observed interface failure.
2. Identify the missing, incorrect, or insufficient reusable rule.
3. Correct the Lens before prescribing a local interface patch.
4. Add at least one negative regression test.
5. Add at least one positive test proving legitimate behavior remains allowed.
6. Verify the rule against a second fixture or scenario.
7. Only a later implementation mission may modify the production interface.

Use:

```text
DESIGN_RULE_DEFECT

Observed failure:
User consequence:
Defective or missing rule:
Rule correction:
Negative test:
Positive test:
Protected valid behavior:
Future interface work required:
```
