import { link, product } from "./../product";
import {
  configNumber,
  configRecord,
  configText,
  packageConfig,
} from "./../package_config";

export type SiteId = "main";

export type SiteLinks = { github: string; linkedin: string; x: string };

export type SiteDefinition = {
  id: SiteId;
  name: string;
  domain: string;
  links: SiteLinks;
  markFooterHeight: string;
  markFooterMaxWidth: string;
  markHeaderHeight: string;
  markHeaderMaxWidth: string;
  titleFontFamily: string;
  titleLetterSpacing: string;
  titleLineHeightMin: string;
  titleTextTransform: string;
  titleWeight: number;
};

const configSites = configRecord(packageConfig.sites);

type SiteFallback = {
  domain: string;
  links: SiteLinks;
  markFooterHeight: string;
  markFooterMaxWidth: string;
  markHeaderHeight: string;
  markHeaderMaxWidth: string;
  name: string;
  titleFontFamily: string;
  titleLetterSpacing: string;
  titleLineHeightMin: string;
  titleTextTransform: string;
  titleWeight: number;
};

function readSiteLinks(value: unknown, fallback: SiteLinks): SiteLinks {
  const raw = configRecord(value);
  return Object.freeze({
      github: configText(raw.github) || fallback.github,
      linkedin: configText(raw.linkedin) || fallback.linkedin,
      x: configText(raw.x) || fallback.x,
  });
}

function readSite(id: SiteId, fallback: SiteFallback): SiteDefinition {
  const raw = configRecord(configSites[id]);
  return Object.freeze({
      id,
      name: configText(raw.name) || fallback.name,
      domain: configText(raw.domain) || fallback.domain,
      links: readSiteLinks(raw.links, fallback.links),
      markFooterHeight:
      configText(raw.markFooterHeight) || fallback.markFooterHeight,
      markFooterMaxWidth:
      configText(raw.markFooterMaxWidth) || fallback.markFooterMaxWidth,
      markHeaderHeight:
      configText(raw.markHeaderHeight) || fallback.markHeaderHeight,
      markHeaderMaxWidth:
      configText(raw.markHeaderMaxWidth) || fallback.markHeaderMaxWidth,
      titleFontFamily:
      configText(raw.titleFontFamily) || fallback.titleFontFamily,
      titleLetterSpacing:
      configText(raw.titleLetterSpacing) || fallback.titleLetterSpacing,
      titleLineHeightMin:
      configText(raw.titleLineHeightMin) || fallback.titleLineHeightMin,
      titleTextTransform:
      configText(raw.titleTextTransform) || fallback.titleTextTransform,
      titleWeight: configNumber(raw.titleWeight, fallback.titleWeight),
  });
}

export const sites = Object.freeze({
    main: readSite("main", {
        domain: product.domain,
        links: link,
        markFooterHeight: "3.2rem",
        markFooterMaxWidth: "28rem",
        markHeaderHeight: "1.95rem",
        markHeaderMaxWidth: "14rem",
        name: product.name,
        titleFontFamily: '"Montserrat Variable", "Arial Black", sans-serif',
        titleLetterSpacing: "0",
        titleLineHeightMin: "0",
        titleTextTransform: "uppercase",
        titleWeight: 900,
    }),
});

export function publicSiteOrigin(site: SiteDefinition): string {
  return `https://${site.domain}`;
}
