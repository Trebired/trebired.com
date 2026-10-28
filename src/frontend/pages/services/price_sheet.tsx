import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import type { Lang } from "#0ft8fsqbbufa";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowText } from "@trebired/frontend/hollow";

type SheetProps = { lang: Lang; translator: I18nTranslator };

type Note = { key: string; side: "below" | "start"; x: number; y: number };

const VIEW: [number, number] = [1000, 140];

const CANVAS: [number, number] = [2000, 280];

const LINE = "M0 100H600V40H1000V56H616V116H0Z";

const NOTES: Note[] = [
  { key: "agreed", side: "start", x: 0, y: 71 },
  { key: "harder", side: "start", x: 30, y: 71 },
  { key: "change", side: "start", x: 60.5, y: 28 },
  { key: "done", side: "below", x: 100, y: 40 },
];

const SHIFT = { below: "-100% 0", start: "0 -100%" };

const TERMS = ["covers", "without"];

function noteStyle(note: Note): CSSProperties {
  return { "--note-shift": SHIFT[note.side], "--note-x": `${note.x}%`, "--note-y": `${note.y}%` } as CSSProperties;
}

function Course({ translator }: { translator: I18nTranslator }) {
  const tones = heroTone("/services");
  const mark = { canvas: CANVAS, d: LINE, viewBox: VIEW };
  return (
    <div className="tbfm-course">
    <div className="tbfm-course__plot">
    <RisoArt as="div" className="tbfm-course__layer" hidden kind="svg" mark={mark} recipe="cells" tones={tones} />
    </div>
    <ol className="tbfm-course__notes">
    {NOTES.map((note) => (
          <li className={`tbfm-course__note tbfm-course__${note.side} tbf-text-md`} key={note.key} style={noteStyle(note)}>
          {translator(`course.${note.key}`)}
          </li>
    ))}
    </ol>
    </div>
  );
}

export function PriceSheet({ translator }: SheetProps) {
  return (
    <SectionBand archetype="statement" id="price" tone="muted" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    {translator("priceSheet.first")}
    {" "}
    <HollowText>{translator("priceSheet.second")}</HollowText>
    </Title>
    <p>{translator("course.lead")}</p>
    <Course translator={translator} />
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    {TERMS.map((term) => (
          <div className="tbf-column tbf-gap-sm" key={term}>
          <Title className="tbf-text-xl3" level={3}>{translator(`priceTerms.${term}.heading`)}</Title>
          <p>{translator(`priceTerms.${term}.body1`)}</p>
          </div>
    ))}
    </div>
    </SectionBand>
  );
}
