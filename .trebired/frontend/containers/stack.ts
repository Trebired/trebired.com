import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { RADIUS } from "./tokens";

const stack: FrontendContainer = {
  at: {
    md: {
      "--stack-columns": "1fr",
      "--stack-grid": "repeat(2, minmax(0, 1fr))",
      "--stack-mark": "min(100%, 9rem)",
      "--stack-pad": "1.5rem",
      "--stack-tools": "flex-start",
      "--stack-tools-display": "grid",
      "--stack-tools-gap": token.gap("md"),
    },
  },
  parts: {
    layer: {
      on: { "& + .tbfm-stack__layer": { borderBlockStart: RULE } },
      style: {
        alignItems: "center",
        display: "grid",
        gap: token.gap("lg"),
        gridTemplateColumns: token.variable("stack-columns", "minmax(0, 1fr) auto"),
        padding: token.variable("stack-pad", "2rem 2.5rem"),
      },
    },
    mark: { style: { aspectRatio: "1", inlineSize: token.variable("stack-mark", "clamp(5.5rem, 9vw, 8rem)"), position: "relative" } },
    tools: {
      style: {
        display: token.variable("stack-tools-display", "flex"),
        flexWrap: "wrap",
        gap: token.variable("stack-tools-gap", token.gap("lg")),
        gridTemplateColumns: token.variable("stack-grid", "repeat(3, minmax(0, 1fr))"),
        justifyContent: token.variable("stack-tools", "flex-end"),
        listStyle: "none",
        padding: "0",
      },
    },
  },
  style: {
    border: RULE,
    borderRadius: RADIUS,
    listStyle: "none",
    overflow: "hidden",
    padding: "0",
  },
};

export { stack };
