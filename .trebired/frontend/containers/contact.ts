import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { RULE } from "./poster";
import { INK, PAGE, RADIUS } from "./tokens";

const PAD = token.variable("contact-pad", "2rem");

const board: FrontendContainer = {
  at: { md: { "--board-columns": "1fr", "--contact-pad": "1.25rem" } },
  parts: {
    card: {
      on: { "&:hover": { background: token.frontend("surface-muted") } },
      style: {
        border: RULE,
        borderRadius: RADIUS,
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: token.gap("xs"),
        padding: PAD,
        textDecoration: "none",
        transition: "background-color 0.25s ease",
      },
    },
    grid: {
      on: { "& > :last-child:nth-child(odd)": { gridColumn: "1 / -1" } },
      style: { display: "grid", gap: token.gap("md"), gridTemplateColumns: token.variable("board-columns", "1fr 1fr") },
    },
    lead: {
      on: { "&:hover": { background: token.colorMix(INK, "88%", PAGE) } },
      style: {
        "--tbf-text-muted": token.colorMix(PAGE, "62%"),
        "--tbf-typography-outline-color": PAGE,
        "--tbf-typography-outline-fill": INK,
        background: INK,
        borderRadius: RADIUS,
        color: PAGE,
        display: "flex",
        flexDirection: "column",
        gap: token.gap("sm"),
        padding: token.css `calc(${PAD} * 1.25)`,
        textDecoration: "none",
        transition: "background-color 0.25s ease",
      },
    },
  },
};

export { board, };
