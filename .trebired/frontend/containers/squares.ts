import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const squares: FrontendContainer = {
  parts: {
    callout: {
      style: {
        alignItems: "start",
        borderInlineEnd: token.css `2px solid ${token.colorMix("currentcolor", "70%")}`,
        display: "flex",
        insetBlockEnd: "var(--pick-bottom)",
        insetBlockStart: "calc(-1 * clamp(3.2rem, 7vw, 5.5rem))",
        insetInlineEnd: "var(--pick-right)",
        paddingInlineEnd: "0.75rem",
        position: "absolute",
        whiteSpace: "nowrap",
      },
    },
    field: { style: { aspectRatio: "387 / 88", inlineSize: "100%", position: "relative" } },
    layer: { style: { inset: "0", position: "absolute" } },
  },
  style: { display: "flex", flexDirection: "column", paddingBlockStart: "clamp(4rem, 9vw, 7rem)" },
};

export { squares };
