import type { CSSProperties } from "react";
import { classNames } from "#wdjzp3jwei75";
import type { SiteDefinition } from "./../../../shared/network/constants";
import { siteLogoHref, type SiteLogoKind } from "./../../../shared/brand/logos";

type SiteMarkProps = {
  className?: string;
  kind?: SiteLogoKind;
  site: SiteDefinition;
  style?: CSSProperties;
};

function SiteMark(props: SiteMarkProps) {
  return (
    <span className={classNames(["tbfm-mark", props.className])} style={props.style} aria-hidden="true">
    <img alt="" className="tbfm-mark__face" data-site-mark="light" src={siteLogoHref(props.site.id, props.kind || "full", "light")} />
    <img alt="" className="tbfm-mark__face" data-site-mark="dark" src={siteLogoHref(props.site.id, props.kind || "full", "dark")} />
    </span>
  );
}

export { SiteMark };
