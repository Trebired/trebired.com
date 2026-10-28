import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { productVars } from "#y8khalhdifmq";
import { RisoArt } from "./../../components/riso/art";
import { heroField, heroTone } from "./../../components/chrome/hero/tones";
import { createSectionTranslator } from "./../../components/domain/translator";
import type { Lang } from "#0ft8fsqbbufa";
import { siteLogoHref } from "./../../shared/brand/logos";
import { HollowText } from "@trebired/frontend/hollow";
import { Fragment } from "react";
import type { CSSProperties } from "react";
import { ems, longestWord, words } from "./../../components/primitives/title_fit";

function Words({ text }: { text: string }) {
  return words(text).map((word, index) => (
      <Fragment key={index}>
      {index ? " " : null}
      <span className="tbfm-headline__word">{word}</span>
      </Fragment>
  ));
}

function Headline({ first, second, third }: { first: string; second: string; third: string }) {
  const fit = { "--headline-word": Math.max(longestWord(first), ems(second), longestWord(third)).toFixed(2) } as CSSProperties;
  return (
    <h1 className="tbfm-headline" style={fit}>
    <span className="tbfm-headline__line">
    <Words text={first} />
    </span>
    {" "}
    <span className="tbfm-headline__line">
    <span className="tbfm-headline__word">
    <HollowText dark>{second}</HollowText>
    </span>
    </span>
    {" "}
    <span className="tbfm-headline__line">
    <Words text={third} />
    </span>
    </h1>
  );
}

export function PosterHero({ lang, translator }: { lang: Lang; translator: I18nTranslator }) {
  const tone = heroTone("/");
  const shared = createSectionTranslator(lang);

  return (
    <section
    className="tbfm-hero tbfm-hero--home tbfm-prints"
    data-hero="home"
    data-tbf-dark="chrome"
    >
    <RisoArt as="div" className="tbfm-hero__poster" dark field={heroField("/")} hidden kind="poster" recipe="home" tones={tone}>
    <img alt="" src={siteLogoHref("main", "minimal", "light")} />
    </RisoArt>
    <RisoArt
    as="div"
    className="tbfm-hero__poster tbfm-hero__tall"
    dark
    field={heroField("/")}
    hidden
    kind="poster"
    recipe="home-tall"
    tall
    tones={tone}
    >
    <img alt="" src={siteLogoHref("main", "minimal", "light")} />
    </RisoArt>
    <div className="tbf-column tbf-gap-lg" data-hero-inner="">
    <Headline first={translator("hero.first")} second={translator("hero.second")} third={translator("hero.third")} />
    <div className="tbfm-foot">
    <p>{shared("hero.summary", productVars)}</p>
    <PrimitiveButton softRedirect href="/projects" variant="primary">
    {translator("hero.action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    </section>
  );
}
