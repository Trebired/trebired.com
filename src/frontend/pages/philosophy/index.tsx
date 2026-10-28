import { DocumentSection } from "./../../components/sections";
import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { productVars } from "#y8khalhdifmq";
import { documentFor } from "./../document/documents";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";

const SLUG = "philosophy";

export function PhilosophyPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const entry = documentFor(SLUG, lang);

  return (
    <main data-page="">
    <PageHero
    title={translator("title")}
    lead={translator("lead", productVars)}
    />

    {entry ? <DocumentSection document={entry} label={translator("title")} /> : null}
    </main>
  );
}
