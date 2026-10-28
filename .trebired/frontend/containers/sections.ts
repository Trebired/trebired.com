import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { PAGE, RADIUS } from "./tokens";

const figures: FrontendContainer = {
  at: {
    lg: {},
  },
  on: {
    "&[data-layout=\"grid\"]": {
      display: "grid",
      gap: token.variable("space-lg"),
      gridTemplateColumns: "repeat(auto-fit, minmax(min(18rem, 100%), 1fr))",
    },
    "&[data-layout=\"grid\"] .tbfm-figure": { gridTemplateRows: "auto 1fr" },
    "&[data-layout=\"grid\"] .tbfm-figure__copy": { alignSelf: "start", gap: token.variable("space-xs") },
    "&[data-layout=\"stacked\"]": { gap: token.gap("xl2") },
    "&[data-layout=\"stacked\"] .tbfm-figure": { gridTemplateColumns: "minmax(0, 1fr)" },
    "&[data-layout=\"stacked\"] .tbfm-figure__copy": { alignSelf: "start" },
  },
};

const FIGURE_EASE = "0.25s ease";

const figure: FrontendContainer = {
  on: {
    "&:hover": { outlineColor: token.colorMix("currentcolor", "28%") },
    "&:focus-visible": { outlineColor: "currentcolor" },
    "&:focus-visible h3": { color: token.frontend("text-muted") },
    "& h3 a": { color: "inherit", textDecoration: "none" },
    "& > .tbf-inline-row > img": { borderRadius: RADIUS },
  },
  parts: {
    copy: { style: { alignSelf: "center" } },
    corner: { style: { fontSize: "1.4rem", insetBlockStart: token.gap("md"), insetInlineEnd: token.gap("md"), position: "absolute" } },
  },
  style: {
    alignContent: "start",
    borderRadius: RADIUS,
    boxSizing: "border-box",
    color: "inherit",
    display: "grid",
    gap: token.gap("md"),
    outline: "1px solid transparent",
    outlineOffset: "0",
    padding: token.gap("md"),
    position: "relative",
    textDecoration: "none",
    transition: token.css `outline-color ${FIGURE_EASE}`,
  },
};

const amount: FrontendContainer = {
  variants: {
    high: { style: { color: token.variable("price-high") } },
    low: { style: { color: token.variable("price-low") } },
  },
};

const status: FrontendContainer = {
  style: {
    alignItems: "center",
    color: token.variable("status-color", "currentColor"),
    display: "inline-flex",
    fontSize: "0.8rem",
    fontWeight: "700",
    gap: token.gap("xs2"),
    textTransform: "uppercase",
    width: "fit-content",
  },
  on: {
    "&::before": {
      background: "currentColor",
      borderRadius: "50%",
      content: "\"\"",
      height: "0.5rem",
      width: "0.5rem",
    },
  },
};

const LEDE_LETTER = {
  color: token.frontend("text"),
  float: "inline-start",
  fontSize: token.variable("lede-size", "6em"),
  fontWeight: "600",
  lineHeight: token.variable("lede-line", "0.8125"),
  paddingBlockStart: "0.0625em",
  paddingInlineEnd: "0.1em",
};

const LEDE_STEP = { sm: { "--lede-size": "4.4em", "--lede-line": "0.8" } };

const lede: FrontendContainer = {
  at: LEDE_STEP,
  on: { "&::first-letter": LEDE_LETTER },
};

const plusList: FrontendContainer = {
  on: {
    "& li": { opacity: "0.78", paddingInlineStart: "1.1rem", position: "relative" },
    "& li::before": { content: "\"+\"", insetInlineStart: "0", opacity: "0.6", position: "absolute" },
  },
};

const TONE_NAMES = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const TONE_HUES = [20, 60, 100, 140, 180, 215, 250, 290, 330];

const toneAt = (index: number) => `oklch(0.93 0.05 ${TONE_HUES[index % TONE_HUES.length]})`;

const RAIL_TONE = token.variable("rail-tone", "currentcolor");

