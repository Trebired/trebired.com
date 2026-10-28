import type { ReactNode } from "react";
import { SectionBand, type BandTone, type SectionWeight } from "./band";

export function StatementSection({
    aside,
    id,
    statement,
    title,
    tone,
    weight,
  }: {
    aside?: ReactNode;
    id?: string;
    statement: ReactNode;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  return (
    <SectionBand archetype="statement" field={title} id={id} tone={tone} weight={weight}>
    <p>{statement}</p>
    {aside ? (
        <div className="tbf-inline-row">
        <div className="tbf-right tbf-text-muted">{aside}</div>
        </div>
      ) : null}
    </SectionBand>
  );
}
