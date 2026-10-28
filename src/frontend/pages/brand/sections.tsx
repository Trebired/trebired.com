import { createTranslator } from "@trebired/i18n";
import { BrandCanvas, Icon, TextLink, Title } from "@trebired/frontend/react";
import type { CSSProperties, ReactNode } from "react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import { SiteMark } from "#52qoy6lcwhi7";
import { currentSite } from "./../../shared/site";
import type { SiteDefinition } from "./../../shared/network/constants";
import { useLang } from "#32f7ohjh2cr2";
import { RisoArt } from "./../../components/riso/art";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowText } from "@trebired/frontend/hollow";
import { markSwatches } from "./content";
import cs from "./i18n/cs";
import en from "./i18n/en";

type SectionProps = { translator: I18nTranslator };

type MarkStyle = CSSProperties & { "--tbf-surf-logo-root-height": string; "--tbf-surf-logo-root-max": string };

const CLEAR_SPACE = "1.5rem";
const MIN_HEIGHT = "1.25rem";
const IDENTITY = [["body1", "body2"], ["body3", "body4"]];
const FACTS = ["usage", "weight", "mark"];

function markStyle(site: SiteDefinition, height?: string): MarkStyle {
  return { "--tbf-surf-logo-root-height": height || site.markFooterHeight, "--tbf-surf-logo-root-max": "100%" };
}

export function BrandIdentity() {
  const translator = createTranslator({ cs, en }, useLang());
  return (
    <SectionBand archetype="statement" id="identity" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    {translator("identity.titleOpen")}
    {" "}
    <HollowText>{translator("identity.titleClosed")}</HollowText>
    </Title>
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    {IDENTITY.map((column) => (
          <div className="tbf-column tbf-gap-md" key={column[0]}>
          {column.map((key) => <p key={key}>{translator(`identity.${key}`)}</p>)}
          </div>
    ))}
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <TextLink softRedirect className="tbf-inline-row tbf-gap-xs tbf-width-fit" href="/trademark">
    {translator("identity.more")}
    <Icon spec="remixicon:arrow-right-line" />
    </TextLink>
    </div>
    </SectionBand>
  );
}

function Half({ kind, translator }: { kind: "ink" | "reversed"; translator: I18nTranslator }) {
  const site = currentSite();
  const swatch = markSwatches.find((entry) => entry.key === kind);
  return (
    <div className={`tbfm-brandkit__half tbfm-brandkit__${kind === "ink" ? "paper" : "ink"}`} data-tbf-tone={kind === "ink" ? "light" : "dark"}>
    <div className="tbfm-brandkit__stage tbf-column tbf-gap-lg">
    <SiteMark className="tbf-logo" kind="full" site={site} style={markStyle(site, "clamp(2.4rem, 5vw, 3.6rem)")} />
    <SiteMark className="tbf-logo" kind="full-tm" site={site} style={markStyle(site, "1.6rem")} />
    </div>
    <div className="tbf-column tbf-gap-xs">
    <Title className="tbf-text-xl2" level={3}>{translator(`swatches.${kind}.label`)}</Title>
    <h4 className="tbf-text-xs tbf-text-muted">{`${translator(`swatches.${kind}.note`)} · ${swatch?.value || ""}`}</h4>
    </div>
    </div>
  );
}

export function BrandMarks({ translator }: SectionProps) {
  return (
    <SectionBand archetype="statement" id="marks" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("marks.title")}</Title>
    <p>{translator("marks.lead")}</p>
    <div className="tbfm-brandkit tbfm-brandkit__split">
    <Half kind="ink" translator={translator} />
    <Half kind="reversed" translator={translator} />
    </div>
    <p>{translator("colour.lead")}</p>
    </SectionBand>
  );
}

