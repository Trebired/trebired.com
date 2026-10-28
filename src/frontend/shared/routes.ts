import {
  allRoutePaths as siteRoutePaths,
  canonicalPath,
  metaFor as siteMetaFor,
  routeExists as siteRouteExists,
} from "./utils/routes";

export { canonicalPath };

export function allRoutePaths(): string[] {
  return siteRoutePaths();
}

export function metaFor(path: string, language: unknown) {
  return siteMetaFor(canonicalPath(path), language);
}

export function routeExists(path: string): boolean {
  return siteRouteExists(canonicalPath(path));
}
