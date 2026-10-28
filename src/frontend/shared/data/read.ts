import type { SiteData } from "./types";

function read<T>(source: () => T): T | undefined {
  try {
    return source();
  } catch {
    return undefined;
  }
}

export const sitePublications = (): SiteData["publications"] => read(() => BUILD_SITE_DATA.publications);

export const siteTeam = (): SiteData["team"] => read(() => BUILD_SITE_DATA.team);
