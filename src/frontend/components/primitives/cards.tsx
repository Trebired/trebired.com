import { TextLink, Title } from "@trebired/frontend/react";
import type { ReactNode } from "react";
import { classNames } from "#wdjzp3jwei75";

export type CardItem = {
  href?: string;
  key: string;
  label?: string;
  meta?: string;
  number?: string;
  text?: string;
  title: string;
};

export function Card({
    align,
    as,
    children,
    href,
    interactive,
    invert,
    label,
    meta,
    number,
    text,
    title,
  }: Omit<CardItem, "key"> & {
    align?: "center";
    as?: "article" | "div" | "li";
    children?: ReactNode;
    interactive?: boolean;
    invert?: boolean;
}) {
  const Tag = as || "li";
  return (
    <Tag
    className={classNames(["tbfm-cell", align === "center" ? "tbfm-cell--center" : false])}
    data-interactive={interactive ? "" : undefined}
    data-tbf-dark={invert ? "" : undefined}
    >
    {number ? <span className="tbf-label">{number}</span> : null}
    <Title level={3}>{title}</Title>
    {meta ? <small>{meta}</small> : null}
    {text ? <p>{text}</p> : null}
    {href && label ? <TextLink softRedirect href={href}>{label}</TextLink> : null}
    {children}
    </Tag>
  );
}

export function CardBody({ children }: { children?: ReactNode }) {
  return <li className="tbfm-cell">{children}</li>;
}

export function CardGrid({
    as,
    children,
    interactive,
    items,
    min,
  }: {
    as?: "div" | "dl" | "ul";
    children?: ReactNode;
    interactive?: boolean;
    items?: CardItem[];
    min?: string;
}) {
  const PanelTag = as || "ul";
  return (
    <PanelTag className="tbfm-panel" style={min ? { "--panel-min": min } as never : undefined}>
    {(items || []).map((item) => (
          <Card
          key={item.key}
          href={item.href}
          interactive={interactive}
          label={item.label}
          meta={item.meta}
          number={item.number}
          text={item.text}
          title={item.title}
          />
    ))}
    {children}
    </PanelTag>
  );
}
