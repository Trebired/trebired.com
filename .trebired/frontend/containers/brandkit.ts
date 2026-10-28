import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE, INK, PAGE, RADIUS } from "./tokens";

const brandkit: FrontendContainer = {
  at: { md: { "--brandkit-columns": "minmax(0, 1fr)", "--brandkit-pad": "1.5rem" } },
  parts: {
    demo: {
      style: {
        alignItems: "center",
        aspectRatio: "4 / 3",
        background: PAGE,
        borderRadius: RADIUS,
        color: INK,
        display: "grid",
        isolation: "isolate",
        justifyItems: "center",
        overflow: "hidden",
        position: "relative",
      },
    },
    half: {
      style: {
        alignContent: "space-between",
        display: "grid",
        gap: token.gap("xl"),
        justifyItems: "start",
        minBlockSize: "clamp(16rem, 26vw, 22rem)",
        padding: token.variable("brandkit-pad", "2.5rem"),
      },
    },
    ink: { style: { background: INK, color: PAGE } },
    misuse: {
      style: {
        display: "grid",
        gap: token.gap("lg"),
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 11rem), 1fr))",
        padding: "0",
      },
    },
    paper: { style: { background: PAGE, color: INK } },
    split: {
      style: {
        border: HAIRLINE,
        borderRadius: RADIUS,
        display: "grid",
        gridTemplateColumns: token.variable("brandkit-columns", "repeat(2, minmax(0, 1fr))"),
        overflow: "hidden",
      },
    },
    stage: { style: { alignSelf: "center", justifySelf: "center" } },
  },
};

export { brandkit };
