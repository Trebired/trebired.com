import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const stepband: FrontendContainer = {
  at: {
    md: { "--step-art": "clamp(12rem, 62vw, 16rem)", "--step-art-order": "-1", "--step-columns": "minmax(0, 1fr)", "--step-order": "-1" },
  },
  on: { "& > .tbfm-stepband__art": { order: token.variable("step-art-order", "0") } },
  parts: {
    art: {
      style: {
        aspectRatio: "1",
        inlineSize: token.variable("step-art", "clamp(18rem, 32vw, 30rem)"),
        justifySelf: "center",
        position: "relative",
      },
    },
    copy: { style: { display: "flex", flexDirection: "column", gap: token.gap("md"), minWidth: "0" } },
  },
  style: {
    alignItems: "center",
    display: "grid",
    gap: token.gap("xl"),
    gridTemplateColumns: token.variable("step-columns", "minmax(0, 1fr) minmax(0, 1fr)"),
  },
  variants: {
    flip: { on: { "& > .tbfm-stepband__art": { order: token.variable("step-order", "-1") } } },
  },
};

export { stepband };
