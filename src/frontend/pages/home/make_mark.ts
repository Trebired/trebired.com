import { siLinux } from "simple-icons";

type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const ICON: Point = [24, 24];

const PEN_NIB =
"M4.92898 21.4819L10.775 15.6359C11.4423 15.8141 12.1837 15.6414 12.7071 15.118C13.4882 14.3369 13.4882 13.0706 12.7071 12.2896C11.9261 " +
  "11.5085 10.6598 11.5085 9.87872 12.2896C9.35526 12.813 9.18263 13.5544 9.36081 14.2217L3.51476 20.0677L2.4541 19.0071C5.28253 15.7072 " +
  "6.34319 12.0539 7.7574 5.9256L14.1214 5.21849L19.7783 10.8754L19.0711 17.2393C12.9429 18.6535 9.28947 19.7142 5.98964 22.5426L4.92898 " +
  "21.4819ZM16.5962 2.03651L22.9428 8.38312C23.1381 8.57838 23.1381 8.89496 22.9428 9.09022C22.8679 9.16513 22.7712 9.21431 22.6665 " +
  "9.23067L21.1924 9.46113L15.5356 3.80428L15.7477 2.31935C15.7868 2.04599 16.04 1.85604 16.3134 1.89509C16.4205 1.91039 16.5197 1.96001 " +
  "16.5962 2.03651Z";

type Turn = (point: Point) => Point;

type Put = (points: Point[]) => string;

const VIEW: Point = [400, 400];

const still: Turn = (point) => point;

const fixed = (value: number) => Math.round(value * 10) / 10;

const at = ([left, top]: Point) => `${fixed(left)} ${fixed(top)}`;

const shape = (points: Point[]) => `M${points.map(at).join("L")}Z`;

function spin([cx, cy]: Point, degrees: number): Turn {
  const [cos, sin] = [Math.cos((degrees * Math.PI) / 180), Math.sin((degrees * Math.PI) / 180)];
  return ([x, y]) => [cx + (x - cx) * cos - (y - cy) * sin, cy + (x - cx) * sin + (y - cy) * cos];
}

function ellipse([cx, cy]: Point, wide: number, tall: number, turn: Turn = still, hole = false): Point[] {
  const points = Array.from({ length: 72 }, (_, index): Point => {
      const angle = (index / 72) * Math.PI * 2;
      return turn([cx + Math.cos(angle) * wide, cy + Math.sin(angle) * tall]);
  });
  return hole ? points.reverse() : points;
}

const quad = (left: number, top: number, width: number, height: number, turn: Turn) =>
shape(([[left, top], [left + width, top], [left + width, top + height], [left, top + height]] as Point[]).map(turn));

function globe(centre: Point, radius: number, tilt: number): string {
  const [turn, stroke, [cx, cy]] = [spin(centre, tilt), radius * 0.09, centre];
  const ring = (wide: number) => shape(ellipse(centre, wide, radius, turn)) + shape(ellipse(centre, wide - stroke, radius - stroke, turn, true));
  const chord = (offset: number) => {
    const half = Math.sqrt(radius ** 2 - offset ** 2) - stroke;
    return quad(cx - half, cy + offset - stroke * 0.4, half * 2, stroke * 0.8, turn);
  };
  const axis = quad(cx - stroke * 0.4, cy - radius + stroke / 2, stroke * 0.8, radius * 2 - stroke, turn);
  return [ring(radius), ring(radius * 0.6), axis, chord(0), chord(-radius * 0.52), chord(radius * 0.52)].join("");
}

function place(d: string, centre: Point, scale: number, degrees: number, target: Point): string {
  const turn = spin([0, 0], degrees);
  const map = ([x, y]: Point): Point => {
    const [rx, ry] = turn([(x - centre[0]) * scale, (y - centre[1]) * scale]);
    return [target[0] + rx, target[1] + ry];
  };
  const tokens = d.match(/[MLHVCZ]|-?(?:\d+\.?\d*|\.\d+)/g) || [];
  let [index, command, current, out]: [number, string, Point, string] = [0, "M", [0, 0], ""];
  const next = () => Number(tokens[index++]);
  while (index < tokens.length) {
    if (/[MLHVCZ]/.test(tokens[index])) command = tokens[index++];
    if (command === "Z") {
      [out, command] = [`${out}Z`, "M"];
      continue;
    }
    if (command === "C") {
      const [pull, push]: Point[] = [[next(), next()], [next(), next()]];
      current = [next(), next()];
      out += `C${at(map(pull))} ${at(map(push))} ${at(map(current))}`;
      continue;
    }
    current = command === "H" ? [next(), current[1]] : command === "V" ? [current[0], next()] : [next(), next()];
    out += `${command === "M" ? "M" : "L"}${at(map(current))}`;
    if (command === "M") command = "L";
  }
  return out;
}

