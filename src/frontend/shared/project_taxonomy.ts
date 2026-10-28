type ProjectGroup = { category: string; subcategory: string };

const PROJECT_GROUPS: readonly ProjectGroup[] = [
  { category: "app", subcategory: "desktop" },
  { category: "package", subcategory: "web" },
  { category: "package", subcategory: "core" },
  { category: "package", subcategory: "runtime" },
  { category: "package", subcategory: "data" },
  { category: "package", subcategory: "security" },
  { category: "package", subcategory: "tooling" },
];

const PROJECT_STATUSES: readonly string[] = ["active", "maintenance", "experimental", "archived"];

const OTHER_GROUP: ProjectGroup = { category: "other", subcategory: "other" };

export function projectGroups(): readonly ProjectGroup[] {
  return [...PROJECT_GROUPS, OTHER_GROUP];
}

export function projectGroupKey(group: ProjectGroup): string {
  return `${group.category}.${group.subcategory}`;
}

export function isKnownProjectGroup(group: ProjectGroup): boolean {
  return PROJECT_GROUPS.some((known) => known.category === group.category && known.subcategory === group.subcategory);
}

export function isKnownProjectStatus(status: string): boolean {
  return PROJECT_STATUSES.includes(status);
}

export function otherProjectGroup(): ProjectGroup {
  return OTHER_GROUP;
}

export type { ProjectGroup };
