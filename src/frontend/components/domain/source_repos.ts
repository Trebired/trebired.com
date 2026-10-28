import type { Lang } from "#0ft8fsqbbufa";
import { projectGroupKey, projectGroups, type ProjectGroup } from "./../../shared/project_taxonomy";
import { link } from "./../../shared/product";
import reposData from "bundler-data:repos";
import type { RepoRow } from "./../../shared/data/types";

type SourceRepo = RepoRow;

type SourceGroup = { group: ProjectGroup; key: string; repos: SourceRepo[] };

type SourceCategory = { category: string; groups: SourceGroup[]; total: number };

const locales: Record<Lang, string> = { cs: "cs-CZ", en: "en-GB" };

export function sourceRepos(): SourceRepo[] {
  return reposData || [];
}

export function sourceOrg(): string {
  return link.github.split("/").filter(Boolean).pop() || "";
}

export function sourceGroups(): SourceGroup[] {
  return projectGroups()
  .map((group) => ({
        group,
        key: projectGroupKey(group),
        repos: (reposData || []).filter(
          (repo) => repo.category === group.category && repo.subcategory === group.subcategory,
        ),
  }))
  .filter((entry) => entry.repos.length > 0);
}

export function sourceCategories(): SourceCategory[] {
  const categories: SourceCategory[] = [];
  for (const entry of sourceGroups()) {
    const found = categories.find((candidate) => candidate.category === entry.group.category);
    const target = found || { category: entry.group.category, groups: [], total: 0 };
    if (!found) categories.push(target);
    target.groups.push(entry);
    target.total += entry.repos.length;
  }
  return categories;
}

export function repoDescription(repo: SourceRepo, lang: Lang): string {
  return repo.description[lang] || repo.description.en;
}

export function formatRepoDate(value: string, lang: Lang): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";
  return new Intl.DateTimeFormat(locales[lang], {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
      year: "numeric",
  }).format(parsed);
}

export type { SourceCategory, SourceGroup, SourceRepo };