function along(tip: Point, degrees: number): Put {
  const turn = spin([0, 0], degrees);
  return (points) => shape(points.map((point): Point => {
        const [x, y] = turn(point);
        return [tip[0] + x, tip[1] + y];
  }));
}

function scallop(y: number, width: number, start: number): number {
  const third = width / 3;
  const part = ((y + width / 2) % third) / third;
  return start + width * 0.16 * (1 - Math.sin(Math.PI * part));
}

function sharpened(put: Put, width: number): string {
  const [half, cone, lead, gap] = [width / 2, width * 1.3, width * 0.42, width * 0.1];
  const side = (x: number) => (half * x) / cone;
  const back = Array.from({ length: 13 }, (_, index): Point => {
      const across = -half + (width * index) / 12;
      return [scallop(across, width, cone) - gap, across];
  });
  const graphite = put([[0, 0], [lead, -side(lead)], [lead, side(lead)]]);
  return graphite + put([[lead + gap, -side(lead + gap)], [cone, -half], ...back, [cone, half], [lead + gap, side(lead + gap)]]);
}

function painted(put: Put, width: number, length: number): string {
  const [half, gap, end] = [width / 2, width * 0.1, length - width * 1.8];
  const strips = [0, 1, 2].map((index) => {
      const top = -half + (width * index) / 3 + (index ? width * 0.05 : 0);
      const bottom = -half + (width * (index + 1)) / 3 - (index < 2 ? width * 0.05 : 0);
      const front = Array.from({ length: 5 }, (_, step): Point => {
          const across = top + ((bottom - top) * step) / 4;
          return [scallop(across, width, width * 1.3), across];
      });
      return put([...front, [end, bottom], [end, top]]);
  });
  const bands = [0, 1, 2].map((index) => {
      const [head, wide] = [end + gap + index * width * 0.3, half * 1.06];
      return put([[head, -wide], [head + width * 0.24, -wide], [head + width * 0.24, wide], [head, wide]]);
  });
  const [rubber, round] = [end + gap * 2 + width * 0.9, half * 0.94];
  const cap = Array.from({ length: 9 }, (_, step): Point => {
      const angle = -Math.PI / 2 + (Math.PI * step) / 8;
      return [length - half + Math.cos(angle) * round, Math.sin(angle) * round];
  });
  return [...strips, ...bands, put([[rubber, -round], ...cap, [rubber, round]])].join("");
}

const pencil = (tip: Point, degrees: number, width: number, length: number) =>
sharpened(along(tip, degrees), width) + painted(along(tip, degrees), width, length);

function gear(centre: Point, tip: number, root: number, teeth: number, phase: number): string {
  const step = (Math.PI * 2) / teeth;
  const point = (angle: number, reach: number): Point => [centre[0] + Math.cos(angle) * reach, centre[1] + Math.sin(angle) * reach];
  const points = Array.from({ length: teeth }, (_, index) => {
      const angle = phase + index * step;
      return [point(angle, root), point(angle + step * 0.14, tip), point(angle + step * 0.44, tip), point(angle + step * 0.58, root)];
  }).flat();
  return shape(points) + shape(ellipse(centre, root * 0.36, root * 0.36, still, true));
}

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", viewBox: VIEW });

const icon = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", viewBox: ICON });

const MAKE = {
  gear: mark(gear([150, 248], 136, 110, 12, 0.1)),
  globe: mark(globe([200, 200], 176, -18)),
  nib: mark(place(PEN_NIB, [4.2, 20.8], 13.6, 100, [258, 184])),
  orbit: mark(globe([300, 112], 88, 24)),
  pencil: mark(pencil([100, 290], -62, 110, 700)),
  tux: icon(siLinux.path),
};

export { MAKE };
