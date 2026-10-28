import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import { ArticleIndexPage } from "./../../components/publications/index_page";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function BlogPage() {
  const lang = useLang();
  return <ArticleIndexPage kind="blog" lang={lang} translator={createTranslator({ cs, en }, lang)} />;
}
