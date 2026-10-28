import fs from "node:fs/promises";
import path from "node:path";

import type { BundlerDataAsset, BundlerDataSource, BundlerDataSourceContext, BundlerDataSourceResult } from "@trebired/bundler";

import type { TeamLink, TeamProfile, TeamText } from "./../../../frontend/shared/data/types";

const DEFAULT_SIZE = 400;
const DEFAULT_TIMEOUT = 15000;
const AVATAR_TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

type TeamSourcePerson = { github: string; role: string };
type TeamSourceOptions = { people: TeamSourcePerson[]; size?: number; timeout?: number };
type TeamMeta = { bio?: unknown; company?: unknown; links?: unknown; location?: unknown; name?: unknown };
type Avatar = { bytes: Uint8Array; file: string };

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function localized(value: unknown): TeamText {
  if (typeof value === "string") return value.trim() ? { en: value.trim() } : {};
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(Object.entries(value).map(([lang, entry]) => [lang, text(entry)]).filter(([, entry]) => entry));
}

function metaLinks(value: unknown): TeamLink[] {
  if (!Array.isArray(value)) return [];
  return value
  .map((link) => ({ label: text(link?.label), service: text(link?.service), url: text(link?.url) }))
  .filter((link) => link.url && link.label);
}

async function requestMeta(options: TeamSourceOptions, login: string): Promise<TeamMeta|null> {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/${login}/${login}/HEAD/meta.json`, {
        signal: AbortSignal.timeout(options.timeout || DEFAULT_TIMEOUT),
    });
    if (!response.ok) return null;
    return await response.json() as TeamMeta;
  } catch {
    return null;
  }
}

async function requestAvatar(options: TeamSourceOptions, login: string): Promise<Avatar|null> {
  try {
    const response = await fetch(`https://github.com/${login}.png?size=${options.size || DEFAULT_SIZE}`, {
        signal: AbortSignal.timeout(options.timeout || DEFAULT_TIMEOUT),
    });
    const type = String(response.headers.get("content-type") || "").split(";")[0] || "";
    if (!response.ok || !AVATAR_TYPES[type]) return null;
    return { bytes: new Uint8Array(await response.arrayBuffer()), file: `${login}.${AVATAR_TYPES[type]}` };
  } catch {
    return null;
  }
}

async function cachedAvatar(context: BundlerDataSourceContext, avatar: string): Promise<Avatar|null> {
  if (!avatar) return null;
  const file = path.basename(avatar);
  try {
    return { bytes: await fs.readFile(path.join(context.dir, context.name, file)), file };
  } catch {
    return null;
  }
}

async function keepAvatar(context: BundlerDataSourceContext, avatar: Avatar): Promise<void> {
  const file = path.join(context.dir, context.name, avatar.file);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, avatar.bytes);
}

function toProfile(person: TeamSourcePerson, meta: TeamMeta, avatar: Avatar | null): TeamProfile {
  return {
    avatar: avatar ? `/people/${avatar.file}` : "",
    bio: localized(meta.bio),
    company: text(meta.company),
    links: metaLinks(meta.links),
    location: localized(meta.location),
    login: person.github,
    name: text(meta.name) || person.github,
    profileUrl: `https://github.com/${person.github}`,
    role: person.role,
  };
}

async function profileFor(
  options: TeamSourceOptions,
  context: BundlerDataSourceContext,
  person: TeamSourcePerson,
  stored: TeamProfile | undefined,
): Promise<{live:boolean;profile:TeamProfile|null;avatar:Avatar|null}> {
  const meta = await requestMeta(options, person.github);
  const fresh = await requestAvatar(options, person.github);
  if (fresh) await keepAvatar(context, fresh);
  const avatar = fresh || await cachedAvatar(context, stored?.avatar || "");
  if (meta) return { avatar, live: true, profile: toProfile(person, meta, avatar) };
  if (!stored?.login) return { avatar: null, live: false, profile: null };
  return { avatar, live: false, profile: { ...stored, avatar: avatar ? `/people/${avatar.file}` : "", role: person.role } };
}

async function readTeam(options: TeamSourceOptions, context: BundlerDataSourceContext): Promise<BundlerDataSourceResult> {
  const stored = Array.isArray(context.cached) ? context.cached as TeamProfile[] : [];
  const assets: BundlerDataAsset[] = [];
  const people: TeamProfile[] = [];
  let fetched = 0;
  for (const person of options.people) {
    const found = await profileFor(options, context, person, stored.find((row) => row.login === person.github));
    if (found.live) fetched += 1;
    if (found.avatar) assets.push({ contents: found.avatar.bytes, path: `people/${found.avatar.file}` });
    if (found.profile) people.push(found.profile);
  }
  if (people.length === 0) throw new Error("no team profile available");
  const kept = people.length - fetched;
  return { assets, detail: `${fetched} profiles, ${assets.length} avatars${kept > 0 ? `, ${kept} kept` : ""}`, value: people };
}

export function githubTeamSource(options: TeamSourceOptions): BundlerDataSource {
  return { fetch: (context) => readTeam(options, context) };
}
