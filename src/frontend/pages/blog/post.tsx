import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import { ArticlePage } from "./../../components/publications/page";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function BlogPostPage({ slug }: { slug: string }) {
  const lang = useLang();
  return <ArticlePage kind="blog" lang={lang} slug={slug} translator={createTranslator({ cs, en }, lang)} />;
}
