import type { I18nTranslator } from "@trebired/i18n";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { ProseParagraph } from "./../../components/primitives/prose";
import { sourceRepos } from "./../../components/domain/source_repos";
import { KEYHOLE } from "./../about/marks";
import { CODE, TALL_CODE } from "./code_mark";
import { INK } from "./palette";
import { HollowHeading } from "./../../components/primitives/hollow_title";

const SOURCE: [key: keyof typeof CODE, tones: [string, string]][] = [
  ["plain", [INK.grey, INK.stone]],
  ["keyword", [INK.lead, INK.sky]],
];

function Source({ tall }: { tall?: boolean }) {
  return (
    <div aria-hidden="true" className={tall ? "tbfm-osi__code tbfm-osi__tall" : "tbfm-osi__code tbfm-osi__wide"}>
    {SOURCE.map(([key, tones]) => (
          <RisoArt
          as="div"
          className="tbfm-osi__layer"
          dark
          density={3}
          hidden
          key={key}
          kind="svg"
          mark={(tall ? TALL_CODE : CODE)[key]}
          recipe={tall ? "source-tall" : "source"}
          tones={tones}
          />
    ))}
    </div>
  );
}

export function OsiBand({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`osi.${key}`, { count: String(sourceRepos().length) });
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <Source />
    <Source tall />
    <div className="tbfm-osi">
    <div className="tbf-column tbf-gap-md">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={copy("title")} />
    <p>{copy("lead")}</p>
    <p>{copy("text")}</p>
    <div className="tbf-text-muted">
    <ProseParagraph text={copy("mark")} />
    </div>
    </div>
    <div aria-hidden="true" className="tbfm-osi__slot">
    <div aria-hidden="true" className="tbfm-osi__art">
    <RisoArt
    as="div"
    className="tbfm-osi__layer"
    dark
    hidden
    kind="svg"
    mark={{ d: KEYHOLE, viewBox: [24, 24] }}
    recipe="lines"
    tones={[INK.teal, INK.lead]}
    />
    </div>
    </div>
    </div>
    <div className="tbf-inline-row tbf-hor-right">
    <PrimitiveButton softRedirect href="/philosophy" variant="primary">
    {copy("action")}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
