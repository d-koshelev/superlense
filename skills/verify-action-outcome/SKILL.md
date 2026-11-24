---
name: verify-action-outcome
description: Confirm whether a requested change took effect on the intended resource. Use when an operation returned a receipt, is still pending, or the user asks what actually changed.
---

# Verify an action's outcome

Identify the resource, the requested end state and the observation that would establish it. Use the target's own state or its ordinary consumer view. For a queued operation, distinguish acceptance of the request from completion of the work.

1. Use reliable evidence already available for this operation and resource. When the only evidence is an acknowledgement, read the result independently, using the same resource ID, version or recipient. A command that merely displays the submitted arguments repeats the claim.
2. Compare the observation with the requested result. Record what matched, what still differs, or which read was unavailable. If the state is pending, use the service's completion signal or its documented waiting period when the assignment allows it.
3. Before repeating a write, establish whether the first attempt could still take effect and whether repetition can duplicate its effect. Retry only a safe, authorized operation when the evidence gives a reason. Honour an explicit retry limit or a read-only assignment. After an allowed repair, check the affected outcome once.

Report the target, the state actually observed and any remaining step. When the available access ends at a receipt, report exactly what that receipt confirms.
