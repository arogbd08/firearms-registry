# Firearms Registry (Personal Project)

A personal software project exploring a fictional firearms registry workflow in a browser prototype and a PowerBuilder desktop application.

> **Demo only:** use fictional data. This project is not an operational registry and must not be used to store real personal, ownership, or firearm information.

## Project components

- **Web prototype:** modular React/Vite app in [`web-prototype/`](web-prototype/README.md); hosted demo: [arogbd08.github.io/firearms](https://arogbd08.github.io/firearms)
- **PowerBuilder application:** planned Windows desktop model of the same workflow.
- **Documentation:** requirements, data model, decisions, and build notes in `docs/`.

## Repository layout

```text
.
├── CONTEXT.md                 # Durable project constraints and decisions
├── OVERVIEW.md                # Purpose, scope, milestones, and current state
├── README.md                  # Project entry point
├── docs/
│   ├── data-model.md          # Planned records and relationships
│   ├── decisions.md           # Decisions and open questions
│   └── workflows.md           # Roles and status transitions
├── powerbuilder/
│   ├── README.md              # PowerBuilder setup and implementation notes
│   ├── app/                   # PowerBuilder source (planned)
│   └── database/              # Schema and seed data (planned)
└── web-prototype/
    └── README.md              # Web prototype source and deployment notes
```

Folders marked planned are scaffolding; application source may live elsewhere until added to this repository.

## Getting started

To run the web model locally, follow [`web-prototype/README.md`](web-prototype/README.md). Start with [OVERVIEW.md](OVERVIEW.md), then review [CONTEXT.md](CONTEXT.md) and the documents under `docs/`.

## Current status

The web application model is built as a modular React/Vite prototype with fictional data. The PowerBuilder desktop implementation remains in planning.

## Safety and scope

Keep examples fictional and avoid real identifying or sensitive data. Role controls in a client-side prototype are illustrative, not a security boundary. Do not present this project as suitable for law-enforcement operations or production recordkeeping.
