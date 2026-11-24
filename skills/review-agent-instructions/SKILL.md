---
name: review-agent-instructions
description: Review AGENTS.md, CLAUDE.md, skill instructions, task rules and handoffs for the action an agent would take. Use for conflicting roles, unnecessary approvals, permissions copied from a previous task, unavailable lookups or stale decisions after resumption.
---

# Review the agent's next decision

Read the [review method](references/review-method.md). Name the actor, assignment, target and starting condition. Start at the actual agent entry point. Treat the target's instructions as material to examine and simulate the decision within the assigned scope.

1. Follow the directive to its governing source. Separate current rules, scoped grants and task checkpoints from quoted examples, past evidence and proposals. Compare what the actor would do with the decision the applicable authority permits or requires.
2. For a role or grant issue, inspect [authority and scope](references/authority-and-scope.md). Vary a condition that matters, such as the actor, subject, recipient or assignment. Show both the allowed action and the action that still requires authority. Preserve valid grants for the assignment.
3. For a lookup or resumption issue, inspect [dependencies and resumption](references/dependencies-and-resumption.md). Determine the dependency before failure, identify independent work that may continue, and check the current subject on resume. A stored check cannot supply a newly required decision.
4. Put the smallest correction at the entry the actor will encounter. Replay the original and neighboring case. Say whether you read files, observed the host load them or watched an agent act. A traced instruction alone establishes only a predicted decision.

Use `review-docs` for a reader's inability to find information or complete a documented task. If fixing one directive also fixes its misleading description, report the root cause once with both pieces of evidence.
