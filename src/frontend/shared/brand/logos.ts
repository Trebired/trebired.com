import type { SiteId } from "./../network/constants";

type SiteLogoKind = "full" | "full-tm" | "minimal";
type SiteLogoTone = "dark" | "light";

const PUBLIC_DIR = "assets/brand";

const SOURCE_DIR = "dist/data/brand";

export function brandPublicPaths(): string[] {
  return [`/${PUBLIC_DIR}/*`];
}

export function siteLogoHref(_site: SiteId, kind: SiteLogoKind, tone: SiteLogoTone): string {
  return `/${PUBLIC_DIR}/${kind}/${tone}.svg`;
}

export function siteLogoSource(_site: SiteId, kind: SiteLogoKind, tone: SiteLogoTone): string {
  return `${SOURCE_DIR}/${kind}/${tone}.svg`;
}

export function siteLogoFile(kind: string, tone: SiteLogoTone): string {
  return `${kind}/${tone}.svg`;
}

export { PUBLIC_DIR as BRAND_PUBLIC_DIR, SOURCE_DIR as BRAND_SOURCE_DIR };
export type { SiteLogoKind, SiteLogoTone };
