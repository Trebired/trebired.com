import { PageHero } from "#j99bcvog6wwc";
import { createTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import cs from "./i18n/cs";
import en from "./i18n/en";
import { FixedBand, KeyboardBand, LevelBand, MotionBand, SettingsBand } from "./bands";

export function AccessibilityPage() {
  const lang = useLang();
  const translator = createTranslator({ cs, en }, lang);

  return (
    <main data-page="">
    <PageHero title={translator("title")} lead={translator("lead")} />

    <LevelBand translator={translator} />
    <KeyboardBand translator={translator} />
    <MotionBand translator={translator} />
    <SettingsBand lang={lang} translator={translator} />
    <FixedBand translator={translator} />
    </main>
  );
}
