import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import {
  articleSchema,
  auditSeo,
  breadcrumbSchema,
  createSeoBuilder,
  faqSchema,
  localizedPath,
  organizationSchema,
  webSiteSchema,
  type SeoAuditIssue,
  type SeoRobots,
} from "@trebired/seo";

import seoConfig from "#y49lyu6n7glo";
import { language } from "./../../../.trebired/frontend/language";
import { link } from "./../../frontend/shared/product";
import { articlePath, articles, type Article } from "./../../frontend/shared/publications/articles";
import { allRoutePaths, metaFor } from "./../../frontend/shared/utils/routes";
import { TITLE_SEPARATOR } from "./../../frontend/shared/utils/route_meta";
import type { SiteData } from "./../../frontend/shared/data/types";
import type { SiteDefinition } from "./../../frontend/shared/network/constants";

type Lang = "cs" | "en";

type SeoContext = { data?: SiteData; name: string; origin: string };

const THEME_COLOR = "#0a0a0a";
const HIDDEN: SeoRobots = { follow: true, index: false };
const SECTIONS: Record<Article["kind"], string> = { blog: "/blog", "case-study": "/case-studies" };
const LANGS: readonly Lang[] = ["cs", "en"];

function langOf(value: string): Lang {
  return value === "cs" ? "cs" : "en";
}

function errorStatus(path: string): number | undefined {
  return ERROR_STATUSES.find((status) => errorRoutePath(status) === path);
}

function errorCopy(status: number, lang: Lang) {
  const messages = language.error?.[lang] as Record<number, {lead:string;title:string}>|undefined;
  return messages?.[status] || { lead: "", title: String(status) };
}

function shortTitle(path: string, lang: Lang): string {
  const title = metaFor(path, lang).title.split(TITLE_SEPARATOR)[0] || "";
  return articleFor(path) ? title : title.split(": ")[0] || title;
}

function articleFor(path: string): Article | undefined {
  return [...articles("blog"), ...articles("case-study")].find((article) => articlePath(article) === path);
}

function pathIn(path: string, lang: Lang): string {
  return localizedPath(path, lang, seoConfig.site.defaultLocale, seoConfig.localeStrategy || "none");
}

function urlIn(context: SeoContext, path: string, lang: Lang): string {
  return `${context.origin}${pathIn(path, lang)}`;
}

function crumbs(context: SeoContext, path: string, lang: Lang) {
  const article = articleFor(path);
  const trail = [{ name: context.name, path: pathIn("/", lang) }];
  if (article) trail.push({ name: shortTitle(SECTIONS[article.kind], lang), path: pathIn(SECTIONS[article.kind], lang) });
  trail.push({ name: shortTitle(path, lang), path: pathIn(path, lang) });
  return breadcrumbSchema(context.origin, trail);
}

function homeSchemas(context: SeoContext, lang: Lang) {
  const sameAs = [link.github, link.linkedin, link.x].filter(Boolean);
  return [
    organizationSchema({ logo: `${context.origin}/icon-512.png`, name: context.name, sameAs, url: context.origin }),
    webSiteSchema({ description: metaFor("/", lang).description, name: context.name, url: urlIn(context, "/", lang) }),
  ];
}

function articleSchemaFor(context: SeoContext, article: Article, lang: Lang) {
  return articleSchema({
      author: { name: article.author.name, url: `https://github.com/${article.author.github}` },
      datePublished: article.published,
      description: article.lead[lang],
      headline: article.title[lang],
      inLanguage: lang,
      publisher: { logo: `${context.origin}/icon-512.png`, name: context.name, url: context.origin },
      type: article.kind === "blog" ? "BlogPosting" : "Article",
      url: urlIn(context, articlePath(article), lang),
  });
}

function faqSchemaFor(context: SeoContext, lang: Lang) {
  const faq = context.data?.documents?.faq?.[lang];
  if (!faq) return [];
  const parts = (faq.sections || []).flatMap((section) => section.parts || []);
  return [faqSchema(parts.map((part) => ({ answer: part.body.join("\n\n"), question: part.heading })))];
}

function pageSchemas(context: SeoContext, path: string, lang: Lang) {
  if (path === "/") return homeSchemas(context, lang);
  const article = articleFor(path);
  return [
    crumbs(context, path, lang),
    ...(article ? [articleSchemaFor(context, article, lang)] : []),
    ...(path === "/faq" ? faqSchemaFor(context, lang) : []),
  ];
}

function auditSite(): SeoAuditIssue[] {
  return auditSeo(allRoutePaths().flatMap((path) => LANGS.map((lang) => ({ ...metaFor(path, lang), lang, path }))));
}

function createSiteSeo(site: SiteDefinition, data?: SiteData) {
  const context: SeoContext = { data, name: site.name, origin: `https://${site.domain}` };
  const config = { ...seoConfig, site: { ...seoConfig.site, name: site.name, url: context.origin } };
  const chrome = { metas: [{ content: THEME_COLOR, name: "theme-color" }] };
  const seo = createSeoBuilder(config, { chrome, configPath: ".trebired/seo/config.ts" });

  return {
    audit: auditSite,
    robotsTxt: () => seo.robotsTxt(),
    shellMeta(path: string, lang: string) {
      const locale = langOf(lang);
      const status = errorStatus(path);
      if (!status) return seo.shellMeta({ ...metaFor(path, locale), locale, path });
      const copy = errorCopy(status, locale);
      return seo.shellMeta({ description: copy.lead, locale, path, robots: HIDDEN, title: copy.title });
    },
    sitemap: () => seo.sitemap(allRoutePaths().map((path) => ({ lastModified: articleFor(path)?.published, path }))),
    structuredData: (path: string, lang: string) => (errorStatus(path) ? "" : seo.structuredData(pageSchemas(context, path, langOf(lang)))),
  };
}

export { createSiteSeo };
