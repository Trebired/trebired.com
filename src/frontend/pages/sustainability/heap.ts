type Point = [number, number];

type Item = { holes: Point[][]; solids: Point[][] };

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const VIEW: Point = [1600, 560];

const COUNT = 150;

const LAYERS = 3;

const rect = (x: number, y: number, width: number, height: number): Point[] => [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];

function ellipse(width: number, height: number): Point[] {
  const turn = (index: number) => (index / 12) * Math.PI * 2;
  return Array.from({ length: 12 }, (_, index): Point => [width * Math.cos(turn(index)), height * Math.sin(turn(index))]);
}

const grid = (columns: number, rows: number, cell: (column: number, row: number) => Point[]) =>
Array.from({ length: columns * rows }, (_, index) => cell(index % columns, Math.floor(index / columns)));

const ITEMS: Item[] = [
  { holes: [rect(-46, -38, 92, 70)], solids: [rect(-60, -50, 120, 100), [[-25, 50], [25, 50], [35, 64], [-35, 64]]] },
  { holes: [rect(-72, -40, 144, 76)], solids: [rect(-80, -48, 160, 92), rect(-6, 44, 12, 18), rect(-32, 62, 64, 7)] },
  { holes: [rect(-14, -30, 28, 56)], solids: [rect(-18, -36, 36, 72)] },
  { holes: grid(10, 3, (column, row) => rect(-82 + column * 16.5, -15 + row * 12, 12, 8)), solids: [rect(-90, -22, 180, 44)] },
  { holes: [rect(-20, -50, 40, 10), rect(-20, -34, 40, 10), rect(-5, 34, 10, 10)], solids: [rect(-28, -60, 56, 120)] },
  { holes: [rect(-20, -15, 40, 30), rect(-50, -30, 16, 10), rect(30, -30, 20, 12), rect(-50, 18, 30, 10)], solids: [rect(-60, -40, 120, 80)] },
  {
    holes: [...grid(6, 1, (column) => rect(-100 + column * 20, -9, 16, 18)), rect(30, -6, 70, 4), rect(30, 2, 70, 4)],
    solids: [rect(-110, -14, 220, 28)],
  },
  { holes: [rect(-10, -18, 20, 12), rect(-14, 4, 28, 14)], solids: [rect(-22, -22, 44, 44)] },
  { holes: [rect(-1, -18, 2, 10)], solids: [ellipse(13, 20)] },
];

function random(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const top = (x: number) => VIEW[1] - (90 + 330 * Math.exp(-(((x - 900) / 480) ** 2)));

const outline = (points: Point[]) => `M${points.map(([x, y]) => `${Math.round(x)} ${Math.round(y)}`).join("L")}Z`;

function placed(item: Item, [x, y]: Point, scale: number, angle: number): string {
  const [cos, sin] = [Math.cos(angle), Math.sin(angle)];
  const move = (points: Point[]) => points.map(([px, py]): Point => [x + scale * (px * cos - py * sin), y + scale * (px * sin + py * cos)]);
  return item.solids.map((shape) => outline(move(shape))).join("") + item.holes.map((shape) => outline(move(shape).reverse())).join("");
}

function heap(): string[] {
  const next = random(7);
  const layers = Array.from({ length: LAYERS }, () => "");
  for (let index = 0; index < COUNT; index += 1) {
    const along = -40 + next() * 1680;
    const depth = VIEW[1] - next() ** 1.3 * (VIEW[1] - top(along)) + 30;
    const item = ITEMS[Math.floor(next() * ITEMS.length)] as Item;
    layers[index % LAYERS] += placed(item, [along, depth], 0.8 + next(), (next() - 0.5) * (Math.PI * 2) / 3);
  }
  return layers;
}

const WASTE: Mark[] = heap().map((d) => ({ canvas: VIEW, d, fit: "fill", viewBox: VIEW }));

export { WASTE };
