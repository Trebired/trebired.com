import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const LEADER = token.css `2px solid ${token.colorMix("currentcolor", "55%")}`;

const TOP = "clamp(3rem, 6vw, 5rem)";

const course: FrontendContainer = {
  at: {
    md: {
      "--course-top": "1.5rem",
      "--notes-display": "flex",
      "--notes-position": "static",
      "--note-align": "start",
      "--note-border": "none",
      "--note-inset": "0",
      "--note-width": "auto",
      "--note-pad": "0",
      "--note-position": "static",
      "--note-translate": "none",
    },
  },
  parts: {
    below: { style: { paddingBlockStart: token.variable("note-pad", "1.25rem"), textAlign: token.variable("note-align", "end") } },
    layer: { style: { inset: "0", position: "absolute" } },
    note: {
      style: {
        insetBlockStart: "var(--note-y)",
        insetInlineStart: "var(--note-x)",
        inlineSize: token.variable("note-width", "max-content"),
        maxInlineSize: "15rem",
        position: "var(--note-position, absolute)",
        translate: "var(--note-translate, var(--note-shift))",
      },
    },
    notes: {
      style: {
        aspectRatio: "1000 / 140",
        display: "var(--notes-display, block)",
        flexDirection: "column",
        gap: token.gap("sm"),
        insetBlockStart: token.variable("course-top", TOP),
        insetInline: "0",
        listStyle: "none",
        padding: "0",
        position: "var(--notes-position, absolute)",
      },
    },
    plot: { style: { aspectRatio: "1000 / 140", inlineSize: "100%", position: "relative" } },
    start: {
      style: {
        borderInlineStart: token.variable("note-border", LEADER),
        paddingBlockEnd: token.variable("note-pad", "1.25rem"),
        paddingInlineStart: token.variable("note-inset", "0.75rem"),
      },
    },
  },
  style: {
    display: "flex",
    flexDirection: "column",
    gap: token.gap("lg"),
    paddingBlockStart: token.variable("course-top", TOP),
    position: "relative",
  },
};

export { course };
