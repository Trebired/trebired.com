import { DOLLAR, STOP } from "./lettering";
import { LOGO, VIEW as LOGO_VIEW } from "./../home/logo_mark";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule?: "evenodd"; viewBox: Point };

const VIEW: Point = [400, 400];

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

function arc([cx, cy]: Point, radius: number, start: number, end: number, steps = 48): Point[] {
  return Array.from({ length: steps + 1 }, (_, index): Point => {
      const angle = start + ((end - start) * index) / steps;
      return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  });
}

const circle = (centre: Point, radius: number) => shape(arc(centre, radius, 0, Math.PI * 2, 96).slice(0, -1));

function bar(centre: Point, angle: number, inner: number, outer: number, width: number): string {
  const [dx, dy, nx, ny] = [Math.cos(angle), Math.sin(angle), -Math.sin(angle) * (width / 2), Math.cos(angle) * (width / 2)];
  const point = (reach: number, side: number): Point => [centre[0] + dx * reach + nx * side, centre[1] + dy * reach + ny * side];
  return shape([point(inner, 1), point(outer, 1), point(outer, -1), point(inner, -1)]);
}

function curve(start: Point, pull: Point, end: Point, steps = 24): Point[] {
  return Array.from({ length: steps }, (_, index): Point => {
      const done = (index + 1) / steps;
      const left = 1 - done;
      const mix = (axis: 0 | 1) => left * left * start[axis] + 2 * left * done * pull[axis] + done * done * end[axis];
      return [mix(0), mix(1)];
  });
}

function shield(inset: number): string {
  const [left, right, top, waist, tip] = [40 + inset, 360 - inset, 30 + inset, 200, 380 - inset * 1.5];
  return shape([
      [left, top],
      [right, top],
      [right, waist],
      ...curve([right, waist], [right, tip - 60], [200, tip]),
      ...curve([200, tip], [left, tip - 60], [left, waist]),
  ]);
}

function octagon(radius: number): string {
  return shape(Array.from({ length: 8 }, (_, index): Point => {
        const angle = Math.PI / 8 + (index * Math.PI) / 4;
        return [200 + Math.cos(angle) * radius, 200 + Math.sin(angle) * radius];
  }));
}

function stopwatch(): string {
  const centre: Point = [200, 226];
  const tick = (index: number) => (index % 3 ? bar(centre, (index * Math.PI) / 6, 112, 128, 7) : bar(centre, (index * Math.PI) / 6, 100, 128, 12));
  const ticks = Array.from({ length: 12 }, (_, index) => tick(index)).join("");
  const crown = shape([[184, 28], [216, 28], [216, 61], [184, 61]]) + shape([[156, 6], [244, 6], [244, 28], [156, 28]]);
  const button = bar(centre, -Math.PI / 4, 168, 194, 26);
  const hand = bar(centre, -Math.PI / 6, 20, 104, 14);
  return circle(centre, 165) + circle(centre, 137) + ticks + crown + button + hand + circle(centre, 15);
}

function slash(): string {
  const [radius, half] = [154, 17];
  const turn = Math.PI / 4;
  const reach = Math.sqrt(radius * radius - half * half);
  const local: Point[] = [
    [-reach, -half],
    [reach, -half],
    ...arc([0, 0], radius, -Math.asin(half / radius), Math.asin(half / radius), 6).slice(1, -1),
    [reach, half],
    [-reach, half],
    ...arc([0, 0], radius, Math.PI - Math.asin(half / radius), Math.PI + Math.asin(half / radius), 6).slice(1, -1),
  ];
  return shape(local.map(([x, y]): Point => [200 + x * Math.cos(turn) - y * Math.sin(turn), 200 + x * Math.sin(turn) + y * Math.cos(turn)]));
}

function emblem(width: number, [cx, cy]: Point): string {
  const scale = width / LOGO_VIEW[0];
  const [left, top] = [cx - width / 2, cy - (LOGO_VIEW[1] * scale) / 2];
  const across = (value: string) => String(fixed(left + Number(value) * scale));
  const down = (value: string) => String(fixed(top + Number(value) * scale));
  return LOGO.d.replace(/([MLHVZ])([^MLHVZ]*)/gu, (_, command: string, args: string) => {
      const values = args.trim() ? args.trim().split(/[\s,]+/u) : [];
      if (command === "H") return `H${values.map(across).join(" ")}`;
      if (command === "V") return `V${values.map(down).join(" ")}`;
      return command + values.map((value, index) => (index % 2 ? down(value) : across(value))).join(" ");
  });
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", rule: "evenodd", viewBox: VIEW });

const solid = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", viewBox: VIEW });

const SIGN = {
  dollar: solid(DOLLAR),
  no: mark(circle([200, 200], 190) + circle([200, 200], 154) + slash()),
  shield: mark(shield(0) + shield(26) + shield(46) + emblem(132, [200, 176])),
  stop: mark(octagon(196) + octagon(178) + octagon(166) + STOP),
  watch: mark(stopwatch()),
};

export { SIGN };
