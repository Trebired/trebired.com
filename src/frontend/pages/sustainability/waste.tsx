import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import { RisoArt } from "./../../components/riso/art";
import { rounded } from "./../../components/riso/shapes";
import { INK } from "./palette";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const COLUMNS = 25;
const ROWS = 4;
const CELL = 40;
const PITCH = 48;
const RECYCLED = 22;

const VIEW: Point = [COLUMNS * PITCH - (PITCH - CELL), ROWS * PITCH - (PITCH - CELL)];

const REPORT = "https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-Waste-Monitor-2024.aspx";

const cell = (index: number) => rounded(Math.floor(index / ROWS) * PITCH, (index % ROWS) * PITCH, CELL, CELL, 6);

const cells = (from: number, to: number) => Array.from({ length: to - from }, (_, index) => cell(from + index)).join("");

const FILLED: Mark = { canvas: VIEW, d: cells(0, RECYCLED), fit: "fill", viewBox: VIEW };

const EMPTY = cells(RECYCLED, COLUMNS * ROWS);

export function WasteBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`waste.${key}`);
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <ProseParagraph text={translator("waste.text", { report: REPORT })} />
    <div aria-hidden="true" className="tbfm-waste">
    <svg className="tbfm-waste__layer" preserveAspectRatio="none" viewBox={`0 0 ${VIEW[0]} ${VIEW[1]}`}>
    <path d={EMPTY} fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
    <RisoArt as="div" className="tbfm-waste__layer" dark hidden kind="svg" mark={FILLED} recipe="bar" tones={[INK.butter, INK.peach]} />
    </div>
    <ul className="tbf-grid tbf-cols-2 tbf-gap-xl tbf-list-plain">
    <li className="tbf-column tbf-gap-xs">
    <Title className="tbf-text-xl5 tbf-lh-xs" level={3}>{copy("recycled.value")}</Title>
    <p>{copy("recycled.text")}</p>
    </li>
    <li className="tbf-column tbf-gap-xs">
    <Title className="tbf-text-xl5 tbf-lh-xs tbf-text-muted" level={3}>{copy("lost.value")}</Title>
    <p>{copy("lost.text")}</p>
    </li>
    </ul>
    </SectionBand>
  );
}
