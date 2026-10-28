import { TextLink, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import type { PageSection } from "./../../shared/page/sections";
import { RisoArt } from "./../../components/riso/art";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import { Building } from "./building";
import { GAVEL } from "./gavel_mark";

type BandProps = { section: PageSection; translator: I18nTranslator };

const PILLARS: [key: string, numeral: string][] = [["open", "I"], ["licence", "II"], ["tag", "III"], ["gate", "IV"], ["name", "V"]];

const [VIOLET, PEACH] = heroTone("/governance");

function deepen(hex: string, factor: number): string {
  const value = Number.parseInt(hex.replace("#", ""), 16);
  const channel = (shift: number) => Math.max(0, Math.round(255 - (255 - ((value >> shift) & 255)) * factor)).toString(16).padStart(2, "0");
  return `!#${channel(16)}${channel(8)}${channel(0)}`;
}

function Held({ id, translator }: { id: string; translator: I18nTranslator }) {
  const value = translator(`poster.fixed.${id}.by`);
  if (id !== "name") return <p className="tbf-text-sm tbf-text-muted">{value}</p>;
  return <TextLink softRedirect className="tbf-text-sm" href="/trademark">{value}</TextLink>;
}

export function BuildingBand({ section, translator }: BandProps) {
  const copy = (key: string) => translator(`poster.fixed.${key}`);
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>{`${translator("titles.fixed.first")} ${translator("titles.fixed.second")}`}</Title>
    <p className="tbfm-civic__lead">{section.body[0]}</p>
    <Building tones={heroTone("/governance").map((tone) => deepen(tone, 1.7)) as [string, string]} />
    <ol className="tbfm-civic__pillars tbf-list-plain">
    {PILLARS.map(([key, numeral]) => (
          <li className="tbfm-civic__pillar" key={key}>
          <span aria-hidden="true" className="tbf-text-xl4 tbf-font-bold tbf-lh-none">{numeral}</span>
          <Title className="tbf-text-xl" level={3}>{copy(`${key}.title`)}</Title>
          <p className="tbf-text-sm">{copy(`${key}.text`)}</p>
          <Held id={key} translator={translator} />
          </li>
    ))}
    </ol>
    </SectionBand>
  );
}

export function RecordBand({ section, translator }: BandProps) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-gavel">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={translator("titles.record")} />
    <div aria-hidden="true" className="tbfm-gavel__art">
    <RisoArt as="div" className="tbfm-gavel__layer" dark hidden kind="svg" mark={GAVEL.block} recipe="slab" tones={[VIOLET, deepen(VIOLET, 1.35)]} />
    <RisoArt as="div" className="tbfm-gavel__layer" dark hidden kind="svg" mark={GAVEL.wood} recipe="slab" tones={[PEACH, deepen(PEACH, 1.3)]} />
    <RisoArt as="div" className="tbfm-gavel__layer" dark hidden kind="svg" mark={GAVEL.light} recipe="grain" tones={[PEACH, PEACH]} />
    </div>
    <div className="tbfm-gavel__text">
    {section.body.map((text) => (
          <p key={text}>{text}</p>
    ))}
    </div>
    </div>
    </SectionBand>
  );
}
