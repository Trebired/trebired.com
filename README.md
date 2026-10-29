<div align="center">

<p>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Trebired/meta/main/brand/logos/full/dark.svg">
  <img src="https://raw.githubusercontent.com/Trebired/meta/main/brand/logos/full/light.svg" alt="Trebired" width="360" align="top">
</picture>
</p>

**The Trebired website: what the organization builds and what it costs, how it works, the standards and policies it holds itself to, and everything it publishes, in English and Czech.**

[![License](https://img.shields.io/badge/license-AGPL--3.0--only-black)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Bun 1 or later.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server runs behind the Code Discipline gate, fetches the build data, builds the client bundle, writes one HTML document per route and language, and serves the result on port 3000. Set `PORT` to use another port.

Production build:

```sh
bun run build
```

The build writes the site to `dist/`. It is a static directory; serve it with any static host.

## Concepts

### Frontend-only application

The website has no backend. `src/bin/frontend/build.ts` fetches the build data, bundles the client and prerenders every route; nothing runs at request time. `src/bin/dev.ts` is local preview, not a production server. Navigation after the first load is a soft navigation through `@trebired/frontend`, so the document loads once and the content swaps in place. `src/frontend/shared/pages.tsx` gives `createSitePages` from `@trebired/frontend` a loader for every route, the documents and articles included: each page is its own chunk, a first visit downloads only the page it opens, and a page's code starts loading when a link to it is hovered or focused.

### Pages

A page is a folder under `src/frontend/pages/`: its markup, its bands, its artwork and an `i18n/` folder with `en.ts` and `cs.ts`. `src/frontend/shared/utils/main_routes.ts` and `document_routes.ts` hold the title and description of every route in both languages; the build reads them for the document head and the SEO audit.

### Build data

`.trebired/bundler/config.ts` declares what the build fetches: the brand files, policies, FAQ, philosophy and roadmap from Trebired/meta, the articles from Trebired/publications, the organization's public repositories and team from GitHub, and the exchange rates the prices are converted with. Every result is written to `dist/data/`. A source that cannot be reached falls back to the copy the last build wrote, so a failed fetch keeps the last content instead of shipping an empty page.

### Printed artwork

The artwork on every page is printed in code with `@trebired/overprint`: two or more ink plates over the same drawing, slightly off register, with the inks mixing where they overlap. The drawings are vector paths beside the pages that use them; nothing is a raster image except the photographs.

## Configuration

| File | Owns |
| --- | --- |
| `.trebired/bundler/config.ts` | Frontend directory, output directory, public path, build data sources |
| `.trebired/frontend/config.ts` | Palette, type, containers, components, systems, fonts, icons, favicons |
| `.trebired/frontend/language.ts` | Languages, the default language, error page copy |
| `.trebired/seo/config.ts` | Site URL, locale strategy, robots policy, social card, sitemap defaults |
| `.trebired/i18n/config.ts` | Translation checking |
| `.trebired/startup/config.ts` | Dev server port requirement and shutdown timeout |
| `.trebired/code-discipline/config.ts` | Enforcement presets and banned patterns |
| `package.json#config` | Organization and product identity, contact addresses, social links, site settings |

`PORT` selects the dev server port and defaults to `3000`.

## Runtime

Bun runs the build and the dev server. The published output is static HTML, CSS, JavaScript and assets; the browser is the only runtime a visitor needs.

English is served at the unprefixed URLs and Czech under `/cs`. Each document carries its own `<html lang>`, title, description, canonical URL and language alternates, and holds the other language as an inert template. The language menu switches the page in place, without a reload and without changing the address; the language URLs exist for search engines. The build writes `sitemap.xml` with every URL in both languages, `robots.txt`, structured data for every page and a social card, and it stops when the SEO audit finds a missing or repeated title or description.

`netlify.toml` declares the build command, the publish directory and the Bun version, so the host needs no build settings of its own.

## Documentation

This README is the product documentation. Contributor commands are in [CONTRIBUTING.md](CONTRIBUTING.md). Released changes are in [CHANGELOG.md](CHANGELOG.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

- No contact form, email delivery or message handling. Contact runs through the published email addresses.
- No backend, database, session or user account.
- No analytics, tracking, advertising or third-party scripts, and no cookie consent layer, because nothing needs one.
- No content management interface. Page copy changes are code changes in the colocated `i18n` folders; policies, the FAQ and articles change in Trebired/meta and Trebired/publications.
- No payments, quotes or project intake. Prices are published; a project starts with an email.
