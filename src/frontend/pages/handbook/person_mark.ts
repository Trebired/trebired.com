type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const VIEW: Point = [600, 640];

const DASH = { gap: 18, length: 28, width: 12 };

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

function bezier(start: Point, pull: Point, push: Point, end: Point, steps: number): Point[] {
  return Array.from({ length: steps }, (_, index): Point => {
      const done = (index + 1) / steps;
      const left = 1 - done;
      const mix = (axis: 0 | 1) =>
      left ** 3 * start[axis] + 3 * left * left * done * pull[axis] + 3 * left * done * done * push[axis] + done ** 3 * end[axis];
      return [mix(0), mix(1)];
  });
}

const head: Point[] = Array.from({ length: 96 }, (_, index): Point => {
    const angle = (index / 96) * Math.PI * 2;
    return [300 + Math.cos(angle) * 128, 214 + Math.sin(angle) * 128];
});

const shoulders: Point[] = [
  [44, 640],
  [44, 568],
  ...bezier([44, 568], [44, 452], [150, 398], [300, 398], 40),
  ...bezier([300, 398], [450, 398], [556, 452], [556, 568], 40),
  [556, 640],
];

function measure(points: Point[]): number[] {
  const sums = [0];
  for (let index = 1; index < points.length; index++) {
    const [prev, next] = [points[index - 1], points[index]];
    sums.push(sums[index - 1] + Math.hypot(next[0] - prev[0], next[1] - prev[1]));
  }
  return sums;
}

function sample(points: Point[], sums: number[], distance: number): [Point, Point] {
  const index = Math.max(1, sums.findIndex((sum) => sum >= distance));
  const [prev, next] = [points[index - 1], points[index]];
  const span = sums[index] - sums[index - 1] || 1;
  const share = (distance - sums[index - 1]) / span;
  const [dx, dy] = [(next[0] - prev[0]) / span, (next[1] - prev[1]) / span];
  return [[prev[0] + dx * span * share, prev[1] + dy * span * share], [dx, dy]];
}

function dashes(points: Point[], closed: boolean): string {
  const path = closed ? [...points, points[0]] : points;
  const sums = measure(path);
  const total = sums[sums.length - 1];
  const count = Math.max(1, Math.round(total / (DASH.length + DASH.gap)));
  const spacing = total / count;
  return Array.from({ length: count }, (_, dash) => {
      const centre = Array.from({ length: 8 }, (_, step) => sample(path, sums, dash * spacing + ((spacing - DASH.gap) * step) / 7));
      const side = (sign: number) => centre.map(([[x, y], [dx, dy]]): Point => [x - (dy * sign * DASH.width) / 2, y + (dx * sign * DASH.width) / 2]);
      return shape([...side(1), ...side(-1).reverse()]);
  }).join("");
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", viewBox: VIEW });

const PERSON = {
  author: mark(shape(head) + shape(shoulders)),
  empty: mark(dashes(head, true) + dashes(shoulders, false)),
};

export { PERSON, VIEW };
