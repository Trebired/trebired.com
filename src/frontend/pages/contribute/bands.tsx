import { button as PrimitiveButton, Icon, Title as Heading } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import { sourceRepos } from "./../../components/domain/source_repos";
import { RisoArt } from "./../../components/riso/art";
import { heroTone } from "./../../components/chrome/hero/tones";
import { HollowText } from "@trebired/frontend/hollow";
import { link } from "./../../shared/product";
import type { PageSection } from "./../../shared/page/sections";
import type { CSSProperties } from "react";
import type { Field } from "./../../components/riso/recipes";

type BandProps = { section: PageSection; translator: I18nTranslator };

const LINES: [key: string, field: Field | undefined, tones: [string, string]][] = [
  ["one", undefined, ["#a7e0c2", "#f3bda8"]],
  ["behaviour", "circle", ["#f3bda8", "#c4c4c4"]],
  ["gate", "square", ["#c4c4c4", "#9cc4f5"]],
  ["dependency", "cross", ["#9cc4f5", "#a7e0c2"]],
];

function fit(text: string): CSSProperties {
  return { "--chars": String(text.length) } as CSSProperties;
}

export function Title({ dark, id, translator }: { dark?: boolean; id: string; translator: I18nTranslator }) {
  return (
    <Heading className="tbf-text-xl6" level={2}>
    {translator(`titles.${id}.first`)}
    {" "}
    <HollowText dark={dark}>{translator(`titles.${id}.second`)}</HollowText>
    </Heading>
  );
}

export function OpenBand({ section, translator }: BandProps) {
  const tones = heroTone("/contribute");
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <Title id="open" translator={translator} />
    <div aria-hidden="true" className="tbfm-url">
    <RisoArt as="span" className="tbfm-url__host" kind="text" recipe="grain" tones={tones}>github.com/</RisoArt>
    <RisoArt as="span" className="tbfm-url__name" kind="text" recipe="lines" tones={tones}>Trebired</RisoArt>
    </div>
    <div className="tbfm-url__copy tbf-column tbf-gap-md">
    <ProseParagraph text={section.body[0] || ""} />
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton href={link.github} rel="noreferrer" target="_blank" variant="primary">
    {translator("poster.open", { count: String(sourceRepos().length) })}
    <Icon spec="remixicon:external-link-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}

export function RulesBand({ section, translator }: BandProps) {
  const copy = (key: string) => translator(`poster.rules.${key}`);
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title dark id="rules" translator={translator} />
    <ol className="tbfm-bill tbf-list-plain">
    {LINES.map(([key, field, tones]) => (
          <li className="tbfm-bill__rule" key={key}>
          <Heading className="tbfm-bill__plain tbf-text-xl3" level={3}>{copy(`${key}.title`)}</Heading>
          <RisoArt
          as="span"
          className="tbfm-bill__line"
          dark
          field={field}
          hidden
          kind="text"
          recipe="type"
          style={fit(copy(`${key}.title`))}
          tones={tones}
          >
          {copy(`${key}.title`)}
          </RisoArt>
          <p className="tbfm-bill__note">{copy(`${key}.text`)}</p>
          </li>
    ))}
    </ol>
    </SectionBand>
  );
}
