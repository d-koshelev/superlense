# HQ privacy export profiles

## PRIVATE_FULL

May include operator-approved private coordination records and stable local references, but never credentials, auth stores, hidden reasoning, model state, or inaccessible content.

## CLEAN_PORTABLE

Includes coordination state needed for private transfer. Rewrites absolute paths as redacted://local-path/<stable-id>, omits private-only bodies, and carries missing/unavailable ledgers.

## PUBLIC_DEMO

Includes synthetic/public-safe structure only. Project names, private directives, local paths, and private artifact content are generalized or excluded.

Every export has its own manifest and redaction ledger.
