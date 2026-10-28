import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import { ArrowButton } from "./../../components/primitives/arrow_button";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { INK } from "./palette";

type BandProps = { translator: I18nTranslator };

const EOL = "2025-10-14";

export function BudgetBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`budget.${key}`);
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <p>{copy("why")}</p>
    <div className="tbfm-budget">
    <RisoArt as="strong" className="tbfm-budget__value" dark kind="text" recipe="lines" tones={[INK.stone, INK.butter]}>{copy("value")}</RisoArt>
    <div className="tbfm-budget__side tbf-column tbf-gap-sm">
    <span className="tbfm-budget__unit">{copy("unit")}</span>
    <p>{copy("note")}</p>
    </div>
    </div>
    <p>{copy("text")}</p>
    <div className="tbf-inline-row tbf-hor-right">
    <ArrowButton href="/standards" label={copy("action")} />
    </div>
    </SectionBand>
  );
}

export function SunsetBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`sunset.${key}`);
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title>
    <div className="tbfm-sunset">
    <h5>{copy("caption")}</h5>
    <RisoArt
    as="strong"
    className="tbfm-sunset__date"
    kind="text"
    recipe="grain"
    style={{ "--chars": String(EOL.length) } as CSSProperties}
    tones={[INK.peach, INK.stone]}
    >
    {EOL}
    </RisoArt>
    </div>
    <p>{copy("text")}</p>
    </SectionBand>
  );
}
