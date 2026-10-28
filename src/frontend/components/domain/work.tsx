import type { Project } from "./../../shared/projects/types";
import { FigureRowsSection } from "./../sections";
import { useProjects } from "#icxakngb3479";
import { MoreLink } from "#0lprorcn51cl";
import { useLang } from "#32f7ohjh2cr2";
import { createSectionTranslator } from "./translator";
import type { I18nTranslator } from "@trebired/i18n";

function projectRows(projects: Project[]) {
  return projects.map((project) => ({
        external: project.href.startsWith("https://"),
        href: project.href,
        key: project.id,
        meta: project.kind,
        text: project.description,
        title: project.title,
        visual: <div className="tbfm-frame tbfm-work-visual" />,
  }));
}

const OVERRIDDEN = ["admitpress", "ecommerce", "restaurant"];
const TAGS = ["tag1", "tag2", "tag3", "tag4"];

export function localizeProject(project: Project, translator: I18nTranslator): Project {
  if (!OVERRIDDEN.includes(project.id)) return project;

  return {
    ...project,
    description: translator(`projects.${project.id}.description`),
    kind: translator(`projects.${project.id}.kind`),
    tags: TAGS
    .map((tag) => translator(`projects.${project.id}.${tag}`))
    .filter((tag) => !tag.startsWith("projects.")),
    title: translator(`projects.${project.id}.title`),
  };
}

function GroupedWorkSection({ all, inverted }: { all: Project[]; inverted: boolean }) {
  const lang = useLang();
  const translator = createSectionTranslator(lang);
  const own = all.filter((project) => project.isOwn);
  const client = all.filter((project) => !project.isOwn);

  return (
    <>
    {own.length > 0 ? (
        <FigureRowsSection
        id="prace"
        rows={projectRows(own)}
        title={translator("work.ownGroup")}
        tone={inverted ? "inverse" : undefined}
        weight="major"
        />
      ) : null}
    {client.length > 0 ? (
        <FigureRowsSection
        grid
        rows={projectRows(client)}
        title={translator("work.clientGroup")}

        />
      ) : null}
    </>
  );
}

type FlatWorkSectionProps = {
  grid: boolean;
  inverted: boolean;
  moreHref?: string;
  moreLabel?: string;
  projects: Project[];
  standalone: boolean;
};

function FlatWorkSection({
    grid,
    inverted,
    moreHref,
    moreLabel,
    projects,
    standalone,
  }: FlatWorkSectionProps) {
  const lang = useLang();
  const translator = createSectionTranslator(lang);

  return (
    <FigureRowsSection
    grid={grid}
    id="prace"
    rows={projectRows(projects)}
    title={standalone ? undefined : translator("work.title")}
    tone={inverted ? "inverse" : undefined}
    weight="major"
    more={moreHref && moreLabel ? <MoreLink href={moreHref} label={moreLabel} /> : null}
    />
  );
}

type WorkSectionProps = {
  grid?: boolean;
  inverted?: boolean;
  standalone?: boolean;
  grouped?: boolean;
  limit?: number;
  moreHref?: string;
  moreLabel?: string;
};

export function WorkSection({
    grid = false,
    inverted = false,
    standalone = false,
    grouped = false,
    limit,
    moreHref,
    moreLabel,
  }: WorkSectionProps) {
  const lang = useLang();
  const translator = createSectionTranslator(lang);
  const all = useProjects().map((project) => localizeProject(project, createSectionTranslator(lang)));

  if (grouped) return <GroupedWorkSection all={all} inverted={inverted} />;

  const projects = typeof limit === "number" ? all.slice(0, limit) : all;
  return (
    <FlatWorkSection
    grid={grid}
    inverted={inverted}
    moreHref={moreHref}
    moreLabel={moreLabel}
    projects={projects}
    standalone={standalone}
    />
  );
}
