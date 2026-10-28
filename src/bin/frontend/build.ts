#!/usr/bin/env bun

import { syncBundlerData } from "@trebired/bundler/frontend-app";

import { buildSite } from "./site_build";
import { publicSiteOrigin, sites } from "./../../frontend/shared/network/constants";
import type { SiteData } from "./../../frontend/shared/data/types";
import { logger } from "./../shared/logger";

const site = sites.main;
const synced = await syncBundlerData({ logger, rootDir: process.cwd() });
const data = synced.data as unknown as SiteData;

Object.assign(globalThis, { BUILD_SITE_DATA: data });

const { build, seoNotes, shell } = await buildSite({
    assets: synced.assets,
    data,
    dataDefine: synced.define,
    development: false,
    logger,
    origin: publicSiteOrigin(site),
    site,
});

for (const note of seoNotes) logger.warn("website.seo", note);
logger.success("website.build", `client_files=${build.client?.outputs.length ?? 0} route_shells=${shell.files.length}`);
