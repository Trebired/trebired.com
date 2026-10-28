import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { riseItem } from "./rise";

const STACK = "minmax(0, 1fr)";

const LAYER = { inset: "0", position: "absolute" };

const SHOUT = {
  display: "block",
  fontFamily: token.variable("font-title"),
  fontWeight: "900",
  lineHeight: "0.86",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const url: FrontendContainer = {
  parts: {
    copy: { style: { maxInlineSize: "44rem" } },
    host: { style: { ...SHOUT, fontSize: "clamp(2rem, 6.4vw, 5.6rem)" } },
    name: { style: { ...SHOUT, fontSize: "clamp(4rem, 14vw, 12.5rem)" } },
  },
  style: {
    display: "flex",
    flexDirection: "column",
    gap: token.gap("xs"),
    paddingBlock: token.gap("lg"),
    rotate: "-3deg",
    transformOrigin: "left center",
  },
};

const bill: FrontendContainer = {
  on: {
    "& > li:nth-child(even)": { alignItems: "end", rotate: "1.5deg" },
    "& > li:nth-child(odd)": { rotate: "-1.5deg" },
  },
  parts: {
    line: { at: { md: { display: "none" } }, style: { ...SHOUT, fontSize: "calc(100cqi / (var(--chars) * 0.72))", lineHeight: "1" } },
    plain: {
      at: { md: { blockSize: "auto", clipPath: "none", inlineSize: "auto", overflow: "visible", position: "static", whiteSpace: "normal" } },
      style: { blockSize: "1px", clipPath: "inset(50%)", inlineSize: "1px", overflow: "hidden", position: "absolute", whiteSpace: "nowrap" },
    },
    note: { style: { maxInlineSize: "26rem" } },
    rule: { style: { display: "flex", flexDirection: "column", gap: token.gap("xs"), position: "relative" } },
  },
  style: { containerType: "inline-size", display: "flex", flexDirection: "column", gap: token.gap("lg"), paddingBlock: token.gap("lg") },
};

const LENS = riseItem("100%", 1);

const report: FrontendContainer = {
  at: { lg: { ...LENS.host, display: "flex", flexDirection: "column" } },
  on: {
    "& > .tbf-inline-row:not([aria-hidden])": { gridColumn: "1 / -1" },
    "& > :not([aria-hidden])": { ...LENS.on["& > :not([aria-hidden])"], gridColumn: "1" },
  },
  style: {
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
    position: "relative",
    rowGap: token.gap("lg"),
  },
};

const lens: FrontendContainer = {
  at: { lg: { ...LENS.item, insetInlineEnd: "auto", insetInlineStart: "0", translate: "none" } },
  parts: {
    bug: { style: { aspectRatio: "1", inlineSize: "32%", insetBlockStart: "22%", insetInlineStart: "22%", position: "absolute" } },
    copy: { style: { maxInlineSize: "44rem" } },
    glass: { style: LAYER },
  },
  style: {
    alignSelf: "end",
    aspectRatio: "1",
    gridColumn: "2",
    gridRow: "1 / span 2",
    inlineSize: "clamp(16rem, 28vw, 26rem)",
    pointerEvents: "none",
    position: "relative",
    translate: "6% 0",
    zIndex: "-1",
  },
};

const scale: FrontendContainer = {
  parts: {
    beam: { style: LAYER },
    out: { at: { md: { gridColumn: "auto" } }, style: { gridColumn: "3" } },
    pans: {
      at: { md: { gridTemplateColumns: STACK } },
      style: {
        columnGap: token.gap("xl"),
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.5fr) minmax(0, 1fr)",
        rowGap: token.gap("xl"),
      },
    },
    patch: {
      style: { aspectRatio: "160 / 120", inlineSize: "13.333%", insetBlockStart: "41.667%", insetInlineStart: "7.333%", position: "absolute" },
    },
  },
  style: { aspectRatio: "1200 / 720", inlineSize: "100%", position: "relative" },
};

export { bill, lens, report, scale, url };
