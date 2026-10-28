import { CONTENT_MAX, token } from "#ygn7yryd92wn";

import type { FrontendContainer } from "@trebired/frontend/config";
import { posterTheme } from "./poster_theme";
import { HAIRLINE, RADIUS } from "./tokens";

const REVEAL_EASE = token.css `${token.frontend("reveal-duration", "0.55s")} ${token.frontend("reveal-easing", "cubic-bezier(0.22, 0.61, 0.36, 1)")}`;

const HOVER_EASE = "0.3s ease";

const MOVE = token.css `opacity ${REVEAL_EASE}, translate ${REVEAL_EASE}`;

const PAINT = `background-color ${HOVER_EASE}, border-color ${HOVER_EASE}, outline-color ${HOVER_EASE}, color ${HOVER_EASE}`;

const REVEALED = token.css `${MOVE}, ${PAINT}`;

const siteApp: FrontendContainer = {
  on: {
    "& :is(.tbfm-figure, .tbfm-card)[data-tbf-reveal]": { transition: REVEALED },
    "& :where(p)": { color: "color-mix(in srgb, currentcolor 78%, transparent)", lineHeight: "1.75", textWrap: "pretty" },
    "& :where(s)": { opacity: "0.45", textDecorationColor: token.variable("price-high"), textDecorationThickness: "0.09em" },
    "& :where(ul:not([class]), ol:not([class]))": {
      display: "grid",
      gap: token.variable("space-xs"),
      lineHeight: "1.75",
      paddingInlineStart: "0",
    },
    "& [data-page]": { display: "grid", gridTemplateColumns: "minmax(0, 1fr)" },
    "& [data-page] > *": { minWidth: "0" },
    ...posterTheme,
  },
  style: {
    "--band-max": CONTENT_MAX,
    "--price-high": "oklch(0.72 0.12 25)",
    "--price-low": "oklch(0.74 0.12 158)",
    "--font-sans": "\"IBM Plex Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "--font-title": "\"Montserrat\", \"Arial Black\", sans-serif",
    "--section-inset-major": token.variable("space-xl3"),
    "--section-inset-minor": token.variable("space-xl"),
    "--text-size-xl2": "clamp(1.5rem, 2.4vw, 2rem)",
    "--text-size-xl3": "clamp(1.75rem, 3.2vw, 2.5rem)",
    "--text-size-xl4": "clamp(2rem, 4.4vw, 3.5rem)",
    "--text-size-xl5": "clamp(2.25rem, 5.6vw, 4.5rem)",
    "--text-size-xl6": "clamp(2.4rem, 6.4vw, 6.8rem)",
    "--text-size-xl7": "clamp(3.2rem, 12vw, 13rem)",
    "--tbf-font-mono": "\"IBM Plex Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "--title-letter-spacing": "0",
    "--title-line-height-min": "0",
    "--title-text-transform": "uppercase",
    "--title-weight": "900",
    fontFamily: token.variable("font-sans"),
    lineHeight: "1.5",
    textRendering: "optimizeLegibility",
  },
};

const mark: FrontendContainer = {
  on: {
    "& .tbfm-mark__face[data-site-mark=\"dark\"]": {
      insetBlockStart: "0",
      insetInlineStart: "0",
      opacity: token.frontend("on-dark", "0"),
      position: "absolute",
    },
  },
  parts: {
    face: {
      style: {
        opacity: token.css `calc(1 - ${token.frontend("on-dark", "0")})`,
        transition: token.css `opacity ${token.frontend(
        "shell-header-tone-duration",
        "320ms"
        )} ${token.frontend("shell-header-tone-easing", "ease")}`,
      },
    },
  },
  style: { position: "relative" },
};

const headerLogo: FrontendContainer = {
  at: {
    md: {
      "--tbf-surf-logo-root-height": "calc(var(--site-header-logo-height, 1.95rem) * 1.15)",
      "--tbf-surf-logo-root-max": "calc(100vw - 6.5rem)",
    },
  },
  style: {
    "--tbf-surf-logo-root-height": "calc(var(--site-header-logo-height, 1.95rem) * 1.15)",
    "--tbf-surf-logo-root-max": "min(var(--site-header-logo-max-width, 14rem) * 1.15, 100vw - 7rem)",
  },
};

const footerLogo: FrontendContainer = {
  style: {
    "--tbf-surf-logo-root-height": token.variable("site-footer-logo-height", "2.2rem"),
    "--tbf-surf-logo-root-max": "min(var(--site-footer-logo-max-width, 20rem), 78vw)",
  },
};

const avatar: FrontendContainer = {
  on: { "& img": { blockSize: "100%", borderRadius: "50%", display: "block", inlineSize: "100%", objectFit: "cover" } },
  style: {
    border: HAIRLINE,
    borderRadius: "50%",
    display: "grid",
    flex: "0 0 auto",
    fontFamily: token.variable("font-title"),
    fontSize: "0.9375rem",
    height: "3rem",
    placeItems: "center",
    width: "3rem",
  },
};

const cover: FrontendContainer = {
  parts: {
    image: { style: { display: "block", height: "100%", objectFit: "cover", width: "100%" } },
    print: { style: { display: "block", inset: "0", position: "absolute" } },
  },
  style: {
    aspectRatio: "21 / 9",
    border: HAIRLINE,
    borderRadius: RADIUS,
    display: "block",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
};

export { avatar, cover, footerLogo, headerLogo, mark, siteApp };
