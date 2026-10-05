# Project Overview

## What it is

A personal project exploring how a registry-style application can record fictional firearms and owners, connect records, and retain a history of status and ownership changes. It has two intended interfaces: a browser-based HTML/JavaScript prototype and a PowerBuilder desktop application.

## Goals

- Demonstrate the core record and transfer workflows.
- Model admin, officer, and read-only roles.
- Make validation and change history visible and understandable.
- Present the work clearly as a fictional-data portfolio/demo project.
- Keep the web and desktop versions aligned around a shared data model.

## Out of scope

- Use with real firearm, owner, or law-enforcement records.
- Production identity management, security certification, legal compliance, or deployment as an operational registry.
- A public downloadable desktop installer before packaging, testing, and setup documentation are complete.

## Milestones

1. **Specify:** settle record fields, relationships, role permissions, validation, audit details, and allowed status transitions.
2. **Model:** document entities and transition rules; select the database and PowerBuilder version when implementation begins.
3. **Prototype:** refine the web flow using fictional data and make the demo limitations clear.
4. **Desktop model:** implement the agreed workflow in PowerBuilder and keep behavior consistent with the prototype.
5. **Showcase:** add screenshots, setup notes, and a download only when there is a tested, packaged build.

## Current state

Planning and repository scaffolding. A live web prototype is identified in the root README, but this repository currently has no application source or build instructions.

## Immediate next step

Complete [the workflow specification](docs/workflows.md) and [the data model](docs/data-model.md), then record choices and unresolved questions in [decisions.md](docs/decisions.md).
