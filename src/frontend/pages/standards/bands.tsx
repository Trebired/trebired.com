import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { link } from "./../../shared/product";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import { RisoArt } from "./../../components/riso/art";
import { Fragment } from "react";
import type { CSSProperties } from "react";
import { HollowText } from "@trebired/frontend/hollow";
import { StandardFigure } from "./figure";

type BandProps = { translator: I18nTranslator };

const RELATIVE = "../../components/chrome/hero/tones";

const REPOS = { configs: `${link.github}/configs`, discipline: `${link.github}/code-discipline` };

const STATES: [key: string, count: string, tones: [string, string]][] = [
  ["clean", "0", ["#bfd9b8", "#a3d6f4"]],
  ["broken", "1", ["#f4a99a", "#f2aed6"]],
];

export function OrgBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    <HollowText>{translator("org.title.hollow")}</HollowText>
    {" "}
    {translator("org.title.rest")}
    </Title>
    <ProseParagraph text={translator("org.text", REPOS)} />
    </SectionBand>
  );
}

export function GateBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("gate.title")}</Title>
    <p>{translator("gate.text")}</p>
    <ul className="tbf-grid tbf-cols-2 tbf-gap-xl tbf-list-plain">
    {STATES.map(([key, count, tones]) => (
          <li className="tbf-column tbf-gap-sm" key={key}>
          <RisoArt as="h3" className="tbfm-standard__count tbf-lh-none" dark kind="text" recipe="lines" tones={tones}>{count}</RisoArt>
          <h4 className="tbf-text-xs tbf-text-muted">{translator(`gate.${key}.label`)}</h4>
          <p>{translator(`gate.${key}.text`)}</p>
          </li>
    ))}
    </ul>
    </SectionBand>
  );
}

const ALIAS = "#0s6jb8phbwma";

const ALIAS_SIZE = { fontSize: "min(9rem, calc((100vw - 4rem) / 8))" } as CSSProperties;

const FACTS = ["map", "relative", "dead"];

export function ImportsBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("imports.title")}</Title>
    <ProseParagraph text={translator("imports.text", REPOS)} />
    <div className="tbf-column tbf-gap-md">
    <div className="tbf-column tbf-gap-xs">
    <h4 className="tbf-text-xs tbf-text-muted">{translator("imports.before")}</h4>
    <p className="tbf-text-xl2 tbf-text-muted">
    {RELATIVE.split("/").map((part, index) => (
          <Fragment key={index}>
          {index ? "/" : null}
          {index ? <wbr /> : null}
          {part}
          </Fragment>
    ))}
    </p>
    </div>
    <div className="tbfm-alias">
    <h4 className="tbf-text-xs tbf-text-muted">{translator("imports.after")}</h4>
    <RisoArt as="div" className="tbfm-alias__print tbf-font-bold tbf-lh-sm" kind="text" recipe="lines" style={ALIAS_SIZE} tones={[
        "#c4c4c4",
        "#a3d6f4"
    ]}>
    {ALIAS}
    </RisoArt>
    <span className="tbfm-alias__plain tbf-text-xl3 tbf-font-bold">{ALIAS}</span>
    </div>
    </div>
    <ul className="tbf-grid tbf-cols-3 tbf-stack-mobile tbf-gap-xl tbf-list-plain">
    {FACTS.map((key) => (
          <li className="tbf-column tbf-gap-sm" key={key}>
          <Title className="tbf-text-xl2" level={3}>{translator(`imports.facts.${key}.title`)}</Title>
          <p>{translator(`imports.facts.${key}.text`)}</p>
          </li>
    ))}
    </ul>
    </SectionBand>
  );
}

export function ScaleBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" tone="muted" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("scale.title")}</Title>
    <p>{translator("scale.text")}</p>
    <StandardFigure translator={translator} />
    </SectionBand>
  );
}
