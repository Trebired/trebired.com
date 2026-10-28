import {
  copy_value as CopyValue,
  pill as Pill,
  tab_panel as TabPanel,
  tabs as Tabs,
} from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import type { Lang } from "#0ft8fsqbbufa";
import { MoreLink } from "#0lprorcn51cl";
import { SectionBand } from "./../sections";
import { useLang } from "#32f7ohjh2cr2";
import {
  formatRepoDate,
  repoDescription,
  sourceCategories,
  sourceOrg,
  sourceRepos,
  type SourceCategory,
  type SourceGroup,
  type SourceRepo,
} from "./source_repos";
import { createSectionTranslator } from "./translator";

type RowProps = { lang: Lang; repo: SourceRepo; tooltip: string; translator: I18nTranslator };

type ListProps = { entry: SourceGroup; lang: Lang; translator: I18nTranslator };

type CategoryProps = { category: SourceCategory; lang: Lang; translator: I18nTranslator };

type RegistryProps = { lang: Lang; translator: I18nTranslator };

const FAMILY = "repos";

function repoId(name: string) {
  let hash = 0;
  for (let index = 0; index < name.length; index += 1) hash = (hash * 31 + name.charCodeAt(index)) >>> 0;
  return `src_repo_${hash.toString(36)}`;
}

function panelId(category: string, subcategory?: string) {
  return subcategory ? `repos_${category}_${subcategory}` : `repos_${category}`;
}

function RegistryRow({ lang, repo, tooltip, translator }: RowProps) {
  return (
    <li className="tbfm-cell">
    <span className="tbf-inline-row tbf-between tbf-gap-md tbf-ver-center tbf-wrap">
    <span className="tbf-column tbf-gap-xs2">
    <CopyValue copyValue={`git clone ${repo.cloneUrl}`} id={repoId(repo.name)} tooltip={tooltip} value={repo.name}>
    <a className="tbf-text-link" href={repo.url} rel="noreferrer" target="_blank">{repo.name}</a>
    </CopyValue>
    <span className="tbf-text-sm tbf-text-muted">{repoDescription(repo, lang)}</span>
    </span>
    <span className="tbf-inline-row tbf-gap-sm tbf-ver-center tbf-fit-content">
    <Pill>{repo.license}</Pill>
    <time className="tbf-text-sm tbf-text-muted" dateTime={repo.pushedAt}>
    {translator("openSource.updated", { date: formatRepoDate(repo.pushedAt, lang) })}
    </time>
    </span>
    </span>
    </li>
  );
}

function RegistryList({ entry, lang, translator }: ListProps) {
  const tooltip = translator("openSource.copyTooltip");

  return (
    <ul className="tbfm-panel" style={{ "--panel-min": "100%" } as never}>
    {entry.repos.map((repo) => (
          <RegistryRow key={repo.name} lang={lang} repo={repo} tooltip={tooltip} translator={translator} />
    ))}
    </ul>
  );
}

function subcategoryItems(category: SourceCategory, translator: I18nTranslator) {
  return category.groups.map((entry, index) => ({
        defaultActive: index === 0,
        id: panelId(category.category, entry.group.subcategory),
        label: `${translator(`openSource.groups.${category.category}.${entry.group.subcategory}`)} (${entry.repos.length})`,
        route: entry.group.subcategory,
  }));
}

function CategoryPanel({ category, lang, translator }: CategoryProps) {
  const family = `${FAMILY}-${category.category}`;

  if (category.groups.length < 2) {
    const only = category.groups[0];
    return only ? <RegistryList entry={only} lang={lang} translator={translator} /> : null;
  }

  return (
    <>
    <Tabs familyKey={family} hoistFamilyToParent items={subcategoryItems(category, translator)} />
    {category.groups.map((entry, index) => (
          <TabPanel
          key={entry.key}
          defaultActive={index === 0}
          familyKey={family}
          id={panelId(category.category, entry.group.subcategory)}
          route={entry.group.subcategory}
          >
          <RegistryList entry={entry} lang={lang} translator={translator} />
          </TabPanel>
    ))}
    </>
  );
}

function categoryItems(categories: SourceCategory[], translator: I18nTranslator) {
  return categories.map((category, index) => ({
        defaultActive: index === 0,
        hasNestedTabs: category.groups.length > 1,
        id: panelId(category.category),
        label: `${translator(`openSource.groups.category.${category.category}`)} (${category.total})`,
        route: category.category,
  }));
}

function Registry({ lang, translator }: RegistryProps) {
  const categories = sourceCategories();

  return (
    <div className="tbfm-card tbf-column tbf-gap-md">
    <div className="tbf-inline-row tbf-between tbf-gap-sm tbf-ver-center tbf-border-bottom tbf-padding-bottom-md">
    <h4 className="tbf-text-xs tbf-text-muted">{`github.com/${sourceOrg()}`}</h4>
    <span className="tbf-text-sm tbf-text-muted">
    {translator("openSource.registryMeta", { count: String(sourceRepos().length) })}
    </span>
    </div>
    <div className="tbf-column tbf-gap-sm">
    <Tabs familyKey={FAMILY} items={categoryItems(categories, translator)} />
    {categories.map((category) => (
          <TabPanel
          key={category.category}
          className="tbf-column tbf-gap-sm"
          defaultActive={category === categories[0]}
          familyKey={FAMILY}
          id={panelId(category.category)}
          route={category.category}
          >
          <CategoryPanel category={category} lang={lang} translator={translator} />
          </TabPanel>
    ))}
    </div>
    </div>
  );
}

export function OpenSourceSection() {
  const lang = useLang();
  const translator = createSectionTranslator(lang);

  return (
    <SectionBand
    archetype="source"
    field={translator("openSource.title")}
    headline={translator("openSource.body")}
    id="open-source"
    weight="major"
    >
    <Registry lang={lang} translator={translator} />
    <div className="tbf-inline-row tbf-between tbf-gap-md tbf-wrap">
    <p className="tbf-text-muted">{translator("openSource.footer")}</p>
    <MoreLink href="/licenses" label={translator("openSource.more")} />
    </div>
    </SectionBand>
  );
}
