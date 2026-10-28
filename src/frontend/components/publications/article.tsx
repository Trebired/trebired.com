import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { TextDocument } from "@trebired/frontend/config";
import type { I18nTranslator } from "@trebired/i18n";
import type { ReactNode } from "react";
import { articlePath, articleReadMinutes, articles, kindPath, type Article } from "./../../shared/publications/articles";
import { DocumentSection, SectionBand } from "./../sections";
import { formatDocumentDate } from "./../../pages/document/documents";
import type { Lang } from "./../../shared/lang/store";
import { AuthorMark } from "./byline";

type ArticleProps = { article: Article; lang: Lang; translator: I18nTranslator };

function Fact({ label, children }: { children: ReactNode; label: string }) {
  return (
    <div className="tbfm-article__fact">
    <h4 className="tbf-text-xs tbf-text-muted">{label}</h4>
    <span>{children}</span>
    </div>
  );
}

function Facts({ article, lang, translator }: ArticleProps) {
  return (
    <>
    <div className="tbfm-article__who">
    <h4 className="tbf-text-xs tbf-text-muted">{translator("written")}</h4>
    <a className="tbfm-article__author" href={`https://github.com/${article.author.github}`} rel="noreferrer" target="_blank">
    <AuthorMark author={article.author} />
    <strong>{article.author.name}</strong>
    <Icon spec="remixicon:external-link-line" />
    </a>
    </div>
    {article.client ? <Fact label={translator("client")}>{article.client}</Fact> : null}
    <Fact label={translator("published")}>
    <time dateTime={article.published}>{formatDocumentDate(article.published, lang)}</time>
    </Fact>
    <Fact label={translator("reading")}>{translator("readTime", { minutes: String(articleReadMinutes(article, lang)) })}</Fact>
    <div>
    <PrimitiveButton softRedirect href={kindPath(article.kind)}>
    <Icon spec="remixicon:arrow-left-line" />
    {translator("back")}
    </PrimitiveButton>
    </div>
    </>
  );
}

function sectionId(heading: string): string {
  return heading.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().replace(/[^a-z0-9]+/gu, "-").replace(/^-+|-+$/gu, "");
}

function documentOf(article: Article, lang: Lang): TextDocument {
  const blocks = article.body[lang];
  const start = blocks.findIndex((block) => block.kind === "heading");
  const opening = (start < 0 ? blocks : blocks.slice(0, start)).map((block) => block.text);
  const sections: TextDocument["sections"] = [];
  for (const block of start < 0 ? [] : blocks.slice(start)) {
    if (block.kind === "heading") sections.push({ body: [], heading: block.text, id: sectionId(block.text) });
    else sections.at(-1)?.body.push(block.text);
  }
  return { lead: opening, outline: true, parts: "prose", sections, title: article.title[lang], updated: article.published };
}

export function ArticleBand(props: ArticleProps) {
  const document = documentOf(props.article, props.lang);
  return <DocumentSection aside={<Facts {...props} />} className="tbfm-article" document={document} label={document.title} opening />;
}

export function NextBand({ article, lang, translator }: ArticleProps) {
  const siblings = articles(article.kind);
  const index = siblings.findIndex((entry) => entry.slug === article.slug);
  const next = siblings.length > 1 ? siblings[(index + 1) % siblings.length] : undefined;
  if (!next) return null;
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <h2 className="tbf-text-xs tbf-text-muted">{translator("next")}</h2>
    <a className="tbf-text-xl5 tbf-lh-xs tbf-font-bold" data-tbf-soft-redirect="" href={articlePath(next)}>{next.title[lang]}</a>
    <p>{next.lead[lang]}</p>
    <div className="tbfm-article__cta">
    <PrimitiveButton softRedirect href={articlePath(next)} variant="primary">
    {translator("read")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
