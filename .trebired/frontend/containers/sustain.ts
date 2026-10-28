import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const SHOUT = {
  display: "block",
  fontFamily: token.variable("font-title"),
  fontWeight: "900",
  lineHeight: "0.8",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const budget: FrontendContainer = {
  at: { md: { gridTemplateColumns: "minmax(0, 1fr)", paddingBlockEnd: "0" } },
  parts: {
    side: { style: { maxInlineSize: "22rem", paddingBlockEnd: "1rem" } },
    unit: { style: { ...SHOUT, fontSize: "clamp(3rem, 8vw, 7rem)" } },
    value: { style: { ...SHOUT, fontSize: "clamp(9rem, 30vw, 26rem)" } },
  },
  style: {
    alignItems: "end",
    columnGap: token.gap("lg"),
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    paddingBlockEnd: "3rem",
    rowGap: token.gap("sm"),
  },
};

const sunset: FrontendContainer = {
  parts: { date: { style: { ...SHOUT, fontSize: "calc(100cqi / (var(--chars) * 0.56))" } } },
  style: { containerType: "inline-size", display: "flex", flexDirection: "column", gap: token.gap("sm"), paddingBlockEnd: "2rem" },
};

const units: FrontendContainer = {
  parts: {
    front: { style: { inlineSize: "100%", position: "relative" } },
    stack: { style: { display: "flex", flexDirection: "column", gap: token.gap("xs") } },
  },
  style: { display: "flex", flexDirection: "column", gap: token.gap("md"), paddingBlockStart: token.gap("md") },
  variants: { one: { style: { aspectRatio: "1600 / 148" } }, two: { style: { aspectRatio: "1600 / 296" } } },
};

const SIGN = "min(90vw, 36rem)";

const cycle: FrontendContainer = {
  at: { lg: { "--cycle-anchor": "relative", "--cycle-sign": SIGN, minBlockSize: "auto" } },
  on: {
    "& > .tbfm-band__inner": {
      paddingBlockEnd: token.css `calc(${token.variable("cycle-sign", "0px")} * 0.55)`,
      position: token.variable("cycle-anchor", "static"),
    },
  },
  style: { justifyContent: "center", minBlockSize: "clamp(36rem, 60vw, 54rem)" },
};

const loop: FrontendContainer = {
  at: { lg: { blockSize: "auto", inlineSize: SIGN, insetBlockEnd: "0", insetBlockStart: "auto", insetInlineEnd: "-10%", translate: "none" } },
  style: {
    aspectRatio: "1",
    inlineSize: token.css `min(calc(108% - ${token.frontend("container-px")} - 53rem), calc(58% + ${token.variable("band-max")} / 2 - 53rem))`,
    insetBlockStart: "50%",
    insetInlineEnd: "-8%",
    opacity: "0.45",
    pointerEvents: "none",
    position: "absolute",
    translate: "0 -50%",
    zIndex: "-1",
  },
};

const LAYER = { inset: "0", position: "absolute" };

const horizon: FrontendContainer = {
  parts: { copy: { style: { paddingBlockEnd: "20vw" } }, layer: { style: LAYER } },
  style: { aspectRatio: "1600 / 460", insetBlockEnd: "0", insetInline: "0", pointerEvents: "none", position: "absolute", zIndex: "-1" },
};

const heap: FrontendContainer = {
  at: { md: { inlineSize: "220vw", insetInline: "auto", insetInlineStart: "50%", translate: "-50% 0" } },
  parts: { copy: { at: { md: { paddingBlockEnd: "calc(57vw - 4rem)" } }, style: { paddingBlockEnd: "calc(26vw - 4rem)" } }, layer: { style: LAYER } },
  style: { aspectRatio: "1600 / 560", insetBlockEnd: "0", insetInline: "0", pointerEvents: "none", position: "absolute", zIndex: "-1" },
};

const waste: FrontendContainer = {
  parts: { layer: { style: { blockSize: "100%", inlineSize: "100%", inset: "0", position: "absolute" } } },
  style: { aspectRatio: "1192 / 184", inlineSize: "100%", position: "relative" },
};

export { budget, cycle, heap, horizon, loop, sunset, units, waste };
