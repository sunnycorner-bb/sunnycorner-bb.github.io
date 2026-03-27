# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **光之角落 SunnyCorner B&B** (a bed & breakfast in Hualien, Taiwan), built with Hugo and deployed to GitHub Pages. The site is in Traditional Chinese (zh-TW).

## Build & Development Commands

- **Install dependencies**: `yarn install`
- **Local development server**: `hugo server`
- **Production build**: `HUGO_ENVIRONMENT=production hugo --minify`
- Hugo version: **0.152.2** (extended edition required for Sass support)
- Node version: **20**

## Architecture

### Hugo Static Site

- `hugo.toml` — site configuration, Google Maps keys, social links
- `content/rooms/` — room pages organized by floor (2floor, 3floor, 4floor), each with front matter defining room metadata (name, images, position, price, booking link)
- `data/services.yml` — shared amenities list rendered on room pages
- `layouts/` — Hugo templates; index page iterates rooms sorted by `position`, alternating between `room` and `room-reverse` partials
- `vendor/theme/` — vendored "Jeorge" HTML5 theme (git submodule), its assets are served as static files via `staticDir`

### CSS/JS Pipeline

- `assets/css/main.scss` + `_customize.scss` — Sass styles, processed by Hugo Pipes with Dart Sass
- `assets/js/` — legacy jQuery-based scripts from the theme
- `assets/app/` — modern JavaScript using **Stimulus** (`@hotwired/stimulus`)
  - `main.js` — Stimulus application entry point
  - `controllers/term_controller.ts` — terms/conditions UI
  - `controllers/reminder_controller.ts` — price notice/reminder UI
- `postcss.config.js` — PurgeCSS runs in production only, using `hugo_stats.json` for tree-shaking

### Deployment

- CI via GitHub Actions (`.github/workflows/publish.yml`): push to `main` triggers build and deploy to GitHub Pages
- All GitHub Actions are pinned to commit SHAs for supply chain security
