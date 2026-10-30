import type { Art, Knockout, Plate as PrintPlate, Screen as PrintScreen, Tone } from "@trebired/overprint";
import { muted } from "./mute";

type Rgb = [number, number, number];

type Point = [number, number];

type Linear = { clear?: boolean; from: Point; kind: "linear"; peak?: number; to: Point };

type Fill = { kind: "flat"; level: number } | Linear | { at: Point; kind: "radial"; range?: Point; reach: number };

type Shape = "circle" | "cross" | "ellipse" | "line" | "square";

type Field = "circle" | "cross" | "ellipse" | "grain" | "hatch" | "mesh" | "square";

type Screen =
| { kind: "solid" }
| { angle: number; kind: "halftone"; shape: Shape; size: number }
| { kind: "dither"; mode: "atkinson" | "bayer" | "floyd-steinberg"; threshold: number };

type Plate = {
  color: string;
  drift: number;
  fill: Fill;
  knock?: number;
  mask?: boolean;
  offset: Point;
  opaque?: boolean;
  part?: string;
  pull: number;
  screen: Screen;
  vary?: boolean;
};

type Recipe =
|"cover"
|"bar"
|"cells"
|"cross"
|"dots"
|"grain"
|"home"
|"home-tall"
|"lines"
|"mark"
|"poster"
|"poster-tall"
|"price"
|"sheet"
|"squares"
|"type"
|"draft"
|"screen"
|"slab"
|"source"
|"source-tall"
|"dissolve"
|"branch"
|"wall"
|"weave";

const INK = "ink";

const TONE_A = "tone-a";

const TONE_B = "tone-b";

const PALETTE = { grey: "#8c8c8c", mint: "#a7e0c2", peach: "#f3bda8", stone: "#c4c4c4" };

const FLAT: Fill = { kind: "flat", level: 1 };

const ACROSS: Fill = { from: [0, 0.5], kind: "linear", to: [1, 0.5] };

const DOWN: Fill = { from: [0.5, 0], kind: "linear", to: [0.5, 1] };

const RISE: Fill = { from: [0.5, 1], kind: "linear", to: [0.5, 0.2] };

const DIAGONAL: Fill = { from: [0, 0], kind: "linear", to: [1, 1] };

const CORE: Fill = { at: [0.5, 0.5], kind: "radial", reach: 0.62 };

const SOLID: Screen = { kind: "solid" };

const halftone = (shape: Shape, angle: number, size: number): Screen => ({ angle, kind: "halftone", shape, size });

const dither = (mode: "atkinson" | "bayer" | "floyd-steinberg", threshold = 128): Screen => ({ kind: "dither", mode, threshold });

const plate = (
  color: string,
  fill: Fill,
  screen: Screen,
  offset: Point,
  pull: number,
  drift: number
): Plate => ({ color, drift, fill, offset, pull, screen });

const DOTS: Fill = { clear: true, from: [1, 0], kind: "linear", to: [0.45, 0.85] };

const DOTS_UNDER: Fill = { ...DOTS, peak: 0.6 };

const HOME_DOTS: Fill = { clear: true, from: [1, 0], kind: "linear", to: [0.58, 0.78] };

const HOME_UNDER: Fill = { ...HOME_DOTS, peak: 0.6 };

const DISSOLVE: Fill = { clear: true, from: [0.25, 0.15], kind: "linear", to: [1, 1] };

const LEFTWARD: Fill = { clear: true, from: [1, 0.5], kind: "linear", to: [0.46, 0.5] };

const SINK: Fill = { clear: true, from: [0.5, 1], kind: "linear", to: [0.5, 0.3] };

const SOURCE_WIDE: Fill = { at: [0.72, 0.475], kind: "radial", range: [0.3, 0.03], reach: 0.78 };

const SOURCE_TALL: Fill = { at: [0.5, 0.77], kind: "radial", range: [0.3, 0.03], reach: 0.62 };

const TALL_DOTS: Fill = { clear: true, from: [0.9, 0], kind: "linear", to: [0.3, 0.62] };

