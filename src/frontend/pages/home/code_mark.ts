import { seeded } from "./ground_mark";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "slice"; viewBox: Point };

const VIEW: Point = [1800, 1000];

const TALL: Point = [900, 3200];

const ROW = 46;

const BAR = 16;

const INDENT = 54;

const fixed = (value: number) => Math.round(value * 10) / 10;

function bar(left: number, top: number, width: number): string {
  const [x0, y0, x1, y1] = [fixed(left), fixed(top), fixed(left + width), fixed(top + BAR)];
  return `M${x0} ${y0}H${x1}V${y1}H${x0}Z`;
}

function source(view: Point): { keyword: string; plain: string } {
  const random = seeded(23);
  const [keyword, plain]: [string[], string[]] = [[], []];
  let depth = 0;
  for (let row = 0; row * ROW < view[1]; row++) {
    depth = Math.max(0, Math.min(5, depth + Math.round(random() * 2 - 1)));
    if (random() < 0.1) continue;
    let left = 40 + depth * INDENT;
    const tokens = 2 + Math.floor(random() * 7);
    for (let token = 0; token < tokens && left < view[0] - 60; token++) {
      const width = 40 + random() * 200;
      (random() < 0.24 ? keyword : plain).push(bar(left, row * ROW + (ROW - BAR) / 2, width));
      left += width + 22;
    }
  }
  return { keyword: keyword.join(""), plain: plain.join("") };
}

const mark = (view: Point, d: string): Mark => ({ canvas: view, d, fit: "slice", viewBox: view });

const LINES = source(VIEW);

const TALL_LINES = source(TALL);

const CODE = { keyword: mark(VIEW, LINES.keyword), plain: mark(VIEW, LINES.plain) };

const TALL_CODE = { keyword: mark(TALL, TALL_LINES.keyword), plain: mark(TALL, TALL_LINES.plain) };

export { CODE, TALL_CODE };
