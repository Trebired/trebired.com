import type { ReactNode } from "react";
import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";
import { SectionBand } from "./band";

export function BannerSection({
    actionHref,
    actionLabel,
    id,
    statement,
  }: {
    actionHref: string;
    actionLabel: ReactNode;
    id?: string;
    statement: ReactNode;
}) {
  return (
    <SectionBand archetype="statement" className="tbfm-banner" id={id} weight="major">
    <p className="tbfm-banner__text">{statement}</p>
    <div className="tbf-inline-row tbf-hor-center tbf-padding-top-md">
    <PrimitiveButton softRedirect href={actionHref} variant="primary">
    {actionLabel}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
    </div>
    </SectionBand>
  );
}
