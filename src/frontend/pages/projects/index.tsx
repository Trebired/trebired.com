import { OpenSourceSection } from "./../../components/domain/open_source";
import { StatementSection } from "./../../components/sections";
import { MoreLink } from "#0lprorcn51cl";
import { PageHero } from "#j99bcvog6wwc";
import { WorkSection } from "#1j46y8jyxica";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function ProjectsPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero
    title={translator("title")}
    lead={translator("lead")}
    />

    <WorkSection grouped />

    <OpenSourceSection />

    <StatementSection

    weight="minor"
    aside={<MoreLink href="/philosophy" label={translator("work.openSourceMore")} />}
    statement={translator("work.openSourceStatement")}
    title={translator("work.openSourceTitle")}
    />
    </main>
  );
}
