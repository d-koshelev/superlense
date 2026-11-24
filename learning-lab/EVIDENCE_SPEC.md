# Evidence specification

Each run package records manifest, public task brief, requirements, lens hashes, repository commit, commands, full screenshots, critical-text crops, DOM, accessibility snapshot, computed geometry, overflow/clipping, focus order, keyboard traversal, interactions, state screenshots, console/network errors, performance summary, responsive matrix, traceability, builder receipt, auditor receipts, defects, and evaluation.

Evidence levels:

- screenshot: visible layout only;
- source: implementation structure only;
- DOM: structure at one moment only;
- browser trace: exercised interactions only;
- receipt: a claim until linked evidence verifies it;
- operator visual acceptance: a separate level controlled only by Dmitry.

Names are deterministic and SHA-256 hashes cover the manifest inventory. Secrets and unrelated environment dumps are forbidden.
