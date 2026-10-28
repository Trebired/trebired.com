import { DocumentSection } from "./../sections";
import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { documentFor } from "./../../pages/document/documents";
import type { PageMessages } from "./../../shared/page/sections";
import { useLang } from "#32f7ohjh2cr2";

export function MetaDocumentPage({ messages, slug }: { messages: PageMessages; slug: string }) {
  const lang = useLang();
  const translator = createTranslator(messages, lang);
  const entry = documentFor(slug, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    {entry ? <DocumentSection document={entry} label={translator("title")} /> : null}
    </main>
  );
}
