import { formatMoney } from "@trebired/frontend";

import type { Lang } from "./lang/store";

export const PRICES = {
  application: 15000,
  identity: 3000,
  market: 15000,
  rebuild: 4000,
  website: 6000,
};

export function priceCap(amount: number, lang: Lang): string {
  return formatMoney(amount, lang, { round: "down" });
}

export function priceFloor(amount: number, lang: Lang): string {
  return formatMoney(amount, lang, { round: "up" });
}

export function priceVars(lang: Lang): Record<string, string> {
  return {
    application: priceFloor(PRICES.application, lang),
    identity: priceFloor(PRICES.identity, lang),
    market: priceFloor(PRICES.market, lang),
    rebuild: priceCap(PRICES.rebuild, lang),
    website: priceCap(PRICES.website, lang),
  };
}

export function withPrices(text: string, lang: Lang): string {
  const vars = priceVars(lang);
  return text.replace(/\{(\w+)\}/gu, (match, key: string) => vars[key] || match);
}
