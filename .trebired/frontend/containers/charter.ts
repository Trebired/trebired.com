import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";

const charter: FrontendContainer = {
  at: { md: { "--charter-columns": "minmax(0, 1fr)" } },
  style: {
    alignItems: "center",
    display: "grid",
    gap: token.gap("lg"),
    gridTemplateColumns: token.variable("charter-columns", "minmax(0, 1.15fr) minmax(0, 1fr)"),
  },
  variants: {
    top: { style: { alignItems: "start" } },
    flip: { style: { gridTemplateColumns: token.variable("charter-columns", "minmax(0, 1fr) minmax(0, 1.15fr)") } },
  },
};

const tally: FrontendContainer = {
  parts: {
    row: {
      style: {
        alignItems: "baseline",
        borderBlockEnd: RULE,
        display: "flex",
        gap: token.gap("lg"),
        justifyContent: "space-between",
        paddingBlock: "1.1rem",
      },
    },
  },
};

export { charter, tally, };
