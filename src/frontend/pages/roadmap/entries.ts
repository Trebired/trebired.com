import type { Lang } from "#0ft8fsqbbufa";
import type { RoadmapEntry } from "./../../shared/data/types";
import roadmapData from "bundler-data:roadmap";

const ORDER = ["initial-release", "search-visibility", "social-presence", "product-development"];

export type RoadmapItem = RoadmapEntry& { slug: string };

export function roadmapEntries(lang: Lang): RoadmapItem[] {
  const roadmap = roadmapData || {};
  return ORDER
  .map((slug) => {
      const entry = roadmap[slug]?.[lang] || roadmap[slug]?.en;
      return entry ? { ...entry, slug } : null;
  })
  .filter((entry): entry is RoadmapItem => entry !== null);
}
