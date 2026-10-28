import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import { contact } from "./../../shared/product";
import { INK, SOFT } from "./palette";
import { SIGN } from "./sign_mark";

type BandProps = { translator: I18nTranslator };

export function ReportBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`report.${key}`, { email: contact.security });
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-guard">
    <div className="tbfm-guard__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("text")}</p>
    <p>{copy("issue")}</p>
    </div>
    <RisoArt as="div" className="tbfm-guard__art" hidden kind="svg" mark={SIGN.shield} recipe="lines" tones={[INK.crimson, SOFT.crimson]} />
    <div className="tbfm-guard__action tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/contact" variant="primary">
    {copy("contact")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    </SectionBand>
  );
}

export function ResponseBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`response.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-timer">
    <RisoArt as="div" className="tbfm-timer__art" dark hidden kind="svg" mark={SIGN.watch} recipe="cells" tones={[INK.crimson, INK.grey]} />
    <div className="tbfm-timer__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <p>{copy("thanks")}</p>
    <p>{copy("text")}</p>
    </div>
    </div>
    </SectionBand>
  );
}

export function TestBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`test.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-halt">
    <div className="tbfm-halt__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("own")}</p>
    <p>{copy("data")}</p>
    <p>{copy("window")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-halt__slot">
    <RisoArt as="div" className="tbfm-halt__art" hidden kind="svg" mark={SIGN.stop} recipe="cells" tones={[INK.crimson, INK.stone]} />
    </div>
    </div>
    </SectionBand>
  );
}

export function ScopeBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`scope.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="muted" weight="major">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <div className="tbfm-bounty">
    <div aria-hidden="true" className="tbfm-bounty__slot">
    <div className="tbfm-bounty__art">
    <RisoArt as="div" className="tbfm-bounty__layer" hidden kind="svg" mark={SIGN.dollar} recipe="cells" tones={[SOFT.butter, INK.stone]} />
    <RisoArt as="div" className="tbfm-bounty__layer" hidden kind="svg" mark={SIGN.no} recipe="slab" tones={[SOFT.crimson, INK.crimson]} />
    </div>
    </div>
    <div className="tbfm-bounty__text tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    <p>{copy("promise")}</p>
    </div>
    </div>
    </SectionBand>
  );
}
