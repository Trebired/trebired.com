const DEFAULT_BRANCH = "main";
const DEFAULT_TIMEOUT = 15000;
const FRONT_MATTER = /^---\n([\s\S]*?)\n---\n/u;

type RoadmapOptions = {
  branch?: string;
  dir: string;
  langs: string[];
  org: string;
  repo: string;
  slugs: string[];
  timeout?: number;
};

type RoadmapEntry = { color: string; description: string[]; status: string; title: string };
type RoadmapData = Record<string, Record<string, RoadmapEntry>>;

function entryUrl(options: RoadmapOptions, slug: string, lang: string): string {
  const branch = options.branch || DEFAULT_BRANCH;
  return `https://raw.githubusercontent.com/${options.org}/${options.repo}/${branch}/${options.dir}/${slug}/${lang}.md`;
}

function parseEntry(raw: string): RoadmapEntry | null {
  const match = FRONT_MATTER.exec(String(raw || "").replace(/\r\n/gu, "\n").trimStart());
  if (!match) return null;
  const fields: Record<string, string> = {};
  for (const line of(match[1] as string).split("\n")) {
    const [, key = "", value = ""] = /^([a-z]+):\s*(.*)$/u.exec(line.trim()) || [];
    if (key) fields[key] = value.trim();
  }
  const body = raw.slice(match.index + match[0].length).trim();
  const description = body.split(/\n{2,}/u).map((part) => part.trim()).filter(Boolean);
  if (!fields.title || !fields.status || description.length === 0) return null;
  return {
    color: fields.color || "",
    description,
    status: fields.status,
    title: fields.title,
  };
}

async function requestEntry(options: RoadmapOptions, slug: string, lang: string): Promise<RoadmapEntry|null> {
  try {
    const response = await fetch(entryUrl(options, slug, lang), {
        signal: AbortSignal.timeout(options.timeout || DEFAULT_TIMEOUT),
    });
    if (!response.ok) return null;
    return parseEntry(await response.text());
  } catch {
    return null;
  }
}

async function readRoadmap(options: RoadmapOptions, context: { cached?: unknown }) {
  const stored = (context.cached || {}) as RoadmapData;
  const entries: RoadmapData = {};
  let fetched = 0;
  for (const slug of options.slugs) {
    for (const lang of options.langs) {
      const live = await requestEntry(options, slug, lang);
      if (live) fetched += 1;
      const entry = live || stored[slug]?.[lang];
      if (!entry) continue;
      entries[slug] = entries[slug] || {};
      entries[slug][lang] = entry;
    }
  }
  const missing = options.slugs.flatMap((slug) => options.langs
    .filter((lang) => !entries[slug]?.[lang])
    .map((lang) => `${slug}/${lang}`));
  if (missing.length > 0) throw new Error(`no roadmap entry available for ${missing.join(", ")}`);
  return {
    detail: `${fetched} roadmap entries from ${options.org}/${options.repo}`,
    value: entries,
  };
}

export function roadmapSource(options: RoadmapOptions) {
  return { fetch: (context: { cached?: unknown }) => readRoadmap(options, context) };
}

export type { RoadmapEntry };
