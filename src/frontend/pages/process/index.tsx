import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { BuildBand, HandBand, ShowBand, StartBand, TalkBand } from "./bands";

export function ProcessPage() {
  const translator = createTranslator({ cs, en }, useLang());
  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />
    <TalkBand translator={translator} />
    <BuildBand translator={translator} />
    <ShowBand translator={translator} />
    <HandBand translator={translator} />
    <StartBand translator={translator} />
    </main>
  );
}
