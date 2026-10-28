import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { LEDE_LETTER, LEDE_STEP } from "./sections";
import { RADIUS } from "./tokens";

const article: FrontendContainer = {
  at: LEDE_STEP,
  on: {
    "& p": { lineHeight: "1.85", maxInlineSize: "46rem" },
    "& article > :first-child p:first-of-type::first-letter": LEDE_LETTER,
  },
  parts: {
    author: {
      on: { "&:hover": { borderColor: token.colorMix("currentcolor", "40%") } },
      style: {
        alignItems: "center",
        border: RULE,
        borderRadius: RADIUS,
        color: "inherit",
        display: "flex",
        gap: token.gap("sm"),
        minWidth: "0",
        padding: token.gap("sm"),
        textDecoration: "none",
        transition: "border-color 0.25s ease",
      },
    },
    cta: {
      style: {
        "--tbf-ui-btn-variants-primary-bg": "oklch(0.97 0 0)",
        "--tbf-ui-btn-variants-primary-color": "oklch(0.15 0 0)",
        "--tbf-ui-btn-variants-primary-state-hover-bg": "oklch(0.88 0 0)",
        "--tbf-ui-btn-variants-primary-state-hover-color": "oklch(0.15 0 0)",
      },
    },
    fact: { style: { borderBlockStart: RULE, display: "grid", gap: "0.2rem", paddingBlockStart: token.gap("sm") } },
    who: { style: { display: "grid", gap: token.gap("xs"), gridTemplateColumns: "minmax(0, 1fr)", minWidth: "0" } },
  },
};

export { article };
