import { createSitePages, type SitePageLoader } from "@trebired/frontend/react";
import { HollowPalette } from "@trebired/frontend/hollow";

import { heroTone } from "./../components/chrome/hero/tones";
import { SiteErrorPage } from "./../pages/error";
import { DOCUMENT_SLUGS } from "./../pages/document/slugs";
import { articlePath, articles } from "./publications/articles";
import { routeExists } from "./utils/routes";

const MAIN_LOADERS: Record<string, SitePageLoader> = {
  "/": async() => (await import("./../pages/home")).HomePage,
  "/about": async() => (await import("./../pages/about")).AboutPage,
  "/accessibility": async() => (await import("./../pages/accessibility")).AccessibilityPage,
  "/blog": async() => (await import("./../pages/blog")).BlogPage,
  "/brand": async() => (await import("./../pages/brand")).BrandPage,
  "/careers": async() => (await import("./../pages/careers")).CareersPage,
  "/case-studies": async() => (await import("./../pages/case_studies")).CaseStudiesPage,
  "/contact": async() => (await import("./../pages/contact")).ContactPage,
  "/contribute": async() => (await import("./../pages/contribute")).ContributePage,
  "/faq": async() => (await import("./../pages/faq")).FaqPage,
  "/freedom": async() => (await import("./../pages/freedom")).FreedomPage,
  "/governance": async() => (await import("./../pages/governance")).GovernancePage,
  "/handbook": async() => (await import("./../pages/handbook")).HandbookPage,
  "/licenses": async() => (await import("./../pages/licenses")).LicensesPage,
  "/philosophy": async() => (await import("./../pages/philosophy")).PhilosophyPage,
  "/process": async() => (await import("./../pages/process")).ProcessPage,
  "/projects": async() => (await import("./../pages/projects")).ProjectsPage,
  "/roadmap": async() => (await import("./../pages/roadmap")).RoadmapPage,
  "/security": async() => (await import("./../pages/security")).SecurityPage,
  "/services": async() => (await import("./../pages/services")).ServicesPage,
  "/standards": async() => (await import("./../pages/standards")).StandardsPage,
  "/sustainability": async() => (await import("./../pages/sustainability")).SustainabilityPage,
  "/team": async() => (await import("./../pages/team")).TeamPage,
};

function documentLoader(slug: string): SitePageLoader {
  return async() => {
    const { DocumentPage } = await import("./../pages/document");
    return () => <DocumentPage slug={slug} />;
  };
}

function articleLoader(kind: "blog" | "case-study", slug: string): SitePageLoader {
  return async() => {
    if (kind === "blog") {
      const { BlogPostPage } = await import("./../pages/blog/post");
      return () => <BlogPostPage slug={slug} />;
    }
    const { CaseStudyPage } = await import("./../pages/case_studies/study");
    return () => <CaseStudyPage slug={slug} />;
  };
}

function pageLoader(route: string): SitePageLoader | undefined {
  if (!routeExists(route)) return undefined;
  if (MAIN_LOADERS[route]) return MAIN_LOADERS[route];
  const slug = DOCUMENT_SLUGS.find((entry) => `/${entry}` === route);
  if (slug) return documentLoader(slug);
  const article = [...articles("blog"), ...articles("case-study")].find((entry) => articlePath(entry) === route);
  return article ? articleLoader(article.kind, article.slug) : undefined;
}

export const sitePages = createSitePages({
    error: SiteErrorPage,
    pages: pageLoader,
    wrap: (page, route) => <HollowPalette tones={heroTone(route)}>{page}</HollowPalette>,
});
