import type { Art } from "@trebired/overprint";

type Form =
|"arrow"
|"bars"
|"chip"
|"half"
|"ring"
|"sun";

const fixed = (value: number) => String(Math.round(value * 10000) / 10000);

function circle(x: number, y: number, radius: number): string {
  const arc = (to: number) => `A${fixed(radius)} ${fixed(radius)} 0 1 1 ${fixed(to)} ${fixed(y)}`;
  return `M${fixed(x + radius)} ${fixed(y)}${arc(x - radius)}${arc(x + radius)}Z`;
}

function rounded(x: number, y: number, width: number, height: number, radius: number): string {
  const corner = fixed(radius);
  const arc = (dx: number, dy: number) => `a${corner} ${corner} 0 0 1 ${fixed(dx)} ${fixed(dy)}`;
  return [
    `M${fixed(x + radius)} ${fixed(y)}h${fixed(width - radius * 2)}${arc(radius, radius)}`,
    `v${fixed(height - radius * 2)}${arc(-radius, radius)}h${fixed(radius * 2 - width)}${arc(-radius, -radius)}`,
    `v${fixed(radius * 2 - height)}${arc(radius, -radius)}Z`,
  ].join("");
}

const LEGS = [0.275, 0.425, 0.575, 0.725];

const CHIP = [
  rounded(0.2, 0.2, 0.6, 0.6, 0.06),
  rounded(0.33, 0.33, 0.34, 0.34, 0.03),
  rounded(0.41, 0.41, 0.18, 0.18, 0.02),
  ...LEGS.flatMap((at) => [
      rounded(at - 0.03, 0.03, 0.06, 0.15, 0.02),
      rounded(at - 0.03, 0.82, 0.06, 0.15, 0.02),
      rounded(0.03, at - 0.03, 0.15, 0.06, 0.02),
      rounded(0.82, at - 0.03, 0.15, 0.06, 0.02),
  ]),
].join("");

const PATHS: Record<Form, string> = {
  arrow: "M0.04 0.38H0.58V0.14L0.96 0.5L0.58 0.86V0.62H0.04Z",
  bars: Array.from({ length: 5 }, (_, row) => rounded(0.04, 0.08 + row * 0.18, 0.92, 0.11, 0.055)).join(""),
  chip: CHIP,
  half: "M0.02 0.78A0.48 0.48 0 0 1 0.98 0.78Z",
  ring: `${circle(0.5, 0.5, 0.48)}${circle(0.5, 0.5, 0.28)}`,
  sun: circle(0.5, 0.5, 0.48),
};

function formArt(form: Form): Art {
  return { align: "start", d: PATHS[form], kind: "path", rule: "evenodd" };
}

export { circle, fixed, formArt, rounded };
export type { Form };