function typefaceName(site: SiteDefinition): string {
  const [first = ""] = site.titleFontFamily.split(",");
  return first.trim().replace(/^["']|["']$/gu, "");
}

export function BrandTypeface() {
  const site = currentSite();
  const translator = createTranslator({ cs, en }, useLang());
  const family = typefaceName(site);
  const value = { mark: translator("typeface.markNote"), usage: translator("typeface.usage"), weight: `${family} ${site.titleWeight}` };
  return (
    <SectionBand archetype="statement" id="typeface" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("typeface.title")}</Title>
    <p>{translator("typeface.lead", { family })}</p>
    <p className="tbfm-specimen">{family}</p>
    <p className="tbfm-specimen__line">{translator("typeface.specimen")}</p>
    <ul className="tbf-grid tbf-cols-3 tbf-stack-mobile tbf-gap-xl tbf-list-plain">
    {FACTS.map((key) => (
          <li className="tbf-column tbf-gap-xs" key={key}>
          <h3 className="tbf-text-xs tbf-text-muted">{translator(`typeface.${key}Label`)}</h3>
          <p>{value[key as keyof typeof value]}</p>
          </li>
    ))}
    </ul>
    </SectionBand>
  );
}

const MISUSE: [key: string, style: CSSProperties][] = [
  ["item1", { transform: "rotate(-10deg) scaleX(1.35)" }],
  ["item2", { filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(330deg) brightness(95%)" }],
  ["item3", {}],
  ["item4", {}],
  [
    "item5",
    { border: "2px solid currentColor", borderRadius: "0.5rem", filter: "drop-shadow(0 6px 4px rgb(0 0 0 / 0.45))", padding: "0.75rem 1rem" }
  ],
];

function Misuse({ id, style }: { id: string; style: CSSProperties }) {
  const site = currentSite();
  let mark: ReactNode = <span style={{ display: "inline-block", ...style }}><SiteMark className="tbf-logo" kind="full" site={site} style={markStyle(
      site,
      "1.5rem"
  )} /></span>;
  if (id === "item4") mark = <span className="tbf-text-xl2 tbf-font-bold">{site.name}</span>;
  return (
    <div className="tbfm-brandkit__demo" data-tbf-tone="light">
    {id === "item3" ? (
        <RisoArt as="div" className="tbfm-riso__plate" hidden kind="fill" recipe="dots" tones={heroTone("/brand")} />
      ) : null}
    <span style={{ position: "relative" }}>{mark}</span>
    </div>
  );
}

export function BrandRules({ translator }: SectionProps) {
  return (
    <SectionBand archetype="statement" id="rules" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("rules.title")}</Title>
    <ul className="tbfm-brandkit__misuse tbf-list-plain">
    {MISUSE.map(([key, style]) => (
          <li className="tbf-column tbf-gap-sm" key={key}>
          <Misuse id={key} style={style} />
          <p><Icon spec="remixicon:close-line" />{" "}{translator(`rules.${key}`)}</p>
          </li>
    ))}
    </ul>
    </SectionBand>
  );
}

export function BrandSpace({ translator }: SectionProps) {
  const site = currentSite();
  return (
    <SectionBand archetype="statement" id="space" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("space.title")}</Title>
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    <div className="tbf-column tbf-gap-sm">
    <Title className="tbf-text-xl2" level={3}>{translator("space.clearTitle")}</Title>
    <p>{translator("space.clearText")}</p>
    <BrandCanvas clearSpace={CLEAR_SPACE} spec={`clear ${CLEAR_SPACE}`}>
    <SiteMark className="tbf-logo" site={site} style={markStyle(site)} />
    </BrandCanvas>
    </div>
    <div className="tbf-column tbf-gap-sm">
    <Title className="tbf-text-xl2" level={3}>{translator("space.minTitle")}</Title>
    <p>{translator("space.minText")}</p>
    <BrandCanvas guides={false} height="8rem" spec={`min ${MIN_HEIGHT}`}>
    <SiteMark className="tbf-logo" site={site} style={markStyle(site, MIN_HEIGHT)} />
    </BrandCanvas>
    </div>
    </div>
    </SectionBand>
  );
}
