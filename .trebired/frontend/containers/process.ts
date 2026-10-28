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

const BUBBLE = { aspectRatio: "600 / 470", inlineSize: "clamp(15rem, 34vw, 44rem)", position: "absolute" };

const TALK = rise("64vw");

const dialogue: FrontendContainer = {
  at: { md: { ...TALK.host, gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gridTemplateRows: "auto", textAlign: "start" } },
  on: TALK.on,
  parts: {
    ask: {
      at: { md: { ...TALK.slot, inset: "auto 50% 0 0" } },
      style: { gridColumn: "1", gridRow: "2", position: "relative" },
    },
    left: { at: { md: { inlineSize: "130%" } }, style: { ...BUBBLE, insetBlockStart: "0", insetInlineEnd: "0", rotate: "-6deg" } },
    reply: {
      at: { md: { ...TALK.slot, inset: "auto 0 0 50%" } },
      style: { gridColumn: "3", gridRow: "2", position: "relative" },
    },
    right: {
      at: { md: { inlineSize: "130%", translate: "none" } },
      style: { ...BUBBLE, insetBlockEnd: "0", insetInlineStart: "0", rotate: "6deg", translate: "0 14%" },
    },
    text: { at: { md: { gridColumn: "1 / -1" } }, style: { alignSelf: "center", gridColumn: "2", gridRow: "2" } },
    title: { style: { gridColumn: "1 / -1", gridRow: "1" } },
  },
  style: {
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, min(34rem, 44vw)) minmax(0, 1fr)",
    gridTemplateRows: "auto minmax(clamp(14rem, 27vw, 34rem), auto)",
    rowGap: token.gap("lg"),
    textAlign: "center",
  },
};

const UNLOCK = riseItem("88%", 600 / 520);

const unlock: FrontendContainer = {
  at: { md: { ...UNLOCK.host, gridTemplateColumns: STACK } },
  on: UNLOCK.on,
  parts: {
    art: {
      at: { md: { ...UNLOCK.item, insetInlineStart: "18%" } },
      style: { aspectRatio: "520 / 600", inlineSize: "min(78%, 30rem)", justifySelf: "center", position: "relative", rotate: "-8deg" },
    },
    layer: { style: LAYER },
    text: TEXT,
  },
  style: SPLIT,
};

const TORSO = "calc(clamp(36rem, 92vh, 64rem) * 6 / 11 * 0.64)";

const NOTE = { alignSelf: "start", gridRow: "15", inlineSize: "0", minInlineSize: "min(100%, 26rem)" };

const STACKED = {
  gridColumn: "1",
  gridRow: "auto",
  inlineSize: "auto",
  justifySelf: "start",
  maxInlineSize: "36rem",
  minInlineSize: "0",
  textAlign: "start",
};

const fitting: FrontendContainer = {
  at: {
    lg: {
      "--fitting-floor": "none",
      "--fitting-rows": "auto",
      "--fitting-shift": "none",
      "--fitting-title": "block",
      "--fitting-word": "auto",
      gridTemplateColumns: STACK,
      gridTemplateRows: "none",
      rowGap: token.gap("lg"),
    },
  },
  on: {
    "& > h2": {
      display: "var(--fitting-title)",
      gridColumn: "1 / -1",
      gridRow: "var(--fitting-rows)",
      gridTemplateColumns: "subgrid",
      gridTemplateRows: "subgrid",
      position: "relative",
      zIndex: "1",
    },
    "& > h2 > span": { alignSelf: "start", blockSize: "var(--fitting-word)", translate: "var(--fitting-shift)", whiteSpace: "nowrap" },
    "& > h2 > span:nth-of-type(odd)": { justifySelf: "end" },
    "& > p:nth-of-type(2)": { alignSelf: "end" },
    "&::after": {
      aspectRatio: "600 / 330",
      content: "\"\"",
      display: "var(--fitting-floor)",
      gridColumn: "2",
      gridRow: "15",
      inlineSize: "calc(100% / 0.64)",
      justifySelf: "center",
    },
  },
  parts: {
    form: {
      at: { lg: { aspectRatio: "600 / 1100", gridColumn: "1", gridRow: "auto", inlineSize: "min(78vw, 24rem)" } },
      style: {
        aspectRatio: "600 / 770",
        gridColumn: "2",
        gridRow: "1 / 15",
        inlineSize: "calc(100% / 0.64)",
        justifySelf: "center",
        position: "relative",
      },
    },
    layer: { at: { lg: { blockSize: "100%" } }, style: { blockSize: "calc(100% * 20 / 14)", inset: "0 0 auto", position: "absolute" } },
    left: { at: { lg: STACKED }, style: { ...NOTE, gridColumn: "1", justifySelf: "end", textAlign: "end" } },
    right: { at: { lg: STACKED }, style: { ...NOTE, gridColumn: "3", justifySelf: "start" } },
  },
  style: {
    "--fitting-floor": "block",
    "--fitting-rows": "1 / 15",
    "--fitting-shift": "0 -0.45em",
    "--fitting-title": "grid",
    "--fitting-word": "0",
    columnGap: token.gap("md"),
    display: "grid",
    gridTemplateColumns: `auto minmax(0, ${TORSO}) auto`,
    gridTemplateRows: "repeat(14, minmax(0, 1fr)) auto",
    justifyContent: "center",
    rowGap: "0",
  },
};

const HANDOVER = rise("72vw");

const handover: FrontendContainer = {
  at: { md: { ...HANDOVER.host, gridTemplateColumns: STACK } },
  on: HANDOVER.on,
  parts: {
    art: {
      at: { md: { inlineSize: "120%", insetInlineStart: "-6%" } },
      style: {
        aspectRatio: "1200 / 420",
        inlineSize: "min(140%, 56rem)",
        insetBlockStart: "50%",
        insetInlineStart: "-12%",
        position: "absolute",
        rotate: "-32deg",
        translate: "0 -50%",
      },
    },
    slot: { at: { md: HANDOVER.slot }, style: { alignSelf: "stretch", position: "relative" } },
    text: TEXT,
  },
  style: SPLIT,
};

export { dialogue, fitting, handover, unlock };
