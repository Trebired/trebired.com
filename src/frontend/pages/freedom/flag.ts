import { camera } from "./cameras";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const VIEW: Point = [1900, 1000];

const STRIPE = VIEW[1] / 13;

const UNION: Point = [760, STRIPE * 7];

const rect = (left: number, top: number, width: number, height: number) => {
  const [right, bottom] = [Math.round(left + width), Math.round(top + height)];
  return `M${Math.round(left)} ${Math.round(top)}H${right}V${bottom}H${Math.round(left)}Z`;
};

const STRIPES: Mark = {
  canvas: VIEW,
  d: Array.from({ length: 7 }, (_, index) => rect(0, index * 2 * STRIPE, VIEW[0], STRIPE)).join(""),
  fit: "fill",
  viewBox: VIEW,
};

const SPOTS = Array.from({ length: 9 }, (_, row) => {
    const count = row % 2 === 0 ? 6 : 5;
    return Array.from({ length: count }, (_, column): Point => [((2 * column + (row % 2) + 1) * UNION[0]) / 12, ((row + 1) * UNION[1]) / 10]);
}).flat();

const CANTON: Mark = {
  canvas: UNION,
  d: rect(0, 0, UNION[0], UNION[1]) + SPOTS.map((spot) => camera(spot, 0.52, 0)).join(""),
  fit: "fill",
  rule: "evenodd",
  viewBox: UNION,
};

export { CANTON, STRIPES };
