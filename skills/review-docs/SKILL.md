---
name: review-docs
description: Review technical documentation, onboarding, runbooks, specifications and documentation cleanups for factual accuracy, discoverability and completeness. Use when a reader must get from an entry point to a usable result or when documents were moved or removed.
---

# Review documentation

Read the [review method](references/review-method.md). Choose the reader, their starting state and one result they need. Start from the link or document that reader actually receives.

1. Walk the path from the reader's starting state to the promised result. For each required input, locate where the reader obtains the correct value for this subject. A list of accepted values can still leave that choice unresolved. Check prerequisites, commands, recovery and the observable sign of completion. Follow links and try examples on an authorized disposable target. Distinguish an intermediate output from the result the document promises.
2. Check claims against the appropriate authority. For descriptions of shipped behavior, inspect the relevant version, implementation, help or observed output. For a specification, identify the agreed requirement and its status. If the implementation violates an approved contract, record the implementation discrepancy and preserve the contract.
3. For a cleanup, compare the old and replacement passages for each removed or merged document in scope. For a claimed loss, quote or locate the specific fact or action that disappeared and the strongest surviving equivalent you could find. State exactly what the reader can still infer and what remains unrecoverable. Rewording can preserve a constraint while omitting the procedure for applying it. Record justified retirements such as a discontinued feature. If an input is unavailable, report the uninspected scope.
4. For a finding, identify the step the reader could not complete or the false conclusion they would draw. Rewalk that path after the proposed correction. If a cleanup retired obsolete guidance, check that a supported reader task still works without it.

A Markdown specification can also carry a design decision or a rule directed at an agent. Record document accuracy and usability here. Route the suitability of the design to `review-design`, and the action an agent would take under a directive to `review-agent-instructions` when that question is in scope. Cite shared evidence once.
