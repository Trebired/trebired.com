import { defineConfig } from "@trebired/bundler/config";
import { githubReposSource } from "@trebired/bundler";
import { moneyRatesSource, textDocumentsSource } from "@trebired/frontend/config";

import { describeRepos } from "./../../src/bin/frontend/sources/repos";
import { publicationsSource } from "./../../src/bin/frontend/sources/publications";
import { roadmapSource } from "./../../src/bin/frontend/sources/roadmap";
import { brandMarkSource, brandSource } from "./../../src/bin/frontend/sources/brand";
import { githubTeamSource } from "./../../src/bin/frontend/sources/team";
import { teamPeople } from "./../../src/frontend/shared/team/people";

export default defineConfig({
    forVersion: "5.18.2",
    build: {
      clientOutDir: "dist",
      publicPath: "/",
    },
    data: {
      define: "BUILD_SITE_DATA",
      dir: "dist/data",
      sources: {
        brand: brandSource({ dir: "brand", org: "Trebired", repo: "meta" }),
        brandMark: brandMarkSource({ dir: "brand", org: "Trebired", repo: "meta" }),
        documents: textDocumentsSource({
            langs: ["en", "cs"],
            org: "Trebired",
            repo: "meta",
            slugs: [
              "privacy",
              "cookies",
              "terms",
              "trademark",
              "acceptable-use",
              "code-of-conduct",
              "philosophy",
              "faq",
            ],
        }),
        roadmap: roadmapSource({
            dir: "roadmap",
            langs: ["en", "cs"],
            org: "Trebired",
            repo: "meta",
            slugs: ["initial-release", "search-visibility", "social-presence", "product-development"],
        }),
        publications: publicationsSource({ langs: ["en", "cs"], org: "Trebired", repo: "publications" }),
        rates: moneyRatesSource({ base: "CZK", currencies: ["EUR"] }),
        repos: githubReposSource({ map: describeRepos, org: "Trebired" }),
        team: githubTeamSource({ people: teamPeople }),
      },
    },
    frontend: {
      frontendDir: "src/frontend",
    },
});
