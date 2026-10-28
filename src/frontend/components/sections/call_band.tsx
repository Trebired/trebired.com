import { MoreLink } from "#0lprorcn51cl";
import type { ReactNode } from "react";
import { SectionBand, type BandTone } from "./band";

export function CallSection({
    actionHref,
    actionLabel,
    body,
    id,
    title,
    tone,
  }: {
    actionHref: string;
    actionLabel: string;
    body?: ReactNode;
    id?: string;
    title: ReactNode;
    tone?: BandTone;
}) {
  return (
    <SectionBand archetype="call" field={title} id={id} tone={tone} weight="minor">
    {body ? <p>{body}</p> : null}
    <div className="tbf-inline-row">
    <div className="tbf-right tbf-text-muted">
    <MoreLink href={actionHref} label={actionLabel} />
    </div>
    </div>
    </SectionBand>
  );
}
