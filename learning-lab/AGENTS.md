# Copilot UI Learning Lab

PROJECT_ID: SUPERLENSE-COPILOT-UI-SELF-LEARNING-LAB-001

This repository is a local evidence lab, not a production interface.

## Boundaries

- Read only the task brief, permitted assets, selected lenses, and run workspace when acting as `ui-builder`.
- Never expose `tasks/holdouts`, `fixtures/mutations/.oracle`, or evaluator gold to a builder.
- Treat auditors as read-only. Only the orchestrator may merge canonical project state.
- Write candidate lenses only under `catalog/candidate`; operator approval is required before canonical promotion.
- Keep automated acceptance, Copilot audit, independent review, and operator visual acceptance distinct.
- Never claim weight training, fine-tuning, cryptographic isolation, or operator acceptance.
- Use portable relative paths in run packages and redact secrets.
- Do not modify sibling repositories, global overrides, or production UIs.
- Do not add a Git remote or push.

## Audit order

`HARD_FAILURES → PRIMARY_TASK_BLOCKERS → REQUIREMENT_CONTRADICTIONS → SINGLE_ACTION_OWNERSHIP → STATE_LANGUAGE_ACTION_CONSISTENCY → NAVIGATION_TAXONOMY_AND_REACHABILITY → PRIMARY_IDENTITY_VISIBILITY → INFORMATION_ARCHITECTURE → INTERACTION_AND_STATE → RESPONSIVE_BEHAVIOR → ACCESSIBILITY → VISUAL_HIERARCHY_AND_DENSITY → CONTENT_QUALITY → CONSISTENCY → PRESERVE → AMPLIFY → OPTIONAL_POLISH`

## Completion

No role approves its own work. `AUTOMATED_TESTS: PASS + COPILOT_VISUAL_AUDIT: PASS ≠ OPERATOR_ACCEPTED`.
