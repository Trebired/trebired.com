import { circle, rounded } from "./../../components/riso/shapes";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

type Piece = [start: number, end: number, half: number];

const VIEW: Point = [1400, 620];

const AXIS = 250;

const CENTRE = 1180;

const HEAD: Piece[] = [
  [0, 42, 108],
  [48, 70, 103],
  [76, 190, 98],
  [196, 304, 112],
  [310, 424, 98],
  [430, 452, 103],
  [458, 500, 108],
];

const HANDLE: Piece[] = [
  [134, 154, 30],
  [980, 1002, 44],
  [1008, 1068, 50],
];

const SHAFT: [start: number, end: number, thin: number, thick: number] = [160, 974, 30, 38];

const KNOB = { radius: 60, x: 68 };

const BLOCK = { body: [526, 610, 200], top: [500, 520, 188] };

const fixed = (value: number) => Math.round(value * 10) / 10;

const shape = (points: Point[]) => `M${points.map(([x, y]) => `${fixed(x)} ${fixed(y)}`).join("L")}Z`;

const across = ([start, end, half]: Piece, radius: number) => rounded(CENTRE - half, start, half * 2, end - start, radius);

const along = ([start, end, half]: Piece, radius: number) => rounded(start, AXIS - half, end - start, half * 2, radius);

function shaft(scale = 1, lift = 0): string {
  const [start, end, thin, thick] = SHAFT;
  const edge = (half: number, side: number) => AXIS - half * lift + half * scale * side;
  return shape([[start, edge(thin, -1)], [end, edge(thick, -1)], [end, edge(thick, 1)], [start, edge(thin, 1)]]);
}

function wood(): string {
  const knob = circle(KNOB.x, AXIS, KNOB.radius);
  return [...HEAD.map((piece) => across(piece, 10)), ...HANDLE.map((piece) => along(piece, 10)), shaft(), knob].join("");
}

function light(): string {
  const head = HEAD.map(([start, end, half]) => rounded(CENTRE - half * 0.76, start + 5, half * 0.4, end - start - 10, 8));
  const handle = HANDLE.map(([start, end, half]) => rounded(start + 4, AXIS - half * 0.76, end - start - 8, half * 0.4, 6));
  return [...head, ...handle, shaft(0.2, 0.56), circle(KNOB.x - 18, AXIS - 20, 22)].join("");
}

function block(): string {
  return [BLOCK.top, BLOCK.body].map(([top, bottom, half], index) => rounded(CENTRE - half, top, half * 2, bottom - top, 8 + index * 6)).join("");
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", rule: "evenodd", viewBox: VIEW });

const GAVEL = { block: mark(block()), light: mark(light()), wood: mark(wood()) };

export { GAVEL };
