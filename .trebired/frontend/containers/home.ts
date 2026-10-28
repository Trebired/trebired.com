import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE, RADIUS } from "./tokens";
import { rise, riseItem } from "./rise";

const LAYER = { inset: "0", position: "absolute" };

const WHO = rise("min(86vw, 25rem)", "4.5rem", "8rem");

const who: FrontendContainer = {
  at: { md: { minBlockSize: "0" } },
  parts: {
    art: {
      at: {
        md: {
          blockSize: "auto",
          inlineSize: "min(100%, 26rem)",
          insetBlockEnd: "auto",
          insetBlockStart: "0",
          insetInlineEnd: "-8%",
          translate: "none",
        },
      },
      style: {
        blockSize: "min(100%, calc((100cqi - 36rem) / var(--who-ratio)))",
        insetBlockEnd: "0",
        insetInlineEnd: "-4%",
        position: "absolute",
        rotate: "-8deg",
        translate: "0 12%",
      },
    },
    backdrop: {
      at: { md: WHO.slot },
      style: {
        containerType: "size",
        gridColumn: "1",
        gridRow: "2",
        inset: token.css `0 0 calc(-1 * ${token.variable("section-inset-major")} - 4.5rem)`,
        pointerEvents: "none",
        position: "absolute",
        zIndex: "-1",
      },
    },
    stage: { at: { md: WHO.host }, on: WHO.on, style: { display: "grid", gap: token.gap("lg"), position: "relative" } },
    text: { style: { maxInlineSize: "34rem" } },
  },
  style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minBlockSize: token.css `calc(100svh - 2 * ${token.variable("section-inset-major")})`,
    position: "relative",
  },
};

