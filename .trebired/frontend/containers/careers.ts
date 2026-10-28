import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const FRONT = { position: "relative", zIndex: "1" };

const FLOW = { gridColumn: "1", gridRow: "auto" };

const climb: FrontendContainer = {
  at: { lg: { gridTemplateColumns: "minmax(0, 1fr)", gridTemplateRows: "none" } },
  on: { "& > h2": { ...FRONT, gridColumn: "1 / -1", gridRow: "1" } },
  parts: {
    action: { at: { lg: FLOW }, style: { ...FRONT, gridColumn: "3", gridRow: "4" } },
    ladder: {
      at: {
        lg: { inlineSize: "30vw", insetBlockStart: "8vw", insetInlineStart: "74%" },
        md: { inlineSize: "34vw", insetBlockStart: "10vw", insetInlineStart: "78%" },
      },
      style: {
        aspectRatio: "400 / 2400",
        inlineSize: "clamp(16rem, 25vw, 30rem)",
        insetBlockStart: "0",
        insetInlineStart: "50%",
        position: "absolute",
        rotate: "28deg",
        transformOrigin: "50% 0",
        translate: "-50% 0",
      },
    },
    layer: { style: { display: "block", inset: "0", position: "absolute" } },
    slot: {
      at: { lg: { ...FLOW, blockSize: "min(110vw, 44rem)", order: "1", position: "relative" } },
      style: { gridColumn: "1 / 3", gridRow: "3 / 5", inset: "0", position: "absolute" },
    },
    text: {
      at: { lg: FLOW },
      on: { "& > p": { maxInlineSize: "36rem" } },
      style: { ...FRONT, gridColumn: "3", gridRow: "3" },
    },
  },
  style: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 24vw minmax(0, 1fr)",
    gridTemplateRows: "auto clamp(3rem, 7vw, 8rem) auto auto",
    position: "relative",
    rowGap: token.gap("xl"),
  },
};

export { climb };
