import type { I18nTranslator } from "@trebired/i18n";
import { articlePath, type Article } from "./../../shared/publications/articles";
import { FigureRowsSection, type FigureRow } from "./../sections";
import { PostCover } from "./../primitives/cover";
import type { Lang } from "./../../shared/lang/store";
import { Byline } from "./byline";

type JournalProps = { articles: Article[]; lang: Lang; translator: I18nTranslator };

function TitleLink({ article, lang }: { article: Article; lang: Lang }) {
  return <a data-tbf-soft-redirect="" href={articlePath(article)}>{article.title[lang]}</a>;
}

function rowOf(article: Article, { lang, translator }: JournalProps, latest: boolean): FigureRow {
  return {
    action: articlePath(article),
    className: latest ? "tbf-grid tbf-align-center" : undefined,
    key: article.slug,
    meta: <Byline article={article} lang={lang} translator={translator} />,
    text: article.lead[lang],
    title: <TitleLink article={article} lang={lang} />,
    visual: latest ? <PostCover cover={article.cover} kind={article.kind} seed={article.slug} /> : undefined,
  };
}

export function Journal(props: JournalProps) {
  const [latest, ...earlier] = props.articles;
  if (!latest) return null;
  return (
    <>
    <FigureRowsSection rows={[rowOf(latest, props, true)]} weight="major" />
    {earlier.length > 0 ? (
        <FigureRowsSection
        rows={earlier.map((article) => rowOf(article, props, false))}
        stacked
        title={props.translator("earlier")}
        tone="inverse"
        weight="major"
        />
      ) : null}
    </>
  );
}
