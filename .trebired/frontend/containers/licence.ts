import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { LABEL, RULE } from "./poster";
import { INK, PAGE } from "./tokens";

const MUTED = token.frontend("text-muted");

const TINT = {
  agpl: INK,
  gpl: token.colorMix("currentcolor", "45%"),
  mit: token.variable("price-low"),
  other: token.colorMix("currentcolor", "16%"),
};

const licence: FrontendContainer = {
  at: { md: { "--licence-cell": "2.6rem", "--licence-seg": "3.4rem" } },
  parts: {
    cell: { style: { display: "grid", fontSize: "1.5rem", justifyItems: "center" } },
    dot: { style: { background: token.variable("licence-tint"), blockSize: "0.9rem", borderRadius: "999px", flexShrink: "0", inlineSize: "0.9rem" } },
    group: { style: { ...LABEL, borderBlockEnd: RULE, color: MUTED, gridColumn: "1 / -1", paddingBlock: "1.4rem 0.6rem" } },

    matrix: {
      style: {
        alignItems: "center",
        columnGap: token.gap("sm"),
        display: "grid",
        gridTemplateColumns: token.css `minmax(0, 1fr) repeat(3, ${token.variable("licence-cell", "7rem")})`,
        rowGap: "0.9rem",
      },
    },
    no: { style: { color: token.colorMix("currentcolor", "30%") } },
    seg: {
      on: { "& > strong": { position: "relative" } },
      style: {
        alignItems: "end",
        borderRadius: "1.5rem",
        display: "flex",
        isolation: "isolate",
        overflow: "hidden",
        position: "relative",
        minInlineSize: token.variable("licence-seg", "5rem"),
        padding: "1rem 1.2rem",
      },
    },
    stack: { style: { blockSize: "clamp(7rem, 12vw, 11rem)", display: "flex", gap: "0.4rem" } },
    yes: { style: { color: "currentcolor" } },
  },
  variants: {
    agpl: { style: { "--licence-tint": TINT.agpl, color: PAGE } },
    gpl: { style: { "--licence-tint": TINT.gpl, color: PAGE } },
    mit: { style: { "--licence-tint": TINT.mit, color: INK } },
    other: { style: { "--licence-tint": TINT.other } },
  },
};

export { licence };
