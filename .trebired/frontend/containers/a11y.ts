import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { rise, riseItem } from "./rise";

const LAYER = { inset: "0", position: "absolute" };

const STACK = "minmax(0, 1fr)";

const TEXT = { on: { "& > p": { maxInlineSize: "36rem" } } };

const SPLIT = {
  alignItems: "center",
  columnGap: token.gap("xl"),
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  rowGap: token.gap("xl"),
};

const LEVEL = rise("80vw");

const level: FrontendContainer = {
  at: { md: { ...LEVEL.host, gridTemplateColumns: STACK } },
  on: { ...LEVEL.on, "& > h2": { gridColumn: "1 / -1", gridRow: "1", position: "relative", zIndex: "1" } },
  parts: {
    art: {
      at: { md: { inlineSize: "84%", insetInlineStart: "22%" } },
      style: {
        aspectRatio: "1",
        inlineSize: "108%",
        insetBlockStart: "0",
        insetInlineStart: "14%",
        position: "absolute",
        rotate: "-10deg",
      },
    },
    slot: {
      at: { md: LEVEL.slot },
      style: { alignSelf: "stretch", gridColumn: "2", gridRow: "1 / 3", position: "relative" },
    },
    text: { ...TEXT, at: { md: { gridColumn: "1", gridRow: "auto" } }, style: { gridColumn: "1", gridRow: "2" } },
  },
  style: { ...SPLIT, alignItems: "start", rowGap: token.gap("md") },
};

const ARROWS = riseItem("100%", 398 / 586);

const arrows: FrontendContainer = {
  at: { md: { ...ARROWS.host, gridTemplateColumns: STACK } },
  on: ARROWS.on,
  parts: {
    art: {
      at: { md: { ...ARROWS.item, insetInlineStart: "-6%" } },
      style: { aspectRatio: "586 / 398", inlineSize: "116%", insetInlineStart: "-22%", position: "relative", rotate: "6deg" },
    },
    layer: { style: LAYER },
    text: TEXT,
  },
  style: SPLIT,
};

const CRADLE = rise("96vw");

const cradle: FrontendContainer = {
  at: { md: { ...CRADLE.host, gridTemplateColumns: STACK } },
  on: CRADLE.on,
  parts: {
    art: {
      at: { md: { inlineSize: "88%", insetInlineStart: "6%" } },
      style: { aspectRatio: "600 / 900", inlineSize: "92%", insetBlockEnd: "0", insetInlineStart: "4%", position: "absolute" },
    },
    layer: { style: LAYER },
    slot: {
      at: { md: { ...CRADLE.slot, overflow: "hidden" } },
      style: { alignSelf: "stretch", minBlockSize: "18rem", position: "relative" },
    },
    text: TEXT,
  },
  style: { ...SPLIT, alignItems: "start" },
};

const sizes: FrontendContainer = {
  parts: {
    art: { style: { aspectRatio: "1496 / 250", inlineSize: "100%", position: "relative" } },
    label: { style: { position: "absolute", translate: "-50% 0", whiteSpace: "nowrap" } },
    labels: { style: { blockSize: "1.75em", position: "relative" } },
  },
  style: { display: "flex", flexDirection: "column", gap: token.gap("sm") },
};

const FIXED = riseItem("92%", 1);

const fixed: FrontendContainer = {
  at: { md: { ...FIXED.host, gridTemplateColumns: STACK } },
  on: FIXED.on,
  parts: {
    action: { at: { md: { gridColumn: "auto", gridRow: "auto" } }, style: { gridColumn: "2", gridRow: "2" } },
    art: {
      at: { md: { ...FIXED.item, insetInlineStart: "-10%" } },
      style: {
        aspectRatio: "1",
        gridColumn: "1",
        gridRow: "1 / 3",
        inlineSize: "110%",
        insetInlineStart: "-20%",
        position: "relative",
        rotate: "-6deg",
      },
    },
    text: { ...TEXT, at: { md: { gridColumn: "auto", gridRow: "auto" } }, style: { gridColumn: "2", gridRow: "1" } },
  },
  style: SPLIT,
};

export { arrows, cradle, fixed, level, sizes };
