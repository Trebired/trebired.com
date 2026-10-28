import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import { ArticlePage } from "./../../components/publications/page";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function CaseStudyPage({ slug }: { slug: string }) {
  const lang = useLang();
  return <ArticlePage kind="case-study" lang={lang} slug={slug} translator={createTranslator({ cs, en }, lang)} />;
}
