# React web model

Modular React and Vite prototype for a fictional registry workflow. It includes a project landing page, interactive web model, and a PowerBuilder project status page.

## Run locally

Use Node.js 20.19+ or 22.12+ ([Vite's current requirement](https://vite.dev/guide/)). In Windows PowerShell, run:

```sh
npm.cmd install
npm.cmd run dev
```

For a production bundle, run `npm.cmd run build`; Vite writes the static site to `dist/`. `npm.cmd run preview` serves that built site locally. The configured Vite base path is `/firearms/` for the repository's GitHub Pages project URL. In other terminals, use `npm` in place of `npm.cmd`.

## Project structure

```text
src/
├── components/       # Header, navigation, forms, and record detail
├── data/             # Fictional demo users and seed records
├── domain/           # RegistryRecord behavior and AccessPolicy
├── pages/            # Landing, registry workspace, PowerBuilder showcase
├── services/         # Browser-local registry repository
├── App.jsx            # App state and use-case coordination
├── main.jsx           # React entry point
└── styles.css         # Responsive visual system
```

The domain model encapsulates status and transfer behavior. The access policy centralizes illustrative permissions. UI components call the app-level handlers rather than owning record rules.

## Demo behavior and limits

- Search fictional firearm and owner profiles, open full record and owner details, link owners, change statuses, transfer ownership, and browse an audit-style event history.
- Use the dashboard attention queue to open records marked lost / stolen, and inspect an owner's current linked records and recent events.
- `localStorage` keeps edits in this browser. The reset control restores the fictional seed records.
- The header's **Simulate profile** selector switches among fictional officer, admin, and read-only profiles. The active preview is shown in a banner and logged to the local activity list. It does not represent authenticated user impersonation. All profiles are selectable locally.
- This static client does not enforce security: browser state and permissions can be edited or bypassed. It has no real authentication, backend, authoritative audit trail, or operational use.
- Use fictional data only. Do not enter real owners, firearm identifiers, incident details, or other sensitive information.

## PowerBuilder showcase

The header switches between the web model and the PowerBuilder status page. The desktop project is labeled **In progress**; screenshot space is reserved, and download availability is deferred until a build is packaged and documented.
