# Contributing

## Runtime

Bun 1 or later. Bun only, never Node.js and never npm.

## Install

```sh
bun i
```

## Commands

```sh
bun run discipline:check
bun run typecheck
bun run build
bun run verify
```

`bun run verify` runs the discipline check, the typecheck and the build in that order. Run it before every commit. The build also runs the SEO audit and stops on a missing or repeated title or description.

```sh
bun run discipline:fix
```

`discipline:fix` rewrites formatting, removes comments and regenerates the hash alias map in `.trebired/code-discipline/`. Never hand-edit the alias map.

```sh
bun run dev
```

Local preview on port 3000. Set `PORT` to change it. The dev server is tooling, not a production server.

## Rules

- `@trebired/code-discipline` owns file sizes, function sizes, comment removal, formatting, alias imports and banned patterns. Development runs behind its gate.
- Component appearance that `@trebired/frontend` owns is configured in `.trebired/frontend/`, never overridden in application styles. A value the config cannot reach is a package gap: report it and fix it in the package.
- Copy lives in the colocated `i18n/en.ts` and `i18n/cs.ts` beside the page or component that uses it. Every message exists in both languages.
- A page's title and description live in `src/frontend/shared/utils/main_routes.ts` or `document_routes.ts`, between 25 and 60 characters for a title and 110 and 160 for a description.
- Generated output stays out of Git: `dist/`, `.ssr/`, `.tmp/`, tarballs and discipline reports.
