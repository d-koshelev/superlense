# Lense Foundry Root Doctrine

- Doctrine ID: `LNS-FOUNDRY-DOCTRINE`
- Version: `1.0.0`
- Status: active
- Final authority: Operator
- Execution model: one operator-facing Copilot; at most one active canonical task

## Strict Lens definition

A **Lens Module** is a versioned, removable, testable transformation that changes how an agent selects context, frames a task, applies doctrine and state, uses tools, verifies a result, or preserves continuity, and has a measurable effect relative to a baseline.

No doctrine, prompt, persona, skill, tool, queue, memory store, report form, department, or agent is automatically a Lens Module. Every candidate must pass an adjacent-concept check and all eight Lens Qualification Test questions before classification. Without external test evidence it cannot mature beyond `prototype`.

## Core invariants

1. The Operator is final authority.
2. Every operator message first becomes Planning intake.
3. The imported 67-task graph retains exact task IDs and dependencies.
4. One canonical queue exists; at most one task is active.
5. Blockers are preserved; independent ready work continues.
6. Queue events are append-only and reports follow each completed phase.
7. External agents are ephemeral isolated test subjects, not authorities or permanent workers.
8. Test subjects never receive hidden tests, expected answers, scoring weights, other outputs, or revision recommendations.
9. Self-test is labeled `self_test_limited` and never represented as independent validation.
10. Unavailable metrics are `unavailable`, never numeric zero.
11. Every effect claim names baseline, task family, evidence level, provider/context, costs, limitations, and aberrations.
12. Passing static validation proves contracts only, not behavioral effectiveness.
13. Every failure creates a LensFailureReport and remains regression evidence.
14. A Lens release obeys maturity/evidence gates; no high-risk automatic release.
15. Component implementation is forbidden until its Component Lens Gate passes the risk-to-maturity policy.
16. Overlay/UI is read-only and never source of truth.
17. Existing workspaces, historical data, credentials, and protected boundaries remain untouched.
18. No push, external publication, dangerous bypass, fake workers, fake metrics, or claimed background work.

## Lifecycle

`Lens Order -> Effect Target Compilation -> Catalog Search -> Missing Module Detection -> Lens Set Composition -> Context/Authority/Compatibility Check -> Prototype Printing -> Static Validation -> External Testing -> Effect Measurement -> Failure Analysis -> Revision -> Regression -> Release -> Catalog Update`

## Evidence levels and maturity ceiling

- L0: claimed effect.
- L1: complete static contracts.
- L2: one external scenario.
- L3: repeated external scenarios.
- L4: cross-task external evidence.
- L5: cross-provider evidence.

`prototype` requires L1. `candidate` requires external L2. `validated` requires L3 plus regression. `catalog_released` requires L4, clean export, and compatibility. Critical use additionally requires L5 and human review.

## Component risk policy

- LOW: minimum `candidate`.
- MEDIUM: minimum `validated`.
- HIGH: minimum `catalog_released`.
- CRITICAL: `catalog_released` plus cross-provider test and human review.

## Session continuity

Every fresh/compacted session follows `AGENTS.md`. Remembered state never outranks the loaded StateEpoch/SyncPoint. A pointer or digest conflict halts productive work.

