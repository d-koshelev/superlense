# Ablation matrix

| Variant | Removed mechanism | Diagnostic purpose |
|---|---|---|
| full | none | reference Layer 1 condition |
| without-HUMAN-RESOURCE-ROUTER-001 | Assign work to the human, Copilot, or execution agent without transferring human decisions to machines. | detect the module's distinct effect |
| without-layer-0 | guardrails | forbidden unsafe control |
| without-domain | domain refinement | test foundational portability |

No behavioral improvement is assumed before measurement.
