import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { ReportBand, ResponseBand, ScopeBand, TestBand } from "./bands";

export function SecurityPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <ReportBand translator={translator} />
    <ResponseBand translator={translator} />
    <TestBand translator={translator} />
    <ScopeBand translator={translator} />
    </main>
  );
}
