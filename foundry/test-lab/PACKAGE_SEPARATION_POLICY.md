# Subject/evaluator separation policy

Every variant has physically separate `SUBJECT_PACKAGE` and `EVALUATOR_PACKAGE` directories. Provider adapters may resolve files only below `SUBJECT_PACKAGE`; attempting an evaluator path is a hard failure.

The subject receives the public representative prompt, public constraints, public Lens package for relevant variants, and a neutral return contract. It never receives hidden tests, the expected correct answer, hidden scoring weights, other variants' results, revision recommendations, or evaluator feedback.

The evaluator receives immutable subject output/transcript only after completion. Package manifests include SHA-256 digests. Any cross-package leak records `test_leak`, invalidates the run, and creates a LensFailureReport.

