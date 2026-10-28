import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const AREAS = "\"file function memory\" \"file duplicate duplicate\" \"file line commit\"";

const STACKED = "\"file\" \"function\" \"memory\" \"duplicate\" \"line\" \"commit\"";

const standard: FrontendContainer = {
  at: {
    md: {
      "--standard-areas": STACKED,
      "--standard-columns": "minmax(0, 1fr)",
      "--standard-file": "24rem",
    },
  },
  parts: {
    cell: { style: { alignContent: "start", display: "grid", gap: token.gap("sm"), minWidth: "0" } },
    count: { style: { fontSize: "clamp(9rem, 22vw, 18rem)" } },
    drawing: { style: { blockSize: "auto", display: "block", inlineSize: "100%", overflow: "visible" } },
    file: {
      on: {
        "& .tbfm-standard__drawing": {
          aspectRatio: "150 / 374",
          blockSize: token.variable("standard-file", "clamp(28rem, 42vw, 38rem)"),
          inlineSize: "auto",
        },
      },
    },
    mark: { style: { color: "#8c79ca", stroke: "currentColor" } },
    refused: { style: { color: token.variable("price-high"), fill: "currentColor", stroke: "currentColor" } },
    target: { style: { color: "#64a55f", fill: "currentColor", stroke: "currentColor" } },
  },
  style: {
    alignItems: "start",
    display: "grid",
    gap: token.css `${token.gap("xl")} ${token.gap("xl")}`,
    gridTemplateAreas: token.variable("standard-areas", AREAS),
    gridTemplateColumns: token.variable("standard-columns", "minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, 1fr)"),
    listStyle: "none",
    padding: "0",
  },
};

export { standard };
