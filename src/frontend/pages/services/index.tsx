import { CallSection } from "./../../components/sections";
import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { ConditionsBand } from "./conditions";
import { OfferBoard } from "./offer_board";
import { PriceSheet } from "./price_sheet";
import { StackBand } from "./stack";

export function ServicesPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero
    title={translator("title")}
    lead={translator("lead")}
    />

    <OfferBoard lang={lang} translator={translator} />

    <StackBand translator={translator} />

    <ConditionsBand translator={translator} />

    <PriceSheet lang={lang} translator={translator} />

    <CallSection
    actionHref="/process"
    actionLabel={translator("process.action")}
    body={translator("process.lead")}
    title={translator("process.title")}
    />
    </main>
  );
}
