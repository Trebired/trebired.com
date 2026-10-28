import type { SupportedLang } from "./../runtime/i18n/lang";
import { Publication, PublicationBlock, PublicationKind } from "./../data/types";
import { sitePublications, siteTeam } from "./../data/read";

export type ArticleAuthor = { avatar?: string; github: string; name: string };

export type ArticleText = Record<SupportedLang, string>;

export type ArticleCover = { image: string };

export type Article = {
  author: ArticleAuthor;
  body: Record<SupportedLang, PublicationBlock[]>;
  client: string;
  cover?: ArticleCover;
  kind: PublicationKind;
  lead: ArticleText;
  published: string;
  slug: string;
  title: ArticleText;
};

const ROUTES: Record<PublicationKind, string> = { blog: "/blog", "case-study": "/case-studies" };

function authorFor(login: string): ArticleAuthor {
  const person = (siteTeam() || []).find((entry) => entry.login.toLowerCase() === login.toLowerCase());
  return { avatar: person?.avatar || undefined, github: login, name: person?.name || login };
}

function articleOf(entry: Publication): Article {
  return {
    author: authorFor(entry.author),
    body: entry.body,
    client: entry.client,
    cover: entry.cover ? { image: entry.cover } : undefined,
    kind: entry.kind,
    lead: entry.lead,
    published: entry.published,
    slug: entry.slug,
    title: entry.title,
  };
}

export function articles(kind: PublicationKind): Article[] {
  return (sitePublications() || []).filter((entry) => entry.kind === kind).map(articleOf);
}

export function articleFor(kind: PublicationKind, slug: string): Article | undefined {
  return articles(kind).find((article) => article.slug === slug);
}

export function kindPath(kind: PublicationKind): string {
  return ROUTES[kind];
}

export function articlePath(article: Pick<Article, "kind"|"slug">): string {
  return `${ROUTES[article.kind]}/${article.slug}`;
}

export function articleReadMinutes(article: Article, lang: SupportedLang): number {
  const words = [article.lead[lang], ...article.body[lang].map((block) => block.text)]
  .join(" ")
  .replace(/<!--.*?-->/gu, "")
  .split(/\s+/u)
  .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
