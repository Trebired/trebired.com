import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const MUTED = token.frontend("text-muted");

const RULE = token.css `1px solid ${token.colorMix("currentcolor", "16%")}`;

const SHOUT = {
  fontFamily: token.variable("font-title"),
  fontWeight: "900",
  letterSpacing: token.variable("shout-tracking", "-0.04em"),
  lineHeight: "0.84",
  textTransform: "uppercase",
};

const LABEL = {
  fontFamily: token.variable("font-sans"),
  fontSize: "0.78rem",
  fontWeight: "600",
  lineHeight: "1.5",
  opacity: "1",
  textTransform: "uppercase",
};

const foot: FrontendContainer = {
  on: {
    "& > :last-child": { justifySelf: "end" },
    "& > p": { maxWidth: "36rem" },
  },
  style: { display: "grid", gap: token.gap("md") },
};

const copy: FrontendContainer = {
  at: { md: { gridTemplateColumns: "1fr" } },
  style: { alignItems: "end", display: "grid", gap: token.gap("lg"), gridTemplateColumns: "1.3fr 1fr auto" },
};

const TEAR = [46, 53, 47, 55, 45, 52, 48, 54, 46, 53, 47];

const EDGE = TEAR.map((y, index) => `${index * 10}% ${y}%`);

const LOWER = `polygon(${EDGE.join(", ")}, 100% 100%, 0 100%)`;

const UPPER = `polygon(0 0, 100% 0, ${[...EDGE].reverse().join(", ")})`;

const HALF = { fontSize: "33.6cqi", gridArea: "1 / 1", lineHeight: "0.8", transformOrigin: "0 50%", whiteSpace: "nowrap" };

export { copy, foot, LABEL, RULE, SHOUT };
