import { LiveIslandMount, LocaleProvider, RenderCurrentUrlProvider } from "@trebired/frontend/react";
import {
  configureFrontendLanguage,
  configureFrontendMoney,
  configureLocaleRouting,
  configureSiteLinks,
  isErrorRoutePath,
  siteBodyHtml,
} from "@trebired/frontend";
import { LANG_ROUTING } from "./../shared/lang/policy";
import { language } from "./../../../.trebired/frontend/language";
import { money } from "./../../../.trebired/frontend/money";
import { links } from "./../../../.trebired/frontend/links";
import { canonicalPath, routeExists } from "./../shared/utils/routes";
import { createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { currentSite } from "./../shared/site";
import { Header } from "#qe1gc4nl2ay8";
import { sitePages } from "./../shared/pages";
import type { SiteDefinition } from "./../shared/network/constants";
import { SiteFooter } from "./../components/chrome/site/footer";
import { siteOrigins } from "./../components/chrome/site/links";

function siteTypographyStyle(site: SiteDefinition): string {
  const declarations = [
    `--font-title: ${site.titleFontFamily}`,
    `--title-letter-spacing: ${site.titleLetterSpacing}`,
    `--title-line-height-min: ${site.titleLineHeightMin}`,
    `--title-text-transform: ${site.titleTextTransform}`,
    `--title-weight: ${site.titleWeight}`,
  ].join("; ");

  return declarations.replace(/"/gu, "&quot;");
}

configureFrontendLanguage(language);
configureFrontendMoney(money);
configureLocaleRouting(LANG_ROUTING);
configureSiteLinks(links, { origins: siteOrigins(), set: currentSite().id });

const iconRenderer = createServerIconRenderer({}, { rootDir: process.cwd() });

export async function renderRouteBody(path: string, locale: string): Promise<string> {
  await sitePages.preparePage(path);
  const site = currentSite();
  const localized = (node: ReactElement) => withIconServerRenderer(
    iconRenderer,
    () => renderToString(
      <RenderCurrentUrlProvider currentUrl={path}>
      <LocaleProvider locale={locale}>{node}</LocaleProvider>
      </RenderCurrentUrlProvider>,
    ),
  );

  const header = localized(<Header path={path} />);
  const content = localized(
    <LiveIslandMount rootId="live_content">
    <sitePages.PageContent path={path} />
    </LiveIslandMount>,
  );
  const footer = localized(<SiteFooter />);
  const route = canonicalPath(path);
  const chrome = !isErrorRoutePath(route) && routeExists(route);
  const body = siteBodyHtml({ chrome, content, footer, header, path });
  return `<div class="tbfm-site-app" data-site="${site.id}" style="${siteTypographyStyle(site)}">${body}</div>`;
}
