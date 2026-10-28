import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { FAINT, INK, PALE, SOFT } from "./palette";
import { MAKE } from "./make_mark";
import { GROUND } from "./ground_mark";
import { HollowHeading } from "./../../components/primitives/hollow_title";

type Layer = [mark: keyof typeof MAKE, recipe: Recipe, tones: [string, string]];

type Box = [art: string, layers: Layer[]];

type Ground = [mark: keyof typeof GROUND, tones: [string, string]];

const PENCIL: Box = ["tbfm-make__pencil", [["pencil", "cells", [SOFT.violet, INK.stone]]]];

const NIB: Box = ["tbfm-make__nib", [["nib", "cells", [SOFT.pink, INK.stone]]]];

const TILES: [key: string, tile: string, ground: Ground, boxes: Box[]][] = [
  ["website", "tbfm-make__wide", ["network", [PALE.blue, PALE.stone]], [["tbfm-make__globe", [["globe", "lines", [SOFT.blue, INK.stone]]]]]],
  [
    "app",
    "tbfm-make__tall",
    ["graph", [PALE.lead, PALE.stone]],
    [["tbfm-make__gears", [["gear", "lines", [SOFT.lead, INK.stone]], ["orbit", "lines", [SOFT.blue, INK.stone]]]]],
  ],
  ["identity", "", ["specimen", [FAINT.pink, FAINT.stone]], [PENCIL, NIB]],
  ["linux", "", ["code", [PALE.butter, PALE.stone]], [["tbfm-make__tux", [["tux", "cells", [SOFT.butter, INK.stone]]]]]],
];

function Art({ art, layers }: { art: string; layers: Layer[] }) {
  return (
    <div aria-hidden="true" className={`tbfm-make__art ${art}`}>
    {layers.map(([mark, recipe, tones]) => (
          <RisoArt as="div" className="tbfm-make__layer" hidden key={mark} kind="svg" mark={MAKE[mark]} recipe={recipe} tones={tones} />
    ))}
    </div>
  );
}

export function MakeBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`make.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <ul className="tbfm-make tbf-list-plain">
    {TILES.map(([key, tile, [ground, tones], boxes]) => (
          <li className={`tbfm-make__tile ${tile}`} key={key}>
          <RisoArt as="div" className="tbfm-make__ground" hidden kind="svg" mark={GROUND[ground]} recipe="slab" tones={tones} />
          <Title className="tbf-text-xl3" level={3}>{copy(`lines.${key}`)}</Title>
          <div aria-hidden="true" className="tbfm-make__stage">
          {boxes.map(([art, layers]) => <Art art={art} key={art} layers={layers} />)}
          </div>
          </li>
    ))}
    </ul>
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    <p>{copy("lead")}</p>
    <p>{copy("text")}</p>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/services" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
