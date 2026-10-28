import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { riseItem } from "./rise";

const LAYER = { inset: "0", position: "absolute" };

const STACK = "minmax(0, 1fr)";

const TRACKS = (count: number) => `repeat(${count}, minmax(0, 1fr))`;

const TAPE = { length: "220vw", thickness: "18.6vw" };

const FLOW = { gridColumn: "1", gridRow: "auto" };

const trees: FrontendContainer = {
  at: { md: { gridTemplateColumns: STACK } },
  parts: {
    copy: { style: { maxInlineSize: "44rem" } },
    emblem: {
      at: { md: { ...FLOW, inlineSize: "min(64vw, 20rem)", justifySelf: "end", order: "2" } },
      style: {
        alignSelf: "start",
        aspectRatio: "1",
        gridColumn: "2",
        gridRow: "2",
        inlineSize: "min(100%, 20rem)",
        pointerEvents: "none",
        position: "relative",
      },
    },
    label: { style: { position: "absolute", translate: "0 -50%", whiteSpace: "nowrap" } },
    print: { style: LAYER },
    text: { at: { md: FLOW }, style: { alignSelf: "end", gridColumn: "2", gridRow: "1", maxInlineSize: "30rem" } },
    tree: { at: { md: { ...FLOW, order: "1" } }, style: { gridColumn: "1", gridRow: "1 / span 2", position: "relative" } },
  },
  style: {
    alignItems: "center",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: TRACKS(2),
    position: "relative",
    rowGap: token.gap("lg"),
  },
  variants: {
    flip: {
      on: {
        "& > .tbfm-trees__emblem": { gridColumn: "1" },
        "& > .tbfm-trees__text": { gridColumn: "1" },
        "& > .tbfm-trees__tree": { gridColumn: "-2 / -1" },
      },
    },
  },
};

const folders: FrontendContainer = {
  parts: { folder: { style: { aspectRatio: "700 / 500", position: "relative" } } },
  style: { columnGap: token.gap("lg"), display: "grid", gridTemplateColumns: TRACKS(2), rowGap: token.gap("lg") },
};

const LINE_EDGE = "calc(50% + var(--commit-size) * 0.49)";

const LINE = { blockSize: "var(--commit-line)", insetBlockStart: "calc(50% - var(--commit-line) / 2)", position: "absolute" };

const commit: FrontendContainer = {
  parts: {
    left: { style: { ...LINE, insetInlineEnd: LINE_EDGE, insetInlineStart: "0" } },
    right: { style: { ...LINE, insetInlineEnd: "0", insetInlineStart: LINE_EDGE } },
    ring: {
      style: {
        blockSize: "var(--commit-size)",
        inlineSize: "var(--commit-size)",
        insetBlockStart: "0",
        insetInlineStart: "calc(50% - var(--commit-size) / 2)",
        position: "absolute",
      },
    },
  },
  style: {
    "--commit-line": "calc(var(--commit-size) * 0.14)",
    "--commit-size": "clamp(13rem, 30vw, 28rem)",
    blockSize: "var(--commit-size)",
    inlineSize: "100vw",
    insetInlineStart: "calc(50% - 50vw)",
    position: "relative",
  },
};

const PERSON = { aspectRatio: "600 / 640", inlineSize: "64.5%", insetBlockEnd: "0", position: "absolute" };

const PEOPLE = riseItem("124%", 640 / 930);

const people: FrontendContainer = {
  at: { md: { ...PEOPLE.host, gridTemplateColumns: STACK } },
  on: PEOPLE.on,
  parts: {
    art: { at: { md: { ...PEOPLE.item, insetInlineStart: "-12%" } }, style: { alignSelf: "end", aspectRatio: "930 / 640", position: "relative" } },
    author: { style: { ...PERSON, insetInlineStart: "0" } },
    empty: { style: { ...PERSON, insetInlineEnd: "0" } },
    text: {
      at: { md: { paddingBlockEnd: "0" } },
      style: { alignSelf: "center", paddingBlockEnd: token.variable("section-inset-major") },
    },
  },
  style: { columnGap: token.gap("xl"), display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)", rowGap: token.gap("xl") },
};

export { commit, folders, people, trees };
