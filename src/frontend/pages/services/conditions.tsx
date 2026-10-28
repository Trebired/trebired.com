import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { siLinux, siOpensourceinitiative } from "simple-icons";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import type { Recipe } from "./../../components/riso/recipes";
import { HollowText } from "@trebired/frontend/hollow";

type TermsProps = { translator: I18nTranslator };

type Mark = { path: string };

function PrintedMark({ icon, recipe, tones }: { icon: Mark; recipe: Recipe; tones: [string, string] }) {
  return (
    <RisoArt
    as="div"
    className="tbfm-terms__mark"
    dark
    hidden
    kind="svg"
    mark={{ d: icon.path, viewBox: [24, 24] }}
    recipe={recipe}
    tones={tones}
    />
  );
}

function OpenPanel({ translator }: TermsProps) {
  return (
    <article className="tbfm-terms__panel">
    <PrintedMark icon={siOpensourceinitiative} recipe="squares" tones={["#a7e0c2", "#f3bda8"]} />
    <Title level={3}>{translator("openConditionTitle")}</Title>
    <p className="tbfm-terms__body">{translator("openCondition")}</p>
    </article>
  );
}

function PlatformPanel({ translator }: TermsProps) {
  return (
    <article className="tbfm-terms__panel">
    <PrintedMark icon={siLinux} recipe="weave" tones={["#9cc4f5", "#ad9ff0"]} />
    <Title level={3}>{translator("platformTitle")}</Title>
    <p className="tbfm-terms__body">{translator("platform")}</p>
    </article>
  );
}

export function ConditionsBand({ translator }: TermsProps) {
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    <HollowText dark>{translator("terms.first")}</HollowText>
    {" "}
    {translator("terms.second")}
    </Title>
    <div className="tbfm-terms">
    <OpenPanel translator={translator} />
    <PlatformPanel translator={translator} />
    </div>
    </SectionBand>
  );
}
