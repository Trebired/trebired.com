import { PageHero } from "#j99bcvog6wwc";
import { pageSections } from "./../../shared/page/sections";
import { useLang } from "#32f7ohjh2cr2";
import { createTranslator } from "@trebired/i18n";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { BuildingBand, RecordBand } from "./bands";
import { ContinuityBand, RoutesBand } from "./exits";

export function GovernancePage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);
  const [record, fixed, routes, continuity] = pageSections({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    {fixed ? <BuildingBand section={fixed} translator={translator} /> : null}
    {record ? <RecordBand section={record} translator={translator} /> : null}
    {routes ? <RoutesBand section={routes} translator={translator} /> : null}
    {continuity ? <ContinuityBand section={continuity} translator={translator} /> : null}
    </main>
  );
}
