import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { NameBand } from "./name";
import { ReleaseBand } from "./release";
import { ShapesBands } from "./shapes";
import { SourceBand } from "./source";

export function HandbookPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <ShapesBands translator={translator} />
    <SourceBand translator={translator} />
    <ReleaseBand translator={translator} />
    <NameBand translator={translator} />
    </main>
  );
}
