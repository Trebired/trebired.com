type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "slice"; viewBox: Point };

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([left, top]: Point) => `${fixed(left)} ${fixed(top)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

const box = (left: number, top: number, width: number, height: number) =>
shape([[left, top], [left + width, top], [left + width, top + height], [left, top + height]]);

const SPECIMEN =
"M77.5 330 169.3 120H238.9L330.8 330H257.5L189.8 153.6H217.3L149.6 330ZM132.2 293.4 150.1 242.4H246.8L264.8 293.4ZM439.3 330V300.9" +
  "L434.5 293.1V237.9Q434.5 225.9 427.2 219.6Q419.8 213.3 403.3 213.3Q392.2 213.3 380.8 216.8Q369.4 220.2 361.3 226.2L339.7 181.5" +
  "Q354.1 172.5 374.2 167.7Q394.3 162.9 413.5 162.9Q455.8 162.9 479.1 181.8Q502.3 200.7 502.3 241.8V330ZM392.8 333" +
  "Q372.7 333 359.2 326.1Q345.7 319.2 338.8 307.6Q331.9 296.1 331.9 282Q331.9 266.1 340 255Q348.1 243.9 364.8 238.2" +
  "Q381.4 232.5 406.9 232.5H441.1V265.2H417.7Q406.9 265.2 402 268.6Q397 272.1 397 279Q397 284.7 401.4 288.4Q405.7 292.2 413.2 292.2" +
  "Q420.1 292.2 426 288.4Q431.8 284.7 434.5 276.6L443.2 296.7Q439.3 315 426.8 324Q414.1 333 392.8 333Z";

function seeded(start: number): () => number {
  let state = start;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function round([cx, cy]: Point, radius: number): string {
  const points = Array.from({ length: 48 }, (_, index): Point => {
      const angle = (index / 48) * Math.PI * 2;
      return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  });
  return shape(points);
}

function segment(start: Point, end: Point, width: number): string {
  const length = Math.hypot(end[0] - start[0], end[1] - start[1]) || 1;
  const [ox, oy] = [((start[1] - end[1]) / length) * (width / 2), ((end[0] - start[0]) / length) * (width / 2)];
  return shape([[start[0] + ox, start[1] + oy], [end[0] + ox, end[1] + oy], [end[0] - ox, end[1] - oy], [start[0] - ox, start[1] - oy]]);
}

function network(): string {
  const random = seeded(7);
  const nodes = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 12 }, (_, column): Point => [column * 110 - 10 + random() * 70, row * 100 + random() * 60]));
  const links = nodes.flatMap((row, index) => row.flatMap((node, column) => [
        column < row.length - 1 ? segment(node, row[column + 1], 3) : "",
        index < nodes.length - 1 && random() > 0.35 ? segment(node, nodes[index + 1][column], 3) : "",
        index < nodes.length - 1 && column < row.length - 1 && random() > 0.7 ? segment(node, nodes[index + 1][column + 1], 3) : "",
  ]));
  return links.join("") + nodes.flat().map((node) => round(node, 9)).join("");
}

function graphPaper(): string {
  const lines = (count: number, step: number, length: number, across: boolean) => Array.from({ length: count }, (_, index) => {
      const width = index % 5 === 0 ? 4 : 1.5;
      return across ? box(0, index * step - width / 2, length, width) : box(index * step - width / 2, 0, width, length);
  }).join("");
  return lines(31, 30, 600, true) + lines(21, 30, 900, false);
}

const GUIDES = [120, 166, 330, 388];

const specimen = () => SPECIMEN + GUIDES.map((top) => box(0, top - 1.25, 600, 2.5)).join("");

function sourceCode(): string {
  const random = seeded(11);
  let depth = 0;
  return Array.from({ length: 15 }, (_, row) => {
      depth = Math.max(0, Math.min(3, depth + Math.round(random() * 2 - 1)));
      if (random() < 0.12) return "";
      const [indent, first, second] = [20 + depth * 36, 40 + random() * 160, random() > 0.5 ? 30 + random() * 120 : 0];
      const top = 18 + row * 26;
      return box(indent, top, first, 10) + (second ? box(indent + first + 14, top, second, 10) : "");
  }).join("");
}

const mark = (canvas: Point, d: string): Mark => ({ canvas, d, fit: "slice", viewBox: canvas });

const GROUND = {
  code: mark([600, 400], sourceCode()),
  specimen: mark([600, 400], specimen()),
  graph: mark([600, 900], graphPaper()),
  network: mark([1200, 440], network()),
};

export { GROUND, seeded };
