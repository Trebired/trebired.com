import { SiteFooter as PackageFooter } from "@trebired/frontend/react";
import { currentSite as resolveSite } from "./../../../shared/site";
import type { CSSProperties } from "react";
import { product } from "./../../../shared/product";
import type { SiteDefinition } from "./../../../shared/network/constants";
import { useLang } from "#32f7ohjh2cr2";
import { SiteMark } from "#52qoy6lcwhi7";
import { createSiteTranslator } from "./translator";

const SOCIAL_SERVICES = ["github", "linkedin", "x"] as const;

type FooterLogoStyle = CSSProperties & {
  "--site-footer-logo-height": string;
  "--site-footer-logo-max-width": string;
};

function footerLogoStyle(site: SiteDefinition): FooterLogoStyle {
  return {
    "--site-footer-logo-height": site.markFooterHeight,
    "--site-footer-logo-max-width": site.markFooterMaxWidth,
  };
}

function FooterBrand({ site }: { site: SiteDefinition }) {
  return (
    <span aria-label={site.name} className="tbf-inline-row tbf-fit-content" role="img">
    <SiteMark site={site} className="tbf-logo tbfm-footer-logo" kind="full-tm" style={footerLogoStyle(site)} />
    </span>
  );
}

function socialFor(site: SiteDefinition) {
  return SOCIAL_SERVICES.map((service) => ({ href: site.links[service], service }));
}

export function SiteFooter() {
  const lang = useLang();
  const translator = createSiteTranslator(lang);
  const site = resolveSite();

  return (
    <PackageFooter
    softRedirect
    tone="inverse"
    social={socialFor(site)}
    brand={<FooterBrand site={site} />}
    note={<span>© {new Date().getFullYear()} {site.name}. {translator("footer.rights")}</span>}
    tagline={translator("footer.tagline", { product: product.name })}
    />
  );
}
