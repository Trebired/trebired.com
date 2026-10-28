import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { PAGE, RADIUS } from "./tokens";

const notice: FrontendContainer = {
  at: {
    md: {
      "--notice-art": "13rem",
      "--notice-art-x": "-2.5rem",
      "--notice-art-y": "-2.75rem",
      "--notice-copy": "100%",
      "--notice-pad": "1.4rem",
      "--notice-top": "8.5rem",
    },
  },
  parts: {
    art: {
      style: {
        aspectRatio: "1",
        inlineSize: token.variable("notice-art", "clamp(18rem, 26vw, 24rem)"),
        insetBlockStart: token.variable("notice-art-y", "-18%"),
        insetInlineEnd: token.variable("notice-art-x", "-21%"),
        opacity: "0.9",
        pointerEvents: "none",
        position: "absolute",
        zIndex: "0",
      },
    },
    copy: {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: token.gap("md"),
        maxInlineSize: token.variable("notice-copy", "64%"),
        minWidth: "0",
        position: "relative",
        zIndex: "1",
      },
    },
    foot: {
      style: {
        alignItems: "center",
        borderBlockStart: RULE,
        display: "flex",
        flexWrap: "wrap",
        gap: token.gap("sm"),
        justifyContent: "space-between",
        paddingBlockStart: token.gap("md"),
        position: "relative",
        zIndex: "1",
      },
    },
  },
  style: {
    background: PAGE,
    border: RULE,
    borderRadius: RADIUS,
    display: "flex",
    flexDirection: "column",
    gap: token.gap("md"),
    isolation: "isolate",
    justifyContent: "space-between",
    minWidth: "0",
    overflow: "hidden",
    padding: token.variable("notice-pad", "2rem"),
    paddingBlockStart: token.variable("notice-top", "2rem"),
    position: "relative",
  },
};

export { notice };
