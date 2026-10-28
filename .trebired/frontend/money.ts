import { readMoneyRates, type FrontendMoneyConfig } from "@trebired/frontend/config";

export const money: FrontendMoneyConfig = {
  base: "CZK",
  locales: { cs: "CZK", en: "EUR" },
  rates: readMoneyRates(),
  steps: { EUR: 10 },
};
