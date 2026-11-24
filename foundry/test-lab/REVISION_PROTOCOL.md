# Revision and regression protocol

`failed run -> evidence-preserving failure record -> root-cause hypothesis -> smallest affected module -> patch/minor/major decision -> new immutable package version -> static validation -> original failure test -> RAW/MINIMAL/LENS regression -> pairwise/composition regression -> release review`

Never edit a tested package in place. A revision retains old digest, failure ID, changed contract, expected benefit, regression risks, and rollback version. Recommendations remain evaluator-side until the subject run is terminal.

