# Firearms Registry (Personal Project)

A fictional registry workflow prototype built with React and Vite, alongside a planned PowerBuilder desktop model.

> **Demo only:** use fictional sample data. This project is not an operational registry and must not be used for real personal, ownership, firearm, or incident information.

## Run locally

Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`; Vite writes it to `dist/`. Run `npm run preview` to view the build locally.

## Publish with GitHub Pages

The workflow at `.github/workflows/pages.yml` builds the Vite app and deploys `dist/` whenever changes are pushed to `main`, or when run manually from GitHub Actions. Before the first deployment, open **Repository Settings → Pages** and select **GitHub Actions** as the build and deployment source.

The Vite base path is generated from the repository name in Actions, so the JavaScript and CSS assets use the Pages project path instead of returning 404s. This repository's default Pages URL is `https://arogbd08.github.io/firearms-registry/`.

## Project structure

```text
.
├── .github/workflows/pages.yml  # Build and deploy to GitHub Pages
├── src/                         # Modular React application
│   ├── components/
│   ├── data/
│   ├── domain/
│   ├── pages/
│   └── services/
├── index.html
├── vite.config.js
└── package.json
```

## Safety and scope

The web app is a static client-side demo with fictional records. Role preview and permissions are illustrative UI behavior; they are not secure authentication or authorization. Do not present the project as an operational policing system.
