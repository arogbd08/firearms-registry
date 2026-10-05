# Roles and Workflows (Draft)

All examples and test records must be fictional.

## Roles under consideration

| Action | Admin | Officer | Read-only |
|---|---:|---:|---:|
| View records and history | Yes | Yes | Yes |
| Create or edit owner/firearm records | To define | To define | No |
| Record a transfer or status change | To define | To define | No |
| Manage demo users and roles | To define | No | No |

These are product requirements to settle, not implemented security guarantees. Browser-only role checks are for demonstration and can be bypassed.

## Candidate workflows

1. Create or find a fictional owner and firearm.
2. Link them with an effective date and validate required fields.
3. Record a transfer while preserving the previous ownership relationship.
4. Record lost/stolen or deactivated status with a timestamp and appropriate fictional reason.
5. Review the current record alongside its chronological history.

## Transition questions

- Which starting statuses are allowed?
- Which transitions are permitted, and can a status be reversed?
- Does a transfer change status, ownership, or both?
- What information is required for each transition?
- Which role can perform or correct each action?
- Can a correction be entered, and how should it reference the original event?

## Audit event minimums to consider

Capture the actor, action, affected record, timestamp, before/after values for changed fields, and a reason where needed. Define whether failed validation attempts are in scope. Avoid storing sensitive narrative or evidence in the demo.
