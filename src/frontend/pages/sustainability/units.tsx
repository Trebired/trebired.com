import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { circle, rounded } from "./../../components/riso/shapes";
import { INK } from "./palette";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

const WIDTH = 1600;

const repeat = (count: number, part: (index: number) => string) => Array.from({ length: count }, (_, index) => part(index)).join("");

const mark = (height: number, d: string): Mark => ({ canvas: [WIDTH, height], d, fit: "fill", rule: "evenodd", viewBox: [WIDTH, height] });

function ears(height: number): string {
  const holes = [0.28, 0.72].map((share) => share * height);
  return holes.map((y) => circle(30, y, 9) + circle(WIDTH - 30, y, 9)).join("");
}

function perforation(left: number, top: number, columns: number, rows: number, pitch: number, radius: number): string {
  return repeat(columns * rows, (index) => {
      const [column, row] = [index % columns, Math.floor(index / columns)];
      return circle(left + column * pitch + (row % 2) * (pitch / 2), top + row * pitch, radius);
  });
}

function bay(x: number, y: number, width: number, height: number): string {
  return rounded(x, y, width, height, 6) + rounded(x + 8, y + height - 22, width - 16, 14, 4) + circle(x + width - 14, y + 14, 5);
}

const OLD = rounded(0, 0, WIDTH, 148, 10) + ears(148) +
  repeat(6, (index) => bay(90 + index * 80, 18, 70, 112)) +
  rounded(620, 30, 300, 26, 6) + rounded(960, 34, 120, 40, 6) + circle(1110, 54, 8) +
  perforation(1150, 30, 21, 6, 18, 5);

const MIDDLE = rounded(0, 0, WIDTH, 148, 10) + ears(148) +
  perforation(70, 30, 10, 6, 18, 5) + repeat(8, (index) => bay(300 + index * 90, 18, 80, 112)) +
  rounded(1080, 40, 160, 30, 6) + perforation(1290, 30, 14, 6, 18, 5);

const NEW = rounded(0, 0, WIDTH, 296, 12) + ears(296) +
  repeat(12, (index) => bay(90 + (index % 4) * 200, 26 + Math.floor(index / 4) * 86, 190, 76)) +
  perforation(940, 34, 27, 11, 22, 7);

const FRONTS: [key: string, size: "one" | "two", art: Mark, recipe: Recipe, tones: [string, string]][] = [
  ["old", "one", mark(148, OLD), "lines", [INK.periwinkle, INK.periwinkle]],
  ["middle", "one", mark(148, MIDDLE), "cross", ["!#ffd150", "!#f5bf2a"]],
  ["new", "two", mark(296, NEW), "bar", [INK.stone, INK.stone]],
];

function Era({ at, translator }: { at: string; translator: I18nTranslator }) {
  return (
    <div className="tbf-column tbf-gap-xs">
    <Title className="tbf-text-xl3" level={3}>{translator(`rack.${at}.title`)}</Title>
    <p className="tbf-text-muted">{translator(`rack.${at}.note`)}</p>
    </div>
  );
}

export function RackBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("rack.title")}</Title>
    <p>{translator("rack.text")}</p>
    <div className="tbfm-units">
    <Era at="oldest" translator={translator} />
    <div aria-hidden="true" className="tbfm-units__stack">
    {FRONTS.map(([key, size, art, recipe, tones]) => (
          <RisoArt
          as="div"
          className={`tbfm-units__front tbfm-units--${size}`}
          hidden
          key={key}
          kind="svg"
          mark={art}
          recipe={recipe}
          tones={tones}
          />
    ))}
    </div>
    <Era at="newest" translator={translator} />
    </div>
    </SectionBand>
  );
}
