# Changelog

All notable changes to `trebired-website` will be documented here.

This project follows semantic versioning once published.

## 1.0.1

- Moved the page system onto `createSitePages` from `@trebired/frontend` 29.3.0. Every page is still its own chunk, and a page's code now starts loading when a link to it is hovered or focused.
- Fixed `og:locale` and `og:locale:alternate` naming only the language. They name its country too (`en_GB`, `cs_CZ`), through `@trebired/seo` 0.7.0.
- Fixed an overview link staying marked as the current page beside its own sub-page, and the footer and accessibility dialog headings skipping levels in the page outline, through `@trebired/frontend` 29.3.0.

## 1.0.0

- Released the Trebired website: the organization, its services and prices, its process, standards, handbook, policies, projects, blog and case studies, prerendered in English and Czech with English at the unprefixed URLs and Czech under `/cs`.
- Added per-page titles, descriptions, canonical URLs, language alternates, structured data and a sitemap, checked by the SEO audit on every build.
