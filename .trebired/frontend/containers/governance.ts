import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const STACK = "minmax(0, 1fr)";

const COLUMN = { display: "flex", flexDirection: "column" };

const civic: FrontendContainer = {
  parts: {
    building: { style: { aspectRatio: "1200 / 730", inlineSize: "100%", position: "relative" } },
    lead: { style: { maxInlineSize: "44rem" } },
    pillar: { at: { md: { textAlign: "start" } }, style: { ...COLUMN, gap: token.gap("xs"), textAlign: "center" } },
    pillars: {
      at: { md: { gridTemplateColumns: STACK } },
      style: { columnGap: token.gap("md"), display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", rowGap: token.gap("lg") },
    },
  },
};

const ABOVE = 168;

const ZONE = 164;

const BELOW = 288;

const SPACER = { content: "\"\"", display: "var(--gavel-spacer)", gridColumn: "2" };

const gavel: FrontendContainer = {
  at: { lg: { "--gavel-spacer": "none", gridTemplateColumns: STACK, rowGap: token.gap("lg") } },
  on: {
    "& > h2": { alignSelf: "end", gridColumn: "1", gridRow: "1", position: "relative", zIndex: "1" },
    "&::after": { ...SPACER, aspectRatio: `420 / ${BELOW}`, gridRow: "3" },
    "&::before": { ...SPACER, aspectRatio: `420 / ${ABOVE}`, gridRow: "1" },
  },
  parts: {
    art: {
      at: { lg: { aspectRatio: `1400 / ${ABOVE + ZONE + BELOW}` }, sm: { inlineSize: "132%", translate: "-24% 0" } },
      style: { aspectRatio: `1400 / ${ZONE}`, gridColumn: "1 / -1", gridRow: "2", position: "relative" },
    },
    layer: {
      at: { lg: { blockSize: "100%", insetBlockStart: "0" } },
      style: {
        blockSize: `calc(100% * ${ABOVE + ZONE + BELOW} / ${ZONE})`,
        insetBlockStart: `calc(-100% * ${ABOVE} / ${ZONE})`,
        insetInline: "0",
        position: "absolute",
      },
    },
    text: {
      on: { "& > p": { flex: "1 1 20rem", maxInlineSize: "36rem" } },
      style: {
        alignSelf: "start",
        columnGap: token.gap("xl"),
        display: "flex",
        flexWrap: "wrap",
        gridColumn: "1",
        gridRow: "3",
        position: "relative",
        rowGap: token.gap("md"),
        zIndex: "1",
      },
    },
  },
  style: {
    "--gavel-spacer": "block",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 30%",
    gridTemplateRows: "auto auto auto",
    rowGap: "0",
  },
};

const FLOW = { gridColumn: "1", gridRow: "auto" };

const BALANCE = { shown: 900, view: 960 };

const scales: FrontendContainer = {
  at: { lg: { gridTemplateColumns: STACK } },
  on: { "& > h2": { gridColumn: "1 / -1", gridRow: "1", position: "relative", zIndex: "1" } },
  parts: {
    art: {
      at: { lg: { ...FLOW, overflow: "hidden" } },
      style: { alignSelf: "end", aspectRatio: `${BALANCE.view} / ${BALANCE.shown}`, gridColumn: "2", gridRow: "1 / 3", position: "relative" },
    },
    layer: { style: { blockSize: `calc(100% * ${BALANCE.view} / ${BALANCE.shown})`, inset: "0 0 auto", position: "absolute" } },
    text: { at: { lg: FLOW }, style: { alignSelf: "end", gridColumn: "1", gridRow: "2", maxInlineSize: "36rem" } },
  },
  style: { columnGap: token.gap("xl"), display: "grid", gridTemplateColumns: "minmax(0, 9fr) minmax(0, 11fr)", rowGap: token.gap("lg") },
};

export { civic, gavel, scales };