const make: FrontendContainer = {
  at: {
    lg: { "--make-title": "calc(6vw - 1rem)", gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    md: { "--make-title": "10rem", gridAutoRows: "minmax(18rem, auto)", gridTemplateColumns: "minmax(0, 1fr)" },
  },
  on: { "& h3": { fontSize: token.css `min(${token.variable("text-size-xl3")}, ${token.variable("make-title")})` } },
  parts: {
    art: { style: { aspectRatio: "1", insetBlockEnd: "0", insetInlineEnd: "0", pointerEvents: "none", position: "absolute" } },
    gears: { style: { inlineSize: "min(100cqi, 100cqb)" } },
    globe: { style: { inlineSize: "min(70cqi, 100cqb)" } },
    ground: { style: { inset: "0", pointerEvents: "none", position: "absolute", zIndex: "-2" } },
    layer: { style: LAYER },
    nib: { style: { inlineSize: "min(48cqi, 80cqb)" } },
    pencil: { style: { inlineSize: "min(56cqi, 70cqb)", insetInlineEnd: "auto", insetInlineStart: "0" } },
    stage: {
      style: {
        containerType: "size",
        gridColumn: "1",
        gridRow: "2",
        inset: token.css `${token.gap("sm")} calc(-1 * ${token.gap("lg")}) calc(-1 * ${token.gap("lg")})`,
        pointerEvents: "none",
        position: "absolute",
        zIndex: "-1",
      },
    },
    tux: { style: { inlineSize: "min(60cqi, 100cqb)", rotate: "12deg" } },
    tall: { at: { lg: { gridColumn: "auto", gridRow: "auto" } }, style: { gridColumn: "3", gridRow: "1 / span 2" } },
    tile: {
      style: {
        border: HAIRLINE,
        borderRadius: RADIUS,
        display: "grid",
        gridTemplateRows: "auto minmax(0, 1fr)",
        isolation: "isolate",
        overflow: "hidden",
        padding: token.gap("lg"),
        position: "relative",
      },
    },
    wide: { at: { lg: { gridColumn: "auto" } }, style: { gridColumn: "1 / span 2" } },
  },
  style: {
    "--make-title": "calc(3.9vw - 1rem)",
    display: "grid",
    gap: token.gap("md"),
    gridAutoRows: "minmax(20rem, auto)",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
};

const OSI = rise("76vw", "4.75rem");

const osi: FrontendContainer = {
  at: { md: { ...OSI.host, display: "flex", flexDirection: "column", gap: token.gap("md") } },
  on: OSI.on,
  parts: {
    art: {
      at: { md: { inlineSize: "min(80cqi, 100cqb)", insetBlockStart: "0", insetInlineStart: "10%", translate: "none" } },
      style: {
        aspectRatio: "1",
        inlineSize: "min(100cqi, 100cqb)",
        insetBlockStart: "50%",
        insetInlineStart: "50%",
        position: "absolute",
        translate: "-50% -50%",
      },
    },
    layer: { style: LAYER },
    slot: { at: { md: OSI.slot }, style: { containerType: "size", position: "relative" } },
    tall: { at: { md: { display: "block" } }, style: { display: "none" } },
    wide: { at: { md: { display: "none" } } },
    code: {
      style: {
        inset: token.css `calc(-1 * ${token.variable("section-inset-major")} - 8vw) calc(50% - 58vw)`,
        pointerEvents: "none",
        position: "absolute",
        rotate: "-6deg",
        zIndex: "-1",
      },
    },
  },
  style: { display: "grid", gap: token.gap("xl"), gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" },
};

const WHORL = rise("74vw", "4.75rem", 0.45);

const whorl: FrontendContainer = {
  at: { md: { ...WHORL.host, display: "flex", flexDirection: "column" } },
  on: WHORL.on,
  parts: {
    art: {
      at: { md: { inlineSize: "100%", insetInlineEnd: "auto", insetInlineStart: "-30%" } },
      style: {
        inlineSize: "min(46vw, 44rem)",
        insetBlockEnd: token.css `calc(-1 * ${token.variable("section-inset-major")})`,
        insetInlineEnd: "0",
        pointerEvents: "none",
        position: "absolute",
        rotate: "14deg",
        transform: "translate(4%, 28%)",
        zIndex: "-1",
      },
    },
    slot: { at: { md: WHORL.slot }, style: { gridColumn: "1", gridRow: "1", position: "relative" } },
    text: { style: { gridColumn: "2", gridRow: "1" } },
  },
  style: {
    columnGap: token.gap("md"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 0.6fr) minmax(0, 1.4fr)",
    rowGap: token.gap("xl"),
  },
};

const KEYCAP = riseItem("100%", 420 / 600, "0px", "8rem");

const keycap: FrontendContainer = {
  at: { md: { ...KEYCAP.host, gridTemplateColumns: "minmax(0, 1fr)" } },
  on: { ...KEYCAP.on, "& > .tbf-inline-row": { gridColumn: "1 / -1", gridRow: "2" } },
  parts: {
    art: {
      at: { md: { ...KEYCAP.item, insetInlineStart: "0" } },
      style: { aspectRatio: "600 / 420", gridColumn: "2", gridRow: "1 / 3", inlineSize: "112%", position: "relative", rotate: "-8deg" },
    },
    layer: { style: LAYER },
    text: { style: { gridColumn: "1", gridRow: "1" } },
  },
  style: {
    alignItems: "center",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    rowGap: token.gap("md"),
  },
};

const GUTTER = token.frontend("container-px");

const BLEED = token.css `calc(${GUTTER} + max(0px, (100vw - 2 * ${GUTTER} - ${token.variable("band-max")}) / 2))`;

const CLOSE = rise("78vw", "0px", 0.45);

const close: FrontendContainer = {
  at: { md: { ...CLOSE.host, gridTemplateColumns: "minmax(0, 1fr)" } },
  on: CLOSE.on,
  parts: {
    art: {
      at: { md: { inlineSize: "112vw", insetInlineStart: "-34vw" } },
      style: {
        aspectRatio: "1",
        inlineSize: token.css `calc(100% + ${BLEED} + 14%)`,
        insetBlockStart: "0",
        insetInlineStart: token.css `calc(-1 * (${BLEED} + 14%))`,
        position: "absolute",
      },
    },
    slot: { at: { md: CLOSE.slot }, style: { alignSelf: "stretch", minInlineSize: "0", position: "relative" } },
  },
  style: {
    alignItems: "start",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    rowGap: token.gap("xl"),
  },
};

export { close, keycap, make, osi, who, whorl };
