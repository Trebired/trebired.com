import { DocumentSection } from "./../../components/sections";
import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { documentFor, formatDocumentDate } from "./documents";
import { SiteErrorPage } from "./../error";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function DocumentPage({ slug }: { slug: string }) {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const entry = documentFor(slug, lang);

  if (!entry) return <SiteErrorPage status={404} />;

  return (
    <main data-page="">
    <PageHero
    title={entry.title}
    lead={translator("policy.updated", { date: formatDocumentDate(entry.updated, lang) })}
    />

    <DocumentSection document={entry} label={entry.title} />
    </main>
  );
}
