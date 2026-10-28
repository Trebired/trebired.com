import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { KEY } from "./key_mark";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import { INK, PALE, SOFT } from "./palette";

const LAYERS: [part: keyof typeof KEY, recipe: Recipe, tones: [string, string]][] = [
  ["ring", "slab", [SOFT.lead, PALE.lead]],
  ["body", "cells", [SOFT.blue, INK.grey]],
  ["top", "slab", [PALE.blue, PALE.stone]],
];

export function AccessBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`access.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-keycap">
    <div className="tbfm-keycap__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("text")}</p>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/accessibility" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    <div aria-hidden="true" className="tbfm-keycap__art">
    {LAYERS.map(([part, recipe, tones]) => (
          <RisoArt as="div" className="tbfm-keycap__layer" hidden key={part} kind="svg" mark={KEY[part]} recipe={recipe} tones={tones} underText />
    ))}
    </div>
    </div>
    </SectionBand>
  );
}
