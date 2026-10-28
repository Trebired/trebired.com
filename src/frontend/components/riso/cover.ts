import type { Art } from "@trebired/overprint";
import { scatter, seeded } from "@trebired/frontend/hollow";
import { dither, FLAT, halftone, INK, plate, SOLID, TONE_A, TONE_B } from "./recipes";
import type { Fill, Plate, Screen, Shape } from "./recipes";

type Point = [number, number];

type Random = () => number;

const COVER_SIZE: Point = [960, 412];

const STONE = "#c4c4c4";

const SHAPES: Shape[] = ["circle", "cross", "ellipse", "line", "square"];

const CORNERS: Point[] = [[0, 0], [1, 0], [1, 1], [0, 1]];

const between = (next: Random, low: number, high: number) => low + next() * (high - low);

function pick<T>(next: Random, items: readonly T[]): T {
  return items[Math.floor(next() * items.length)] as T;
}

function sweep(next: Random, origin: Point): Fill {
  if (next() < 0.35) return { at: origin, kind: "radial", reach: between(next, 0.8, 1.25) };
  const reach = between(next, 0.65, 1);
  const toward: Point = [origin[0] + (0.5 - origin[0]) * reach * 2, origin[1] + (0.5 - origin[1]) * reach * 2];
  return { clear: true, from: origin, kind: "linear", to: toward };
}

function screen(next: Random): Screen {
  if (next() < 0.25) return dither(next() < 0.5 ? "bayer" : "atkinson", 120);
  return halftone(pick(next, SHAPES), Math.round(between(next, 0, 90)), Math.round(between(next, 34, 64)));
}

function coverPlates(seed: string): Plate[] {
  const next = seeded(`plates:${seed}`);
  const start = Math.floor(next() * 4);
  const [first, second] = [CORNERS[start] as Point, CORNERS[(start + 2) % 4] as Point];
  return [
    { ...plate(INK, FLAT, SOLID, [0, 0], 0, 0), mask: true, part: "halo" },
    { ...plate(TONE_B, { kind: "flat", level: 0.92 }, SOLID, [-10, 8], -6, 0.6), part: "form" },
    { ...plate(TONE_A, { kind: "flat", level: 0.6 }, halftone("line", Math.round(between(next, 20, 70)), 70), [0, 0], 2, 0.3), part: "form" },
    { ...plate(TONE_A, sweep(next, first), screen(next), [0, 0], 6, 0.6), knock: 0, part: "field" },
    { ...plate(TONE_B, sweep(next, second), screen(next), [7, -5], -4, -0.5), knock: 0, part: "field" },
  ];
}

function coverArt(seed: string): (part?: string) => Art {
  const next = seeded(`form:${seed}`);
  const shapes = scatter(next, { box: COVER_SIZE, font: 130 }).map((shape) => [next(), shape] as const);
  const picked = shapes.sort(([left], [right]) => left - right).slice(0, 2 + Math.floor(next() * 3));
  const form: Art = { kind: "group", parts: picked.map(([, shape]) => shape) };
  return (part) => (part === "field" ? { kind: "fill" } : form);
}

function coverTones(seed: string, [lead, second]: [string, string]): [string, string] {
  return pick(seeded(`tones:${seed}`), [[lead, second], [second, lead], [lead, STONE], [second, STONE]]);
}

export { COVER_SIZE, coverArt, coverPlates, coverTones };
