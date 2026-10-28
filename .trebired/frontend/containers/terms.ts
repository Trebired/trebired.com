import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { RADIUS } from "./tokens";

const terms: FrontendContainer = {
  at: {
    md: {
      "--terms-columns": "1fr",
      "--terms-pad": "1.25rem",
      "--terms-rule-block": RULE,
      "--terms-rule-inline": "0",
    },
  },
  parts: {
    body: { style: { maxWidth: "36rem", position: "relative" } },
    mark: {
      style: {
        aspectRatio: "1",
        inlineSize: "clamp(18rem, 34vw, 32rem)",
        insetBlockStart: "-10%",
        insetInlineEnd: "-14%",
        opacity: "0.32",
        pointerEvents: "none",
        position: "absolute",
        rotate: "-12deg",
      },
    },
    panel: {
      on: {
        "& + .tbfm-terms__panel": {
          borderBlockStart: token.variable("terms-rule-block", "0"),
          borderInlineStart: token.variable("terms-rule-inline", RULE),
        },
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: token.gap("lg"),
        overflow: "hidden",
        padding: token.variable("terms-pad", "2.5rem"),
        position: "relative",
      },
    },
  },
  style: {
    border: RULE,
    borderRadius: RADIUS,
    display: "grid",
    overflow: "hidden",
    gridTemplateColumns: token.variable("terms-columns", "1fr 1fr"),
  },
};

export { terms };
