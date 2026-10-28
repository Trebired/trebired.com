import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { documentFor } from "./../document/documents";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { AnswersBand } from "./bands";

const SLUG = "faq";

export function FaqPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const entry = documentFor(SLUG, lang);
  const groups = entry?.sections || [];

  return (
    <main data-page="">
    <PageHero
    title={entry?.title || translator("title")}
    lead={entry?.lead[0] || translator("lead")}
    />

    {groups.length > 0 ? <AnswersBand groups={groups} translator={translator} /> : null}
    </main>
  );
}
