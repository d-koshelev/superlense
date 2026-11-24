# Test quality

Identify the behavior each test claims to protect and the observation that would
distinguish correct from broken behavior. Follow the production path actually
executed. A fake returning its configured result proves only that interaction
unless the test also exercises the relevant real behavior.

For a changed behavior, look for a normal example and a meaningful failure
example where applicable. Add further cases for distinct guarantees, lifecycle
states, or platform boundaries; do not demand a fixed number of tests. Existing
tests may already supply the necessary evidence.

Prefer assertions on the contract users or callers rely on. Exact source text,
private names, or call order can be brittle when they are incidental. They can
be legitimate when those bytes or that ordering are the actual contract, such as
a serialized format or ordering of externally visible effects. State which
case applies instead of banning a testing technique categorically.

For asynchronous behavior, observe the completion event or resulting state with
a bounded failure path. Elapsed time or a fixed sleep alone does not establish
completion. Confirm that a failure assertion cannot pass simply because the
operation never started.

Assess test complexity by its cost and coverage. A matrix needs distinct
guarantees; duplicate setup or repeated assertions may deserve simplification.
Do not delete coverage solely because a test file is large, and do not introduce
a generic test framework for convenience without a demonstrated need.

Teaching examples:

- **Weak evidence:** a mocked writer reports success and the test asserts the
  success value; no real persistence or recovery path is exercised.
- **Meaningful failure:** a rejected update leaves the previous visible state
  intact, and the test checks both the rejection and unchanged state.
- **Legitimate exact comparison:** the public export promises exact bytes, so
  comparing its output is a contract check rather than incidental source matching.

Report the exact checks run and their outcomes. Mark unavailable platform,
integration, or failure-path checks as not run. A green structural test suite
does not by itself establish task usefulness or production reliability.
