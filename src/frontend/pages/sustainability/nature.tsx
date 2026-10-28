import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { HollowText } from "@trebired/frontend/hollow";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { deepen, type Recipe } from "./../../components/riso/recipes";
import { circle, fixed } from "./../../components/riso/shapes";
import { heroTone } from "./../../components/chrome/hero/tones";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const VIEW: Point = [1600, 460];

const STEP = 20;

const BLEED = 40;

const PEAKS: Point[] = [
  [-40, 300], [90, 214], [170, 262], [300, 150], [420, 252], [520, 196], [610, 262], [760, 118], [880, 232],
  [980, 176], [1080, 244], [1200, 78], [1330, 222], [1420, 156], [1520, 238], [1640, 196],
];

const SNOW = [3, 7, 11, 13];

const PINES: Point[] = [
  [60, 70], [100, 92], [140, 62], [220, 80], [960, 74], [1000, 100], [1040, 84], [1080, 112], [1120, 78],
  [1165, 96], [1210, 70], [1290, 88], [1330, 64], [1420, 82], [1460, 100], [1500, 74], [1545, 90], [1585, 68],
];

const hillY = (x: number) => 330 - 40 * Math.sin(x / 280 + 1) - 18 * Math.sin(x / 120);

const nearY = (x: number) => 398 - 22 * Math.sin(x / 240 + 2) - 10 * Math.sin(x / 90 + 1);

const path = (points: Point[]) => `M${points.map(([x, y]) => `${fixed(x)} ${fixed(y)}`).join("L")}Z`;

function ridge(height: (x: number) => number): string {
  const xs = Array.from({ length: (VIEW[0] + BLEED * 2) / STEP + 1 }, (_, index) => index * STEP - BLEED);
  return path([[-BLEED, VIEW[1]], ...xs.map((x): Point => [x, height(x)]), [VIEW[0] + BLEED, VIEW[1]]]);
}

function snowcap(index: number): string {
  const [[lx, ly], [px, py], [rx, ry]] = [PEAKS[index - 1], PEAKS[index], PEAKS[index + 1]] as Point[];
  const depth = Math.min(ly, ry, py + 64) - py - 6;
  const edge = (x: number, y: number) => px + ((x - px) * depth) / (y - py);
  const [left, right] = [edge(lx, ly) + 8, edge(rx, ry) - 8];
  const ragged: Point[] = [[px + (right - px) / 3, py + depth - 14], [px - (px - left) / 3, py + depth - 4]];
  return path([[px, py + 12], [right, py + depth], ...ragged, [left, py + depth]]);
}

function pine([x, tall]: Point): string {
  const base = nearY(x) + 10;
  const tier = (bottom: number, height: number, half: number): Point[] => [[x - half, bottom], [x, bottom - height], [x + half, bottom]];
  return path(tier(base, tall, tall * 0.32)) + path(tier(base - tall * 0.4, tall * 0.75, tall * 0.24));
}

const mark = (d: string, rule?: "evenodd"): Mark => ({ canvas: VIEW, d, fit: "fill", rule, viewBox: VIEW });

const MOUNTAINS = path([...PEAKS, [1640, VIEW[1]], [-40, VIEW[1]]]) + SNOW.map(snowcap).join("");

const [SUN, LEAF] = heroTone("/sustainability");

const LAYERS: [key: string, art: Mark, recipe: Recipe, tones: [string, string]][] = [
  ["sun", mark(circle(1380, 96, 58)), "bar", [deepen(SUN, 1.5), deepen(SUN, 1.8)]],
  ["peaks", mark(MOUNTAINS, "evenodd"), "lines", [deepen(LEAF, 1.1), deepen(SUN, 1.1)]],
  ["hills", mark(ridge(hillY)), "cross", [deepen(SUN, 1.4), deepen(LEAF, 1.4)]],
  ["forest", mark(ridge(nearY) + PINES.map(pine).join("")), "bar", [deepen(LEAF, 1.8), deepen(LEAF, 1.5)]],
];

export function NatureBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-horizon__copy tbf-column tbf-gap-md">
    <Title className="tbf-text-xl6" level={2}>
    <HollowText>{translator("nature.title.hollow")}</HollowText>
    {" "}
    {translator("nature.title.rest")}
    </Title>
    <p>{translator("nature.text")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-horizon">
    {LAYERS.map(([key, art, recipe, tones]) => (
          <RisoArt as="div" className="tbfm-horizon__layer" hidden key={key} kind="svg" mark={art} recipe={recipe} tones={tones} />
    ))}
    </div>
    </SectionBand>
  );
}
