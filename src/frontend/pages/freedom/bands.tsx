import { Quote, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { KEY, SIGNAL, STEEL } from "./palette";
import { CANTON, STRIPES } from "./flag";

type BandProps = { translator: I18nTranslator };

const STATUE_SIZE: [number, number] = [887, 1799];

const PORTRAIT_SIZE: [number, number] = [1032, 710];

const TIMELINE: [key: string, row: number][] = [["patriot", 2], ["bulk", 4], ["section", 6], ["snowden", 8], ["freedom", 10], ["renewed", 12]];

export function LibertyBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`liberty.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints tbfm-flush" weight="major">
    <Title className="tbf-text-xl6 tbf-text-center" level={2}>{copy("title")}</Title>
    <div className="tbfm-liberty">
    <div className="tbfm-liberty__side tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    <p className="tbf-text-xl2">{copy("verdict")}</p>
    </div>
    <RisoArt as="div" className="tbfm-liberty__statue" hidden kind="photo" recipe="bar" size={STATUE_SIZE} tones={[SIGNAL, KEY]}>
    <img alt="" src="/trebired/liberty.png" />
    </RisoArt>
    <div className="tbfm-liberty__side tbf-column tbf-gap-md">
    <Quote cite={copy("cite")}>
    <p className="tbf-text-xl2">{copy("quote")}</p>
    </Quote>
    <p>{copy("watched")}</p>
    </div>
    </div>
    </SectionBand>
  );
}

export function RecordedBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`recorded.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div className="tbfm-record">
    <div aria-hidden="true" className="tbfm-record__art">
    <RisoArt as="div" className="tbfm-record__stripes" dark kind="svg" mark={STRIPES} recipe="lines" tones={[SIGNAL, KEY]} />
    <RisoArt as="div" className="tbfm-record__canton" dark kind="svg" mark={CANTON} recipe="slab" tones={[STEEL, KEY]} />
    </div>
    <ol className="tbfm-record__lines tbf-list-plain">
    {TIMELINE.map(([key, row]) => (
          <li className="tbfm-record__line" key={key} style={{ gridColumn: row < 8 ? "2" : "1 / -1", gridRow: String(row) }}>
          <span className="tbf-font-bold">{copy(`timeline.${key}.year`)}</span>
          {" "}
          {copy(`timeline.${key}.text`)}
          </li>
    ))}
    </ol>
    </div>
    <p className="tbf-text-xl2">{copy("next")}</p>
    </SectionBand>
  );
}

export function SnowdenBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`snowden.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div className="tbfm-dossier">
    <div className="tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    <p>{copy("outcome")}</p>
    <Quote cite={copy("cite")}>
    <p className="tbf-text-xl2">{copy("quote")}</p>
    </Quote>
    <p>{copy("next")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-dossier__face">
    <RisoArt as="div" className="tbfm-portrait" hidden kind="photo" recipe="bar" size={PORTRAIT_SIZE} tones={[STEEL, SIGNAL]}>
    <img alt="" src="/trebired/snowden.png" />
    </RisoArt>
    </div>
    </div>
    </SectionBand>
  );
}
