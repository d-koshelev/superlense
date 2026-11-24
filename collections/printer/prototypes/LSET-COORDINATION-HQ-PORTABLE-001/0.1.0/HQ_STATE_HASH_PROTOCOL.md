# HQ state hash protocol

The prototype uses a documented deterministic JSON equivalent constrained to JSON values, finite safe integers, UTF-8, no duplicate keys, arrays in semantic order, and object keys sorted lexicographically before JSON serialization.

1. runtime_build_id identifies one build attempt; it is not a content hash.
2. snapshot_version is the monotonic logical state version.
3. canonical_state_hash = SHA-256 of canonical UTF-8 HQ_CANONICAL_STATE.json bytes.
4. manifest_hash = SHA-256 of canonical manifest core with manifest_hash and zip_sha256 absent.
5. zip_sha256 = SHA-256 of final ZIP bytes and is stored in an external receipt.

Reparse and canonicalize independently twice. A mismatch is a hard failure. No field aliases another, and no ZIP contains its own final hash.
