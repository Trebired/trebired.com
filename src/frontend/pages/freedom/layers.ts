import type { CSSProperties } from "react";
import type { Recipe } from "./../../components/riso/recipes";
import { inkColor } from "./../../components/riso/recipes";
import { KEY, LILAC, SIGNAL, TOR } from "./palette";
import { CORE, LAYER_ONE, LAYER_THREE, LAYER_TWO, VIEW } from "./onion";

type Point = [number, number];

type Peel = {
  angle: number;
  end: Point;
  key: string;
  label: Point;
  mark: typeof LAYER_ONE;
  recipe: Recipe;
  stretch: number;
  tip: Point;
  tones: [string, string];
  widen: number;
};

const FRAME: Point = [2000, 880];

const BULB = { at: [1230, -420] as Point, size: 1180 };

const PIVOT: Point = [1192, 1637];

const TILT = 16;

const PEELS: Peel[] = [
  {
    angle: 30,
    end: [1124, 2388],
    key: "one",
    label: [547, 1616],
    mark: LAYER_ONE,
    recipe: "screen",
    stretch: 1.45,
    tip: [1157, 985],
    tones: [TOR, KEY],
    widen: 1.5,
  },
  {
    angle: 20,
    end: [1039, 2345],
    key: "two",
    label: [710, 1878],
    mark: LAYER_TWO,
    recipe: "lines",
    stretch: 1.3,
    tip: [1157, 1011],
    tones: [SIGNAL, TOR],
    widen: 1.3,
  },
  {
    angle: 11,
    end: [1132, 2339],
    key: "three",
    label: [1002, 2242],
    mark: LAYER_THREE,
    recipe: "bar",
    stretch: 1.15,
    tip: [1164, 1373],
    tones: [LILAC, SIGNAL],
    widen: 1.15,
  },
  {
    angle: 4,
    end: [1175, 2333],
    key: "core",
    label: [1174, 1776],
    mark: CORE,
    recipe: "slab",
    stretch: 1.2,
    tip: [1186, 1715],
    tones: [KEY, SIGNAL],
    widen: 1.15,
  },
];

const share = (value: number, total: number) => `${(value / total) * 100}%`;

function axisOf({ end, tip }: Peel): [angle: number, length: number] {
  const [dx, dy] = [end[0] - tip[0], end[1] - tip[1]];
  return [(Math.atan2(-dx, dy) * 180) / Math.PI, Math.hypot(dx, dy)];
}

function peelStyle(peel: Peel): CSSProperties {
  const [axis] = axisOf(peel);
  const move = (point: Point, sign: number) => `translate(${share(sign * point[0], VIEW[0])}, ${share(sign * point[1], VIEW[1])})`;
  const turn = `rotate(${peel.angle}deg) scale(${peel.widen}, ${peel.stretch}) rotate(${-axis}deg)`;
  return { transform: `${move(peel.tip, 1)} ${turn} ${move(peel.tip, -1)}`, transformOrigin: "0 0" };
}

function turn(point: Point, degrees: number): Point {
  const angle = (degrees * Math.PI) / 180;
  return [point[0] * Math.cos(angle) - point[1] * Math.sin(angle), point[0] * Math.sin(angle) + point[1] * Math.cos(angle)];
}

function spot(peel: Peel): CSSProperties {
  const [axis] = axisOf(peel);
  const local = turn([peel.label[0] - peel.tip[0], peel.label[1] - peel.tip[1]], -axis);
  const [across, down] = turn([local[0] * peel.widen, local[1] * peel.stretch], peel.angle);
  return {
    "--x": share(peel.tip[0] + across, VIEW[0]),
    "--y": share(peel.tip[1] + down, VIEW[1]),
    transform: `translate(-50%, -50%) rotate(${-TILT}deg)`,
  } as CSSProperties;
}

const place = ([left, top]: Point) => ({ "--x": share(left, FRAME[0]), "--y": share(top, FRAME[1]) }) as CSSProperties;

const BULB_BOX = {
  ...place(BULB.at),
  "--size": share(BULB.size, FRAME[0]),
  transform: `rotate(${TILT}deg)`,
  transformOrigin: `${share(PIVOT[0], VIEW[0])} ${share(PIVOT[1], VIEW[1])}`,
} as CSSProperties;

const LAYERS = PEELS.map((peel, index) => {
    const ink = { "--ink": `rgb(${inkColor(peel.tones[0], false).join(" ")})` } as CSSProperties;
    return {
      ink,
      key: peel.key,
      mark: peel.mark,
      marker: { ...ink, ...spot(peel) } as CSSProperties,
      number: String(index + 1).padStart(2, "0"),
      recipe: peel.recipe,
      style: peelStyle(peel),
      tones: peel.tones,
    };
});

export { BULB_BOX, LAYERS };
