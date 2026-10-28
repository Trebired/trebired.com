import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { teamProfiles } from "./people";
import { JoinBand, PeopleBand } from "./bands";

export function TeamPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <PeopleBand lang={lang} people={teamProfiles()} translator={translator} />

    <JoinBand translator={translator} />
    </main>
  );
}
