# Routing, compatibility, quarantine and deprecation

Route only an active definition whose exact specialization equals the worker primary specialization and whose generic/project compatibility admits the task. Mismatches return `SPECIALIZATION_MISMATCH` or `FOLLOW_UP_SPECIALIST_REQUIRED` without an event. Quarantine immediately denies new routing while retaining evidence. Deprecated versions deny new routing; migrate explicitly to a compatible version. Neither state is self-clearing, and workers cannot change either state.
