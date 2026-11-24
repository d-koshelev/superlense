# Lens learning protocol

Only a reproducible defect with a real user consequence enters triage. The classifier asks whether implementation, task specification, routing, existing rule wording, conflicts, overreach, operator preference, or tooling explains it.

Only verified `MISSING_LENS`, `DEFECTIVE_LENS`, `LENS_CONFLICT`, or `LENS_OVERREACH` can produce a Lens Development Order. The order must state one responsibility, scope, non-scope, protected valid behavior, examples, fixtures, ablation, holdout, budget, and risk.

Candidate maturity is exact:

`ORDERED → DRAFT → STATIC_PASS → BEHAVIORAL_PASS → ABLATION_PASS → SECOND_FIXTURE_PASS → HOLDOUT_PASS → CANDIDATE → OPERATOR_ACCEPTED → CANONICAL`

`REJECTED` and `SUPERSEDED` are terminal alternatives. Static self-tests cannot advance past `STATIC_PASS`; the author cannot alone score final holdout; promotion requires explicit operator evidence.