const TALL_UNDER: Fill = { ...TALL_DOTS, peak: 0.6 };

const SEAL: Plate[] = [
  { ...plate(INK, FLAT, SOLID, [0, 0], 0, 0), mask: true, part: "halo" },
  { ...plate(TONE_B, { kind: "flat", level: 0.95 }, SOLID, [-12, 9], -6, 0.6), part: "seal" },
  { ...plate(INK, DOWN, halftone("line", 35, 80), [0, 0], 2, 0.3), part: "seal" },
];

const RECIPES: Record<Recipe, Plate[]> = {
  cells: [
    plate(TONE_A, { kind: "flat", level: 0.85 }, SOLID, [-3, 2], -3, 0.4),
    plate(TONE_B, { kind: "flat", level: 0.55 }, halftone("line", 45, 70), [3, -2], 3, -0.4),
  ],
  bar: [
    plate(TONE_A, { kind: "flat", level: 0.9 }, SOLID, [-5, 4], -4, 0.5),
    { ...plate(TONE_B, ACROSS, halftone("line", 30, 60), [6, -3], 5, -0.5), vary: true },
  ],
  cover: [],
  poster: [
    ...SEAL,
    { ...plate(TONE_A, DOTS, halftone("circle", 45, 46), [0, 0], 6, 0.6), knock: 0, part: "field", vary: true },
    { ...plate(TONE_B, DOTS_UNDER, halftone("circle", 15, 46), [8, -6], -3, -0.5), knock: 0, part: "field", vary: true },
  ],
  "home-tall": [
    ...SEAL,
    { ...plate(TONE_A, TALL_DOTS, halftone("circle", 45, 46), [0, 0], 6, 0.6), knock: 0, part: "field", vary: true },
    { ...plate(TONE_B, TALL_UNDER, halftone("circle", 15, 46), [8, -6], -3, -0.5), knock: 0, part: "field", vary: true },
  ],
  "poster-tall": [
    ...SEAL,
    { ...plate(TONE_A, TALL_DOTS, halftone("circle", 45, 46), [0, 0], 6, 0.6), knock: 0, part: "field", vary: true },
    { ...plate(TONE_B, TALL_UNDER, halftone("circle", 15, 46), [8, -6], -3, -0.5), knock: 0, part: "field", vary: true },
  ],
  home: [
    ...SEAL,
    { ...plate(TONE_A, HOME_DOTS, halftone("circle", 45, 46), [0, 0], 6, 0.6), knock: 0, part: "field", vary: true },
    { ...plate(TONE_B, HOME_UNDER, halftone("circle", 15, 46), [8, -6], -3, -0.5), knock: 0, part: "field", vary: true },
  ],
  mark: [
    plate(PALETTE.peach, DIAGONAL, halftone("square", 20, 34), [10, 6], 9, 1),
    plate(PALETTE.mint, RISE, dither("bayer"), [-8, 10], -7, -0.8),
    { ...plate(INK, FLAT, SOLID, [0, 0], 3, 0.4), knock: 0 },
  ],
  lines: [
    plate(TONE_A, { kind: "flat", level: 0.9 }, SOLID, [14, 10], 10, 0.8),
    plate(TONE_B, DIAGONAL, halftone("line", 60, 54), [-10, 6], -7, -0.6),
    plate(INK, { kind: "flat", level: 0.3 }, halftone("circle", 15, 70), [0, 0], 3, 0.3),
  ],
  dots: [
    plate(TONE_A, CORE, halftone("circle", 20, 26), [10, 12], 8, 0.7),
    plate(TONE_B, ACROSS, halftone("ellipse", 65, 40), [-12, -6], -6, -0.5),
  ],
  grain: [
    plate(TONE_A, RISE, dither("atkinson", 120), [-8, 10], -6, 0.6),
    plate(TONE_B, DIAGONAL, halftone("square", 35, 30), [12, -6], 8, -0.7),
    plate(INK, { kind: "flat", level: 0.2 }, dither("bayer"), [0, 0], 2, 0.2),
  ],
  cross: [
    plate(TONE_A, DOWN, halftone("cross", 30, 34), [9, 9], 7, -0.6),
    plate(TONE_B, { kind: "flat", level: 0.7 }, dither("bayer"), [-10, 4], -6, 0.8),
  ],
  sheet: [plate(TONE_A, { kind: "flat", level: 0.9 }, SOLID, [0, 0], 5, 0.5)],
  draft: [
    plate(TONE_A, { kind: "flat", level: 0.55 }, halftone("line", 45, 60), [-3, 2], -2, 0.3),
    plate(TONE_B, { kind: "flat", level: 0.4 }, halftone("line", 135, 60), [3, -2], 2, -0.3),
  ],
  screen: [
    plate(TONE_A, { kind: "flat", level: 0.75 }, halftone("circle", 30, 54), [-3, 2], -2, 0.3),
    plate(TONE_B, { kind: "flat", level: 0.45 }, halftone("line", 0, 60), [3, -2], 2, -0.3),
  ],
  slab: [
    plate(TONE_A, { kind: "flat", level: 1 }, SOLID, [-3, 2], -2, 0.3),
    plate(TONE_B, { kind: "flat", level: 0.85 }, SOLID, [4, -3], 2, -0.3),
  ],
  source: [
    plate(TONE_A, SOURCE_WIDE, SOLID, [-3, 2], -3, 0.4),
    plate(TONE_B, SOURCE_WIDE, halftone("circle", 30, 60), [3, -2], 3, -0.4),
  ],
  "source-tall": [
    plate(TONE_A, SOURCE_TALL, SOLID, [-3, 2], -3, 0.4),
    plate(TONE_B, SOURCE_TALL, halftone("circle", 30, 60), [3, -2], 3, -0.4),
  ],
  branch: [
    plate(TONE_A, LEFTWARD, SOLID, [-3, 2], -3, 0.4),
    plate(TONE_B, LEFTWARD, halftone("circle", 30, 60), [3, -2], 3, -0.4),
  ],
  dissolve: [
    plate(TONE_A, DISSOLVE, halftone("circle", 30, 40), [-5, 4], -4, 0.5),
    plate(TONE_B, DISSOLVE, halftone("line", 60, 46), [5, -3], 4, -0.5),
  ],
  wall: [
    plate(TONE_A, SINK, SOLID, [-4, 3], -3, 0.4),
    plate(TONE_B, SINK, halftone("circle", 30, 60), [4, -3], 3, -0.4),
  ],
  type: [
    plate(TONE_A, { kind: "flat", level: 0.92 }, SOLID, [-2, 2], -2, 0.3),
    { ...plate(TONE_B, { kind: "flat", level: 0.6 }, halftone("line", 35, 46), [3, -2], 2, -0.3), vary: true },
  ],
  squares: [
    plate(TONE_A, DIAGONAL, halftone("square", 20, 34), [10, 6], 9, 1),
    plate(TONE_B, RISE, dither("floyd-steinberg"), [-8, 10], -7, -0.8),
  ],
  weave: [
    plate(TONE_A, { kind: "flat", level: 0.8 }, halftone("line", 120, 44), [8, -8], 6, 0.5),
    plate(TONE_B, { kind: "flat", level: 0.8 }, halftone("line", 30, 44), [-8, 8], -6, -0.5),
    plate(INK, CORE, halftone("circle", 45, 50), [0, 0], 3, 0.3),
  ],
  price: [
    plate(TONE_A, FLAT, SOLID, [14, 12], 10, 0.6),
    plate(TONE_B, { kind: "flat", level: 0.35 }, halftone("cross", 45, 90), [-4, 4], -6, -1),
    plate(INK, { from: [0, 0.5], kind: "linear", to: [1, 0.5] }, dither("floyd-steinberg"), [0, 0], 3, 0.3),
  ],
};

