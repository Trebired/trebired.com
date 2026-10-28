import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import { CloseBand } from "./close";
import { PosterHero } from "./hero";
import { AccessBand } from "./access";
import { MakeBand } from "./make";
import { WhoBand } from "./who";
import { TrackingBand } from "./tracking";
import { OsiBand } from "./osi";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function HomePage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PosterHero lang={lang} translator={translator} />
    <WhoBand translator={translator} />
    <OsiBand translator={translator} />
    <MakeBand translator={translator} />
    <TrackingBand translator={translator} />
    <AccessBand translator={translator} />
    <CloseBand translator={translator} />
    </main>
  );
}
