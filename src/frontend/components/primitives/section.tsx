import { TextLink, Title } from "@trebired/frontend/react";
import type { ReactNode } from "react";
import { classNames } from "#wdjzp3jwei75";

export function MoreLink({ href, label }: { href: string; label: string }) {
  return (
    <TextLink softRedirect href={href} className="tbf-text-sm">
    {label}
    <span aria-hidden> →</span>
    </TextLink>
  );
}

export type SectionCopyProps = {
  body?: ReactNode;
  children?: ReactNode;
  moreHref?: string;
  moreLabel?: string;
  title: ReactNode;
};

export function SectionCopy({
    body,
    children,
    moreHref,
    moreLabel,
    title,
  }: SectionCopyProps) {
  return (
    <div className="tbf-column tbf-gap-sm">
    <Title className="tbf-text-xl6" level={2}>{title}</Title>
    {body ? <p>{body}</p> : null}
    {children}
    {moreHref && moreLabel ? (
        <MoreLink href={moreHref} label={moreLabel} />
      ) : null}
    </div>
  );
}

export function SectionSplit({
    aside = false,
    children,
    copy,
  }: {
    aside?: boolean;
    children: ReactNode;
    copy: ReactNode;
}) {
  return (
    <div
    className={classNames(["tbf-gap-lg", aside ? "tbf-grid" : "tbf-column"])}
    >
    {copy}
    {children}
    </div>
  );
}
