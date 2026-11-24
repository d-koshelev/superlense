# Versioned metrics

Before interpreting a complexity warning, identify the tool, installed version,
enabled rule, effective configuration and code it analyzed. Record whether you
ran the tool or inferred the result from source.

Check the rule definition for that version. Two tools can use different
formulas for similarly named metrics. A rule observed at one release tag or
source commit needs fresh evidence before you apply it to another version.
If you cannot establish the version or rule semantics, record the uncertainty
and continue with the parts of the review you can verify.

Check which threshold the project enforces. To justify a change, show the
consequence in the code. For example, if a large function mixes parsing and
state changes, trace an error through both operations and check whether a
proposed split preserves their order.
