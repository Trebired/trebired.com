import type { ReactNode } from "react";
import { SectionBand, type BandTone, type SectionWeight } from "./band";

export function ProseSection({
    aside,
    body,
    id,
    title,
    tone,
    weight,
  }: {
    aside?: ReactNode;
    body: ReactNode;
    id?: string;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  return (
    <SectionBand archetype="prose" field={title} id={id} tone={tone} weight={weight}>
    <p>{body}</p>
    {aside ? (
        <div className="tbf-inline-row">
        <div className="tbf-right tbf-text-muted">{aside}</div>
        </div>
      ) : null}
    </SectionBand>
  );
}
