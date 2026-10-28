import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { RADIUS } from "./tokens";

const WIDE_ART = "clamp(11rem, (100cqi - 44rem) * 1.3, 28rem)";

const offers: FrontendContainer = {
  at: {
    md: {
      "--offers-art-size": "15rem",
      "--offers-columns": "1fr",
      "--offers-pad": "1.5rem",
      "--offers-rule-block": RULE,
      "--offers-rule-inline": "0",
    },
  },
  parts: {
    art: {
      style: {
        "--offers-art": token.variable("offers-art-size", "clamp(11rem, 46cqi, 19rem)"),
        aspectRatio: "1",
        inlineSize: "var(--offers-art)",
        insetBlockStart: "-14%",
        insetInlineEnd: "calc(var(--offers-art) * -0.26)",
        opacity: "0.5",
        pointerEvents: "none",
        position: "absolute",
        rotate: "-12deg",
        zIndex: "-1",
      },
    },
    item: {
      on: {
        "&:last-child:nth-child(odd)": { "--offers-art-size": WIDE_ART, gridColumn: "1 / -1", minBlockSize: "auto" },
        "&:nth-child(even)": { borderInlineStart: token.variable("offers-rule-inline", RULE) },
        "&:nth-child(2)": { borderBlockStart: token.variable("offers-rule-block", "0") },
        "&:nth-child(n + 3)": { borderBlockStart: RULE },
      },
      style: {
        containerType: "inline-size",
        display: "grid",
        gap: token.gap("lg"),
        gridTemplateRows: "auto 1fr",
        isolation: "isolate",
        minBlockSize: "30rem",
        overflow: "hidden",
        padding: token.variable("offers-pad", "2.5rem"),
        position: "relative",
      },
    },
    price: { style: { alignSelf: "end", display: "flex", flexDirection: "column", gap: token.gap("xs"), maxWidth: "none" } },
  },
  style: {
    border: RULE,
    borderRadius: RADIUS,
    display: "grid",
    gridTemplateColumns: token.variable("offers-columns", "1fr 1fr"),
    listStyle: "none",
    overflow: "hidden",
    padding: "0",
  },
};

const TAG_TEXT = { display: "block", lineHeight: "1.15" };

export { offers };
