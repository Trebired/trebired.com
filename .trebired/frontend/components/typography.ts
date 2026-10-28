import { semantic } from "#ygn7yryd92wn";

export const typography = {
  container: {
    px: {
      base: "2rem",
      lg: "1.6rem",
      sm: "1.15rem",
    },
  },
  heading: {
    variants: {
      price: {
        fontFamily: "var(--font-title)",
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: "var(--title-weight)",
        letterSpacing: "var(--title-letter-spacing)",
        lineHeight: "1",
        textTransform: "var(--title-text-transform)",
      },
    },
  },
  outline: {
    color: semantic.textColor,
    width: "clamp(3px, 0.6vw, 10px)",
  },
};
