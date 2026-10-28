import { sites, type SiteDefinition } from "./network/constants";

export function currentSite(): SiteDefinition {
  return sites.main;
}
