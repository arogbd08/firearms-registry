# Data Model (Draft)

This is a planning sketch, not a database schema. Use fictional data only.

## Candidate records

| Record | Purpose | Initial considerations |
|---|---|---|
| Firearm | Identifies a fictional firearm record | Internal ID; make/model and other demonstration fields; current status reference |
| Owner | Identifies a fictional person or organization | Internal ID; minimum necessary fictional attributes |
| Registration / Ownership | Links a firearm to an owner over a period | Start/end dates; preserve prior links when ownership changes |
| StatusHistory | Records a status transition | Previous and new status, timestamp, acting user, reason, related event |
| User | Represents a demo user and role | Admin, officer, read-only; demo identities only |
| AuditEvent | Captures a change to a record | Actor, action, record reference, timestamp, changed fields, reason where applicable |

## Relationship sketch

- A firearm can have multiple ownership/registration records over time, with at most one current relationship if that is the chosen rule.
- An owner can be linked to multiple firearms.
- Status and audit history are append-only in the model; corrections should be represented as new events rather than silently rewriting history.
- Decide whether `StatusHistory` is a specialized audit event or a separate domain record before schema design.

## Decisions still needed

- Required fields and formats for each record.
- Whether owner identity is a person, organization, or both.
- How to represent a transfer and its effective date.
- Whether status belongs to the firearm, its registration, or both.
- Identifier strategy and uniqueness rules.
- Database engine, deletion/retention behavior, and timestamp conventions.
