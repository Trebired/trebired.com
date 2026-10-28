import { LETTERS, SCALE, SCALE_VIEW } from "./type_mark";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

const KEY = { gap: 18, lip: 34, size: 170 };

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

function arc([cx, cy]: Point, radius: number, start: number, end: number, steps = 24): Point[] {
  return Array.from({ length: steps + 1 }, (_, index): Point => {
      const angle = start + ((end - start) * index) / steps;
      return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  });
}

function rounded(left: number, top: number, width: number, height: number, radius: number): Point[] {
  const [right, bottom, quarter] = [left + width, top + height, Math.PI / 2];
  return [
    ...arc([right - radius, top + radius], radius, -quarter, 0, 8),
    ...arc([right - radius, bottom - radius], radius, 0, quarter, 8),
    ...arc([left + radius, bottom - radius], radius, quarter, quarter * 2, 8),
    ...arc([left + radius, top + radius], radius, quarter * 2, quarter * 3, 8),
  ];
}

const ARROWS: [column: number, row: number, turn: number][] = [[1, 0, 0], [0, 1, 3], [1, 1, 2], [2, 1, 1]];

function keycaps(): { skirts: string; tops: string } {
  const step = KEY.size + KEY.gap;
  const caps = ARROWS.map(([column, row, turn]) => {
      const [left, top] = [20 + column * step, 20 + row * step];
      const [cx, cy] = [left + KEY.size / 2, top + (KEY.size - KEY.lip) / 2 + 4];
      const quarter = (turn * Math.PI) / 2;
      const [cos, sin] = [Math.cos(quarter), Math.sin(quarter)];
      const point = (x: number, y: number): Point => [cx + x * cos - y * sin, cy + x * sin + y * cos];
      const legend = shape([point(0, -30), point(30, 20), point(-30, 20)]);
      const surface = shape(rounded(left + 14, top + 10, KEY.size - 28, KEY.size - KEY.lip - 10, 20));
      return { skirt: shape(rounded(left, top, KEY.size, KEY.size, 26)), top: surface + legend };
  });
  return { skirts: caps.map((cap) => cap.skirt).join(""), tops: caps.map((cap) => cap.top).join("") };
}

function tick([start, corner, end]: [Point, Point, Point], half: number): string {
  const unit = ([x, y]: Point): Point => [x / (Math.hypot(x, y) || 1), y / (Math.hypot(x, y) || 1)];
  const normal = (one: Point, two: Point): Point => {
    const [dx, dy] = unit([two[0] - one[0], two[1] - one[1]]);
    return [-dy, dx];
  };
  const [first, second] = [normal(start, corner), normal(corner, end)];
  const bisector = unit([first[0] + second[0], first[1] + second[1]]);
  const reach = half / (bisector[0] * first[0] + bisector[1] * first[1]);
  const miter = (sign: number): Point => [corner[0] + bisector[0] * reach * sign, corner[1] + bisector[1] * reach * sign];
  const angle = ([x, y]: Point) => Math.atan2(y, x);
  return shape([
      ...arc(end, half, angle(second), angle(second) - Math.PI),
      miter(-1),
      ...arc(start, half, angle(first) - Math.PI, angle(first) - Math.PI * 2),
      miter(1),
  ]);
}

const BALLS = Array.from({ length: 5 }, (_, index): Point => [62 + index * 119, 820]);

const RADIUS = 58;

function strings(): string {
  const thread = ([x, y]: Point, top: number) => shape([[top - 3.5, 0], [top + 3.5, 0], [x + 3, y - RADIUS + 8], [x - 3, y - RADIUS + 8]]);
  return BALLS.map((ball) => thread(ball, ball[0] - 30) + thread(ball, ball[0] + 30)).join("");
}

function balls(): string {
  return BALLS.map(([x, y]) => shape(arc([x, y], RADIUS, 0, Math.PI * 2, 64)) + shape(arc([x - 24, y - 24], 11, 0, Math.PI * 2, 24))).join("");
}

function shades(): string {
  return BALLS.map(([x, y]) => shape(arc([x, y], RADIUS, 0, Math.PI * 2, 64)) + shape(arc([x - 9, y - 9], 43, 0, Math.PI * 2, 64))).join("");
}

const mark = (canvas: Point, d: string): Mark => ({ canvas, d, fit: "fill", rule: "evenodd", viewBox: canvas });

const CAPS = keycaps();

const SIGN = {
  balls: mark([600, 900], balls()),
  shades: mark([600, 900], shades()),
  strings: mark([600, 900], strings()),
  badge: mark([400, 400], shape(arc([200, 200], 190, 0, Math.PI * 2, 96)) + LETTERS),
  check: mark([460, 460], tick([[70, 250], [180, 360], [400, 120]], 46)),
  keys: mark([586, 398], CAPS.skirts),
  scale: mark(SCALE_VIEW, SCALE),
  tops: mark([586, 398], CAPS.tops),
};

export { SIGN };
