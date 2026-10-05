import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY || '').split('/');
const pagesBase = repositoryName === `${repositoryOwner}.github.io`
  ? '/'
  : repositoryName
    ? `/${repositoryName}/`
    : '/';
const requestedBase = process.env.VITE_BASE_PATH !== undefined
  ? process.env.VITE_BASE_PATH
  : process.env.GITHUB_ACTIONS === 'true'
    ? pagesBase
    : '/';
const base = requestedBase ? `/${requestedBase.replace(/^\/+|\/+$/g, '')}/` : '/';

export default defineConfig({
  plugins: [react()],
  // Use the Pages-provided base path in Actions; otherwise run from the local root.
  base,
});
