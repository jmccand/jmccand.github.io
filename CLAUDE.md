# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with hot-reload
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint with auto-fix
npm run deploy    # build + push to GitHub Pages (joelmccandless.com)
```

There are no tests in this project.

## Architecture

This is a Vue 3 + Vite personal portfolio site. All page content is data-driven: views read from JSON files in [src/assets/data/](src/assets/data/) and render it using reusable components.

**Data flow:** JSON → View → Component

- [src/assets/data/](src/assets/data/) — one JSON file per page (`homepage.json`, `experiences.json`, `projects.json`, `groups.json`, `quotes.json`)
- [src/views/](src/views/) — one view per route; each imports its corresponding JSON and resolves images via `imageRegistry`
- [src/components/](src/components/) — shared presentational components (`Project.vue`, `Group.vue`, `QuotesGraph.vue`)

**Image handling:** Vite requires static image imports at build time, so images cannot be referenced dynamically from JSON paths. [src/utils/imageRegistry.js](src/utils/imageRegistry.js) solves this by statically importing every image and exposing a `getImage(path)` lookup. When adding a new image, you must import it in `imageRegistry.js` and add it to the `imageRegistry` map — otherwise `getImage` will return an empty string and log an error.

**Routing:** [src/router/index.js](src/router/index.js) defines five routes (`/`, `/experience`, `/projects`, `/groups`, `/blog`). `scrollBehavior` is configured to always scroll to top on navigation. Each route has a `meta.title` used by a `router.afterEach` hook to update `document.title`.

**Layout:** [src/App.vue](src/App.vue) provides the global shell: sticky header with desktop nav + mobile hamburger dropdown, a `<RouterView>` wrapped in a max-width content container, and a footer with social links. The resume PDF is served from [public/Joel_McCandless.pdf](public/Joel_McCandless.pdf).

**Deployment:** `npm run deploy` builds, copies `dist/index.html` to `dist/404.html` (for GitHub Pages SPA routing), writes a `CNAME` file, then publishes via `gh-pages`.

## Commits

Always commit changes after completing work. Include Joel as co-author in every commit message:

```
Co-Authored-By: Joel McCandless <mail@joelmccandless.com>
```
