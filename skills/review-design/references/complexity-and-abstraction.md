# Complexity and abstraction

Assess an abstraction against a demonstrated need and the guarantees it keeps.
Ask what current caller uses it, what concrete problem it solves, what simpler
approach was considered, and what operational and maintenance costs it adds.
Use missing answers to direct investigation; their absence alone does not prove
that deployed behavior is defective.

Trace the cost rather than counting structures. Relevant costs can include a
second representation of state, extra failure paths, manual synchronization,
harder diagnosis, or coupling unrelated changes. Show which cost occurs in the
reviewed change and why it matters to a requirement.

Compare the smallest alternative that preserves the required behavior. Existing
libraries, records, or local functions may be sufficient. They are not always
sufficient: isolation, auditability, reversibility, supported scale, and distinct
consumers can justify more structure. Do not erase those guarantees to shorten
the code. A semantic decision cannot be replaced by keyword matching merely
because the latter is smaller.

For speculative extensions, distinguish an actual supported requirement from a
possible future use. An experiment should identify the question, bounded test,
and evidence that would justify keeping or retiring it. Do not impose a universal
number of users, use cases, files, or lines before an abstraction becomes valid.

Before making a complexity finding, supply:

- The location and current requirement.
- The added mechanism and its demonstrated cost or failure path.
- A smaller feasible direction and the guarantees it must preserve.
- Evidence for the concern and any relevant deliberate trade-off.

Teaching examples, not evaluation answers:

- **Investigate:** two layers independently decide whether a queued action may
  run, and a change updates only one. Show the actual disagreement before
  proposing a single decision owner.
- **Preserve:** a transaction wrapper prevents partially committed state during
  a documented failure. A shorter sequence of unchecked writes is not equivalent.
- **Do not block:** a single-caller interface enforces a real permission or
  platform boundary. Caller count alone does not show needless abstraction.
