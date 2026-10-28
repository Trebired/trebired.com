import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { PAGE } from "./tokens";
import { riseItem } from "./rise";

const LAYER = { pointerEvents: "none", position: "absolute", zIndex: "-1" };

const COPY = { maxInlineSize: "min(36rem, 44%)" };

const PHOTO = { "& img": { blockSize: "100%", display: "block", inlineSize: "100%" } };

const flush: FrontendContainer = {
  on: { "&.tbfm-band--major": { paddingBlockEnd: "0" } },
  parts: {
    copy: { at: { lg: { paddingBlockEnd: "0" } }, style: { justifySelf: "end", maxInlineSize: "44rem", paddingBlockEnd: token.gap("xl") } },
  },
};

const STATUE = riseItem("min(62%, 17rem)", 1799 / 887);

const liberty: FrontendContainer = {
  at: { lg: { ...STATUE.host, gridTemplateColumns: "minmax(0, 1fr)" } },
  on: STATUE.on,
  parts: {
    side: { style: { alignSelf: "center" } },
    statue: {
      at: { lg: { ...STATUE.item, insetInlineEnd: "-4%", insetInlineStart: "auto" } },
      on: PHOTO,
      style: { alignSelf: "end", aspectRatio: "887 / 1799", inlineSize: "clamp(15rem, 25vw, 25rem)", justifySelf: "center", position: "relative" },
    },
  },
  style: {
    alignItems: "center",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
    rowGap: token.gap("xl"),
  },
};

const record: FrontendContainer = {
  at: { lg: { aspectRatio: "auto", display: "flex", flexDirection: "column", gap: token.gap("lg") } },
  parts: {
    art: { at: { lg: { aspectRatio: "19 / 10", inset: "auto", position: "relative" } }, style: { inset: "0", position: "absolute" } },
    canton: { style: { blockSize: "53.846%", inlineSize: "40%", insetBlockStart: "0", insetInlineStart: "0", position: "absolute" } },
    line: {
      at: { lg: { fontSize: "inherit", paddingInline: "0", whiteSpace: "normal" } },
      style: { alignSelf: "center", fontSize: "1.6cqi", paddingInline: "1.6cqi", position: "relative", whiteSpace: "nowrap", zIndex: "1" },
    },
    lines: { at: { lg: { display: "flex", flexDirection: "column", gap: token.gap("sm") } }, style: { display: "contents" } },
    stripes: { style: { inset: "0", position: "absolute" } },
  },
  style: {
    aspectRatio: "19 / 10",
    containerType: "inline-size",
    display: "grid",
    gridTemplateColumns: "40% minmax(0, 1fr)",
    gridTemplateRows: "repeat(13, minmax(0, 1fr))",
    position: "relative",
  },
};

const FACE = riseItem("100%", 710 / 1032, "var(--section-inset-major)");

const dossier: FrontendContainer = {
  at: { md: { ...FACE.host, gridTemplateColumns: "minmax(0, 1fr)" } },
  on: FACE.on,
  parts: {
    face: {
      at: { md: { ...FACE.item, insetInlineStart: "0", translate: "none" } },
      style: { alignSelf: "end", position: "relative", translate: "12% var(--section-inset-major)" },
    },
  },
  style: {
    alignItems: "start",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
    rowGap: token.gap("xl"),
  },
};

const portrait: FrontendContainer = {
  on: { "& img": { blockSize: "100%", display: "block", inlineSize: "100%" } },
  at: { md: { inlineSize: "100%" } },
  style: { aspectRatio: "1032 / 710", inlineSize: "114%", position: "relative" },
};

const watch: FrontendContainer = {
  at: { lg: { blockSize: "100%", inlineSize: "auto" } },
  parts: {
    copy: { style: { maxInlineSize: "44rem" } },
    count: { style: { display: "block", fontSize: "clamp(3rem, 10vw, 10.5rem)", fontWeight: "900", lineHeight: "0.9", whiteSpace: "nowrap" } },
  },
  style: {
    ...LAYER,
    aspectRatio: "1600 / 900",
    inlineSize: "100%",
    insetBlockEnd: token.css `calc(${token.variable("section-inset-major")} + 4rem)`,
    insetInlineStart: "50%",
    opacity: "0.6",
    transform: "translate(-50%, -14%)",
  },
};

const onion: FrontendContainer = {
  at: { lg: { aspectRatio: "auto", display: "flex", flexDirection: "column", gap: token.gap("xl"), minBlockSize: "auto" } },
  parts: {
    art: {
      at: {
        lg: { alignSelf: "flex-end", aspectRatio: "1 / 1.3", inlineSize: "min(100%, 30rem)", inset: "auto", position: "relative", zIndex: "auto" },
      },
      style: { ...LAYER, inset: "0" },
    },
    copy: { at: { lg: { maxInlineSize: "none" } }, style: COPY },
    bulb: {
      at: { lg: { inlineSize: "108%", insetBlockStart: "6%", insetInlineStart: "14%" } },
      style: { aspectRatio: "1", inlineSize: "var(--size)", insetBlockStart: "var(--y)", insetInlineStart: "var(--x)", position: "absolute" },
    },
    badge: {
      style: {
        aspectRatio: "1",
        background: PAGE,
        border: "2px solid var(--ink)",
        borderRadius: "50%",
        display: "grid",
        flex: "none",
        fontSize: "0.75rem",
        fontWeight: "700",
        inlineSize: "2.1rem",
        lineHeight: "1",
        placeItems: "center",
      },
    },
    marker: { style: { insetBlockStart: "var(--y)", insetInlineStart: "var(--x)", position: "absolute", zIndex: "1" } },
    piece: { style: { inset: "0", position: "absolute" } },
    rings: { style: { aspectRatio: "1", opacity: "0.22", pointerEvents: "none", position: "absolute" } },
  },
  style: { aspectRatio: "25 / 11", position: "relative" },
};

const pointer: FrontendContainer = {
  on: PHOTO,
  style: { alignSelf: "end", aspectRatio: "609 / 604", inlineSize: "min(100%, 48rem)", justifySelf: "start", position: "relative" },
};

export { dossier, flush, liberty, onion, pointer, portrait, record, watch };
