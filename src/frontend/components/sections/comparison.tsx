import type { ReactNode } from "react";
import { Title } from "@trebired/frontend/react";
import { SectionBand, type BandTone, type SectionWeight } from "./band";

export type ComparisonValueTone = "high" | "low";

export function ComparisonAmount({ children, tone }: { children: ReactNode; tone: ComparisonValueTone }) {
  return <span className={`tbfm-amount tbfm-amount--${tone}`}>{children}</span>;
}

export type ComparisonColumn = {
  footer?: ReactNode;
  key: string;
  lead?: ReactNode;
  points: ReactNode[];
  title: ReactNode;
  value?: ReactNode;
};

export function ComparisonSection({
    columns,
    id,
    lead,
    title,
    tone,
    weight,
  }: {
    columns: ComparisonColumn[];
    id?: string;
    lead?: ReactNode;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  return (
    <SectionBand archetype="comparison" field={title} id={id} tone={tone} weight={weight}>
    {lead ? <p className="tbf-width-xl3">{lead}</p> : null}
    <ul className="tbfm-panel" style={{ "--panel-min": "20rem" } as never}>
    {columns.map((column) => (
          <li className="tbfm-cell" key={column.key}>
          <div className="tbf-inline-row tbf-wrap tbf-apart tbf-lh-xs">
          <Title level={3}>{column.title}</Title>
          {column.value ? <strong>{column.value}</strong> : null}
          </div>
          {column.lead ? <p>{column.lead}</p> : null}
          <ul className="tbfm-plus-list tbf-column tbf-gap-xs tbf-list-plain">
          {column.points.map((point, index) => (
                <li key={index}>{point}</li>
          ))}
          </ul>
          {column.footer ? <div className="tbf-inline-row">{column.footer}</div> : null}
          </li>
    ))}
    </ul>
    </SectionBand>
  );
}
