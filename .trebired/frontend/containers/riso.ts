import type { FrontendContainer } from "@trebired/frontend/config";

const riso: FrontendContainer = {
  style: { cursor: "default" },
  on: {
    "&[data-riso=\"live\"][data-riso-kind=\"text\"]": { color: "transparent" },
    "&[data-riso-kind=\"text\"]": { position: "relative" },
    "&[data-riso=\"live\"] > :not(.tbfm-riso__plate)": { opacity: "0" },
  },
  parts: {
    figure: {
      on: { "& img": { blockSize: "auto", display: "block", inlineSize: "78%" },
        "& .tbf-icon": { blockSize: "1em", display: "block", fontSize: "clamp(14rem, 34vw, 32rem)", inlineSize: "1em" },
        "& .tbf-icon svg": { blockSize: "1em", display: "block", inlineSize: "1em" },
      },
      style: {
        alignSelf: "center",
        aspectRatio: "1",
        display: "grid",
        inlineSize: "78%",
        justifySelf: "center",
        placeItems: "center",
        position: "relative",
      },
    },
    plate: {
      style: { inset: "0", pointerEvents: "none", position: "absolute" },
    },
  },
};

const prints: FrontendContainer = {
  style: { isolation: "isolate", overflow: "hidden", position: "relative" },
};

export { prints, riso };
