import { bundle } from "@trebired/bundler";
import path from "node:path";

import { allRoutePaths } from "./../../frontend/shared/utils/routes";
import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import { createSiteDefines } from "./options";
import { LANG_ROUTING } from "./../../frontend/shared/lang/policy";
import type { SiteDefinition } from "./../../frontend/shared/network/constants";

const SSR_OUT_ROOT = ".ssr";

type RenderSite = { dataDefine: Record<string, string>; development: boolean; origin: string; site: SiteDefinition };

async function buildSsrBundle({ dataDefine, development, origin, site }: RenderSite, supportedLanguages: readonly string[]) {
  await bundle({
      define: { ...createSiteDefines(site, origin, development), ...dataDefine },
      discover: {
        dir: "./src/frontend",
        rules: [
          { key: "ssr-entry", include: ["ssr/entry.tsx"], strategy: "entry" },
          { key: "ignore-client", include: ["**/*.client.ts", "**/*.client.tsx", "js/**"], strategy: "ignore" },
          { key: "shared", include: ["**/*.ts", "**/*.tsx"], exclude: ["ssr/entry.tsx"], strategy: "bundle" },
          { key: "ignore-rest", include: ["**/*"], strategy: "ignore" },
        ],
      },
      environment: "node",
      external: ["react", "react-dom", "react-dom/server"],
      format: "esm",
      i18n: { supportedLanguages: [...supportedLanguages] },
      outDir: `./${SSR_OUT_ROOT}/${site.id}`,
      rootDir: process.cwd(),
  });
}

async function renderRouteBodies(render: RenderSite, supportedLanguages: readonly string[]): Promise<Record<string, Record<string, string>>> {
  await buildSsrBundle(render, supportedLanguages);

  const entryPath = path.resolve(process.cwd(), `${SSR_OUT_ROOT}/${render.site.id}/src/frontend/ssr/entry.js`);
  const routes = [...allRoutePaths(), ...ERROR_STATUSES.map(errorRoutePath)];
  return renderInWorker({ entryPath, locales: [...LANG_ROUTING.locales], routes });
}

type RenderReply = { bodies?: Record<string, Record<string, string>>; error?: string };

function renderInWorker(request: { entryPath: string; locales: string[]; routes: string[] }): Promise<Record<string, Record<string, string>>> {
  const worker = new Worker(new URL("./render_worker.ts", import.meta.url).href);
  return new Promise<Record<string, Record<string, string>>>((resolve, reject) => {
      worker.onmessage = (event: MessageEvent<RenderReply>) => {
        if (event.data.bodies) resolve(event.data.bodies);
        else reject(new Error(`server render failed :: ${event.data.error || "no output"}`));
      };
      worker.onerror = (event) => reject(new Error(`server render worker failed :: ${event.message}`));
      worker.postMessage(request);
  }).finally(() => worker.terminate());
}

export { renderRouteBodies };
