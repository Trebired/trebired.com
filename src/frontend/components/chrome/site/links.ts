import { sites } from "./../../../shared/network/constants";

function siteOrigin(): string {
  if (BUILD_LOCAL_SITES && typeof window !== "undefined") return window.location.origin;
  return BUILD_SITE_ORIGIN;
}

export function siteOrigins(): Record<string, string> {
  return Object.fromEntries(Object.values(sites).map((site) => [site.id, siteOrigin()]));
}
