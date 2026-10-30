# Changelog

All notable changes to `trebired-website` will be documented here.

This project follows semantic versioning once published.

## 1.0.5

- Updated `@trebired/frontend` to 29.5.2. A removed frame is logged as one short line, such as `Removed tbf-unverified iframe#id "Title"`, instead of the whole element.

## 1.0.4

- Updated `@trebired/frontend` to 29.5.1. A frame a script appends to the page while it is still loading is now removed as well, not only hidden.

## 1.0.3

- Updated `@trebired/frontend` to 29.5.0. A frame the site did not declare, such as one a script adds to the page after it loads, is removed before it shows and reported in the browser console.

## 1.0.2

- Updated `@trebired/frontend` to 29.4.0. The website shows no maker credit in its footer; the credit is for the sites Trebired builds for others.

## 1.0.1

- Moved the page system onto `createSitePages` from `@trebired/frontend` 29.3.0. Every page is still its own chunk, and a page's code now starts loading when a link to it is hovered or focused.
- Fixed `og:locale` and `og:locale:alternate` naming only the language. They name its country too (`en_GB`, `cs_CZ`), through `@trebired/seo` 0.7.0.
- Fixed an overview link staying marked as the current page beside its own sub-page, and the footer and accessibility dialog headings skipping levels in the page outline, through `@trebired/frontend` 29.3.0.

## 1.0.0

- Released the Trebired website: the organization, its services and prices, its process, standards, handbook, policies, projects, blog and case studies, prerendered in English and Czech with English at the unprefixed URLs and Czech under `/cs`.
- Added per-page titles, descriptions, canonical URLs, language alternates, structured data and a sitemap, checked by the SEO audit on every build.
