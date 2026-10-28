import { Icon, pill as Pill, TextLink, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import { ArrowButton } from "./../../components/primitives/arrow_button";
import { CallSection, SectionBand } from "./../../components/sections";
import { careerRoles } from "./roles";
import { NoticeArt } from "./notice_art";
import { RisoArt } from "./../../components/riso/art";
import { HollowText } from "@trebired/frontend/hollow";
import { heroTone } from "./../../components/chrome/hero/tones";
import { LADDER } from "./ladder_mark";
import { HollowHeading } from "./../../components/primitives/hollow_title";
import type { CSSProperties } from "react";

type BandProps = { translator: I18nTranslator };

const [SAGE, CORAL] = heroTone("/careers");

const number = (index: number) => String(index + 1).padStart(2, "0");

function Openings({ count, role, translator }: { count: number; role: string; translator: I18nTranslator }) {
  return (
    <div className="tbfm-notice__foot">
    <h4 className="tbf-text-sm tbf-text-muted">{translator("notice.openings", { count })}</h4>
    <TextLink softRedirect aria-label={translator("notice.apply", { role })} className="tbf-inline-row tbf-gap-xs tbf-width-fit" href="/contact">
    {translator("notice.contact")}
    <Icon spec="remixicon:arrow-right-line" />
    </TextLink>
    </div>
  );
}

export function RolesBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" id="roles" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("rolesTitle")}</Title>
    <ul className="tbfm-stage tbfm-stage--even tbf-list-plain">
    {careerRoles.map((role, index) => {
          const title = translator(`roles.${role.key}.title`);
          return (
            <li className="tbfm-notice" key={role.key}>
            <div className="tbfm-notice__copy">
            <h4 className="tbf-text-sm tbf-text-muted">{`${number(index)} · ${translator("notice.label")}`}</h4>
            <Title level={3}>{title}</Title>
            <p>{translator(`roles.${role.key}.text`)}</p>
            </div>
            <NoticeArt role={role.key} />
            <Openings count={role.openings} role={title} translator={translator} />
            </li>
          );
    })}
    </ul>
    </SectionBand>
  );
}

function Ladder() {
  return (
    <div aria-hidden="true" className="tbfm-climb__slot">
    <div className="tbfm-climb__ladder">
    <RisoArt as="span" className="tbfm-climb__layer" dark hidden kind="svg" mark={LADDER.rails} recipe="lines" tones={[CORAL, SAGE]} />
    <RisoArt as="span" className="tbfm-climb__layer" dark hidden kind="svg" mark={LADDER.rungs} recipe="slab" tones={[SAGE, CORAL]} />
    </div>
    </div>
  );
}

export function TermsBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" className="tbfm-prints" tone="inverse" weight="major">
    <div className="tbfm-climb">
    <HollowHeading className="tbf-text-xl6" level={2} dark text={translator("conditionsTitle")} />
    <Ladder />
    <div className="tbfm-climb__text tbf-column tbf-gap-md">
    <p>{translator("agree.pay")}</p>
    <p>{translator("agree.text")}</p>
    </div>
    <div className="tbfm-climb__action tbf-inline-row tbf-hor-right">
    <ArrowButton href="/standards" label={translator("agree.action")} />
    </div>
    </div>
    </SectionBand>
  );
}

const HOSTS: [spec: string, name: string][] = [
  ["simple-icons:github", "GitHub"],
  ["simple-icons:codeberg", "Codeberg"],
  ["simple-icons:gitlab", "GitLab"],
  ["simple-icons:sourcehut", "SourceHut"],
  ["remixicon:global-line", ""],
];

const COLS = 30;
const ROWS = 7;
const PITCH = 13;
const CELL = 10;
const PICK: [col: number, row: number] = [21, 2];
const VIEW: [number, number] = [COLS * PITCH - (PITCH - CELL), ROWS * PITCH - (PITCH - CELL)];
const CANVAS: [number, number] = [VIEW[0] * 4, VIEW[1] * 4];

function busy(col: number, row: number): boolean {
  let value = Math.imul((col * 7 + row + 1) ^ 0x5bd1e995, 0x27d4eb2d);
  value ^= value >>> 15;
  return ((value >>> 0) % 100) > 58;
}

function cells(test: (col: number, row: number) => boolean): string {
  let path = "";
  for (let col = 0; col < COLS; col += 1) {
    for (let row = 0; row < ROWS; row += 1) if (test(col, row)) path += `M${col * PITCH} ${row * PITCH}h${CELL}v${CELL}h-${CELL}Z`;
  }
  return path;
}

const isPick = (col: number, row: number) => col === PICK[0] && row === PICK[1];

const LAYERS: [key: string, d: string, inks: [string, string]][] = [
  ["quiet", cells((col, row) => !isPick(col, row)), ["#e2e2e2", "#cfd5df"]],
  ["busy", cells((col, row) => busy(col, row) && !isPick(col, row)), ["#c4c4c4", "#a3d6f4"]],
  ["pick", cells(isPick), ["#f4a99a", "#f2aed6"]],
];

const PICK_SPOT = {
  "--pick-bottom": `${((VIEW[1] - PICK[1] * PITCH) / VIEW[1]) * 100}%`,
  "--pick-right": `${((VIEW[0] - (PICK[0] * PITCH + CELL / 2)) / VIEW[0]) * 100}%`,
} as CSSProperties;

function Squares({ translator }: BandProps) {
  return (
    <div className="tbfm-squares">
    <div className="tbfm-squares__field" style={PICK_SPOT}>
    {LAYERS.map(([key, d, inks]) => (
          <RisoArt
          as="div"
          className="tbfm-squares__layer"
          hidden
          key={key}
          kind="svg"
          mark={{ canvas: CANVAS, d, viewBox: VIEW }}
          recipe="cells"
          tones={inks}
          />
    ))}
    <span className="tbfm-squares__callout tbf-text-xl3 tbf-font-bold">{translator("pick.label")}</span>
    </div>
    </div>
  );
}

export function ApplyBand({ translator }: BandProps) {
  return (
    <SectionBand archetype="statement" id="apply" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    {translator("send.title.first")}
    {" "}
    <HollowText>{translator("send.title.second")}</HollowText>
    </Title>
    <p>{translator("send.lead")}</p>
    <Squares translator={translator} />
    <div className="tbf-column tbf-gap-sm">
    <p>{translator("pick.text")}</p>
    <ul className="tbf-inline-row tbf-wrap tbf-gap-xs tbf-list-plain">
    {HOSTS.map(([spec, name]) => (
          <li key={spec}>
          <Pill className="tbf-inline-row tbf-gap-xs"><Icon spec={spec} />{name || translator("pick.anywhere")}</Pill>
          </li>
    ))}
    </ul>
    </div>
    </SectionBand>
  );
}

export function DecidedBand({ translator }: BandProps) {
  return (
    <CallSection
    tone="muted"
    actionHref="/contact"
    actionLabel={translator("decided.action")}
    body={translator("decided.text")}
    title={translator("decided.title")}
    />
  );
}
