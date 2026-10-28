import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { BULB_BOX, LAYERS } from "./layers";
import { REST } from "./onion";
import { RINGS, RINGS_BOX } from "./rings";
import { KEY, LILAC, TOR } from "./palette";

export function OnionBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`onion.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div className="tbfm-onion">
    <div className="tbfm-onion__copy tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    <p>{copy("relays")}</p>
    <ol className="tbf-list-plain tbf-column tbf-gap-xs">
    {LAYERS.map((layer) => (
          <li className="tbf-inline-row tbf-ver-center tbf-gap-xs" key={layer.key}>
          <span aria-hidden="true" className="tbfm-onion__badge" style={layer.ink}>{layer.number}</span>
          {copy(`layers.${layer.key}`)}
          </li>
    ))}
    </ol>
    </div>
    <div aria-hidden="true" className="tbfm-onion__art">
    <div className="tbfm-onion__bulb" style={BULB_BOX}>
    <RisoArt as="div" className="tbfm-onion__rings" hidden kind="svg" mark={RINGS} recipe="slab" style={RINGS_BOX} tones={[LILAC, KEY]} />
    <RisoArt as="div" className="tbfm-onion__piece" density={3.5} hidden kind="svg" mark={REST} recipe="slab" tones={[TOR, LILAC]} />
    {LAYERS.map((layer) => (
          <RisoArt
          as="div"
          className="tbfm-onion__piece"
          density={3.5}
          hidden
          key={layer.key}
          kind="svg"
          mark={layer.mark}
          recipe={layer.recipe}
          style={layer.style}
          tones={layer.tones}
          />
    ))}
    {LAYERS.map((layer) => (
          <span className="tbfm-onion__badge tbfm-onion__marker" key={`marker-${layer.key}`} style={layer.marker}>{layer.number}</span>
    ))}
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
