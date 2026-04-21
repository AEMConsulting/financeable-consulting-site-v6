# Cuno Homepage

This repository contains a GitHub Pages-ready React/Vite build for the Cuno homepage.

The canonical homepage copy source now lives in `workspace/05_content/drafts/homepage-live-copy.md`.

Current canonical homepage:

- root route: `/`
- source: `src/AppV5.tsx`
- boot entry: `src/main.tsx`
- theme styles: `src/v5.css`

Published V1 alias:

- source: `src/AppV5.tsx`
- entry: `v1/index.html` via `src/v1-main.tsx`
- route: `/v1/`

V1C published alias:

- source: `src/AppV5.tsx`
- entry: `v1c/index.html` via `src/v1c-main.tsx`
- route: `/v1c/`

Published V2 live text variant:

- source: `src/AppV2Live.tsx`
- entry: `v2/index.html` via `src/v2-main.tsx`
- route: `/v2/`

Third design version (Apple-style refresh):

- source: `src/AppV3.tsx`
- styles: `src/v3.css`
- entry: `v3/index.html` via `src/v3-main.tsx`
- route: `/v3/`

Fifth design version (navy and aqua consulting theme):

- source: `src/AppV5.tsx`
- styles: `src/v5.css`
- entry: `v5/index.html` via `src/v5-main.tsx`
- route: `/v5/`

Sixth design version (editorial brass theme):

- source: `src/AppV6.tsx`
- styles: `src/v6.css`
- entry: `v6/index.html` via `src/v6-main.tsx`
- route: `/v6/`

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS v3
- GSAP + ScrollTrigger
- Framer Motion
- Swiper
- Lenis
- Playwright

## Local Development

```bash
npm install
npm run dev
```

If your Mac shell does not expose `node` or `npm`, use the repo-local fallback:

```bash
./scripts/run-with-local-node.sh npm run dev
```

## Validation

```bash
npm run build
npm run lint
npm run test:e2e
```

Repo-local Node fallback:

```bash
./scripts/run-with-local-node.sh npm run build
./scripts/run-with-local-node.sh npm run lint
./scripts/run-with-local-node.sh npm run test:e2e
```

## Deployment

The repository is prepared for GitHub Pages static hosting. In the current environment, Pages deployment is published manually from the built `gh-pages` branch because the active GitHub token does not include workflow write scope.

Handoff rule for this project:

- after a GitHub push, always include the GitHub Pages live URL in the final handoff
- if only the source branch was pushed and `gh-pages` was not republished yet, say that clearly and include the current live URL anyway
