import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import { ArrowButton } from "./../../components/primitives/arrow_button";
import { SectionBand } from "./../../components/sections";
import { sourceRepos } from "./../../components/domain/source_repos";
import type { PageSection } from "./../../shared/page/sections";
import { RisoArt } from "./../../components/riso/art";
import { deepen } from "./../../components/riso/recipes";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import { SCALES } from "./scales_mark";

type BandProps = { section: PageSection; translator: I18nTranslator };

const [VIOLET, PEACH] = heroTone("/governance");

const BODY: [string, string] = [deepen(VIOLET, 1.7), deepen(PEACH, 1.7)];

const SHADE: [string, string] = [deepen(VIOLET, 1.9), deepen(VIOLET, 2.05)];

const CHAIN: [string, string] = [deepen(VIOLET, 1.5), deepen(PEACH, 1.5)];

const ZERO = { fontSize: "clamp(16rem, 48vw, 44rem)" } as CSSProperties;

export function RoutesBand({ section, translator }: BandProps) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-scales">
    <HollowHeading className="tbf-text-xl6" level={2} text={translator("titles.routes")} />
    <div aria-hidden="true" className="tbfm-scales__art">
    <RisoArt as="div" className="tbfm-scales__layer" hidden kind="svg" mark={SCALES.chains} recipe="slab" tones={CHAIN} />
    <RisoArt as="div" className="tbfm-scales__layer" hidden kind="svg" mark={SCALES.body} recipe="lines" tones={BODY} />
    <RisoArt as="div" className="tbfm-scales__layer" hidden kind="svg" mark={SCALES.shade} recipe="slab" tones={SHADE} />
    </div>
    <div className="tbfm-scales__text tbf-column tbf-gap-md">
    {section.body.map((text) => (
          <p key={text}>{text}</p>
    ))}
    </div>
    </div>
    </SectionBand>
  );
}

export function ContinuityBand({ section, translator }: BandProps) {
  const repos = sourceRepos();
  const counts: [string, number][] = [
    ["repos", repos.length],
    ["packages", repos.filter((repo) => repo.npm).length],
  ];
  return (
    <SectionBand archetype="statement" tone="muted" weight="major">
    <Title className="tbf-text-xl6" level={2}>{`${translator("titles.continuity.first")} ${translator("titles.continuity.second")}`}</Title>
    <div className="tbfm-charter">
    <div className="tbf-column tbf-gap-xs">
    <RisoArt as="h3" className="tbf-lh-none" kind="text" recipe="lines" style={ZERO} tones={heroTone("/governance")}>0</RisoArt>
    <Title className="tbf-text-xl4" level={3}>{translator("poster.counts.permissions")}</Title>
    </div>
    <div className="tbf-column tbf-gap-lg">
    <ul className="tbf-grid tbf-cols-2 tbf-gap-lg tbf-list-plain">
    {counts.map(([key, value]) => (
          <li className="tbf-column tbf-gap-xs" key={key}>
          <strong className="tbf-text-xl6 tbf-lh-xs">{String(value)}</strong>
          <h5>{translator(`poster.counts.${key}`)}</h5>
          </li>
    ))}
    </ul>
    <div className="tbf-column tbf-gap-md">
    {section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    <div className="tbf-inline-row tbf-hor-right">
    <ArrowButton href="/licenses" label={translator("poster.counts.action")} />
    </div>
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
