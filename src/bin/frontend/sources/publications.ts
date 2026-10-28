import fs from "node:fs/promises";
import path from "node:path";

import { readProcessEnvValue } from "@trebired/env";

import type { BundlerDataAsset, BundlerDataSource, BundlerDataSourceContext, BundlerDataSourceResult } from "@trebired/bundler";
import type { Publication, PublicationBlock, PublicationKind } from "./../../../frontend/shared/data/types";

type PublicationsOptions = { branch?: string; langs: ["en", "cs"]; org: string; repo: string; timeout?: number };

type Tree = { commit: string; files: string[] };

type Parsed = { body: PublicationBlock[]; fields: Record<string, string> };

type Entry = { folder: string; kind: PublicationKind; slug: string };

type Read = { asset?: BundlerDataAsset; post: Publication };

const DEFAULT_TIMEOUT = 15000;
const FRONT_MATTER = /^---\n([\s\S]*?)\n---\n/u;
const REQUIRED = ["title", "lead", "published", "author"];
const KINDS: Record<PublicationKind, string> = { blog: "blog", "case-study": "case-studies" };
const COVER = /^cover\.(png|jpe?g|webp|svg)$/u;

function headers(): Record<string, string> {
  const token = readProcessEnvValue("GITHUB_TOKEN");
  return { "user-agent": "trebired-com", ...(token ? { authorization: `Bearer ${token}` } : {}) };
}

async function request(url: string, options: PublicationsOptions): Promise<Response> {
  const response = await fetch(url, { headers: headers(), signal: AbortSignal.timeout(options.timeout || DEFAULT_TIMEOUT) });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response;
}

function rawUrl(options: PublicationsOptions, commit: string, file: string): string {
  return `https://raw.githubusercontent.com/${options.org}/${options.repo}/${commit}/${file}`;
}

async function listFiles(options: PublicationsOptions): Promise<Tree> {
  const api = `https://api.github.com/repos/${options.org}/${options.repo}`;
  const head = await (await request(`${api}/commits/${options.branch || "main"}`, options)).json() as { sha?: string };
  if (!head.sha) throw new Error(`${options.org}/${options.repo} has no commit on ${options.branch || "main"}`);
  const payload = await (await request(`${api}/git/trees/${head.sha}?recursive=1`, options)).json() as { tree?: { path: string; type: string }[] };
  return { commit: head.sha, files: (payload.tree || []).filter((entry) => entry.type === "blob").map((entry) => entry.path) };
}

