import { useRoutePath } from "./../../shared/route_path";
import { SiteHeader } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import type { SiteDefinition } from "./../../shared/network/constants";
import { currentSite as resolveSite } from "./../../shared/site";
import { useLang } from "#32f7ohjh2cr2";
import { SiteMark } from "./brand_marks";
import { A11ySwitcher } from "./a11y_switcher";
import { LangSwitcher } from "./lang_switcher";
import { createLayoutTranslator } from "./translator";

type LogoStyle = CSSProperties & {
  "--site-header-logo-height": string;
  "--site-header-logo-max-width": string;
};

function logoStyle(site: SiteDefinition): LogoStyle {
  return {
    "--site-header-logo-height": site.markHeaderHeight,
    "--site-header-logo-max-width": site.markHeaderMaxWidth,
  };
}

function HeaderActions() {
  return (
    <>
    <A11ySwitcher />
    <LangSwitcher />
    </>
  );
}

export function Header({ path: routePath }: { path?: string } = {}) {
  const livePath = useRoutePath();
  const lang = useLang();
  const translator = createLayoutTranslator(lang);
  const path = routePath || livePath;
  const currentSite = resolveSite();

  return (
    <SiteHeader
    softRedirect
    actions={<HeaderActions />}
    brand={<SiteMark className="tbf-logo tbfm-header-logo" kind="full-tm" site={currentSite} style={logoStyle(currentSite)} />}
    menuActions={<HeaderActions />}
    lang={lang}
    labels={{
        closeMenu: translator("nav.menu"),
        home: currentSite.name,
        navigation: translator("nav.main"),
        openMenu: translator("nav.menu"),
    }}
    />
  );
}
