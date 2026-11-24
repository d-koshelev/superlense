# HQ runtime package structure

- HQ_RUNTIME_MANIFEST.json — manifest core plus state/manifest hashes; never ZIP self-hash
- canonical/HQ_CANONICAL_STATE.json — constrained canonical state core
- registries/HQ_PROJECT_REGISTRY.json
- registries/HQ_AUTHORITY_LEDGER.json
- registries/HQ_COORDINATION_QUEUE.json
- registries/HQ_DECISION_LEDGER.json
- registries/HQ_BLOCKER_REGISTRY.json
- registries/HQ_ARTIFACT_MANIFEST.json
- registries/HQ_THREAD_LEDGER.json
- installers/HQ_START_PROMPT.md
- reports/HQ_EXTRACTION_REPORT.md
- reports/HQ_RESTORE_VERIFICATION_REPORT.md

ZIP_SHA256_RECEIPT.json is external to the ZIP because an archive cannot contain a stable hash of its own final bytes.
