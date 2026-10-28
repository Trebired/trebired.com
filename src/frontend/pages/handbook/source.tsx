import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { FOLDER } from "./folder_mark";
import { INK } from "./palette";

const FOLDERS: [name: keyof typeof FOLDER, recipe: Recipe, tones: [string, string]][] = [
  ["src", "slab", [INK.orchid, INK.blue]],
  ["dist", "dissolve", [INK.teal, INK.sky]],
];

export function SourceBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`source.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div aria-hidden="true" className="tbfm-folders">
    {FOLDERS.map(([name, recipe, tones]) => (
          <RisoArt as="div" className="tbfm-folders__folder" dark hidden key={name} kind="svg" mark={FOLDER[name]} recipe={recipe} tones={tones} />
    ))}
    </div>
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    <div className="tbf-column tbf-gap-md">
    <p>{copy("src")}</p>
    <p>{copy("dist")}</p>
    </div>
    <p>{copy("rule")}</p>
    </div>
    </SectionBand>
  );
}
