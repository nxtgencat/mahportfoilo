# Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

```text
src/
  components/    // Navbar, Footer, ProjectCard
  pages/         // Home, About, Projects, ProjectDetail, Gallery, Contact
  data/          // Static content, projects, gallery tiles
  types/         // TypeScript type definitions
```

- **components/** — Reusable UI pieces used across pages.
- **pages/** — One file per page, rendered conditionally based on nav state.
- **data/** — All text content, project data, and gallery data separated from UI.
- **types/** — Shared interfaces for Project, GalleryTile, Page, etc.

## What It Does

- Single-page app with client-side page switching via React state.
- Home page with hero, about summary, recent projects, and contact prompt.
- About page with portrait, bio (lime-highlighted key phrases), and social links.
- Projects page listing all projects; clicking opens a detail view.
- Gallery page using CSS masonry layout.
- Contact page with a form that shows a success message on submit.
- All text content driven from a single data file (no hardcoded strings in components).

## Run

```bash
pnpm install
pnpm dev
```