function blocksOf(name: string, body: string): PublicationBlock[] {
  const blocks: PublicationBlock[] = [];
  for (const part of body.split(/\n{2,}/u).map((chunk) => chunk.trim()).filter(Boolean)) {
    const [first = "", ...rest] = part.split("\n");
    if (first.startsWith("#") && !/^## \S/u.test(first)) throw new Error(`${name} uses a heading level other than ##`);
    if (!first.startsWith("## ")) {
      blocks.push({ kind: "paragraph", text: part });
      continue;
    }
    blocks.push({ kind: "heading", text: first.slice(3).trim() });
    if (rest.length > 0) blocks.push({ kind: "paragraph", text: rest.join("\n").trim() });
  }
  if (!blocks.some((block) => block.kind === "heading")) throw new Error(`${name} has no ## section`);
  if (!blocks.some((block) => block.kind === "paragraph")) throw new Error(`${name} has no paragraphs`);
  return blocks;
}

function parse(entry: Entry, raw: string): Parsed {
  const name = `${entry.folder}/${entry.slug}`;
  const text = raw.replace(/\r\n/gu, "\n").trimStart();
  const match = FRONT_MATTER.exec(text);
  if (!match) throw new Error(`${name} has no front matter`);
  const fields: Record<string, string> = {};
  for (const line of(match[1] as string).split("\n")) {
    const [, key = "", value = ""] = /^([a-z]+):\s*(.*)$/u.exec(line.trim()) || [];
    if (key) fields[key] = value.trim();
  }
  const required = entry.kind === "case-study" ? [...REQUIRED, "client"] : REQUIRED;
  const missing = required.filter((key) => !fields[key]);
  if (missing.length > 0) throw new Error(`${name} is missing ${missing.join(", ")}`);
  return { body: blocksOf(name, text.slice(match[0].length)), fields };
}

function publication({ kind, slug }: Entry, [en, cs]: [Parsed, Parsed], cover: string): Publication {
  return {
    author: en.fields.author || "",
    body: { cs: cs.body, en: en.body },
    client: en.fields.client || "",
    cover,
    kind,
    lead: { cs: cs.fields.lead || "", en: en.fields.lead || "" },
    published: en.fields.published || "",
    slug,
    title: { cs: cs.fields.title || "", en: en.fields.title || "" },
    updated: en.fields.updated || "",
  };
}

const keptFile = (context: BundlerDataSourceContext, asset: string) => path.join(context.dir, context.name, asset.replace(/\//gu, "-"));

async function ownCover(
  options: PublicationsOptions,
  context: BundlerDataSourceContext,
  file: string,
  entry: Entry,
  commit: string
): Promise<BundlerDataAsset> {
  const contents = new Uint8Array(await (await request(rawUrl(options, commit, file), options)).arrayBuffer());
  const asset = { contents, path: `${entry.folder}/${entry.slug}.${file.split(".").pop()}` };
  await fs.mkdir(path.dirname(keptFile(context, asset.path)), { recursive: true });
  await fs.writeFile(keptFile(context, asset.path), contents);
  return asset;
}

async function readPost(options: PublicationsOptions, context: BundlerDataSourceContext, entry: Entry, { commit, files }: Tree): Promise<Read> {
  const base = `${entry.folder}/${entry.slug}`;
  const texts = await Promise.all(options.langs.map(async(lang) => (await request(rawUrl(options, commit, `${base}/${lang}.md`), options)).text()));
  const draft = publication(entry, texts.map((raw) => parse(entry, raw)) as [Parsed, Parsed], "");
  const own = files.find((file) => file.startsWith(`${base}/`) && COVER.test(file.slice(base.length + 1)));
  if (!own) return { post: draft };
  const asset = await ownCover(options, context, own, entry, commit);
  return { asset, post: { ...draft, cover: `/${asset.path}` } };
}

function entriesOf(files: string[], langs: string[]): Entry[] {
  return (Object.entries(KINDS) as [PublicationKind, string][]).flatMap(([kind, folder]) => {
      const slugs = new Set(files.filter((file) => file.startsWith(`${folder}/`)).map((file) => file.split("/")[1] as string));
      return [...slugs]
      .filter((slug) => slug && langs.every((lang) => files.includes(`${folder}/${slug}/${lang}.md`)))
      .sort()
      .map((slug) => ({ folder, kind, slug }));
  });
}

async function keptPost(context: BundlerDataSourceContext, post: Publication): Promise<Read> {
  if (!post.cover) return { post };
  const asset = post.cover.slice(1);
  try {
    return { asset: { contents: new Uint8Array(await fs.readFile(keptFile(context, asset))), path: asset }, post };
  } catch {
    return { post: { ...post, cover: "" } };
  }
}

const assetsOf = (read: Read[]): BundlerDataAsset[] => read.flatMap((entry) => (entry.asset ? [entry.asset] : []));

async function kept(context: BundlerDataSourceContext): Promise<BundlerDataSourceResult> {
  const posts = ((context.cached || []) as Publication[]).filter((post) => post.kind && post.body.en.every((block) => typeof block === "object"));
  if (posts.length === 0) throw new Error("publications are not reachable and were never cached");
  const read = await Promise.all(posts.map((post) => keptPost(context, post)));
  return { assets: assetsOf(read), detail: `${posts.length} publications, kept`, value: read.map((entry) => entry.post) };
}

async function readPublications(options: PublicationsOptions, context: BundlerDataSourceContext): Promise<BundlerDataSourceResult> {
  let tree: Tree;
  try {
    tree = await listFiles(options);
  } catch {
    return kept(context);
  }
  const read = await Promise.all(entriesOf(tree.files, options.langs).map((entry) => readPost(options, context, entry, tree)));
  const posts = read.map((entry) => entry.post).sort((first, second) => second.published.localeCompare(first.published));
  return { assets: assetsOf(read), detail: `${posts.length} publications from ${options.org}/${options.repo}`, value: posts };
}

export function publicationsSource(options: PublicationsOptions): BundlerDataSource {
  return { fetch: (context) => readPublications(options, context) };
}
