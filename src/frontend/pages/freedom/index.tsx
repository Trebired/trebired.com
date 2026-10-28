import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { LibertyBand, RecordedBand, SnowdenBand } from "./bands";
import { HelpBand, WatchingBand } from "./watching";
import { OnionBand } from "./tor";

export function FreedomPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <LibertyBand translator={translator} />
    <RecordedBand translator={translator} />
    <SnowdenBand translator={translator} />
    <WatchingBand translator={translator} />
    <OnionBand translator={translator} />
    <HelpBand translator={translator} />
    </main>
  );
}
