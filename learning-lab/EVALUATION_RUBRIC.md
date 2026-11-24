# Evaluation rubric

Metrics report integer counts and explicit denominators. Subjective assessments use `PASS`, `FAIL`, `INCONCLUSIVE`, or `NOT_RUN`, never invented precision.

Critical gates:

- seeded hard-failure recall = 100%;
- false PASS on seeded hard failures = 0;
- false lens promotion = 0;
- secret leakage = 0;
- production UI mutations = 0;
- inferred operator acceptance = 0.

Additional measures cover task success, high-severity recall, precision, false-positive rate, traceability, root-cause accuracy, lens-order precision, fix success, regressions, ablation contribution, second-fixture/holdout generalization, acceptance gap, unsupported claims, context cost, latency, evidence completeness, and report fidelity.
