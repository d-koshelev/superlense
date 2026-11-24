# Lens Test Lab Department

- Owner: Test Lab function under the Universal Lense Foundry Coordinator
- Authority: owns test/oracle evidence and transcript integrity; cannot promote releases alone
- Queue lane: `TEST_LAB`
- Readiness: static harness operational; external behavior depends on provider/manual return

## State machine

`planned -> packaging -> waiting_external_agent -> running -> returned -> ingesting -> scored -> failure_analysis -> regression -> release_review`

Terminal exceptional states are `blocked`, `invalid_return`, `test_leak`, `cancelled`, and `superseded`. Self-test uses a separate `self_test_limited` evidence class.

## Boundaries and handoffs

The Lab creates separated subject/evaluator packages, provider adapters, return ingestion, scoring, aberration reports, revision recommendations, regression diffs, and release evidence bundles. Test subjects never see evaluator files. Planning/Foundry supplies the immutable package digest; Release Review enforces maturity; Reports surfaces operator results.

