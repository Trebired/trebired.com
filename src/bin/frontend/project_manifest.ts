import { fetchRepoFiles } from "@trebired/bundler";

import { isKnownProjectGroup, isKnownProjectStatus } from "./../../frontend/shared/project_taxonomy";

type ProjectDescription = { cs: string; en: string };

type ProjectManifest = {
  category: string;
  description: ProjectDescription;
  npm: string;
  status: string;
  subcategory: string;
};

const MANIFEST_PATH = ".trebired/project/info.json";

function readDescription(value: unknown): ProjectDescription | null {
  const record = (value || {}) as Record<string, unknown>;
  const cs = String(record.cs || "").trim();
  const en = String(record.en || "").trim();
  if (!cs || !en) return null;
  return { cs, en };
}

function readManifest(payload: unknown): ProjectManifest | null {
  const record = (payload || {}) as Record<string, unknown>;
  if (record.schema !== 1) return null;
  const category = String(record.category || "").trim();
  const subcategory = String(record.subcategory || "").trim();
  const status = String(record.status || "").trim();
  const description = readDescription(record.description);
  if (!description || !isKnownProjectGroup({ category, subcategory }) || !isKnownProjectStatus(status)) return null;
  return { category, description, npm: String(record.npm || "").trim(), status, subcategory };
}

export async function readProjectManifests(org: string, repos: string[]) {
  const payloads = await fetchRepoFiles<unknown>({ org, path: MANIFEST_PATH, repos });
  const found = new Map<string, ProjectManifest>();
  for (const [repo, payload] of payloads) {
    const manifest = readManifest(payload);
    if (manifest) found.set(repo, manifest);
  }
  return found;
}

export type { ProjectDescription, ProjectManifest };
