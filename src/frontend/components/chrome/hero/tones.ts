import type { Field } from "./../../riso/recipes";

export type HeroTone = [string, string];

type HeroLook = { field: Field; tones: HeroTone };

const INK = {
  aqua: "#9fe3dc",
  butter: "#ffe08a",
  char: "#484848",
  blue: "#9cc4f5",
  coral: "#f4a99a",
  crimson: "#e0566e",
  cyan: "#9de2ee",
  green: "#ade6b1",
  indigo: "#a2a8f2",
  magenta: "#e8a6e6",
  mint: "#a7e0c2",
  orchid: "#d6aef0",
  peach: "#f3bda8",
  periwinkle: "#aab9f5",
  pink: "#f2aed6",
  red: "#f29a9a",
  rose: "#f2aebd",
  sage: "#bfd9b8",
  signal: "#ef4444",
  sky: "#a3d6f4",
  stone: "#c4c4c4",
  teal: "#9fd9c6",
  violet: "#ad9ff0",
};

const DEFAULT_LOOK: HeroLook = { field: "circle", tones: [INK.periwinkle, INK.cyan] };

const HERO_LOOKS: Record<string, HeroLook> = {
  "/": { field: "circle", tones: [INK.magenta, INK.stone] },
  "/about": { field: "mesh", tones: [INK.rose, INK.teal] },
  "/acceptable-use": { field: "circle", tones: [INK.red, INK.indigo] },
  "/accessibility": { field: "cross", tones: [INK.mint, INK.periwinkle] },
  "/blog": { field: "cross", tones: [INK.indigo, INK.aqua] },
  "/brand": { field: "ellipse", tones: [INK.magenta, INK.sky] },
  "/careers": { field: "square", tones: [INK.sage, INK.coral] },
  "/case-studies": { field: "circle", tones: [INK.teal, INK.orchid] },
  "/code-of-conduct": { field: "grain", tones: [INK.coral, INK.aqua] },
  "/contact": { field: "ellipse", tones: [INK.sky, INK.pink] },
  "/contribute": { field: "ellipse", tones: [INK.green, INK.rose] },
  "/cookies": { field: "mesh", tones: [INK.peach, INK.teal] },
  "/faq": { field: "square", tones: [INK.cyan, INK.rose] },
  "/freedom": { field: "square", tones: [INK.char, INK.signal] },
  "/governance": { field: "mesh", tones: [INK.violet, INK.peach] },
  "/handbook": { field: "circle", tones: [INK.orchid, INK.blue] },
  "/licenses": { field: "hatch", tones: [INK.aqua, INK.pink] },
  "/philosophy": { field: "grain", tones: [INK.pink, INK.cyan] },
  "/privacy": { field: "ellipse", tones: [INK.periwinkle, INK.orchid] },
  "/process": { field: "grain", tones: [INK.pink, INK.mint] },
  "/projects": { field: "square", tones: [INK.green, INK.blue] },
  "/roadmap": { field: "hatch", tones: [INK.blue, INK.coral] },
  "/security": { field: "mesh", tones: [INK.crimson, INK.stone] },
  "/services": { field: "hatch", tones: [INK.coral, INK.violet] },
  "/standards": { field: "cross", tones: [INK.sky, INK.violet] },
  "/sustainability": { field: "grain", tones: [INK.butter, INK.teal] },
  "/team": { field: "circle", tones: [INK.rose, INK.periwinkle] },
  "/terms": { field: "hatch", tones: [INK.sage, INK.indigo] },
  "/trademark": { field: "grain", tones: [INK.magenta, INK.green] },
};

function lookOf(path: string): HeroLook {
  const route = String(path || "/").replace(/^\/[a-z]{2}(?=\/|$)/u, "").replace(/\/+$/u, "") || "/";
  return HERO_LOOKS[route] || DEFAULT_LOOK;
}

export function heroTone(path: string): HeroTone {
  return lookOf(path).tones;
}

export function heroField(path: string): Field {
  return lookOf(path).field;
}
