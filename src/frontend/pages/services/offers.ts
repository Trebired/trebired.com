import { PRICES, priceCap, priceFloor } from "./../../shared/money";

import type { I18nTranslator } from "@trebired/i18n";
import type { Lang } from "#0ft8fsqbbufa";

export type OfferBound = "from" | "max" | "quote";

export type ServiceOffer = { amount: number; bound: OfferBound; key: string };

export const serviceOffers: ServiceOffer[] = [
  { amount: PRICES.website, bound: "max", key: "website" },
  { amount: PRICES.rebuild, bound: "max", key: "rebuild" },
  { amount: PRICES.application, bound: "from", key: "application" },
  { amount: PRICES.identity, bound: "from", key: "identity" },
  { amount: PRICES.market, bound: "quote", key: "other" },
];

export function offerPrice(offer: ServiceOffer, translator: I18nTranslator, lang: Lang): string {
  if (offer.bound === "quote") return translator("priceQuote");
  const price = offer.bound === "max"
  ? priceCap(offer.amount, lang)
  : priceFloor(offer.amount, lang);
  return translator(offer.bound === "max" ? "priceMax" : "priceFrom").replace("{price}", price);
}
