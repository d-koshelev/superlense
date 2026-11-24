# Specialist Registry V1

The catalog is canonical, reusable and versioned. Worker instances, queues, assignments and leases are instance state reconstructed from the append-only event log. Definitions use immutable semantic versions; changes require a new version. Quarantined or deprecated definitions cannot receive new routes. Deprecation preserves historical replay.

Only a Manager may plan, route and assign. A Manager cannot execute a domain task. Workers have exactly one primary specialization, have no orchestration, release, verification, trusted-write or promotion authority, and must reject work outside that specialization without mutation. Worker evidence is self-report labeled `REPORTED_BY_WORKER`.

The runtime is a local reference contract, not a second SDCP. It has no daemon, listener, broker, external database, network use, automatic promotion or production activation. Mutating work requires an exact isolated worktree and active non-overlapping lease; read-only work owns no write paths. Event replay is fail-closed and projections are rebuildable.
