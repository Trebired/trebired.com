import { siteTeam } from "./../../shared/data/read";
import type { TeamProfile } from "./../../shared/data/types";

export function teamProfiles(): TeamProfile[] {
  return siteTeam() || [];
}

export type { TeamProfile };
