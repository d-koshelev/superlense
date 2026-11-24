---
name: verify-skill
description: Check whether an existing agent skill produces the intended behavior. Use for a versioned or unversioned candidate when the operator wants evidence, findings and the scope of the verdict.
---

# Verify a skill

1. Identify the exact candidate and what the operator wants checked. Use a revision or digest when available, or identify the supplied snapshot and relevant files. Derive the expected result from the assignment or governing source. If an important expectation is unclear, check the independent parts and identify what remains open.
2. Start where the consuming agent starts. Inspect the selection description, entry, referenced material and required inputs. For a packaged skill, check what the host can actually read. A matching package digest establishes which bytes were delivered. Behavioral verification needs evidence of what those instructions lead the agent to do.
3. Match the check to the claim. For a behavior check, use an ordinary request and a nearby case where the correct action changes. Define the observable result before the trial. Reuse applicable evidence for the same candidate. Where evidence is missing, exercise the skill on an authorized isolated target. When another agent runs it, give it the normal request, inputs and skill access. Keep the expected answer with the evaluator. Check the resulting output or changed state against the governing source. If only inspection or a walkthrough is possible, say which behavior remains untested.
4. Report the verdict for the checked scope. Say what passed, what needs correction or what remains unverified, and why. For a defect, give the triggering case, expected and actual or predicted behavior, and a source locator. Keep the candidate intact for a verification-only assignment. If a fix is requested, identify the revised candidate before replaying affected cases. Operational acceptance and publication require the authority assigned to those decisions.
