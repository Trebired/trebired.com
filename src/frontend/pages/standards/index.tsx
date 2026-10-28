import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { GateBand, ImportsBand, OrgBand, ScaleBand } from "./bands";

export function StandardsPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <OrgBand translator={translator} />
    <GateBand translator={translator} />
    <ImportsBand translator={translator} />
    <ScaleBand translator={translator} />
    </main>
  );
}
