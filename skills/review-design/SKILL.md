---
name: review-design
description: Review an engineering proposal or implemented architecture against its requirements. Use for responsibility boundaries, authoritative state, failure recovery, competing designs and suspected overengineering, including projects before implementation.
---

# Review a design

Read the [review method](references/review-method.md). State the decision under review, the constraints it must satisfy and the guarantees the proposal claims. Identify assumptions about scale, operators and failure that affect the choice.

1. Walk one representative operation across its boundaries. Follow who owns state, who can change it and how other participants learn the outcome. Check the promise at interruption, retry or handoff. A physical process or manual workflow can have the same ownership question as a software design.
2. Compare a simpler feasible alternative under the same workload and constraints. When the current design meets its requirements but adds demonstrated cost, report a **simplification opportunity**. Show where the cost occurs, the evidence for it, and how the alternative preserves the required guarantees. Explain which mechanism you would keep when removing it would lose a guarantee.
3. Report a **correctness finding** when a mechanism cannot satisfy an applicable requirement. Distinguish a proposed design from shipped behavior. If the cost, benefit or guarantee is uncertain, name the observation or bounded experiment that would settle the question.

For software design, use [architecture](references/architecture.md) for ownership and isolation, [complexity and abstraction](references/complexity-and-abstraction.md) for disputed complexity and [versioned metrics](references/versioned-metrics.md) for tool scores. If the agreed design suffices and one implementation path violates it, give that path to `review-code` when included in the assignment.
