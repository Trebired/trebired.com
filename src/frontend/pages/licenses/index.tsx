import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { productVars } from "#y8khalhdifmq";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { CompareBand, EntriesBand, SplitBand } from "./bands";

export function LicensesPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead", productVars)} />

    <SplitBand translator={translator} />
    <CompareBand translator={translator} />
    <EntriesBand translator={translator} />
    </main>
  );
}
