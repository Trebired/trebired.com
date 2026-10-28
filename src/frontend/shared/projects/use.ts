import type { Project } from "./types";
import { fallbackProjects } from "./home";

export function useProjects(): Project[] {
  return fallbackProjects;
}
