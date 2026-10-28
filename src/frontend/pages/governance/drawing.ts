type Point = [number, number];

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

function tube(points: Point[], start: number, end: number): string {
  const edge = (side: number) => points.map((point, index): Point => {
      const [before, after] = [points[Math.max(0, index - 1)], points[Math.min(points.length - 1, index + 1)]];
      const length = Math.hypot(after[0] - before[0], after[1] - before[1]) || 1;
      const half = (start + ((end - start) * index) / (points.length - 1)) / 2;
      return [point[0] - ((after[1] - before[1]) / length) * half * side, point[1] + ((after[0] - before[0]) / length) * half * side];
  });
  return shape([...edge(-1), ...edge(1).reverse()]);
}

export { shape, tube };
export type { Point };
