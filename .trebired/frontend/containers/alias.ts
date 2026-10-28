import type { FrontendContainer } from "@trebired/frontend/config";

const alias: FrontendContainer = {
  at: { md: { "--alias-plain": "block", "--alias-print": "none" } },
  parts: {
    plain: { style: { display: "var(--alias-plain, none)", overflowWrap: "anywhere" } },
    print: { style: { display: "var(--alias-print, block)" } },
  },
  style: { display: "flex", flexDirection: "column", gap: "0.25rem" },
};

export { alias };
