import { readProductIdentity } from "@trebired/utils";

import type { SiteDefinition } from "./../../frontend/shared/network/constants";

const product = readProductIdentity();

function createSiteDefines(site: SiteDefinition, origin: string, development: boolean): Record<string, string> {
  return {
    BUILD_LOCAL_SITES: JSON.stringify(development),
    BUILD_SITE_ORIGIN: JSON.stringify(origin),
    PRODUCT_DISPLAY_NAME: JSON.stringify(product.displayName),
    PRODUCT_DOMAIN: JSON.stringify(product.domain),
    PRODUCT_WEBSITE: JSON.stringify(product.website),
  };
}

export { createSiteDefines };
