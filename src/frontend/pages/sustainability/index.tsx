import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { BudgetBand, SunsetBand } from "./bands";
import { LogBand } from "./log";
import { NatureBand } from "./nature";
import { ReuseBand } from "./reuse";
import { RackBand } from "./units";
import { StanceBand } from "./stance";
import { WasteBand } from "./waste";

export function SustainabilityPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <NatureBand translator={translator} />
    <WasteBand translator={translator} />
    <StanceBand translator={translator} />
    <BudgetBand translator={translator} />
    <RackBand translator={translator} />
    <ReuseBand translator={translator} />
    <SunsetBand translator={translator} />
    <LogBand translator={translator} />
    </main>
  );
}
