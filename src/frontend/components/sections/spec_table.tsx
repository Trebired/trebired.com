import type { ReactNode } from "react";
import { SectionBand, type BandTone, type SectionWeight } from "./band";

export type SpecEntry = {
  key: string;
  label: ReactNode;
  value: ReactNode;
};

export function SpecTableSection({
    entries,
    id,
    title,
    tone,
    weight,
  }: {
    entries: SpecEntry[];
    id?: string;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  return (
    <SectionBand archetype="spec" field={title} id={id} tone={tone} weight={weight}>
    <dl className="tbf-column">
    {entries.map((entry) => (
          <div className="tbfm-row" key={entry.key}>
          <dt className="tbf-text-muted tbf-grow">{entry.label}</dt>
          <dd>{entry.value}</dd>
          </div>
    ))}
    </dl>
    </SectionBand>
  );
}
