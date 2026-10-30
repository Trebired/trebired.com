import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

const line = (hue: number, alpha: number) => `oklch(0.72 0.07 ${hue} / ${alpha})`;

const RULES: Array<[number, number, number, number]> = [
  [250, 0.26, 84, 42],
  [330, 0.2, 228, 76],
  [160, 0.16, 412, 120],
];

const LINES = RULES
.map(([hue, alpha, step, thick]) => {
    const gap = step - thick;
    return `repeating-linear-gradient(90deg, transparent 0 ${gap}px, ${line(hue, alpha)} ${gap}px ${step}px)`;
})
.join(", ");

const GLOWS = [
  "radial-gradient(42% 70% at 12% 14%, oklch(0.9 0.09 330 / 0.5), transparent 72%)",
  "radial-gradient(46% 74% at 84% 20%, oklch(0.9 0.09 215 / 0.45), transparent 72%)",
  "radial-gradient(44% 70% at 50% 100%, oklch(0.9 0.09 120 / 0.4), transparent 72%)",
].join(", ");

const banner: FrontendContainer = {
  on: {
    "& .tbf-button": {
      borderRadius: "999px",
      fontSize: "1.25rem",
      paddingBlock: "1.25rem",
      paddingInline: "2.75rem",
    },
    "& > *": { position: "relative", zIndex: "1" },
    "& p": {
      color: token.frontend("text"),
      fontSize: "clamp(2.1rem, 4.6vw, 4.25rem)",
      fontWeight: "500",
      letterSpacing: "-0.022em",
      lineHeight: "1.12",
      maxWidth: "24ch",
      opacity: "1",
      textAlign: "center",
      textWrap: "balance",
    },
    "&::after": {
      backgroundImage: LINES,
      content: "\"\"",
      inset: "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: "0",
    },
    "&::before": {
      backgroundImage: GLOWS,
      content: "\"\"",
      filter: "blur(60px)",
      inset: "-14%",
      pointerEvents: "none",
      position: "absolute",
      zIndex: "0",
    },
  },
  parts: {
    text: {
      style: { alignSelf: "center" },
    },
  },
  style: {
    alignItems: "center",
    isolation: "isolate",
    justifyContent: "center",
    minHeight: "100svh",
    overflow: "hidden",
    position: "relative",
  },
};

export { banner };
