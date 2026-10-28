import { circle } from "./../../components/riso/shapes";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

const VIEW: Point = [1600, 900];

const FOCUS: Point = [420, 470];

const CLEAR: Point = [730, 640];

const CELL = 150;

const PARTS: Point[][] = [
  [[-50, -16], [40, -16], [40, 16], [-50, 16]],
  [[40, -12], [62, -16], [62, 16], [40, 12]],
  [[-44, -24], [70, -24], [70, -19], [-44, -19]],
  [[-16, -24], [-6, -24], [-14, -44], [-24, -44]],
  [[-40, -50], [0, -50], [0, -44], [-40, -44]],
  [[-40, 5], [30, 5], [30, 8], [-40, 8]],
];

const LENS: Point = [52, 0];

const jitter = (index: number, salt = 0) => Math.abs(Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453) % 1;

function placer([left, top]: Point, size: number, angle: number) {
  const flip = Math.cos(angle) < 0 ? -1 : 1;
  return ([across, down]: Point): Point => [
    Math.round(left + (across * Math.cos(angle) - down * flip * Math.sin(angle)) * size),
    Math.round(top + (across * Math.sin(angle) + down * flip * Math.cos(angle)) * size),
  ];
}

function camera(spot: Point, size: number, angle: number): string {
  const place = placer(spot, size, angle);
  const parts = PARTS.map((part) => `M${part.map((point) => place(point).join(" ")).join("L")}Z`).join("");
  const [lensLeft, lensTop] = place(LENS);
  return parts + circle(lensLeft, lensTop, Math.round(7 * size));
}

function hidden([left, top]: Point): boolean {
  return top < 150 || ((left - FOCUS[0]) / CLEAR[0]) ** 4 + ((top - FOCUS[1]) / CLEAR[1]) ** 4 < 1;
}

type Pose = [spot: Point, size: number, angle: number];

const SPOTS = Array.from({ length: 12 * 7 }, (_, index): Point => {
    const [column, row] = [index % 12, Math.floor(index / 12)];
    return [40 + column * CELL + (row % 2) * (CELL / 2), 50 + row * CELL];
}).filter((spot) => !hidden(spot));

const POSES = SPOTS.map(([left, top], index): Pose => {
    const spot: Point = [left + (jitter(index, 1) - 0.5) * 22, top + (jitter(index, 2) - 0.5) * 18];
    const aim = Math.atan2(FOCUS[1] - spot[1], FOCUS[0] - spot[0]);
    return [spot, 0.95 + jitter(index) * 0.5, aim + (jitter(index, 3) - 0.5) * 0.14];
});

const mark = (path: string): Mark => ({ canvas: VIEW, d: path, fit: "fill", rule: "evenodd", viewBox: VIEW });

const CAMERAS = mark(POSES.map(([spot, size, angle]) => camera(spot, size, angle)).join(""));

export { camera, CAMERAS };
