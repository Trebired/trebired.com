import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";

type Entry = { date: string; evidence: string; key: string };

const LOG: Entry[] = [];

export function LogBand({ translator }: { translator: I18nTranslator }) {
  if (LOG.length === 0) return null;
  return (
    <SectionBand archetype="statement" tone="muted" weight="major">
    <Title className="tbf-text-xl6" level={2}>{translator("log.title")}</Title>
    <p>{translator("log.text")}</p>
    <ol className="tbf-column tbf-gap-lg tbf-list-plain">
    {LOG.map((entry) => (
          <li className="tbf-column tbf-gap-xs" key={entry.key}>
          <time className="tbf-text-xs tbf-text-muted" dateTime={entry.date}>{entry.date}</time>
          <Title className="tbf-text-xl2" level={3}>{translator(`log.entries.${entry.key}.title`)}</Title>
          <p>{translator(`log.entries.${entry.key}.text`)}</p>
          <a href={entry.evidence} rel="noreferrer" target="_blank">{translator("log.evidence")}</a>
          </li>
    ))}
    </ol>
    </SectionBand>
  );
}
