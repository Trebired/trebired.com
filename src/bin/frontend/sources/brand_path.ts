import type { BrandMark } from "./../../../frontend/shared/data/types";

type Matrix = [number, number, number, number, number, number];

type Point = [number, number];

const IDENTITY: Matrix = [1, 0, 0, 1, 0, 0];

const TAG = /<(\/?)([a-z]+)\b([^>]*?)(\/?)>/giu;

const COMMAND = /([MmLlHhVvZz])([^MmLlHhVvZz]*)/gu;

function multiply([a, b, c, d, e, f]: Matrix, [g, h, i, j, k, l]: Matrix): Matrix {
  return [a * g + c * h, b * g + d * h, a * i + c * j, b * i + d * j, a * k + c * l + e, b * k + d * l + f];
}

function transformOf(attrs: string): Matrix {
  const value = /\btransform="([^"]*)"/u.exec(attrs)?.[1] || "";
  let matrix = IDENTITY;
  for (const [, name = "", args = ""] of value.matchAll(/([a-z]+)\(([^)]*)\)/giu)) {
    const values = args.split(/[\s,]+/u).filter(Boolean).map(Number);
    if (name === "translate") matrix = multiply(matrix, [1, 0, 0, 1, values[0] || 0, values[1] || 0]);
    else if (name === "matrix" && values.length === 6) matrix = multiply(matrix, values as Matrix);
    else if (name === "scale") matrix = multiply(matrix, [values[0] || 1, 0, 0, values[1] ?? values[0] ?? 1, 0, 0]);
    else throw new Error(`the logo uses a ${name} transform the mark cannot flatten`);
  }
  return matrix;
}

function apply(matrix: Matrix, [x, y]: Point): string {
  const round = (value: number) => String(Math.round(value * 10000) / 10000);
  return `${round(matrix[0] * x + matrix[2] * y + matrix[4])} ${round(matrix[1] * x + matrix[3] * y + matrix[5])}`;
}

function flatten(d: string, matrix: Matrix): string {
  let [x, y, startX, startY] = [0, 0, 0, 0];
  const out: string[] = [];
  for (const [, command = "", args = ""] of d.matchAll(COMMAND)) {
    const numbers = args.trim() ? args.trim().split(/[\s,]+/u).map(Number) : [];
    const relative = command === command.toLowerCase();
    const upper = command.toUpperCase();
    if (upper === "Z") {
      out.push("Z");
      [x, y] = [startX, startY];
      continue;
    }
    if (upper === "H" || upper === "V") {
      for (const value of numbers) {
        if (upper === "H") x = relative ? x + value : value;
        else y = relative ? y + value : value;
        out.push(`L${apply(matrix, [x, y])}`);
      }
      continue;
    }
    for (let index = 0; index + 1 < numbers.length; index += 2) {
      x = relative ? x + (numbers[index] as number) : (numbers[index] as number);
      y = relative ? y + (numbers[index + 1] as number) : (numbers[index + 1] as number);
      const move = upper === "M" && index === 0;
      if (move) {
        startX = x;
        startY = y;
      }
      out.push(`${move ? "M" : "L"}${apply(matrix, [x, y])}`);
    }
  }
  return out.join("");
}

function flattenMark(svg: string): Omit<BrandMark, "colors"> {
  const viewBox = /viewBox="([^"]+)"/u.exec(svg)?.[1];
  if (!viewBox) throw new Error("the minimal logo has no viewBox");
  const [minX = 0, minY = 0, width = 1, height = 1] = viewBox.split(/[\s,]+/u).map(Number);
  const stack: Matrix[] = [[1, 0, 0, 1, -minX, -minY]];
  const paths: string[] = [];
  let skip = 0;
  for (const [, closing, name = "", attrs = "", selfClosing] of svg.matchAll(TAG)) {
    if (name === "defs") skip += closing ? -1 : selfClosing ? 0 : 1;
    if (skip > 0 || name === "defs") continue;
    if (name === "g" && closing) stack.pop();
    else if (name === "g" && !selfClosing) stack.push(multiply(stack[stack.length - 1] as Matrix, transformOf(attrs)));
    else if (name === "path" && !closing) {
      const data = /\sd="([^"]*)"/u.exec(attrs)?.[1] || "";
      if (/[CcSsQqTtAa]/u.test(data)) throw new Error("the minimal logo uses curves the mark cannot flatten");
      paths.push(flatten(data, multiply(stack[stack.length - 1] as Matrix, transformOf(attrs))));
    }
  }
  if (!paths.length) throw new Error("the minimal logo has no paths");
  return { d: paths.join(""), size: [width, height] };
}

export { flattenMark };
