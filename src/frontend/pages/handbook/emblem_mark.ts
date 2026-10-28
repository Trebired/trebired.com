type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

const VIEW: Point = [400, 400];

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

const box = (left: number, top: number, width: number, height: number) =>
shape([[left, top], [left + width, top], [left + width, top + height], [left, top + height]]);

function round([cx, cy]: Point, radius: number): string {
  return shape(Array.from({ length: 64 }, (_, index): Point => {
        const angle = (index / 64) * Math.PI * 2;
        return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  }));
}

function gear(): string {
  const [teeth, tip, root] = [10, 190, 152];
  const step = (Math.PI * 2) / teeth;
  const point = (angle: number, reach: number): Point => [200 + Math.cos(angle) * reach, 200 + Math.sin(angle) * reach];
  const outline = Array.from({ length: teeth }, (_, index) => {
      const angle = index * step;
      return [point(angle, root), point(angle + step * 0.12, tip), point(angle + step * 0.42, tip), point(angle + step * 0.54, root)];
  }).flat();
  return shape(outline) + round([200, 200], 64);
}

function parcel(): string {
  const top = shape([[200, 34], [362, 122], [200, 210], [38, 122]]);
  const tape = shape([[110, 73], [136, 59], [290, 147], [264, 161]]);
  const left = shape([[38, 140], [190, 223], [190, 378], [38, 295]]);
  const right = shape([[210, 223], [362, 140], [362, 295], [210, 378]]);
  return top + tape + left + right;
}

function page(): string {
  const sheet = shape([[70, 20], [250, 20], [250, 100], [330, 100], [330, 380], [70, 380]]);
  const fold = shape([[262, 20], [330, 88], [262, 88]]);
  const lines = [120, 162, 204, 246, 288, 330].map((top, index) => box(112, top, index === 5 ? 120 : 176, 16)).join("");
  return sheet + fold + lines;
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", rule: "evenodd", viewBox: VIEW });

const EMBLEM = { document: mark(page()), gear: mark(gear()), parcel: mark(parcel()) };

export { EMBLEM };
