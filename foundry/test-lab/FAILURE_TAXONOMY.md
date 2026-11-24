# Lens failure and aberration taxonomy

Canonical classes:

`underfocus`, `tunnel_vision`, `context_omission`, `context_pollution`, `doctrine_conflict`, `authority_inversion`, `false_blocking`, `unsafe_action`, `tool_mismatch`, `epistemic_collapse`, `stale_state`, `state_divergence`, `report_inflation`, `metric_gaming`, `queue_theater`, `handoff_loss`, `provider_overfit`, `test_leakage`, `benchmark_overfit`, `cost_explosion`, `latency_explosion`, `portability_failure`.

Each finding creates a LensFailureReport with evidence, root-cause hypothesis, affected module, revision proposal, regression risk, and next test. A static-analysis finding is not relabeled as observed behavioral failure.

