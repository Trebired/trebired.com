import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import type { Lang } from "#0ft8fsqbbufa";
import { INK, SOFT } from "./palette";
import { SIGN } from "./sign_mark";
import { SCALE_STEPS } from "./type_mark";

type BandProps = { translator: I18nTranslator };

export function LevelBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`level.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-level">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <div className="tbfm-level__text tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-level__slot">
    <RisoArt as="div" className="tbfm-level__art" hidden kind="svg" mark={SIGN.badge} recipe="lines" tones={[SOFT.periwinkle, INK.stone]} />
    </div>
    </div>
    </SectionBand>
  );
}

export function KeyboardBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`keyboard.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <div className="tbfm-arrows">
    <div aria-hidden="true" className="tbfm-arrows__art">
    <RisoArt as="div" className="tbfm-arrows__layer" dark hidden kind="svg" mark={SIGN.keys} recipe="cells" tones={[INK.mint, INK.grey]} />
    <RisoArt as="div" className="tbfm-arrows__layer" dark hidden kind="svg" mark={SIGN.tops} recipe="slab" tones={[INK.stone, INK.sky]} />
    </div>
    <div className="tbfm-arrows__text tbf-column tbf-gap-md">
    <p>{copy("text")}</p>
    <p>{copy("focus")}</p>
    </div>
    </div>
    </SectionBand>
  );
}

export function MotionBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`motion.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-cradle">
    <div className="tbfm-cradle__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("text")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-cradle__slot">
    <div className="tbfm-cradle__art">
    <RisoArt as="div" className="tbfm-cradle__layer" hidden kind="svg" mark={SIGN.strings} recipe="slab" tones={[INK.stone, INK.sky]} />
    <RisoArt as="div" className="tbfm-cradle__layer" hidden kind="svg" mark={SIGN.balls} recipe="slab" tones={[INK.sky, INK.stone]} />
    <RisoArt as="div" className="tbfm-cradle__layer" hidden kind="svg" mark={SIGN.shades} recipe="slab" tones={[SOFT.periwinkle, INK.mint]} />
    </div>
    </div>
    </div>
    </SectionBand>
  );
}

export function SettingsBand({ lang, translator }: BandProps & { lang: Lang }) {
  const copy = (key: string) => translator(`settings.${key}`);
  const percent = new Intl.NumberFormat(lang, { style: "percent" });
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="muted" weight="major">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <div className="tbf-grid tbf-cols-2 tbf-stack-mobile tbf-gap-xl">
    <p>{copy("menu")}</p>
    <p>{copy("here")}</p>
    </div>
    <div aria-hidden="true" className="tbfm-sizes">
    <RisoArt as="div" className="tbfm-sizes__art" hidden kind="svg" mark={SIGN.scale} recipe="type" tones={[SOFT.periwinkle, INK.stone]} />
    <div className="tbfm-sizes__labels">
    {SCALE_STEPS.map(([value, centre]) => (
          <span className="tbfm-sizes__label tbf-text-muted" key={value} style={{ insetInlineStart: `${centre * 100}%` }}>
          {percent.format(value / 100)}
          </span>
    ))}
    </div>
    </div>
    </SectionBand>
  );
}

export function FixedBand({ translator }: BandProps) {
  const copy = (key: string) => translator(`fixed.${key}`);
  return (
    <SectionBand archetype="statement" className="tbfm-prints" weight="major">
    <div className="tbfm-fixed">
    <RisoArt as="div" className="tbfm-fixed__art" hidden kind="svg" mark={SIGN.check} recipe="lines" tones={[SOFT.mint, SOFT.butter]} />
    <div className="tbfm-fixed__text tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} text={copy("title")} />
    <p>{copy("unknown")}</p>
    <p>{copy("report")}</p>
    </div>
    <div className="tbfm-fixed__action tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/contact" variant="primary">
    {copy("contact")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </div>
    </SectionBand>
  );
}
