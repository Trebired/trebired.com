import type { ReactNode } from "react";
import { Title } from "@trebired/frontend/react";

import { classNames } from "#wdjzp3jwei75";

type BlockStep = {
  no?: string;
  text: string;
  title: string;
};

type BlockTone = "inverse" | "muted";

export function BlockHead({
    lead,
    title,
    titleClassName,
  }: {
    lead?: ReactNode;
    title: ReactNode;
    titleClassName?: string;
}) {
  return (
    <header className="tbf-column tbf-gap-sm">
    <Title className={titleClassName} level={2}>{title}</Title>
    {lead ? <p>{lead}</p> : null}
    </header>
  );
}

export function StepGrid({ quad, steps }: { quad?: boolean; steps: BlockStep[] }) {
  return (
    <div className={classNames(["tbf-grid tbf-gap-md", quad ? "tbf-auto-sm" : "tbf-auto-md"])}>
    {steps.map((step, index) => (
          <article key={step.title} className="tbf-column tbf-gap-sm tbf-border-top tbf-padding-top-md">
          <span className="tbf-label">{step.no || String(index + 1).padStart(2, "0")}</span>
          <Title level={3}>{step.title}</Title>
          <p>{step.text}</p>
          </article>
    ))}
    </div>
  );
}

export function PageBlock({
    children,
    id,
    lead,
    prose,
    title,
    titleClassName,
    tone,
  }: {
    children?: ReactNode;
    id?: string;
    lead?: ReactNode;
    prose?: boolean;
    title?: ReactNode;
    titleClassName?: string;
    tone?: BlockTone;
}) {
  return (
    <section
    className={classNames(["tbfm-band", tone ? `tbfm-band--${tone}` : false])}
    data-tbf-dark={tone === "inverse" ? "" : undefined}
    id={id}
    >
    <div className="tbfm-band__inner tbf-gap-lg">
    {title ? <BlockHead lead={lead} title={title} titleClassName={titleClassName} /> : null}
    {prose ? <div className="tbf-column tbf-gap-sm">{children}</div> : children}
    </div>
    </section>
  );
}

export type { BlockStep, BlockTone };
