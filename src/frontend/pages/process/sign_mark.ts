import { circle, rounded } from "./../../components/riso/shapes";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const BUBBLE: Point = [600, 470];

const LOCK: Point = [520, 600];

const KEY: Point = [1200, 420];

function bubble(flip: boolean): string {
  const across = (value: number) => (flip ? BUBBLE[0] - value : value);
  const corner = (toX: number, toY: number) => `A110 110 0 0 ${flip ? 0 : 1} ${across(toX)} ${toY}`;
  return [
    `M${across(130)} 20H${across(470)}`,
    corner(580, 130),
    "V230",
    corner(470, 340),
    `H${across(440)}L${across(520)} 450Q${across(420)} 410 ${across(330)} 340H${across(130)}`,
    corner(20, 230),
    "V130",
    corner(130, 20),
    "Z",
  ].join("");
}

const SHACKLE = "M100 250V180A160 160 0 0 1 420 180A30 30 0 0 1 360 180A100 100 0 0 0 160 180V250Z";

const KEYHOLE = "M242 422.3A46 46 0 1 1 278 422.3L290 490H230Z";

const TEETH: Point[] = [
  [620, 150], [650, 200], [680, 150], [720, 150], [750, 215], [780, 150], [820, 150], [850, 185],
  [880, 150], [920, 150], [950, 205], [980, 150], [1020, 150], [1050, 190], [1080, 150], [1120, 150],
];

const BLADE = `M460 150${TEETH.map(([x, y]) => `L${x} ${y}`).join("")}L1170 195L1170 240L1140 270H460Z`;

const RING = "M70 210A50 50 0 1 0 170 210A50 50 0 1 0 70 210Z";

const GROOVE = "M500 228V242H1100V228Z";

const FORM: Point = [600, 1100];

type Curve = [Point, Point, Point];

const NECK: Point = [262, 118];

const SIDE: Curve[] = [
  [[230, 135], [160, 150], [128, 190]],
  [[112, 230], [110, 290], [120, 330]],
  [[128, 400], [165, 450], [170, 500]],
  [[175, 560], [138, 610], [140, 660]],
  [[142, 700], [155, 715], [175, 722]],
];

const mirror = ([left, top]: Point): Point => [FORM[0] - left, top];

function torso(): string {
  const starts = [NECK, ...SIDE.map((curve) => curve[2])];
  const down = SIDE.map(([first, second, end]) => `C${first} ${second} ${end}`).join("");
  const up = SIDE.map(([first, second], index) => `C${mirror(second)} ${mirror(first)} ${mirror(starts[index])}`).reverse().join("");
  return `M${NECK}${down}Q300 740 ${mirror(SIDE[4][2])}${up}Z`;
}

function beam([fromX, fromY]: Point, [toX, toY]: Point, width: number): string {
  const length = Math.hypot(toX - fromX, toY - fromY);
  const [acrossX, acrossY] = [((fromY - toY) / length) * (width / 2), ((toX - fromX) / length) * (width / 2)];
  const corners: Point[] = [
    [fromX + acrossX, fromY + acrossY],
    [toX + acrossX, toY + acrossY],
    [toX - acrossX, toY - acrossY],
    [fromX - acrossX, fromY - acrossY],
  ];
  return `M${corners.map((corner) => corner.map((value) => value.toFixed(1)).join(" ")).join("L")}Z`;
}

function dashed(start: Point, end: Point): string {
  const length = Math.hypot(end[0] - start[0], end[1] - start[1]);
  const along = (distance: number): Point => [
    start[0] + ((end[0] - start[0]) * distance) / length,
    start[1] + ((end[1] - start[1]) * distance) / length,
  ];
  let path = "";
  for (let distance = 0; distance + 20 <= length; distance += 32) path += beam(along(distance), along(distance + 20), 6);
  return path;
}

const STAND = [
  rounded(262, 62, 76, 56, 10),
  circle(300, 38, 24),
  "M291 734H309V958H291Z",
  "M268 958H332V982H268Z",
  beam([284, 986], [118, 1084], 18),
  beam([316, 986], [482, 1084], 18),
  beam([300, 1000], [300, 1058], 18),
].join("");

const CHALK = [
  dashed([382, 150], [366, 330]),
  dashed([366, 340], [372, 492]),
  dashed([374, 510], [392, 690]),
  dashed([312, 500], [354, 500]),
  dashed([392, 500], [430, 500]),
].join("");

const PANEL = [
  "M238 126C200 128 150 146 122 190C106 232 104 292 114 332C122 402 160 452 165 502",
  "C170 560 136 600 138 632Q220 648 304 640L304 250Q262 205 238 126Z",
].join("");

const PIN_HEADS: Point[] = [[318, 300], [318, 370], [318, 440], [318, 510], [318, 580], [98, 262], [118, 400], [143, 560], [196, 112]];

const PIN_TIPS: Point[] = [[278, 312], [278, 382], [278, 452], [278, 522], [278, 592], [140, 272], [160, 410], [185, 570], [210, 158]];

const PINS = PIN_HEADS.map((head, index) => circle(head[0], head[1], 11) + beam(head, PIN_TIPS[index], 4)).join("");

const mark = (canvas: Point, d: string): Mark => ({ canvas, d, fit: "fill", rule: "evenodd", viewBox: canvas });

const solid = (canvas: Point, d: string): Mark => ({ canvas, d, fit: "fill", viewBox: canvas });

const SIGN = {
  ask: mark(BUBBLE, bubble(false)),
  body: mark(LOCK, rounded(30, 250, 460, 330, 60) + KEYHOLE),
  form: mark(FORM, torso() + STAND + CHALK),
  garment: mark(FORM, PANEL + dashed([150, 612], [296, 622])),
  key: solid(KEY, circle(210, 210, 190) + RING + rounded(380, 120, 90, 180, 24) + BLADE + GROOVE),
  pins: solid(FORM, PINS),
  reply: mark(BUBBLE, bubble(true)),
  shackle: mark(LOCK, SHACKLE),
};

export { SIGN };
