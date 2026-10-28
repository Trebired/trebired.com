import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import type { CSSProperties } from "react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { INK } from "./palette";
import { HollowHeading } from "./../../components/primitives/hollow_title";

const PRINT_SIZE: [number, number] = [368, 468];

const ART = { aspectRatio: `${PRINT_SIZE[0]} / ${PRINT_SIZE[1]}` } as CSSProperties;

export function TrackingBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`tracking.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-whorl">
    <div aria-hidden="true" className="tbfm-whorl__slot">
    <RisoArt
    as="div"
    className="tbfm-whorl__art"
    dark
    hidden
    kind="photo"
    recipe="bar"
    size={PRINT_SIZE}
    style={ART}
    tones={[INK.lead, INK.sky]}
    >
    <img alt="" src="/trebired/fingerprint.png" />
    </RisoArt>
    </div>
    <div className="tbfm-whorl__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <p>{copy("lead")}</p>
    <p>{copy("text")}</p>
    </div>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/freedom" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
