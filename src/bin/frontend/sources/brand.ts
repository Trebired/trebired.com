import type { BrandData, BrandTone } from "./../../../frontend/shared/data/types";
import { flattenMark } from "./brand_path";

const DEFAULT_BRANCH = "main";
const DEFAULT_TIMEOUT = 15000;

type BrandOptions = {
  branch?: string;
  dir: string;
  org: string;
  repo: string;
  timeout?: number;
};

type BrandManifest = {
  colors: Record<string, string>;
  logos: Record<string, Record<BrandTone, string>>;
  name: string;
};

function fileUrl(options: BrandOptions, file: string): string {
  return `https://raw.githubusercontent.com/${options.org}/${options.repo}/${options.branch || DEFAULT_BRANCH}/${options.dir}/${file}`;
}

async function readText(options: BrandOptions, file: string): Promise<string> {
  const response = await fetch(fileUrl(options, file), { signal: AbortSignal.timeout(options.timeout || DEFAULT_TIMEOUT) });
  if (!response.ok) throw new Error(`${options.dir}/${file} answered ${response.status}`);
  return response.text();
}

async function readManifest(options: BrandOptions): Promise<BrandManifest> {
  const manifest = JSON.parse(await readText(options, "brand.json")) as BrandManifest;
  if (!manifest.logos || !manifest.colors) throw new Error(`${options.dir}/brand.json names no logos or colours`);
  return manifest;
}

async function readBrand(options: BrandOptions) {
  const manifest = await readManifest(options);
  const logos: BrandData["logos"] = {};
  for (const [kind, tones] of Object.entries(manifest.logos)) {
    logos[kind] = { dark: await readText(options, tones.dark), light: await readText(options, tones.light) };
  }
  return {
    detail: `${Object.keys(logos).length * 2} logos from ${options.org}/${options.repo}`,
    value: { colors: manifest.colors, logos, name: manifest.name } satisfies BrandData,
  };
}

async function readMark(options: BrandOptions) {
  const manifest = await readManifest(options);
  const minimal = manifest.logos.minimal;
  if (!minimal) throw new Error(`${options.dir}/brand.json names no minimal logo`);
  const mark = flattenMark(await readText(options, minimal.light));
  return { detail: `the minimal mark from ${options.org}/${options.repo}`, value: { ...mark, colors: manifest.colors } };
}

export function brandSource(options: BrandOptions) {
  return { fetch: () => readBrand(options) };
}

export function brandMarkSource(options: BrandOptions) {
  return { fetch: () => readMark(options) };
}
