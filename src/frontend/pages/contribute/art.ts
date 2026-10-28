import { circle, fixed, rounded } from "./../../components/riso/shapes";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const rect = (x: number, y: number, width: number, height: number) => `M${fixed(x)} ${fixed(y)}h${fixed(width)}v${fixed(height)}h${fixed(-width)}Z`;

const mark = (view: Point, d: string, rule?: "evenodd"): Mark => ({ canvas: view, d, fit: "fill", rule, viewBox: view });

function bar(from: Point, to: Point, half: number): string {
  const length = Math.hypot(to[0] - from [0], to[1] - from [1]);
  const [nx, ny] = [(-(to[1] - from [1]) / length) * half, ((to[0] - from [0]) / length) * half];
  const corners: Point[] = [[from [0] - nx, from [1] - ny], [to[0] - nx, to[1] - ny], [to[0] + nx, to[1] + ny], [from [0] + nx, from [1] + ny]];
  return `M${corners.map(([x, y]) => `${fixed(x)} ${fixed(y)}`).join("L")}Z`;
}

function ring(x: number, y: number, outer: number, inner: number): string {
  const loop = (radius: number, sweep: number) => {
    const arc = (to: number) => `A${radius} ${radius} 0 1 ${sweep} ${fixed(to)} ${fixed(y)}`;
    return `M${fixed(x + radius)} ${fixed(y)}${arc(x - radius)}${arc(x + radius)}Z`;
  };
  return loop(outer, 1) + loop(inner, 0);
}

const LENS_D = ring(380, 380, 300, 248) + bar([593.5, 593.5], [668, 668], 32) + bar([668, 668], [900, 900], 56) + circle(900, 900, 56);

const LENS = mark([1000, 1000], LENS_D);

const TILT = (11 * Math.PI) / 180;

const PIVOT: Point = [600, 130];

const ENDS: Point[] = [-1, 1].map((side) => [PIVOT[0] + side * 440 * Math.cos(TILT), PIVOT[1] - side * 440 * Math.sin(TILT)]);

function pan([x, y]: Point): string {
  const rim = y + 210;
  const bowl = `M${fixed(x + 150)} ${fixed(rim)}A150 70 0 0 1 ${fixed(x - 150)} ${fixed(rim)}Z`;
  return bar([x, y], [x - 140, rim], 3) + bar([x, y], [x + 140, rim], 3) + bowl + rect(x - 160, rim - 6, 320, 10);
}

const BEAM = bar(ENDS[0] as Point, ENDS[1] as Point, 13) + ENDS.map(([x, y]) => circle(x, y, 18)).join("") + circle(PIVOT[0], PIVOT[1], 30);

const STAND = rect(588, 130, 24, 525) + "M430 700L500 652L700 652L770 700Z";

const SCALE = mark([1200, 720], BEAM + STAND + ENDS.map(pan).join(""));

const LINES: [x: number, y: number, width: number][] = [[20, 24, 90], [20, 44, 120], [36, 64, 70], [20, 84, 100]];

const CODE = LINES.map(([x, y, width]) => rect(x, y, width, 10)).join("");

const PATCH = mark([160, 120], rounded(0, 0, 160, 120, 16) + CODE, "evenodd");

export { LENS, PATCH, SCALE };
