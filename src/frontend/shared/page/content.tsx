import { canonicalPath, routeExists } from "./../utils/routes";
import { ERROR_STATUSES, errorRoutePath } from "@trebired/frontend";
import { RouteProvider } from "./route";
import { SiteErrorPage } from "./../../pages/error";
import { loadedPage, preloadPage } from "./pages";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowPalette } from "@trebired/frontend/hollow";

function routeOf(path: string) {
  const route = canonicalPath(path);
  const errorStatus = ERROR_STATUSES.find((status) => errorRoutePath(status) === route);
  return { errorStatus, exists: routeExists(route), route };
}

export async function preparePageContent(path: string): Promise<void> {
  const { errorStatus, exists, route } = routeOf(path);
  if (!errorStatus && exists) await preloadPage(route);
}

export function PageContent({ path }: { path: string }) {
  const { errorStatus, exists, route } = routeOf(path);
  if (errorStatus) return <SiteErrorPage status={errorStatus} />;
  if (!exists) return <SiteErrorPage status={404} />;

  const Page = loadedPage(route);
  if (!Page) return <SiteErrorPage status={404} />;
  return <RouteProvider path={route}><HollowPalette tones={heroTone(route)}><Page /></HollowPalette></RouteProvider>;
}
