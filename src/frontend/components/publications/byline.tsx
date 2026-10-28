import type { I18nTranslator } from "@trebired/i18n";
import { articleReadMinutes, type Article, type ArticleAuthor } from "./../../shared/publications/articles";
import { formatDocumentDate } from "./../../pages/document/documents";
import type { Lang } from "./../../shared/lang/store";

export function AuthorMark({ author }: { author: ArticleAuthor }) {
  const initials = author.name.split(" ").map((part) => part.charAt(0)).join("").slice(0, 2);
  return (
    <span aria-hidden className="tbfm-avatar" data-author={author.github}>
    {author.avatar ? <img alt="" src={author.avatar} /> : initials}
    </span>
  );
}

export function AuthorLink({ author }: { author: ArticleAuthor }) {
  return (
    <a className="tbf-text-link" href={`https://github.com/${author.github}`} rel="noreferrer" target="_blank">
    {author.name}
    </a>
  );
}

export function Byline({ article, lang, translator }: { article: Article; lang: Lang; translator: I18nTranslator }) {
  return (
    <span className="tbf-text-sm tbf-inline-row tbf-wrap tbf-gap-xs">
    <AuthorLink author={article.author} />
    <time dateTime={article.published}>{formatDocumentDate(article.published, lang)}</time>
    <span>{translator("readTime", { minutes: String(articleReadMinutes(article, lang)) })}</span>
    </span>
  );
}
