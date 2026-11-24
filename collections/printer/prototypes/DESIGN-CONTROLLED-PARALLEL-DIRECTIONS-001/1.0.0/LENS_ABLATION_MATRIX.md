# Ablation matrix

| Variant | Removed mechanism | Diagnostic purpose |
|---|---|---|
| full | none | reference condition |
| without-module | Permit intentional A/B/C alternatives while preventing duplicate ownership, conflicting sources of truth, and permanent experiments. | isolate distinct effect |
| without-guardrail | operator/safety boundary | forbidden control |
| without-domain | specialization | test portability |