const RAIL_TONE_NEXT = token.css `var(--rail-tone-next, ${RAIL_TONE})`;

const RAIL_VARIANTS = Object.fromEntries(TONE_NAMES.map((name, index) => [
      name,
      { style: { "--rail-tone": toneAt(index), "--rail-tone-next": toneAt(index + 1) } },
]));

const RAIL_LINK = token.css `linear-gradient(to right, ${RAIL_TONE} 0%, ${RAIL_TONE} 30%, ${RAIL_TONE_NEXT} 70%, ${RAIL_TONE_NEXT} 100%)`;

const rail: FrontendContainer = {
  parts: {
    card: {
      on: {
        "&::after": {
          backgroundImage: RAIL_LINK,
          content: "\"\"",
          height: "0.375rem",
          insetInlineStart: "100%",
          position: "absolute",
          top: "50%",
          translate: "0 -50%",
          width: token.gap("lg"),
        },
        "&:has(> .tbfm-rail__print)::after": { content: "none" },
        "&:last-child::after": { content: "none" },
        "&:not(:last-child) > .tbfm-rail__print": { insetInlineEnd: token.css `calc(-1 * ${token.gap("lg")} - 6px)` },
      },
      style: {
        background: token.variable("rail-fill", token.variable("rail-tone", token.frontend("surface"))),
        borderRadius: RADIUS,
        color: token.frontend("base-text", "#000"),
        display: "flex",
        flex: "0 0 min(22rem, 78vw)",
        flexDirection: "column",
        gap: token.gap("xs"),
        isolation: "isolate",
        padding: token.variable("space-lg"),
        position: "relative",
        scrollSnapAlign: "start",
      },
    },
    mark: {
      style: {
        fontFamily: token.variable("font-title"),
        fontSize: "2rem",
        lineHeight: "1",
        opacity: "0.35",
      },
    },
    print: { style: { inset: "0", pointerEvents: "none", position: "absolute", zIndex: "-1" } },
    track: { style: { display: "flex", width: "max-content" } },
  },
  style: {
    overscrollBehaviorX: "contain",
    paddingBottom: token.variable("space-sm"),
    scrollSnapType: "x proximity",
  },
  variants: RAIL_VARIANTS,
};

const swatch: FrontendContainer = {
  style: { borderRadius: RADIUS, display: "block", height: "4rem" },
};

const specimen: FrontendContainer = {
  parts: {
    line: {
      style: {
        fontFamily: token.variable("font-title"),
        fontSize: "clamp(0.85rem, 1.9vw, 1.35rem)",
        fontWeight: token.variable("title-weight"),
        lineHeight: "1.5",
        overflowWrap: "anywhere",
      },
    },
  },
  style: {
    fontFamily: token.variable("font-title"),
    fontSize: "clamp(2rem, 11vw, 9rem)",
    fontWeight: token.variable("title-weight"),
    letterSpacing: token.variable("title-letter-spacing"),
    lineHeight: "1.05",
    maxWidth: "100%",
    overflowWrap: "break-word",
    textTransform: token.variable("title-text-transform"),
  },
};

const workVisual: FrontendContainer = {
  on: {
    "& .hero-visual-canvas": {
      height: "92%",
      opacity: "1",
      right: "50%",
      top: "50%",
      transform: "translate(50%, -50%)",
      width: "92%",
    },
  },
  style: {
    "--frame-ratio": "16 / 9",
    background: token.css `color-mix(in srgb, ${PAGE} calc(7% * ${token.frontend("on-dark", "0")}), ${token.frontend("surface-muted")})`,
    border: token.css `1px solid color-mix(in srgb, ${PAGE} calc(16% * ${token.frontend("on-dark", "0")}), transparent)`,
    maxHeight: "32rem",
  },
};

export {
  LEDE_LETTER,
  LEDE_STEP,
  amount,
  figure,
  figures,

  lede,
  plusList,
  rail,
  specimen,
  status,
  swatch,
  workVisual,
};
