# Architecture

The local CLI fronts a small standard-library Python package.

| Module | Responsibility | Trust boundary |
|---|---|---|
| registry | Visible tasks, viewports, states, acceptance requirements | Hides holdouts from builder |
| orchestrator | RAW/CORE/FULL/ABLATION/STRESS/MUTATION/HOLDOUT/SECOND_FIXTURE/RESET/PORTABILITY/REGRESSION | Creates isolated run workspaces |
| builder | Deterministic reference UIs from public briefs and selected lenses | No oracle or evaluator gold |
| capture | Chrome screenshots and DOM plus computed semantic, geometry, interaction, console/network evidence | Direct artifacts are hashed |
| checkers | Objective DOM/layout/state/accessibility rules | No subjective polish |
| auditors | Frozen-artifact receipts in error-first order | Read-only role profiles |
| triage | Defect records, consequences, confidence, root cause | Reusable gap is separately verified |
| lens pipeline | Orders, staged candidates, tests, ablation, maturity | No self-promotion |
| reports | Markdown, JSON, standalone HTML evidence gallery | Operator state shown separately |

SQLite stores lifecycle state. JSON packages are portable and paths inside packages are relative. Processes owned by one Linux account are policy-isolated, not cryptographically isolated.
