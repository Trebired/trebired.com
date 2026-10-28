import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { COMMIT } from "./commit_mark";
import { SOFT } from "./palette";

const TONES: [string, string] = [SOFT.orchid, SOFT.blue];

const PARTS: [part: string, mark: keyof typeof COMMIT][] = [["left", "line"], ["right", "line"], ["ring", "ring"]];

export function ReleaseBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`release.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div aria-hidden="true" className="tbfm-commit">
    {PARTS.map(([part, mark]) => (
          <RisoArt as="div" className={`tbfm-commit__${part}`} hidden key={part} kind="svg" mark={COMMIT[mark]} recipe="slab" tones={TONES} />
    ))}
    </div>
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    <p>{copy("text")}</p>
    <p>{copy("after")}</p>
    </div>
    </SectionBand>
  );
}
