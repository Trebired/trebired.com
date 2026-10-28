#!/usr/bin/env bun

import { createBunStaticAssetHandler, syncBundlerData } from "@trebired/bundler/frontend-app";
import { frontendConfigCheck } from "@trebired/frontend/config";
import { resolvePrimaryPort, runStartup } from "@trebired/startup";
import { loadConfig as loadStartupConfig } from "@trebired/startup/config";
import { readProductIdentity } from "@trebired/utils";

import { buildSite } from "./frontend/site_build";
import { sites } from "./../frontend/shared/network/constants";
import type { SiteData } from "./../frontend/shared/data/types";
import { logger } from "./shared/logger";

type BuiltSite = Awaited<ReturnType<typeof buildSite>>["config"];

const site = sites.main;
const { config: startup } = await loadStartupConfig(process.cwd());
const port = resolvePrimaryPort(startup) || 3000;
const origin = `http://localhost:${port}`;
const identity = readProductIdentity();
let built: BuiltSite | null = null;
let server: ReturnType<typeof Bun.serve>|null = null;

function serve(config: BuiltSite) {
  return Bun.serve({
      port,
      fetch: createBunStaticAssetHandler({
          clientOutDir: String(config.clientOutDir || "dist"),
          mode: "development",
          publicDir: typeof config.publicDir === "string" ? config.publicDir : undefined,
          rootDir: String(config.rootDir || process.cwd()),
          spaFallback: "404.html",
      }),
  });
}

async function buildForDev() {
  const synced = await syncBundlerData({ logger, rootDir: process.cwd() });
  Object.assign(globalThis, { BUILD_SITE_DATA: synced.data });
  const result = await buildSite({
      assets: synced.assets,
      data: synced.data as unknown as SiteData,
      dataDefine: synced.define,
      development: true,
      logger,
      origin,
      site,
  });
  built = result.config;
}

await runStartup({
    checks: [frontendConfigCheck()],
    bootstrap: {
      subsystems: [
        { id: "frontend-build", bootstrap: buildForDev },
        {
          dependsOn: ["frontend-build"],
          id: "http-server",
          bootstrap() {
            if (!built) throw new Error("frontend build unavailable");
            server = serve(built);
          },
          async shutdown() {
            await server?.stop(true);
            server = null;
          },
        },
      ],
    },
    logger,
    messageData: { origins: [origin], ports: [port], product: { name: identity.displayName, version: identity.version } },
    terminate: (exitCode: number) => process.exit(exitCode),
});
