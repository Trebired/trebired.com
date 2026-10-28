import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { HollowText } from "@trebired/frontend/hollow";
import type { Lang } from "#0ft8fsqbbufa";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import type { Form } from "./../../components/riso/shapes";
import { priceCap, priceFloor } from "./../../shared/money";
import { serviceOffers, type ServiceOffer } from "./offers";

type Look = { form: Form; inks: [string, string]; recipe: Recipe };

const LOOKS: Record<string, Look> = {
  application: { form: "bars", inks: ["#f3bda8", "#c4c4c4"], recipe: "weave" },
  identity: { form: "half", inks: ["#f2aed6", "#f3bda8"], recipe: "squares" },
  other: { form: "chip", inks: ["#ffd98a", "#a6c6f3"], recipe: "cross" },
  rebuild: { form: "ring", inks: ["#aee5bd", "#ad9ff0"], recipe: "lines" },
  website: { form: "sun", inks: ["#a6c6f3", "#c4c4c4"], recipe: "dots" },
};

type OfferProps = { index: number; lang: Lang; offer: ServiceOffer; translator: I18nTranslator };

function boundOf(offer: ServiceOffer, translator: I18nTranslator): string | null {
  if (offer.bound === "quote") return null;
  return translator(offer.bound === "max" ? "boundMax" : "boundFrom");
}

function amountOf({ lang, offer, translator }: Omit<OfferProps, "index">): string {
  if (offer.bound === "quote") return translator("priceQuote");
  return offer.bound === "max" ? priceCap(offer.amount, lang) : priceFloor(offer.amount, lang);
}

function OfferPrice(props: Omit<OfferProps, "index">) {
  const bound = boundOf(props.offer, props.translator);
  const amount = amountOf(props);
  return (
    <div className="tbfm-offers__price">
    {bound ? <h4 className="tbf-text-sm tbf-text-muted">{bound}</h4> : null}
    {props.offer.bound === "quote" ? (
        <Title className="tbf-text-xl5 tbf-lh-xs" level={3}>{amount}</Title>
      ) : (
        <HollowText as="h3" className="tbf-text-xl5 tbf-lh-xs" inks={(LOOKS[props.offer.key] as Look).inks}>
        {amount}
        </HollowText>
    )}
    </div>
  );
}

function Offer({ index, lang, offer, translator }: OfferProps) {
  const look = LOOKS[offer.key] as Look;
  return (
    <li className="tbfm-offers__item">
    <RisoArt as="div" className="tbfm-offers__art" form={look.form} hidden kind="shape" recipe={look.recipe} tones={look.inks} />
    <div className="tbf-column tbf-gap-sm">
    <span aria-hidden="true" className="tbf-text-outline tbf-tabular tbf-text-xl4 tbf-lh-xs">{String(index + 1).padStart(2, "0")}</span>
    <Title level={3}>{translator(`offers.${offer.key}.title`)}</Title>
    <p>{translator(`offers.${offer.key}.text`)}</p>
    </div>
    <OfferPrice lang={lang} offer={offer} translator={translator} />
    </li>
  );
}

export function OfferBoard({ lang, translator }: { lang: Lang; translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" id="offers" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("offersTitle")}</Title>
    <p>{translator("offersLead")}</p>
    <ul className="tbfm-offers">
    {serviceOffers.map((offer, index) => (
          <Offer index={index} key={offer.key} lang={lang} offer={offer} translator={translator} />
    ))}
    </ul>
    </SectionBand>
  );
}
