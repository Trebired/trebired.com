import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
  writeDataAssets,
} from "@trebired/bundler/frontend-app";
import { configureFrontendA11y, configureFrontendLanguage, configureFrontendMoney } from "@trebired/frontend";
import { generateFaviconAssets, loadConfig as loadFrontendConfig } from "@trebired/frontend/config";
import { createSiteSearchIndex } from "@trebired/frontend/server";
import {
  createLocaleShellRoutes,
  ERROR_STATUSES,
  errorRoutePath,
  errorShellFileName,
  frontendBoot,
} from "@trebired/frontend";

import seoConfig from "#y49lyu6n7glo";
import { allRoutePaths, metaFor } from "./../../frontend/shared/utils/routes";
import { TITLE_SEPARATOR } from "./../../frontend/shared/utils/route_meta";
import { createSiteDefines } from "./options";
import { createSiteSeo } from "./seo";
import { LANG_ROUTING } from "./../../frontend/shared/lang/policy";
import { renderRouteBodies } from "./ssr";
import type { SiteDefinition } from "./../../frontend/shared/network/constants";
import type { BundlerDataAsset, BundlerLogger } from "@trebired/bundler";
import { BRAND_PUBLIC_DIR, BRAND_SOURCE_DIR, brandPublicPaths, siteLogoFile, siteLogoSource } from "./../../frontend/shared/brand/logos";
import type { SiteData } from "./../../frontend/shared/data/types";
import type { SeoAuditIssue } from "@trebired/seo";
import sharp from "sharp";

const SOCIAL_GROUND = "#1f1f1f";

type SiteBuildOptions = {
  assets: BundlerDataAsset[];
  data: SiteData;
  dataDefine: Record<string, string>;
  development: boolean;
  logger?: BundlerLogger;
  origin: string;
  site: SiteDefinition;
};

type FrontendConfig = Awaited<ReturnType<typeof loadFrontendConfig>>["config"];

async function writeSiteFavicon(config: FrontendConfig, site: SiteDefinition, outDir: string) {
  const light = siteLogoSource(site.id, "minimal", "light");
  const generated = await generateFaviconAssets({
      ...config,
      assets: {
        ...config.assets,
        favicon: { ...config.assets.favicon, dark: siteLogoSource(site.id, "minimal", "dark"), default: light, light },
      },
    }, { rootDir: process.cwd() });

  for (const file of generated.files) await Bun.write(`${outDir}/${file.path}`, file.contents);
}

async function writeBrandLogos(data: SiteData, outDir: string) {
  const logos = data.brand?.logos;
  if (!logos) throw new Error("no brand logos were fetched or kept, so the site has no logo to show");
  for (const [kind, tones] of Object.entries(logos)) {
    for (const tone of ["dark", "light"] as const) await Bun.write(`${outDir}/${siteLogoFile(kind, tone)}`, tones[tone]);
  }
}

type SiteFiles = {
  bodies: Record<string, Record<string, string>>;
  config: FrontendConfig;
  data: SiteData;
  outDir: string;
  site: SiteDefinition;
};

async function writeSiteFiles(files: SiteFiles) {
  await writeBrandLogos(files.data, `${files.outDir}/${BRAND_PUBLIC_DIR}`);
  await writeSiteFavicon(files.config, files.site, files.outDir);
  await writeSiteSearch(files.site, files.bodies, files.outDir);
}

type BundlerConfig = Awaited<ReturnType<typeof applyProjectConfigsToFrontendBundlerOptions>>;

async function writeSiteSearch(site: SiteDefinition, bodies: Record<string, Record<string, string>>, outDir: string) {
  const files = createSiteSearchIndex({
      locales: LANG_ROUTING.locales,
      meta: (path, locale) => {
        const copy = metaFor(path, locale);
        return { description: copy.description, title: copy.title.split(TITLE_SEPARATOR)[0] };
      },
      paths: allRoutePaths(),
      render: (path, locale) => bodies[path]?.[locale] || "",
  });
  for (const file of files) await Bun.write(`${outDir}/${file.path}`, file.contents);
}

function seoWarnings(issues: SeoAuditIssue[]): string[] {
  const errors = issues.filter((found) => found.level === "error");
  if (errors.length) throw new Error(`seo audit failed: ${errors.map((found) => `${found.lang} ${found.path} ${found.message}`).join("; ")}`);
  return issues.map((found) => `${found.lang} ${found.path}: ${found.message}`);
}

async function writeSocialCard(outDir: string, data: SiteData) {
  const logo = data.brand?.logos.full?.dark;
  if (!logo) return;
  const mark = await sharp(Buffer.from(logo), { density: 600 }).resize({ width: 760 }).png().toBuffer();
  await sharp({ create: { background: SOCIAL_GROUND, channels: 3, height: 630, width: 1200 } })
  .composite([{ gravity: "center", input: mark }])
  .png()
  .toFile(`${outDir}/social-card.png`);
}

async function writeCrawlerFiles(outDir: string, seo: ReturnType<typeof createSiteSeo>, data: SiteData) {
  await writeSocialCard(outDir, data);
  await Bun.write(`${outDir}/robots.txt`, seo.robotsTxt());
  await Bun.write(`${outDir}/sitemap.xml`, seo.sitemap());
}

async function buildSite(options: SiteBuildOptions) {
  const { assets, data, dataDefine, development, logger, origin, site } = options;
  await writeBrandLogos(data, BRAND_SOURCE_DIR);
  const seo = createSiteSeo(site, data);
  const seoNotes = seoWarnings(seo.audit());
  const config = await applyProjectConfigsToFrontendBundlerOptions({
      browser: { external: brandPublicPaths() },
      define: { ...createSiteDefines(site, origin, development), ...dataDefine },
      mode: development ? "development" : "production",
      rootDir: process.cwd(),
      ssr: false,
  });
  const { config: frontendConfig } = await loadFrontendConfig(process.cwd());
  const a11y = configureFrontendA11y(frontendConfig.a11y);
  const language = configureFrontendLanguage(frontendConfig.language);
  const money = configureFrontendMoney(frontendConfig.money);
  const [build, bodies] = await Promise.all([
      buildFrontendApp({ ...config, target: "client" }),
      renderRouteBodies({ dataDefine, development, origin, site }, config.supportedI18nLanguages || []),
  ]);
  const strategy = seoConfig.localeStrategy;
  const routes = createLocaleShellRoutes({
      meta: seo.shellMeta,
      paths: [...allRoutePaths(), ...ERROR_STATUSES.map(errorRoutePath)],
      render: (routePath, locale) => bodies[routePath]?.[locale] || "",
      routing: LANG_ROUTING,
      strategy,
  }).map((route) => ({
        ...route,
        body: `${route.body}${seo.structuredData(route.sourcePath, route.locale)}`,
  }));
  const boot = frontendBoot({ locale: { a11y, language, money, routing: LANG_ROUTING, strategy } });
  const shell = await buildStaticShell({
      build,
      config,
      meta: { ...boot, lang: "en" },
      routes,
  });

  for (const file of shell.files) await Bun.write(file.outFile, file.html);
  for (const status of ERROR_STATUSES) {
    const file = shell.files.find((entry) => entry.path === errorRoutePath(status));
    if (file) await Bun.write(`${config.clientOutDir}/${errorShellFileName(status)}`, file.html);
  }
  await writeSiteFiles({ bodies, config: frontendConfig, data, outDir: String(config.clientOutDir), site });
  await writeDataAssets(String(config.clientOutDir), assets, { logger });
  await writeCrawlerFiles(String(config.clientOutDir), seo, data);

  return { build, config, seoNotes, shell };
}

export { buildSite };
