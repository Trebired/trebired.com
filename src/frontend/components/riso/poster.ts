import type { Art } from "@trebired/overprint";

const SEAL = { box: { height: 0.62, width: 0.27, x: 0.705, y: 0.15 }, rotate: -11 } as const;

const TALL = { box: { height: 0.42, width: 0.74, x: 0.36, y: 0.04 }, rotate: -11 } as const;

function posterArt(part: string | undefined, mark: Art | null): Art {
  if (part === "field" || !mark) return { kind: "fill" };
  return mark;
}

function sealOf(source: { href?: string; markup?: string; viewBox?: string }, tall = false): Art | null {
  const placed = tall ? TALL : SEAL;
  if (source.href) return { ...placed, href: source.href, kind: "image" };
  if (source.markup && source.viewBox) return { ...placed, kind: "svg", markup: source.markup, viewBox: source.viewBox };
  return null;
}

export { posterArt, sealOf };
