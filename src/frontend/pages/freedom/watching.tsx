import { button as PrimitiveButton, Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { HollowText } from "@trebired/frontend/hollow";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import { RisoArt } from "./../../components/riso/art";
import { CAMERAS } from "./cameras";
import { KEY, SIGNAL, STEEL } from "./palette";

type BandProps = { translator: I18nTranslator };

const HAND_SIZE: [number, number] = [609, 604];

const ACTIONS: [key: string, href: string][] = [
  ["browser", "https://www.torproject.org/download/"],
  ["relay", "https://community.torproject.org/relay/"],
];

export function WatchingBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`watching.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <RisoArt as="div" className="tbfm-watch" dark hidden kind="svg" mark={CAMERAS} recipe="slab" tones={[STEEL, KEY]} />
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div className="tbf-column tbf-gap-lg">
    <RisoArt as="strong" className="tbfm-watch__count" dark kind="text" recipe="lines" tones={[SIGNAL, STEEL]}>{copy("value")}</RisoArt>
    <h5>{copy("label")}</h5>
    </div>
    <div className="tbfm-watch__copy tbf-column tbf-gap-md">
    <ProseParagraph text={copy("count")} />
    <p>{copy("faces")}</p>
    <p className="tbf-text-xl2">{copy("answer")}</p>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton href="https://atlasofsurveillance.org/" rel="noreferrer" target="_blank" variant="primary">
    {copy("atlas")}
    <Icon spec="remixicon:external-link-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}

export function HelpBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`help.${key}`);
  const words = ["first", "middle", "hollow"].map((key) => copy(`title.${key}`));
  return (
    <SectionBand archetype="statement" className="tbfm-prints tbfm-flush" tone="muted" weight="major">
    <Title className="tbf-text-xl7" level={2}>
    {words[0]}
    {" "}
    {words[1]}
    {" "}
    <HollowText>{words[2]}</HollowText>
    </Title>
    <div className="tbf-grid tbf-stack-mobile tbf-gap-xl">
    <RisoArt as="div" className="tbfm-pointer" hidden kind="photo" recipe="bar" size={HAND_SIZE} tones={[KEY, SIGNAL]}>
    <img alt="" src="/trebired/hand.png" />
    </RisoArt>
    <div className="tbfm-flush__copy tbf-column tbf-gap-md">
    <p>{copy("tools")}</p>
    <p>{copy("council")}</p>
    <div className="tbf-inline-row tbf-wrap tbf-hor-right tbf-gap-sm">
    {ACTIONS.map(([key, href], index) => (
          <PrimitiveButton href={href} key={key} rel="noreferrer" target="_blank" variant={index === 0 ? "primary" : undefined}>
          {copy(`actions.${key}`)}
          <Icon spec="remixicon:external-link-line" />
          </PrimitiveButton>
    ))}
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
