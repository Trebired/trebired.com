import { matchSupportedLanguage, type SupportedLang } from "./../runtime/i18n/lang";
import { publicationRoutes } from "./publication_routes";
import { documentRoutes } from "./document_routes";
import { mainName, pageTitle, type RouteMeta } from "./route_meta";
import { mainRoutes } from "./main_routes";

const notFoundMeta: Record<SupportedLang, RouteMeta> = {
  en: {
    title: pageTitle("Page not found", mainName),
    description: "This page does not exist.",
  },
  cs: {
    title: pageTitle("Stránka nenalezena", mainName),
    description: "Tato stránka neexistuje.",
  },
};

function routes(): Record<string, Record<SupportedLang, RouteMeta>> {
  return { ...mainRoutes, ...documentRoutes, ...publicationRoutes() };
}

export function routeExists(path: string): boolean {
  return Object.hasOwn(routes(), path);
}

export function metaFor(path: string, langInput: unknown = "en"): RouteMeta {
  const lang = matchSupportedLanguage(langInput) || "en";
  const routeMeta = routes()[path]?.[lang];

  if (routeMeta) return routeMeta;
  return notFoundMeta[lang];
}

export function allRoutePaths(): string[] {
  return Object.keys(routes());
}

export function canonicalPath(path: string): string {
  const trimmed = String(path || "/").replace(/\/+$/u, "");
  return trimmed || "/";
}
