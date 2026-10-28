import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { INK, SOFT } from "./palette";
import { LOGO, VIEW } from "./logo_mark";
import { HollowHeading } from "./../../components/primitives/hollow_title";

const ART = { "--who-ratio": VIEW[0] / VIEW[1], aspectRatio: `${VIEW[0]} / ${VIEW[1]}` } as CSSProperties;

export function WhoBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`who.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-who">
    <div className="tbf-column tbf-gap-md">
    <div className="tbfm-who__stage">
    <div aria-hidden="true" className="tbfm-who__backdrop">
    <RisoArt as="div" className="tbfm-who__art" hidden kind="svg" mark={LOGO} recipe="lines" style={ART} tones={[SOFT.lead, INK.stone]} />
    </div>
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <div className="tbfm-who__text tbf-column tbf-gap-md">
    <p>{copy("what")}</p>
    <p>{copy("why")}</p>
    </div>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/about" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
