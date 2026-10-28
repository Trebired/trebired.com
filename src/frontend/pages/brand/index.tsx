import { PageHero } from "#j99bcvog6wwc";
import { currentSite } from "./../../shared/site";
import { BrandIdentity, BrandMarks, BrandRules, BrandSpace, BrandTypeface } from "./sections";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";

export function BrandPage() {
  const translator = createTranslator({ cs, en }, useLang());

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead", { brand: currentSite().name })} />

    <BrandIdentity />
    <BrandMarks translator={translator} />
    <BrandTypeface />
    <BrandRules translator={translator} />
    <BrandSpace translator={translator} />
    </main>
  );
}
