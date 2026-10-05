# Project Context

This file records durable constraints for contributors and future implementation work.

## Purpose

Build a personal learning and portfolio project that models a fictional registry workflow in two forms: a React/Vite web prototype and a PowerBuilder Windows desktop application.

## Scope

The model covers firearms, owners, their registration/ownership relationship, lifecycle status changes, role concepts, validation, and an audit history. Intended roles are **admin**, **officer**, and **read-only**.

Statuses named so far: **registered**, **transferred**, **lost/stolen**, and **deactivated**. Exact transition rules have not yet been specified; see [workflows.md](docs/workflows.md).

## Safety and privacy constraints

- Use fictional, generated sample data only. Never put real owner or firearm data in the repository, screenshots, demo, issues, or logs.
- This project is a demonstration, not a real registry or an operational policing system.
- A profile switch, simulated admin preview, or permission check in browser JavaScript is not authentication or access control. Any real deployment would require a separately designed, secured server and authorization layer; that is outside the current demo scope.
- Do not claim the demo provides production-grade security, legal compliance, or operational readiness.

## Product direction

- The web prototype should be easy to view and try without installation.
- The site can show screenshots and project information alongside the demo.
- Offer a desktop download only after a build is packaged, tested, and accompanied by supported-version and setup instructions. No download is currently promised.
- Keep the workflow and validation consistent across the web and desktop versions, documenting intentional differences.

## Current assumptions and open decisions

- The initial implementation is single-user/demo oriented; authentication and multi-user deployment are not defined.
- Database engine, PowerBuilder version, hosting/backend, identity model, and retention rules are undecided.
- Define whether a transfer is a status, an ownership event, or both before implementation. Preserve prior ownership and status history in the model.
- Define which fields are required and what reason/evidence is appropriate for each transition. Keep the demo free of sensitive evidence or real case details.

## Working conventions

- Update `OVERVIEW.md` when the project stage or next milestone changes.
- Record significant model or scope choices in `docs/decisions.md`.
- Keep setup instructions next to each component in its README.
