import { defineConfig, siteSocialIconSpecs } from "@trebired/frontend/config";

import { components } from "./components";
import { containers } from "./containers";
import { language } from "./language";
import { links } from "./links";
import { money } from "./money";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints } from "./typography";

export default defineConfig({
    forVersion: "29.2.0",
    containers,
    links,
    assets: {
      favicon: {
        default: "dist/data/brand/minimal/light.svg",
        light: "dist/data/brand/minimal/light.svg",
        dark: "dist/data/brand/minimal/dark.svg",
      },
      flags: {
        countries: ["cz", "gb"],
      },
      icons: {
        mode: "static",
        specs: [
          "remixicon:arrow-down-s-line",
          "remixicon:arrow-left-line",
          "remixicon:arrow-right-line",
          "remixicon:arrow-right-s-line",
          "remixicon:check-line",
          "remixicon:clipboard-line",
          "remixicon:close-line",
          "remixicon:code-box-line",
          "remixicon:download-2-line",
          "remixicon:external-link-line",
          "remixicon:forbid-line",
          "remixicon:eye-line",
          "remixicon:eye-off-line",
          "remixicon:file-text-line",
          "remixicon:git-commit-line",
          "remixicon:apps-2-line",
          "remixicon:global-line",
          "remixicon:lock-line",
          "remixicon:instagram-line",
          "remixicon:palette-line",
          "remixicon:refresh-line",
          "remixicon:shield-keyhole-line",
          "remixicon:terminal-box-line",
          "remixicon:translate-2",
          "remixicon:wheelchair-line",
          "simple-icons:linux",
          "simple-icons:bun",
          "simple-icons:go",
          "simple-icons:postgresql",
          "simple-icons:qt",
          "simple-icons:react",
          "simple-icons:rust",
          "simple-icons:sass",
          "simple-icons:sqlite",
          "simple-icons:typescript",
          "simple-icons:opensourceinitiative",
          "simple-icons:codeberg",
          "simple-icons:gitlab",
          "simple-icons:sourcehut",
          ...siteSocialIconSpecs(["github", "linkedin", "x"]),
        ],
      },
      fonts: {
        families: {
          plexSans: {
            package: "ibm-plex-sans",
            family: "IBM Plex Sans",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700],
          },
          montserrat: {
            package: "montserrat",
            family: "Montserrat",
            subsets: ["latin", "latin-ext"],
            weights: [700, 800, 900],
          },
          nunito: {
            package: "nunito",
            family: "Nunito",
            subsets: ["latin", "latin-ext"],
            weights: [700, 800, 900],
          },
        },
        sans: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
      },
    },
    components,
    language,
    money,
    design: {
      breakpoints,
      glass: { tint: "light" },
      titles: { fit: { below: "md" } },
      interactions,
      palette,
      scales: {
        spacing: { lg: 40, md: 24, sm: 12, xl: 56, xl2: 72, xl3: 96, xs: 8, xs2: 4 },
        textBody: "lg",
        textSize: { lg: 20, md: 16, sm: 14, xl: 24, xl2: 32, xl3: 40, xl4: 56, xl5: 72, xl6: 108, xl7: 208, xs: 12 },
      },
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
