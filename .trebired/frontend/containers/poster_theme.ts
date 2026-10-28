import { token } from "#ygn7yryd92wn";

import { INK, PAGE, TEXT } from "./tokens";

const MAIN = "&[data-site=\"main\"]";

const SHOUT = {
  fontFamily: token.variable("font-title"),
  fontWeight: "900",
  letterSpacing: token.variable("shout-tracking", "-0.04em"),
  textTransform: "uppercase",
};

const OUTLINED = {
  color: PAGE,
  paintOrder: "stroke fill",
  WebkitTextStroke: token.css `3px ${TEXT}`,
};

const titles = {
  [MAIN]: { "--shout-tracking": "0.012em" },
};

const blocks = {
  [`${MAIN} .tbf-text-outline`]: { letterSpacing: "0.02em" },
  [`${MAIN} :is(.tbfm-band--muted, .tbfm-band:nth-child(even of .tbfm-band:not(.tbfm-band--inverse)):not(.tbfm-band--inverse))`]: {
    "--tbf-typography-outline-fill": token.colorMix(token.frontend("surface-muted"), "45%", PAGE),
  },
  [`${MAIN} .tbfm-band--inverse`]: { "--tbf-typography-outline-color": TEXT, "--tbf-typography-outline-fill": INK },
  [`${MAIN} .tbfm-row dt`]: { fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase" },
  [`${MAIN} .tbfm-row dd`]: { ...SHOUT, fontSize: "clamp(1.1rem, 2vw, 1.6rem)" },
};

const sequences = {
  [`${MAIN} .tbfm-rail__mark`]: {
    ...SHOUT,
    ...OUTLINED,
    color: token.variable("rail-tone", PAGE),
    fontSize: "clamp(4rem, 7vw, 6.5rem)",
    lineHeight: "0.85",
    opacity: "1",
  },
};

const questions = {
  [`${MAIN} .tbf-text-document__trigger`]: {
    ...SHOUT,
    fontSize: "clamp(1.3rem, 2.4vw, 2.2rem)",
    letterSpacing: token.variable("shout-tracking", "-0.03em"),
  },
};

const outline = {
  [`${MAIN} .tbf-page-outline-layout__rail`]: { paddingBlockEnd: token.variable("space-xl") },
};

const posterTheme = { ...titles, ...blocks, ...sequences, ...questions, ...outline };

export { posterTheme };
