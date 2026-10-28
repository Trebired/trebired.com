import { PageHero } from "#j99bcvog6wwc";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import { pageSections } from "./../../shared/page/sections";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { OpenBand, RulesBand } from "./bands";
import { ReportBand } from "./report";
import { TermsBand } from "./terms";

export function ContributePage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const [open, terms, rules, report] = pageSections({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />
    <OpenBand section={open} translator={translator} />
    <RulesBand section={rules} translator={translator} />
    <ReportBand section={report} translator={translator} />
    <TermsBand section={terms} translator={translator} />
    </main>
  );
}
