import type { BundlerDataSourceContext, GithubRepoRow } from "@trebired/bundler";

import { readProjectManifests, type ProjectManifest } from "./../project_manifest";
import type { RepoRow } from "./../../../frontend/shared/data/types";
import { otherProjectGroup } from "./../../../frontend/shared/project_taxonomy";

const ORG = "Trebired";

function storedRows(cached: unknown): Map<string, RepoRow> {
  const rows = Array.isArray(cached) ? cached as RepoRow[] : [];
  return new Map(rows.map((row) => [row.name, row]));
}

function projectFields(manifest: ProjectManifest | undefined, stored: RepoRow | undefined) {
  if (manifest) return manifest;
  if (stored?.category) {
    return {
      category: stored.category,
      description: stored.description,
      npm: stored.npm,
      status: stored.status,
      subcategory: stored.subcategory,
    };
  }
  const fallback = otherProjectGroup();
  return {
    category: fallback.category,
    description: { cs: "", en: "" },
    npm: "",
    status: "active",
    subcategory: fallback.subcategory,
  };
}

function toRow(repo: GithubRepoRow, manifests: Map<string, ProjectManifest>, stored: Map<string, RepoRow>): RepoRow {
  const project = projectFields(manifests.get(repo.name), stored.get(repo.name));
  return {
    category: project.category,
    cloneUrl: repo.cloneUrl,
    description: project.description,
    language: repo.language,
    license: repo.license,
    name: repo.name,
    npm: project.npm,
    pushedAt: repo.pushedAt,
    status: project.status,
    subcategory: project.subcategory,
    url: repo.url,
  };
}

export async function describeRepos(
  repos: GithubRepoRow[],
  { cached }: BundlerDataSourceContext,
): Promise<RepoRow[]> {
  const manifests = await readProjectManifests(ORG, repos.map((repo) => repo.name));
  const stored = storedRows(cached);
  return repos.map((repo) => toRow(repo, manifests, stored));
}
