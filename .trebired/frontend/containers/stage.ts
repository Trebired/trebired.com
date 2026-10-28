import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { RADIUS } from "./tokens";

const MUTED = token.frontend("text-muted");

const EASE = "0.3s ease";

const PAD = token.variable("stage-pad", "2rem");

const stage: FrontendContainer = {
  at: { md: { "--stage-columns": "1fr", "--stage-kit": "1fr", "--stage-pad": "1.25rem", "--stage-row": "1fr" } },
  parts: {
    arrow: { style: { color: MUTED, fontSize: "1.3rem" } },
    bar: {
      style: {
        background: token.colorMix("currentcolor", "16%"),
        blockSize: "100%",
        borderRadius: "999px",
        flexShrink: "0",
        inlineSize: token.variable("bar", "50%"),
      },
    },
    cheap: { style: { background: token.variable("price-low") } },
    column: {
      style: {
        alignItems: "center",
        display: "grid",
        gap: token.gap("sm"),
        gridTemplateColumns: token.variable("stage-row", "9rem minmax(0, 1fr)"),
        minWidth: "0",
      },
    },
    item: {
      style: {
        border: RULE,
        borderRadius: RADIUS,
        display: "flex",
        flexDirection: "column",
        gap: token.gap("sm"),
        padding: PAD,
        transition: token.css `background-color ${EASE}, border-color ${EASE}`,
      },
      on: { "&:hover": { borderColor: token.colorMix("currentcolor", "32%") } },
    },
    mark: { style: { fontSize: "2.6rem" } },
    panel: {
      style: {
        border: RULE,
        borderRadius: RADIUS,
        display: "flex",
        flexDirection: "column",
        gap: token.gap("md"),
        justifyContent: "space-between",
        minWidth: "0",
        padding: PAD,
      },
    },
    track: { style: { alignItems: "center", blockSize: "3.2rem", display: "flex", gap: token.gap("sm"), minWidth: "0" } },
  },
  style: {
    display: "grid",
    gap: token.gap("md"),
    gridTemplateColumns: token.variable("stage-columns", "minmax(0, 2fr) minmax(0, 3fr)"),
  },
  variants: {
    center: { style: { alignItems: "center" } },
    even: { style: { gridTemplateColumns: token.variable("stage-columns", "repeat(2, minmax(0, 1fr))") } },
    kit: { style: { gridTemplateColumns: token.variable("stage-kit", "repeat(3, minmax(0, 1fr))") } },
  },
};

export { stage };
