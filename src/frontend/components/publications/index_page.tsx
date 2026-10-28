import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { PageHero } from "#j99bcvog6wwc";
import { articles } from "./../../shared/publications/articles";
import type { PublicationKind } from "./../../shared/data/types";
import type { Lang } from "./../../shared/lang/store";
import { SectionBand } from "./../sections";
import { Journal } from "./journal";

type ArticleIndexProps = { kind: PublicationKind; lang: Lang; more?: string; translator: I18nTranslator };

function Empty({ more, translator }: Pick<ArticleIndexProps, "more" | "translator">) {
  return (
    <SectionBand archetype="statement" weight="major">
    <p>{translator("empty")}</p>
    {more ? (
        <div>
        <PrimitiveButton softRedirect href={more} variant="primary">
        {translator("more")}
        <Icon spec="remixicon:arrow-right-line" />
        </PrimitiveButton>
        </div>
      ) : null}
    </SectionBand>
  );
}

export function ArticleIndexPage({ kind, lang, more, translator }: ArticleIndexProps) {
  const list = articles(kind);
  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />
    {list.length > 0 ? <Journal articles={list} lang={lang} translator={translator} /> : <Empty more={more} translator={translator} />}
    </main>
  );
}
