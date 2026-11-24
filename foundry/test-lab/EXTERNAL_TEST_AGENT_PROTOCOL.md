# External test-agent protocol

## Adapter precedence

1. `codex exec` after auth/provider conformance probe;
2. another explicitly configured provider adapter;
3. generated manual fresh-thread subject package;
4. current-Copilot self-test, labeled `self_test_limited` and excluded from independent evidence.

## Required isolation

An external subject is ephemeral, gets one variant's `SUBJECT_PACKAGE`, receives no canonical queue authority, cannot write the source repository, and returns a `TestReturnPackage`. The coordinator controls start, timeout, cancellation, transcript capture, and ingestion. The subject cannot promote a Lens.

## Return contract

Return includes run/variant/provider IDs, final response, tool/mutation summary, timing and token telemetry when actually reported, explicit errors, and transcript digest. Missing telemetry is `unavailable`.

## Capability blockers

Auth failure, missing executable, provider outage, or safe-sandbox failure sets run status `waiting_external_agent` and creates a blocker report. Independent Foundry construction continues; validation claims do not.