const FIELDS: Record<Field, Shape|Screen> = {
  circle: "circle",
  cross: "cross",
  ellipse: "ellipse",
  grain: dither("atkinson", 120),
  hatch: halftone("line", 45, 60),
  mesh: dither("bayer"),
  square: "square",
};

type Scale = { cells?: boolean; density?: number; side?: number };

type PrintOptions = {
  art: (part?: string) => Art;
  dark: boolean;
  field?: Field;
  image?: string;
  scale: Scale;
  plates?: Plate[];
  spread?: number;
  tones?: [string, string];
};

function withField(entry: Plate, field?: Field): Plate {
  if (!field || !entry.vary || entry.screen.kind !== "halftone") return entry;
  const look = FIELDS[field];
  return { ...entry, screen: typeof look === "string" ? { ...entry.screen, shape: look } : look };
}

function platesFor(recipe: Recipe, tones?: [string, string], field?: Field, custom?: Plate[]): Plate[] {
  const [first, second] = tones || [PALETTE.stone, PALETTE.peach];
  const colour = (color: string) => (color === TONE_A ? first : color === TONE_B ? second : color);
  return (custom || RECIPES[recipe]).map((entry) => withField({ ...entry, color: colour(entry.color) }, field));
}

function inkColor(color: string, dark: boolean): Rgb {
  if (color === INK) return dark ? [236, 233, 226] : [28, 28, 28];
  const raw = color.startsWith("!");
  const value = Number.parseInt(color.replace(/^!?#/u, ""), 16);
  const rgb: Rgb = [(value >> 16)&255, (value >> 8)&255, value&255];
  const printed = raw || dark ? rgb : rgb.map((channel) => Math.max(0, 255 - (255 - channel) * 2.6)) as Rgb;
  return muted(printed, rgb, !dark);
}

function deepen(color: string, depth: number): string {
  const channels = (color.slice(1).match(/../g) || []).map((pair) => Math.round(255 - (255 - parseInt(pair, 16)) * depth));
  return `!#${channels.map((channel) => Math.max(0, channel).toString(16).padStart(2, "0")).join("")}`;
}

function toneOf(fill: Fill): Tone {
  if (fill.kind === "flat") return { kind: "flat", level: fill.level };
  if (fill.kind === "radial") return { at: fill.at, kind: "radial", range: fill.range, reach: fill.reach };
  return { from: fill.from, kind: "linear", range: [fill.peak ?? 1, fill.clear ? 0 : 0.1], to: fill.to };
}

function screenOf(screen: Screen, scale: Scale): PrintScreen {
  if (screen.kind === "solid") return screen;
  if (screen.kind === "dither") return { grain: 2, kind: "dither", mode: screen.mode, threshold: screen.threshold };
  const cells = Math.round(screen.size * (scale.density || 1));
  const sized = scale.cells ? { cells } : { cell: Math.max(4, Math.round((scale.side || 400) / screen.size)) };
  return { ...sized, angle: screen.angle, dot: screen.shape, kind: "halftone" };
}

function knockOf(plates: Plate[], knock: number | undefined, spread: number): Knockout[] | undefined {
  if (knock === undefined) return undefined;
  return [{ plate: String(knock), spread: plates[knock]?.mask ? spread : 0 }];
}

function printPlates(recipe: Recipe, options: PrintOptions): PrintPlate[] {
  const plates = platesFor(recipe, options.tones, options.field, options.plates);
  return plates.map((plate, index) => ({
        art: options.art(plate.part),
        hidden: plate.mask,
        ink: inkColor(plate.color, options.dark),
        knockout: knockOf(plates, plate.knock, options.spread ?? 0),
        motion: { drift: plate.drift, pull: plate.pull },
        name: String(index),
        offset: plate.offset,
        opaque: plate.opaque,
        screen: screenOf(plate.screen, options.scale),
        tone: options.image ? { href: options.image, kind: "image" } : toneOf(plate.fill),
  }));
}

export { deepen, dither, FLAT, halftone, INK, inkColor, plate, printPlates, SOLID, TONE_A, TONE_B };
export type { Field, Fill, Plate, Recipe, Rgb, Screen, Shape };
