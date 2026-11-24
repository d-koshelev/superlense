---
name: review-tests
description: Review whether automated tests, an acceptance plan or a manual engineering trial would detect the failure they claim to prevent. Use for false passes, missing observations, representative conditions and reproducibility.
---

# Review tests and trials

Read the [review method](references/review-method.md). Pair each in-scope claim with the test or trial meant to support it. Specify the starting state, stimulus, observation and criterion for success.

1. Trace what the test actually exercises. Locate the real boundary, instrument, fixture or test double. Determine which independent observation establishes the outcome. A stub echoing its own input cannot prove the downstream effect.
2. Try a plausible fault against the existing check. If the check catches it, identify the observation that distinguishes the fault from a passing control. If the fault would pass, show what the check misses and, when authorized, demonstrate it on a disposable copy. Preserve exact comparisons when bytes, ordering or a threshold are part of the contract.
3. For a missed fault, specify the smallest check that catches it and a passing control. For a manual trial, include the version, setup, units or conditions needed to repeat it. Distinguish planned coverage from an executed result.

For software tests, see [test quality](references/test-quality.md) for boundary and failure-path examples. A product defect and a test that misses it may need separate corrections. Cite the same reproduction in both findings when appropriate.
