import { PageHero } from "#j99bcvog6wwc";
import { pageSections } from "./../../shared/page/sections";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { AgainstBand, MoneyBand, MoreBand, PublishBand } from "./bands";

export function AboutPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const [against, publish, money] = pageSections({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    {against ? <AgainstBand lang={lang} section={against} translator={translator} /> : null}
    {publish ? <PublishBand lang={lang} section={publish} translator={translator} /> : null}
    {money ? <MoneyBand lang={lang} section={money} translator={translator} /> : null}
    <MoreBand translator={translator} />
    </main>
  );
}
