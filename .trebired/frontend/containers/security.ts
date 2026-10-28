import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { rise, riseItem } from "./rise";

const LAYER = { inset: "0", position: "absolute" };

const TEXT = { on: { "& > p": { maxInlineSize: "36rem" } } };

const STACK = "minmax(0, 1fr)";

const FLOW = { gridColumn: "auto", gridRow: "auto" };

const SPLIT = {
  alignItems: "center",
  columnGap: token.gap("xl"),
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  rowGap: token.gap("xl"),
};

const GUARD = riseItem("84%", 1);

const guard: FrontendContainer = {
  at: { md: { ...GUARD.host, gridTemplateColumns: STACK } },
  on: GUARD.on,
  parts: {
    action: { at: { md: FLOW }, style: { gridColumn: "1 / -1", gridRow: "2" } },
    art: {
      at: { md: { ...GUARD.item, insetInlineStart: "18%" } },
      style: {
        aspectRatio: "1",
        gridColumn: "2",
        gridRow: "1 / 3",
        inlineSize: "104%",
        insetInlineStart: "16%",
        position: "relative",
        rotate: "8deg",
      },
    },
    text: { ...TEXT, at: { md: FLOW }, style: { gridColumn: "1", gridRow: "1" } },
  },
  style: SPLIT,
};

const TIMER = riseItem("86%", 1);

const timer: FrontendContainer = {
  at: { md: { ...TIMER.host, gridTemplateColumns: STACK } },
  on: TIMER.on,
  parts: {
    art: {
      at: { md: { ...TIMER.item, insetInlineStart: "-8%" } },
      style: { aspectRatio: "1", inlineSize: "100%", insetInlineStart: "-18%", position: "relative", rotate: "-8deg" },
    },
    text: TEXT,
  },
  style: SPLIT,
};

const HALT = rise("84vw");

const halt: FrontendContainer = {
  at: { md: { ...HALT.host, gridTemplateColumns: STACK } },
  on: HALT.on,
  parts: {
    art: {
      at: { md: { inlineSize: "100%", insetInlineStart: "16%" } },
      style: {
        aspectRatio: "1",
        inlineSize: "118%",
        insetBlockStart: "8%",
        insetInlineStart: "10%",
        position: "absolute",
        rotate: "-12deg",
      },
    },
    slot: { at: { md: { ...HALT.slot, minBlockSize: "0" } }, style: { alignSelf: "stretch", minBlockSize: "22rem", position: "relative" } },
    text: TEXT,
  },
  style: SPLIT,
};

const BOUNTY = rise("80vw");

const bounty: FrontendContainer = {
  at: { md: { ...BOUNTY.host, gridTemplateColumns: STACK } },
  on: BOUNTY.on,
  parts: {
    art: {
      at: { md: { inlineSize: "84%", insetInlineStart: "-6%" } },
      style: {
        aspectRatio: "1",
        inlineSize: "100%",
        insetBlockStart: "0",
        insetInlineStart: "-16%",
        position: "absolute",
        rotate: "10deg",
      },
    },
    layer: { style: LAYER },
    slot: { at: { md: BOUNTY.slot }, style: { alignSelf: "stretch", position: "relative" } },
    text: TEXT,
  },
  style: { ...SPLIT, alignItems: "start" },
};

export { bounty, guard, halt, timer };
