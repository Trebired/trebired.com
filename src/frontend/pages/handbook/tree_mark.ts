type Point = [number, number];

type Form = "file" | "folder" | "root";

type Node = [level: number, form: Form];

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const WIDTH = 600;

const ROW = 78;

const INDENT = 120;

const LINE = 17;

const LEFT = 32;

const SIZE: Record<Form, number> = { file: 18, folder: 22, root: 32 };

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([x, y]: Point) => `${fixed(x)} ${fixed(y)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

const box = (left: number, top: number, width: number, height: number) =>
shape([[left, top], [left + width, top], [left + width, top + height], [left, top + height]]);

const nodeX = (level: number) => LEFT + level * INDENT;

const rowY = (row: number) => (row + 0.5) * ROW;

function dot([cx, cy]: Point, radius: number): string {
  return shape(Array.from({ length: 40 }, (_, index): Point => {
        const angle = (index / 40) * Math.PI * 2;
        return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  }));
}

function marker([level, form]: Node, row: number): string {
  const [cx, cy, size] = [nodeX(level), rowY(row), SIZE[form]];
  return form === "file" ? box(cx - size, cy - size, size * 2, size * 2) : dot([cx, cy], size);
}

function childrenOf(nodes: Node[], row: number): number[] {
  const rows: number[] = [];
  for (let next = row + 1; next < nodes.length && nodes[next][0] > nodes[row][0]; next++) {
    if (nodes[next][0] === nodes[row][0] + 1) rows.push(next);
  }
  return rows;
}

function links(nodes: Node[]): string {
  return nodes.map(([level], row) => {
      const children = childrenOf(nodes, row);
      if (children.length === 0) return "";
      const left = nodeX(level) - LINE / 2;
      const trunk = box(left, rowY(row), LINE, rowY(children[children.length - 1]) - rowY(row) + LINE / 2);
      return trunk + children.map((child) => box(left, rowY(child) - LINE / 2, INDENT, LINE)).join("");
  }).join("");
}

function tree(nodes: Node[]): Mark {
  const canvas: Point = [WIDTH, nodes.length * ROW];
  return { canvas, d: links(nodes) + nodes.map(marker).join(""), fit: "fill", viewBox: canvas };
}

function labelAt([level, form]: Node, row: number, rows: number) {
  return { insetBlockStart: `${(rowY(row) / (rows * ROW)) * 100}%`, insetInlineStart: `${((nodeX(level) + SIZE[form] + 22) / WIDTH) * 100}%` };
}

export { labelAt, tree };
export type { Form, Node };
