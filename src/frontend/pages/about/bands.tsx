import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import type { Lang } from "#0ft8fsqbbufa";
import { CallSection, SectionBand } from "./../../components/sections";
import { withPrices } from "./../../shared/money";
import { RisoArt } from "./../../components/riso/art";
import { heroTone } from "./../../components/chrome/hero/tones";
import type { CSSProperties } from "react";
import { ProseParagraph } from "./../../components/primitives/prose";
import type { PageSection } from "./../../shared/page/sections";
import { HollowText } from "@trebired/frontend/hollow";
import { AboutArt } from "./marks";

const HUNDRED = { fontSize: "clamp(5rem, 30vw, 26rem)" } as CSSProperties;

const BACKDROP = {
  aspectRatio: "1",
  inlineSize: "clamp(18rem, 52vw, 46rem)",
  insetBlockStart: "-14%",
  insetInlineEnd: "-14%",
  opacity: 0.16,
  pointerEvents: "none",
  position: "absolute",
  zIndex: -1,
} as CSSProperties;

const WALL = {
  "--tbf-typography-outline-color": "var(--tbf-text)",
  "--tbf-typography-outline-width": "2px",
  alignContent: "space-around",
  fontFamily: "var(--font-title)",
  fontSize: "clamp(1.6rem, 3.6vw, 3.2rem)",
  fontWeight: 900,
  inset: 0,
  lineHeight: 1,
  maskComposite: "intersect",
  maskImage: "radial-gradient(ellipse 36% 46% at 50% 45%, transparent 55%, black 100%), linear-gradient(to bottom, black 50%, transparent 78%)",
  opacity: 0.06,
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  textTransform: "uppercase",
  userSelect: "none",
  zIndex: -1,
} as CSSProperties;

const WORDS = ["open", "faith", "public", "lock", "written", "agpl", "mit", "linux", "tracking", "keep", "trust", "honest"];

type ChapterProps = { lang: Lang; section: PageSection; translator: I18nTranslator };

function Body({ lang, section }: Omit<ChapterProps, "translator">) {
  return (
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    {section.body.map((paragraph, key) => <p key={key}>{withPrices(paragraph, lang)}</p>)}
    </div>
  );
}

export function AgainstBand({ lang, section }: ChapterProps) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <AboutArt mark="against" style={BACKDROP} />
    <Title className="tbf-text-xl6" level={2}>{section.heading}</Title>
    <Body lang={lang} section={section} />
    </SectionBand>
  );
}

export function PublishBand({ lang, section, translator }: ChapterProps) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <ul aria-hidden="true" className="tbf-inline-row tbf-wrap tbf-hor-center tbf-gap-sm tbf-list-plain" style={WALL}>
    {[0, 1, 2, 3, 4, 5].flatMap((round) => WORDS.map((key, index) => (
            <li className={index % 3 === 2 ? "tbf-text-outline" : undefined} key={`${round}-${key}`}>{translator(`wall.${key}`)}</li>
    )))}
    </ul>
    <Title className="tbf-text-xl6" level={2}>
    {translator("publishTitle.first")}
    {" "}
    <HollowText dark>{translator("publishTitle.second")}</HollowText>
    </Title>
    <div className="tbf-column tbf-align-center tbf-gap-xl">
    <AboutArt dark className="tbfm-stepband__art" mark="publish" />
    <p className="tbf-text-xl3 tbf-text-center tbf-width-xl3">{translator("publishQuote")}</p>
    <div className="tbf-text-sm tbf-text-muted tbf-text-center tbf-width-xl">
    <ProseParagraph text={translator("osi.text")} />
    </div>
    </div>
    <Body lang={lang} section={section} />
    </SectionBand>
  );
}

export function MoneyBand({ lang, section, translator }: ChapterProps) {
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>{section.heading}</Title>
    <div className="tbf-column tbf-gap-xs">
    <RisoArt as="div" className="tbf-lh-none tbf-font-bold" kind="text" recipe="lines" style={HUNDRED} tones={heroTone("/about")}>100%</RisoArt>
    <h5>{translator("money.label")}</h5>
    </div>
    <Body lang={lang} section={section} />
    </SectionBand>
  );
}

export function MoreBand({ translator }: { translator: I18nTranslator }) {
  return (
    <CallSection
    actionHref="/philosophy"
    actionLabel={translator("more.action")}
    body={translator("more.text")}
    title={translator("more.title")}
    tone="muted"
    />
  );
}
