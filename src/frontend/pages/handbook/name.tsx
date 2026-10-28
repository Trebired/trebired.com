import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { HollowText } from "@trebired/frontend/hollow";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { INK } from "./palette";
import { PERSON } from "./person_mark";

const PEOPLE: [part: keyof typeof PERSON, recipe: Recipe, tones: [string, string]][] = [
  ["empty", "slab", [INK.char, INK.stone]],
  ["author", "cells", [INK.orchid, INK.blue]],
];

export function NameBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`name.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints tbfm-flush" tone="muted" weight="major">
    <div className="tbfm-people">
    <div aria-hidden="true" className="tbfm-people__art">
    {PEOPLE.map(([part, recipe, tones]) => (
          <RisoArt as="div" className={`tbfm-people__${part}`} hidden key={part} kind="svg" mark={PERSON[part]} recipe={recipe} tones={tones} />
    ))}
    </div>
    <div className="tbfm-people__text tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>
    {copy("title.before")}
    {" "}
    <HollowText>{copy("title.word")}</HollowText>
    {" "}
    {copy("title.after")}
    </Title>
    <p>{copy("text")}</p>
    <p>{copy("closing")}</p>
    </div>
    </div>
    </SectionBand>
  );
}
