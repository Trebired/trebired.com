import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const density: FrontendContainer = {
  on: { "& > li:nth-child(even)": { alignItems: "flex-end", textAlign: "end" } },
  parts: {
    note: { style: { maxInlineSize: "30rem" } },
    step: { style: { display: "flex", flexDirection: "column", gap: token.gap("xs") } },
    word: {
      style: {
        display: "block",
        fontFamily: token.variable("font-title"),
        fontSize: "min(16cqi, calc(132cqi / var(--chars)))",
        fontWeight: "900",
        lineHeight: "0.9",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      },
    },
  },
  style: { containerType: "inline-size", display: "flex", flexDirection: "column", gap: token.gap("lg"), paddingBlock: token.gap("md") },
};

export { density };
