import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { HAIRLINE } from "./tokens";

const answers: FrontendContainer = {
  at: { md: { gridTemplateColumns: "minmax(0, 1fr)" } },
  parts: {
    item: {
      on: { "& h3": { fontSize: "inherit" }, "& button": { justifyContent: "space-between", textAlign: "start" } },
      style: { borderBlockEnd: HAIRLINE, fontSize: "1.15rem", fontWeight: "600", paddingBlock: token.gap("md") },
    },
  },
  style: {
    alignItems: "start",
    columnGap: token.gap("xl"),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
    rowGap: token.gap("md"),
  },
};

export { answers };
