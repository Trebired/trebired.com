import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { INK, SOFT } from "./palette";
import { HollowHeading } from "./../../components/primitives/hollow_title";

const PHOTO_SIZE: [number, number] = [700, 700];

export function CloseBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`close.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-close">
    <div aria-hidden="true" className="tbfm-close__slot">
    <RisoArt as="div" className="tbfm-close__art" hidden kind="photo" recipe="bar" size={PHOTO_SIZE} tones={[INK.stone, SOFT.lead]}>
    <img alt="" src="/trebired/clock.png" />
    </RisoArt>
    </div>
    <div className="tbfm-close__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("text")}</p>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/contact" variant="primary">
    {copy("contact")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    </div>
    </SectionBand>
  );
}
