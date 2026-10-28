import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { HollowText } from "@trebired/frontend/hollow";
import { SectionBand } from "./../../components/sections";
import { ProseParagraph } from "./../../components/primitives/prose";
import { RisoArt } from "./../../components/riso/art";
import type { PageSection } from "./../../shared/page/sections";
import { PATCH, SCALE } from "./art";

type BandProps = { section: PageSection; translator: I18nTranslator };

export function TermsBand({ section, translator }: BandProps) {
  const copy = (key: string) => translator(`poster.scale.${key}`);
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{section.heading}</Title>
    <div aria-hidden="true" className="tbfm-scale">
    <RisoArt as="div" className="tbfm-scale__beam" dark hidden kind="svg" mark={SCALE} recipe="lines" tones={["#c4c4c4", "#f3bda8"]} />
    <RisoArt as="div" className="tbfm-scale__patch" dark hidden kind="svg" mark={PATCH} recipe="squares" tilt={-6} tones={["#ffe08a", "#f2aed6"]} />
    </div>
    <div className="tbfm-scale__pans">
    <div className="tbf-column tbf-gap-sm">
    <h5>{copy("in.label")}</h5>
    <Title className="tbf-text-xl3" level={3}>{copy("in.title")}</Title>
    <ProseParagraph text={section.body[0] || ""} />
    </div>
    <div className="tbfm-scale__out tbf-column tbf-gap-sm">
    <h5>{copy("out.label")}</h5>
    <Title className="tbf-text-xl6 tbf-lh-xs" level={3}><HollowText dark>{copy("out.title")}</HollowText></Title>
    <ProseParagraph text={section.body[1] || ""} />
    </div>
    </div>
    </SectionBand>
  );
}
