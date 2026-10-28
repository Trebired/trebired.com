import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { INK } from "./palette";
import { WASTE } from "./heap";

const INKS: [recipe: Recipe, tones: [string, string]][] = [
  ["lines", [INK.periwinkle, INK.peach]],
  ["cross", [INK.butter, INK.stone]],
  ["bar", [INK.mint, INK.sage]],
];

export function StanceBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`stance.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-heap__copy tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <strong className="tbf-text-xl5 tbf-lh-sm">{copy("claim")}</strong>
    <p>{copy("text")}</p>
    <p>{copy("how")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-heap">
    {WASTE.map((art, index) => {
          const [recipe, tones] = INKS[index] as [Recipe, [string, string]];
          return <RisoArt as="div" className="tbfm-heap__layer" hidden key={index} kind="svg" mark={art} recipe={recipe} tones={tones} />;
    })}
    </div>
    </SectionBand>
  );
}
