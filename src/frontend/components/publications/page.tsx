import type { I18nTranslator } from "@trebired/i18n";
import { PostHero } from "#j99bcvog6wwc";
import { articleFor } from "./../../shared/publications/articles";
import type { PublicationKind } from "./../../shared/data/types";
import { SiteErrorPage } from "./../../pages/error";
import type { Lang } from "./../../shared/lang/store";
import { ArticleBand, NextBand } from "./article";

type ArticlePageProps = { kind: PublicationKind; lang: Lang; slug: string; translator: I18nTranslator };

export function ArticlePage({ kind, lang, slug, translator }: ArticlePageProps) {
  const article = articleFor(kind, slug);
  if (!article) return <SiteErrorPage status={404} />;

  return (
    <main data-page="">
    <PostHero
    cover={article.cover}
    kind={kind}
    seed={article.slug}
    lead={article.lead[lang]}
    title={article.title[lang]}
    toggleLabels={{ hide: translator("hideText"), open: translator("openCover"), show: translator("showText") }}
    />

    <ArticleBand article={article} lang={lang} translator={translator} />
    <NextBand article={article} lang={lang} translator={translator} />
    </main>
  );
}
