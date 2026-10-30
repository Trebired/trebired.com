import { token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";

import { HAIRLINE, INK, PAGE } from "./tokens";

const HERO = "clamp(30.5rem, 68vh, 44rem)";

const LEAD = token.variable("hero-lead", "11.5rem");

const hero: FrontendContainer = {
  frost: true,
  at: {
    md: {
      "--hero-pb": token.variable("space-lg"),
      "--hero-pt": token.variable("space-xl3"),
      "--poster-tall": "block",
      "--poster-wide": "none",
    },
  },
  on: {
    "& > .tbfm-hero__poster": {
      display: token.variable("poster-wide", "block"),
      inset: "0",
      opacity: token.variable("poster-opacity", "0.62"),
      pointerEvents: "none",
      position: "absolute",
      zIndex: "0",
    },
    "& > .tbfm-hero__tall": { display: token.variable("poster-tall", "none") },
    "& > .tbfm-hero__poster .tbfm-riso__plate": { inset: "0" },
    "& > .tbfm-hero__poster > :not(.tbfm-riso__plate)": { display: "none" },
    "& > [data-hero-inner]": {
      maxWidth: token.css `calc(${token.variable("band-max")} + ${token.frontend("container-px")} * 2)`,
      minWidth: "0",
      paddingBottom: token.variable("hero-pb", "3.75rem"),
      paddingInline: token.frontend("container-px"),
      paddingTop: token.variable("hero-pt", "10.5rem"),
      position: "relative",
      width: "100%",
      zIndex: "1",
    },
    "& small": {
      color: token.frontend("text-muted"),
      fontFamily: token.variable("font-sans"),
      fontSize: "0.8rem",
    },
  },
  parts: {
    toggle: {
      style: {
        alignItems: "center",
        display: "flex",
        gap: token.gap("xs"),
        insetBlockStart: token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.gap("sm")})`,
        insetInlineEnd: token.frontend("container-px"),
        position: "absolute",
        zIndex: "2",
      },
    },
    cover: {
      style: {
        aspectRatio: "21 / 9",
        inlineSize: "max(100%, calc(100svh * 21 / 9))",
        insetBlockStart: "0",
        insetInlineStart: "50%",
        opacity: "0.38",
        pointerEvents: "none",
        position: "absolute",
        transition: "opacity 0.4s ease",
        translate: "-50% 0",
        zIndex: "0",
      },
    },
    art: {
      style: {
        blockSize: "100%",
        inlineSize: "100%",
        insetBlockStart: "0",
        insetInlineStart: "0",
        objectFit: "cover",
        position: "absolute",
        zIndex: "0",
      },
    },

  },
  style: { display: "grid", justifyItems: "center", position: "relative" },
  variants: {
    home: {
      on: {
        "& > [data-hero-inner]": {
          alignContent: "center",
          containerType: "inline-size",
          position: "relative",
          zIndex: "1",
        },
        "& p": { fontSize: "clamp(1.2rem, 1.7vw, 1.55rem)", maxWidth: "52rem" },
      },
      style: {
        "--hero-pb": token.variable("space-lg"),
        "--hero-pt": token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.variable("space-lg")})`,
        "--tbf-text-muted": token.colorMix(PAGE, "55%"),
        "--tbf-typography-outline-color": PAGE,
        "--tbf-typography-outline-fill": INK,
        "--tbf-ui-btn-variants-primary-bg": PAGE,
        "--tbf-ui-btn-variants-primary-color": INK,
        "--tbf-ui-btn-variants-primary-state-hover-bg": token.colorMix(PAGE, "86%"),
        "--tbf-ui-btn-variants-primary-state-hover-color": INK,
        alignItems: "center",
        background: INK,
        color: PAGE,
        display: "grid",
        minHeight: "100svh",
        position: "relative",
      },
    },
    lead: {
      on: {
        "& > [data-hero-inner]": {
          paddingBottom: token.variable("space-lg"),
          paddingTop: token.variable("space-lg"),
        },
        "& p": { fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)", lineHeight: "1.5", maxWidth: "46rem" },
      },
      style: {
        alignContent: "center",
        backdropFilter: token.frontend("glass-filter", "none"),
        background: token.frontend("glass-bg", "transparent"),
        color: PAGE,
        display: "grid",
        justifySelf: "stretch",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        zIndex: "2",
      },
    },
    post: {
      on: {
        "&[data-tbf-visibility=\"hidden\"] > .tbfm-hero__cover": { opacity: "1" },
        "& > [data-hero-inner]": {
          justifyContent: "center",
          paddingBottom: token.variable("space-xl3"),
          paddingTop: token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.variable("space-xl3")})`,
        },
        "& p": { fontSize: "1.15rem", maxWidth: "44rem" },
      },
      style: {
        alignItems: "stretch",
        overflow: "hidden",
        borderBottom: HAIRLINE,
        minHeight: "100svh",
      },
    },
    page: {
      at: { md: { "--hero-lead": "13.5rem" } },
      on: {
        "& > .tbfm-hero__poster": { blockSize: HERO, insetBlockEnd: "auto" },
        "& > [data-hero-inner]": {
          justifyContent: "center",
          position: "relative",
          zIndex: "4",
          paddingBottom: token.variable("space-lg"),
          paddingTop: token.css `calc(${token.frontend("shell-header-height", "5rem")} + ${token.variable("space-lg")})`,
        },
      },
      style: {
        "--tbf-text-muted": token.colorMix(PAGE, "55%"),
        background: INK,
        color: PAGE,
        gridTemplateRows: token.css `minmax(calc(${HERO} - ${LEAD}), auto) minmax(${LEAD}, auto)`,
        minHeight: HERO,
        overflow: "hidden",
        position: "relative",
      },
    },
  },
};

const headline: FrontendContainer = {
  at: { md: { "--headline-row": "block", "--headline-size": "min(calc(100cqi / (var(--headline-word) * 1.04)), 7rem)" } },
  parts: {
    line: { style: { display: "block", whiteSpace: "nowrap" } },
    word: { style: { display: token.variable("headline-row", "inline") } },
  },
  style: { fontSize: token.variable("headline-size", "min(calc(100cqi / 10.8), 11rem)") },
};

export { headline, hero };
