import { CallSection } from "./../sections";
import type { ReactNode } from "react";

type CtaBandProps = {
  title: string;
  children: ReactNode;
  actionHref: string;
  actionLabel: string;
};

export function CtaBand({
    title,
    children,
    actionHref,
    actionLabel,
  }: CtaBandProps) {
  return (
    <CallSection
    actionHref={actionHref}
    actionLabel={actionLabel}
    body={children}
    title={title}
    />
  );
}
