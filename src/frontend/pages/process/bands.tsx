import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { HollowHeading, HollowTitle } from "./../../components/primitives/hollow_title";
import { INK } from "./palette";
import { SIGN } from "./sign_mark";
import { Fragment } from "react";

type BandProps = { translator: I18nTranslator };

export function TalkBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`talk.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-dialogue">
    <HollowHeading className="tbfm-dialogue__title tbf-text-xl6" level={2} text={copy("title")} />
    <div aria-hidden="true" className="tbfm-dialogue__ask">
    <RisoArt as="div" className="tbfm-dialogue__left" hidden kind="svg" mark={SIGN.ask} recipe="cells" tones={[INK.pink, INK.stone]} />
    </div>
    <p className="tbfm-dialogue__text">{copy("text")}</p>
    <div aria-hidden="true" className="tbfm-dialogue__reply">
    <RisoArt as="div" className="tbfm-dialogue__right" hidden kind="svg" mark={SIGN.reply} recipe="lines" tones={[INK.mint, INK.sky]} />
    </div>
    </div>
    </SectionBand>
  );
}

export function BuildBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`build.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-unlock">
    <div aria-hidden="true" className="tbfm-unlock__art">
    <RisoArt as="div" className="tbfm-unlock__layer" dark hidden kind="svg" mark={SIGN.shackle} recipe="lines" tones={[INK.stone, INK.grey]} />
    <RisoArt as="div" className="tbfm-unlock__layer" dark hidden kind="svg" mark={SIGN.body} recipe="cells" tones={[INK.mint, INK.sky]} />
    </div>
    <div className="tbfm-unlock__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <p>{copy("text")}</p>
    </div>
    </div>
    </SectionBand>
  );
}

const ROWS = 20;

const NOTES = [
  ["tbfm-fitting__left", "tbfm-fitting__right"],
  ["tbfm-fitting__right", "tbfm-fitting__left"],
];

function rowsFor(count: number): number[] {
  const step = count > 1 ? (0.6 - 0.17) / (count - 1) : 0;
  return Array.from({ length: count }, (_, index) => Math.round((0.17 + index * step) * ROWS) + 1);
}

export function ShowBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`show.${key}`);
  const words = copy("title").split(" ");
  const rows = rowsFor(words.length);
  const [lead, follow] = NOTES[words.length % 2];
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-fitting">
    <h2 className="tbf-text-xl7">
    {words.map((word, index) => (
          <Fragment key={index}>
          {index > 0 ? " " : null}
          <span style={{ gridColumn: index % 2 ? "3" : "1", gridRow: String(rows[index]) }}>
          <HollowTitle text={word} />
          </span>
          </Fragment>
    ))}
    </h2>
    <div aria-hidden="true" className="tbfm-fitting__form">
    <RisoArt as="div" className="tbfm-fitting__layer" hidden kind="svg" mark={SIGN.form} recipe="slab" tones={[INK.grey, INK.stone]} />
    <RisoArt as="div" className="tbfm-fitting__layer" hidden kind="svg" mark={SIGN.garment} recipe="slab" tones={[INK.pink, INK.butter]} />
    <RisoArt as="div" className="tbfm-fitting__layer" hidden kind="svg" mark={SIGN.pins} recipe="slab" tones={[INK.mint, INK.sky]} />
    </div>
    <p className={lead}>{copy("text")}</p>
    <p className={follow}>{copy("after")}</p>
    </div>
    </SectionBand>
  );
}

export function HandBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`hand.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-handover">
    <div className="tbfm-handover__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <p>{copy("text")}</p>
    <p>{copy("after")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-handover__slot">
    <RisoArt as="div" className="tbfm-handover__art" dark hidden kind="svg" mark={SIGN.key} recipe="lines" tones={[INK.pink, INK.butter]} />
    </div>
    </div>
    </SectionBand>
  );
}

export function StartBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`start.${key}`);
  return (
    <SectionBand archetype="statement" weight="major">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("text")}</p>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/contact" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
