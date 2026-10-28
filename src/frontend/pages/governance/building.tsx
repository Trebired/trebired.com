import { RisoArt } from "./../../components/riso/art";

type Point = [number, number];

const CENTERS = [120, 360, 600, 840, 1080];

const FRONT: Point = [1200, 730];

const rect = (x: number, y: number, width: number, height: number) => `M${x} ${y}h${width}v${height}h${-width}Z`;

function column(center: number): string {
  const flutes = [-30, -4, 22].map((x) => rect(center + x, 380, 8, 216)).join("");
  return rect(center - 70, 340, 140, 22) + rect(center - 50, 368, 100, 240) + flutes + rect(center - 66, 614, 132, 20);
}

const PEDIMENT = "M40 210L600 30L1160 210ZM140 196L600 58L1060 196ZM568 142a32 32 0 1 0 64 0a32 32 0 1 0 -64 0Z";

const ENTABLATURE = rect(20, 216, 1160, 26) + rect(70, 248, 1060, 58) + rect(50, 312, 1100, 22);

const STEPS = rect(30, 640, 1140, 24) + rect(15, 670, 1170, 24) + rect(0, 700, 1200, 24);

const BETWEEN = [240, 480, 720, 960];

const arch = (center: number, half: number, top: number) => `M${center - half} 634V${top}A${half} ${half} 0 0 1 ${center + half} ${top}V634Z`;

const ARCHES = BETWEEN.map((center) => arch(center, 50, 460) + arch(center, 34, 462)).join("");

const FACADE = PEDIMENT + ENTABLATURE + CENTERS.map(column).join("") + ARCHES + STEPS;

const BUILDING = { canvas: FRONT, d: FACADE, rule: "evenodd" as const, viewBox: FRONT };

export function Building({ tones }: { tones: [string, string] }) {
  return <RisoArt as="div" className="tbfm-civic__building" hidden kind="svg" mark={BUILDING} recipe="lines" tones={tones} />;
}
