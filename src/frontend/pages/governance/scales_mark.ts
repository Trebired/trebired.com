import { circle, rounded } from "./../../components/riso/shapes";
import { tube } from "./drawing";
import type { Point } from "./drawing";

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const VIEW: Point = [960, 960];

const PIVOT: Point = [480, 200];

const REACH = 315;

const TILT = 0.17;

const DROP = 300;

const SPREAD = 128;

const ENDS: Point[] = [-1, 1].map((side): Point => [PIVOT[0] + side * REACH * Math.cos(TILT), PIVOT[1] - side * REACH * Math.sin(TILT)]);

const pans = ENDS.map(([x, y]): Point => [x, y + DROP]);

function body(): string {
  const beam = ENDS.map((end) => tube([PIVOT, end], 46, 22));
  const caps = ENDS.map(([x, y]) => circle(x, y, 19));
  const dishes = pans.map(([x, y]) => rounded(x - 160, y - 8, 320, 20, 9) + `M${x + 152} ${y + 8}Q${x} ${y + 124} ${x - 152} ${y + 8}Z`);
  const column = [
    circle(PIVOT[0], 138, 32),
    rounded(PIVOT[0] - 28, 160, 56, 700, 10),
    circle(PIVOT[0], PIVOT[1], 40),
    rounded(PIVOT[0] - 50, 244, 100, 30, 10),
    rounded(PIVOT[0] - 44, 520, 88, 28, 10),
    rounded(PIVOT[0] - 130, 830, 260, 46, 12),
    rounded(PIVOT[0] - 190, 884, 380, 120, 14),
  ];
  return [...beam, ...caps, ...dishes, ...column].join("");
}

function chains(): string {
  return ENDS.flatMap((end, index) => {
      const [x, y] = pans[index];
      return [-1, 1].map((side) => tube([end, [x + side * SPREAD, y - 6]], 7, 7));
  }).join("");
}

function shade(): string {
  const bowls = pans.map(([x, y]) => {
      const under = `M${x - 116} ${y + 50}Q${x} ${y + 124} ${x + 152} ${y + 8}`;
      return `${under}L${x + 124} ${y + 36}Q${x + 10} ${y + 84} ${x - 116} ${y + 50}Z`;
  });
  return [...bowls, rounded(PIVOT[0] + 8, 274, 16, 556, 6), rounded(PIVOT[0] + 96, 884, 94, 120, 14)].join("");
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", viewBox: VIEW });

const SCALES = { body: mark(body()), chains: mark(chains()), shade: mark(shade()) };

export { SCALES };
