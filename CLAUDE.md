# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is the **deployment repository** for the personal website served at https://nahornyioleh.be
(custom domain set in `CNAME`) via **GitHub Pages from the `main` branch**. There is no build step,
CI, or test suite here — pushing to `main` publishes the site.

Critical consequence (see `.gitignore`): the **source code is not in this repo**. `src/`, `dev/`,
`dist/`, and `node_modules/` are all ignored. The committed files are the *built output* of
external projects, copied in. Most sub-projects are Vite/React builds, recognizable by hashed asset
filenames like `assets/index-CzAtAFVp.js` and `assets/index-CuDTCEzF.css`. Do not try to edit those
minified bundles by hand — they are regenerated upstream and copied here. Editing them directly is
almost always the wrong move; flag it instead.

`*.json` is gitignored except the data files explicitly allow-listed in `.gitignore`
(`book*.json`, `french_*.json`, `product_*.json`, `quiz/assets/data/*.json`). When adding a JSON
data file that must ship, confirm it matches an allow-list pattern or `git add -f` it.

## Structure

- `index.html` — hand-written landing page (not a build artifact). Contains schema.org JSON-LD
  describing each sub-project; keep it in sync when adding/removing projects.
- Top-level icon/asset dirs (`icons/`, `assets/`, `images/`, `static/`, `favicon_io/`,
  `css-dist/`) serve the landing page.
- Each other directory is a self-contained sub-site reached at `/{dir}/`, each with its own
  `index.html` and (usually) its own `assets/`. They are independent — assets are scoped per
  project, not shared.

Sub-projects:

- articles:
  - `fetch-sql-data-in-go`
- sub-pages (independent of main):
  - `fakeshop`
  - `fakedata`
  - `fakebookshop`
  - `iclock`
  - `verbes` (FR app)
  - `quiz`
  - `ligne_du_temps`
  - `promenade-sentimentale`

## When changing the site

- **Adding a sub-project:** create `/{name}/`, copy its built output in, then update `index.html`
  (links + JSON-LD `hasPart`), `sitemap.xml` (new `<url>` + `lastmod`), and `README.md`.
- **Removing/renaming:** update the same three files together.
- Use **relative paths** (`./assets/...`) in HTML — the site is served from the domain root but
  sub-projects must remain portable under their own path.
- Asset links are content-hashed; when replacing a sub-project build, update the `<script>`/`<link>`
  references in that project's `index.html` to the new hashes.
