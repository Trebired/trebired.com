import { Icon, Title } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";
import type { CSSProperties } from "react";
import { SectionBand } from "./../../components/sections";
import { sourceRepos } from "./../../components/domain/source_repos";
import { licenseEntries } from "./licenses";
import { HollowText } from "@trebired/frontend/hollow";
import { RisoArt } from "./../../components/riso/art";

type Kind = "agpl" | "gpl" | "mit" | "other";

const KINDS: Kind[] = ["mit", "agpl", "gpl", "other"];
const MAY = [["run", true, true, true], ["change", true, true, true], ["share", true, true, true], ["closed", true, false, false]] as const;
const MUST = [["notice", true, true, true], ["distribute", false, true, true], ["network", false, false, true]] as const;
const COLUMNS = ["mit", "gpl", "agpl"] as const;

function kindOf(licence: string): Kind {
  const value = licence.toUpperCase();
  if (value.startsWith("AGPL")) return "agpl";
  if (value.startsWith("GPL")) return "gpl";
  return value.startsWith("MIT") ? "mit" : "other";
}

function reposBy(kind: Kind) {
  return sourceRepos().filter((repo) => kindOf(repo.license) === kind);
}

function labelOf(kind: Kind, translator: I18nTranslator): string {
  return kind === "other" ? translator("poster.other") : licenseEntries.find((entry) => entry.id === kind)?.version || kind;
}

const BAR_PRINTS: Record<Kind, [string, string]> = {
  agpl: ["!#262626", "!#4d4d4d"],
  gpl: ["#cfd5df", "#9aa6bd"],
  mit: ["#a7e0c2", "#a4ddd6"],
  other: ["#e2e2e2", "#cfd5df"],
};

const LICENCE_PRINTS: Record<string, [string, string]> = {
  agpl: ["#7f8aa3", "#9aa6bd"],
  gpl: ["#cfd5df", "#bdcbe4"],
  mit: ["#a7e0c2", "#a4ddd6"],
};

export function SplitBand({ translator }: { translator: I18nTranslator }) {
  const kinds = KINDS.filter((kind) => reposBy(kind).length > 0);
  return (
    <SectionBand archetype="statement" weight="major">
    <Title className="tbf-text-xl6" level={2}>
    <HollowText className="tbf-text-xl7 tbf-lh-xs">{sourceRepos().length}</HollowText>
    <br />
    {translator("poster.count")}
    </Title>
    <div className="tbfm-licence tbf-column tbf-gap-md">
    <div aria-hidden="true" className="tbfm-licence__stack">
    {kinds.map((kind) => (
          <span className={`tbfm-licence__seg tbfm-licence--${kind}`} key={kind} style={{ flexGrow: reposBy(kind).length } as CSSProperties}>
          <RisoArt as="span" className="tbfm-riso__plate" hidden kind="fill" recipe="bar" tones={BAR_PRINTS[kind]} />
          <strong className="tbf-text-xl3 tbf-font-bold">{reposBy(kind).length}</strong>
          </span>
    ))}
    </div>
    <ul className="tbf-inline-row tbf-wrap tbf-gap-sm tbf-list-plain">
    {kinds.map((kind) => (
          <li className="tbf-inline-row tbf-gap-xs tbf-font-bold" key={kind}>
          <span aria-hidden="true" className={`tbfm-licence__dot tbfm-licence--${kind}`} />
          {`${reposBy(kind).length} · ${labelOf(kind, translator)}`}
          </li>
    ))}
    </ul>
    </div>
    </SectionBand>
  );
}

function Rows({ rows, title, translator }: { rows: typeof MAY | typeof MUST; title: string; translator: I18nTranslator }) {
  return (
    <>
    <span className="tbfm-licence__group">{title}</span>
    {rows.map(([key, ...cells]) => [
          <span className="tbf-font-bold" key={key}>{translator(`poster.rows.${key}`)}</span>,
          ...cells.map((yes, index) => (
              <span className={`tbfm-licence__cell ${yes ? "tbfm-licence__yes" : "tbfm-licence__no"}`} key={`${key}-${COLUMNS[index]}`}>
              <Icon spec={yes ? "remixicon:check-line" : "remixicon:close-line"} />
              <span className="tbf-sr-only">{translator(yes ? "poster.yes" : "poster.no")}</span>
              </span>
          )),
    ])}
    </>
  );
}

export function CompareBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" tone="inverse" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("poster.compare")}</Title>
    <div className="tbfm-licence tbf-column tbf-gap-md">
    <div className="tbfm-licence__matrix">
    <span />
    {COLUMNS.map((kind) => <span className="tbf-text-center tbf-font-bold" key={kind}>{kind.toUpperCase()}</span>)}
    <Rows rows={MAY} title={translator("poster.may")} translator={translator} />
    <Rows rows={MUST} title={translator("poster.must")} translator={translator} />
    </div>
    </div>
    </SectionBand>
  );
}

export function EntriesBand({ translator }: { translator: I18nTranslator }) {
  return (
    <SectionBand archetype="statement" weight="major">
    <div className="tbfm-stage tbfm-stage--kit">
    {licenseEntries.map((entry) => {
          const repos = reposBy(entry.id as Kind);
          return (
            <a className="tbfm-figure" href={entry.href} key={entry.id} rel="noreferrer" target="_blank">
            <Icon className="tbfm-figure__corner" spec="remixicon:external-link-line" />
            <Title level={3}>
            <HollowText aria-hidden className="tbf-text-xl5 tbf-lh-xs" inks={LICENCE_PRINTS[entry.id]}>{entry.id.toUpperCase()}</HollowText>
            <br />
            {translator(`items.${entry.id}.name`)}
            </Title>
            <h4 className="tbf-text-xs tbf-text-muted">{entry.version}</h4>
            <p>{translator(`items.${entry.id}.summary`)}</p>
            <h4 className="tbf-text-xs tbf-text-muted">{translator("poster.used")}</h4>
            {repos.length > 0 ? (
                <ul className="tbf-inline-row tbf-wrap tbf-gap-xs tbf-list-plain">
                {repos.map((repo) => <li className="tbf-pill" key={repo.name}>{repo.name}</li>)}
                </ul>
              ) : <span className="tbf-text-muted">{translator("poster.none")}</span>}
            </a>
          );
    })}
    </div>
    <p className="tbf-text-muted">{translator("pending")}</p>
    </SectionBand>
  );
}
