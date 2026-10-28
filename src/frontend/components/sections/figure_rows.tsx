import { frontendDataAttr } from "@trebired/frontend";
import { Title } from "@trebired/frontend/react";
import type { CSSProperties, ReactNode } from "react";
import { SectionBand, type BandTone, type SectionWeight } from "./band";

export type FigureRow = {
  action?: string;
  className?: string;
  external?: boolean;
  href?: string;
  key: string;
  meta?: ReactNode;
  text?: ReactNode;
  title: ReactNode;
  titleStyle?: CSSProperties;
  visual?: ReactNode;
};

function FigureBody({ compact, row }: { compact: boolean; row: FigureRow }) {
  return (
    <>
    {row.visual ? <div className="tbf-display-block">{row.visual}</div> : null}
    <div className="tbfm-figure__copy tbf-column tbf-gap-sm">
    {row.meta ? <span className="tbf-text-md tbf-text-muted">{row.meta}</span> : null}
    <Title style={row.titleStyle} level={3}>
    {row.title}
    </Title>
    {row.text ? <p className={compact ? "tbf-width-xl tbf-text-md" : "tbf-width-xl"}>{row.text}</p> : null}
    </div>
    </>
  );
}

function layoutOf(grid: boolean, stacked: boolean) {
  if (grid) return "grid";
  return stacked ? "stacked" : undefined;
}

function FigureItem({ layout, row, index }: { index: number; layout?: string; row: FigureRow }) {
  const flip = !layout && index % 2 === 1 ? "" : undefined;
  if (!row.href) {
    return (
      <article
      className={row.className ? `tbfm-figure ${row.className}` : "tbfm-figure"}
      data-flip={flip}
      {...{ [frontendDataAttr("href")]: row.action }}
      >
      <FigureBody compact={layout === "grid"} row={row} />
      </article>
    );
  }
  return (
    <a
    className={row.className ? `tbfm-figure ${row.className}` : "tbfm-figure"}
    data-flip={flip}
    href={row.href}
    {...(row.external ? {} : { "data-tbf-soft-redirect": "" })}
    >
    <FigureBody compact={layout === "grid"} row={row} />
    </a>
  );
}

function BandedFigureRows({ layout, rows, weight }: { layout?: string; rows: FigureRow[]; weight?: SectionWeight }) {
  return (
    <>
    {rows.map((row, index) => (
          <SectionBand archetype="figures" key={row.key} weight={weight}>
          <div className="tbfm-figures" data-layout={layout}>
          <FigureItem index={index} layout={layout} row={row} />
          </div>
          </SectionBand>
    ))}
    </>
  );
}

export function FigureRowsSection({
    banded = false,
    grid = false,
    id,
    more,
    rows,
    stacked = false,
    title,
    tone,
    weight,
  }: {
    banded?: boolean;
    grid?: boolean;
    id?: string;
    more?: ReactNode;
    rows: FigureRow[];
    stacked?: boolean;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  const layout = layoutOf(grid, stacked);
  if (banded) return <BandedFigureRows layout={layout} rows={rows} weight={weight} />;
  return (
    <SectionBand archetype="figures" field={title} id={id} tone={tone} weight={weight}>
    <div className="tbfm-figures tbf-column tbf-gap-xl" data-layout={layout}>
    {rows.map((row, index) => (
          <FigureItem index={index} key={row.key} layout={layout} row={row} />
    ))}
    </div>
    {more}
    </SectionBand>
  );
}
