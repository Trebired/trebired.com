import type { FrontendLinksConfig } from "@trebired/frontend/config";

import cs from "./../../src/frontend/components/chrome/site/i18n/cs";
import en from "./../../src/frontend/components/chrome/site/i18n/en";

const MAIN = [
  "about", "acceptable_use", "accessibility", "blog", "brand", "careers", "case_studies", "code_of_conduct", "contact", "contribute", "cookies",
  "faq", "freedom", "governance", "handbook", "home", "licenses", "philosophy", "privacy", "process", "projects", "roadmap", "security", "services",
  "standards", "sustainability", "team", "terms", "trademark",
];

const PAGES: Record<string, string> = {
  acceptable_use: "acceptable-use",
  case_studies: "case-studies",
  code_of_conduct: "code-of-conduct",
  home: "",
};

const COLUMNS = [["work", "practices"], ["organization", "principles"], ["community", "resources"], ["legal"]];

const NOTE = ["security", "accessibility"];

const on = (site: string, paths: Record<string, string>) =>
Object.fromEntries(Object.entries(paths).map(([key, href]) => [key, { href, site }]));

export const links: FrontendLinksConfig = {
  categories: {
    work: ["services", "projects", "case_studies"],
    practices: ["process", "handbook", "standards"],
    organization: ["about", "team", "brand", "careers", "contact"],
    principles: ["philosophy", "sustainability", "freedom"],
    community: ["contribute", "discussions", "code_of_conduct", "governance"],
    resources: ["blog", "roadmap", "faq"],
    legal: ["terms", "privacy", "cookies", "acceptable_use", "trademark", "licenses"],
  },
  links: {
    ...on("main", Object.fromEntries(MAIN.map((key) => [key, `/${PAGES[key] ?? key}`]))),
    discussions: { external: true, href: "https://github.com/orgs/Trebired/discussions" },
  },
  messages: { cs: cs.links, en: en.links },
  sets: {
    main: {
      footer: { columns: COLUMNS, note: NOTE },
      header: ["home", "projects", "services", "philosophy", "blog", "contact", { group: "everything", search: true, sitemap: true }],
    },
  },
};
