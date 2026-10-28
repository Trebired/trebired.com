import { articlePath, articles, type Article } from "./../publications/articles";
import { mainName, pageTitle, type RouteMeta } from "./route_meta";

import type { SupportedLang } from "./../runtime/i18n/lang";

function metaFor(lang: SupportedLang, article: Article): RouteMeta {
  return {
    title: pageTitle(article.title[lang], mainName),
    description: article.lead[lang],
  };
}

export function publicationRoutes(): Record<string, Record<SupportedLang, RouteMeta>> {
  return Object.fromEntries(
    [...articles("blog"), ...articles("case-study")].map((article) => [
        articlePath(article),
        { cs: metaFor("cs", article), en: metaFor("en", article) },
    ]),
  );
}
