import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { ComparisonAmount, ComparisonSection, type ComparisonColumn } from "./../sections";
import type { I18nTranslator } from "@trebired/i18n";
import { useLang } from "#32f7ohjh2cr2";
import { productVars } from "#y8khalhdifmq";
import { priceVars } from "./../../shared/money";
import { createSectionTranslator } from "./translator";
import { HollowText } from "@trebired/frontend/hollow";

type Prices = Record<string, string>;

const POINTS = ["item1", "item2", "item3"];

function competitionColumn(translator: I18nTranslator, prices: Prices, points: string[]): ComparisonColumn {
  return {
    key: "competition",
    points,
    title: translator("pricing.competitionLabel"),
    value: (
      <s>
      <ComparisonAmount tone="high">{prices.market}{translator("pricing.competitionSuffix")}</ComparisonAmount>
      </s>
    ),
  };
}

function productColumn(translator: I18nTranslator, prices: Prices, points: string[]): ComparisonColumn {
  return {
    footer: (
      <PrimitiveButton softRedirect className="tbf-right" href="/contact" variant="primary">
      {translator("pricing.cta")}
      <Icon spec="remixicon:arrow-right-line" />
      </PrimitiveButton>
    ),
    key: "product",
    lead: translator("pricing.bodyMuted"),
    points,
    title: translator("pricing.productLabel", productVars),
    value: (
      <>
      {translator("pricing.productPriceLabel")}{" "}
      <ComparisonAmount tone="low">{prices.website}</ComparisonAmount>
      </>
    ),
  };
}

export function PricingSection() {
  const lang = useLang();
  const translator = createSectionTranslator(lang);
  const competitionPoints = POINTS.map((key) => translator(`competition.${key}`));
  const productPoints = POINTS.map((key) => translator(`productPoints.${key}`));
  const prices = priceVars(lang);

  return (
    <ComparisonSection
    id="cena"
    tone="inverse"
    weight="minor"
    lead={translator("pricing.body", prices)}
    title={
      <>
      {translator("pricingTitle.first")} <HollowText>{translator("pricingTitle.second")}</HollowText>
      </>
    }
    columns={[competitionColumn(translator, prices, competitionPoints), productColumn(translator, prices, productPoints)]}
    />
  );
}
