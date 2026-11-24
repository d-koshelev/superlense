# HQ restore test plan

Static: schemas, required files, no credential patterns, no absolute paths in CLEAN_PORTABLE.
Deterministic: independent double canonicalization, manifest-domain hash, distinct identifier fields.
Synthetic truth: five projects, stale record, superseded directive, unaccepted proposal, one missing artifact, one private path, one project-local queue.
Tamper: corrupt canonical state and manifest independently.
Fresh thread: external subject gets restore package but not evaluator truth.
Promotion: no module above L1 until independent evidence; current HQ gate remains provisional.
