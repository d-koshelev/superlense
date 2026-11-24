---
name: review-code
description: Review an implementation or change for observable correctness, state transitions, error handling, compatibility and regressions. Use when a caller may see behavior that violates the agreed contract.
---

# Review implementation behavior

Read the [review method](references/review-method.md). At the assigned revision, identify the entry point, supported inputs and outcome its caller can observe. Compare that outcome with the current contract. For a change, also check behavior existing callers relied on before the change.

1. Trace real data from entry to result. Follow validation, ownership of mutable state, emitted effects and error propagation. Check a meaningful boundary input and any old data or caller that the change still claims to support.
2. Where relevant, trace partial completion, retry or concurrent use. Locate when an effect becomes visible and what a subsequent call observes. Cite the code path and the smallest sequence that exposes a discrepancy.
3. Reproduce the failure on a disposable input or distinguish source reasoning from an executed result. Check a nearby supported case and predict the state after the proposed repair.

Keep this review tied to implementation behavior. Put questions about the underlying choice of design in `review-design`, and questions about whether a passing test proves its claim in `review-tests` if they affect the assignment. A green suite is one piece of evidence.
