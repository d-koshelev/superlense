---
name: create-skill
description: Create or revise a reusable agent skill for a specified task. Use when the requested deliverable is a skill an agent can select and follow.
---

# Create a skill

1. Start from the requested capability. Identify who will use the skill, a request it should handle, the available inputs and the observable result. For a revision, read the current entry and check which behavior its users rely on. Use an existing skill when it already fits and the assignment allows reuse. A new requirement can supply the starting case.
2. Establish the decisions the agent must make. Use the supplied requirements and applicable sources to identify prerequisites, permissions, exceptions and what counts as success. Keep one-time instructions scoped to their original task. Resolve any missing fact that would change the procedure or state the open question.
3. Choose assets the intended host can deliver. NoSkill's `guide-draft` reads UTF-8 instructions and references. A single `supporting` asset makes the whole skill unavailable, even if a step calls it optional. If the task requires an executable helper, use a host the assignment permits that can deliver it as a helper. Confirm how the agent obtains it there.
4. Write the entry in the target's skill format. For a `SKILL.md` pack, use a `name` matching the skill ID and a `description` that tells the agent when to select it. Put the steps in execution order. Say what to do if a relevant input is missing, where the result belongs and how to recognize completion. Include only assets a step uses.
5. Walk through an ordinary request and a nearby exception. Correct any wrong action. For a NoSkill catalog change, update the recipe and catalog, then run `guide-draft` for a task in scope and read the new ID as the returned `use` instruction says. Check that `skills` contains the intended entry and every required reference. An ID in `unavailable` means delivery failed. Deliver the candidate in the requested place. If verification was requested, hand off that exact candidate and its intended behavior. Keep trial answer keys outside the skill.
