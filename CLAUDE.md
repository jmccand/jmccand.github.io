# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Joel McCandless built with Vue 3, Vite, and Vue Router. The site showcases professional experience, projects, groups/organizations, and blog content. It's deployed to GitHub Pages at joelmccandless.com.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint and fix code issues
npm run lint

# Deploy to GitHub Pages (builds, creates 404.html, sets CNAME, deploys)
npm run deploy
```

## Architecture

### Core Structure

- **Vue 3 with Composition API**: All components use `<script setup>` syntax
- **Vue Router**: Configured with `createWebHistory` for client-side routing
  - All routes are defined in `src/router/index.js` with eager imports (no lazy loading)
  - Scroll behavior always resets to top on navigation
- **Vite**: Module bundler with `@` alias configured for `./src` directory
- **Base URL**: Set to `/` in vite.config.js for root deployment

### Layout Pattern

- `App.vue` provides the main layout shell with sticky header, navigation, main content area, and footer
- `RouterView` renders the current route's component in the content area
- Header contains logo/name and navigation links to all main views
- Footer includes social links (email, LinkedIn, GitHub), resume PDF link, and phone number

### Data Architecture

Content is separated into JSON files in `src/assets/data/`:
- `homepage.json` - Home page content
- `projects.json` - Project listings
- `groups.json` - Group/organization information
- `research.json` - Research content
- `quotes.json` - Quote data for interactive graph

Views import these JSON files directly using `import dataName from '@/assets/data/file.json'` and bind them to refs.

### Views

All views are located in `src/views/`:
- `HomeView.vue` - Landing page
- `ExperienceView.vue` - Professional experience timeline
- `ProjectsView.vue` - Project showcase
- `GroupsView.vue` - Groups/organizations grid
- `BlogView.vue` - Blog content
- `ResearchView.vue` - Research content (not currently in router)

### Components

Reusable components in `src/components/`:
- `Group.vue`, `Project.vue`, `Research.vue` - Display individual items from JSON data
- `QuotesGraph.vue` - Interactive Cytoscape.js graph visualization with cola layout
- `HelloWorld.vue`, `TheWelcome.vue`, `WelcomeItem.vue` - Template components (may not be used)

### Cytoscape Integration

The `QuotesGraph.vue` component demonstrates the Cytoscape.js integration pattern:
- Uses `cytoscape-cola` extension for force-directed layout
- Register extensions with `cytoscape.use(cola)` before creating instances
- Elements are defined as nodes and edges with data/position properties
- Styling uses selector-based configuration for nodes, edges, and states
- Mounted in a ref'd container element in the template

### Styling

- Global styles in `src/assets/main.css` and `src/assets/base.css`
- Component-specific styles use `<style scoped>`
- Custom CSS variable: `--logo-blue` for brand color
- Responsive design with flexbox and CSS Grid (e.g., `groups-grid` uses auto-fit columns)

## Deployment

The `npm run deploy` command:
1. Builds the production bundle
2. Creates `dist/404.html` as a copy of `dist/index.html` (for SPA routing on GitHub Pages)
3. Adds `CNAME` file with `joelmccandless.com` for custom domain
4. Deploys to `gh-pages` branch using the `gh-pages` package
5. Cleans up the dist directory

## Key Patterns

- **No lazy loading**: All view components are imported directly, not with dynamic imports
- **JSON-driven content**: Most page content comes from JSON files rather than hardcoded in components
- **Composition API**: Use `ref()` for reactive state, `onMounted()` for lifecycle hooks
- **Component props**: Child components receive data via props (e.g., `groupLine`, `projectLine`)
