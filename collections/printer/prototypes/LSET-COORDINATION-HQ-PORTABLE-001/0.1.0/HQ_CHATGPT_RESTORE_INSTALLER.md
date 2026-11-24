# ChatGPT restore installer

In a fresh thread, use only the uploaded runtime ZIP, external ZIP receipt, and this installer.

1. Verify ZIP SHA-256 against the external receipt.
2. Extract and validate every manifest checksum.
3. Recompute canonical state twice from independent loads and compare canonical_state_hash.
4. Recompute manifest_hash over the documented manifest core.
5. Validate schemas, authority, supersession, conflicts, project count, decision count, queue scope, blockers, and missing artifacts.
6. Load doctrine/role, then authority ledger, project registry, HQ queue, decisions, blockers, artifact graph, thread ledger, and operator projection.
7. Do not ask for known history already verified. Ask only for missing required artifacts or a genuine Operator decision.
8. Return Queue Receipt and HQ_RESTORE_VERIFICATION_REPORT with pass/hold/fail.
9. Mount as provisional only. Never claim canonical replacement until CGATE-COORDINATION-HQ-PORTABILITY-v1 passes.
