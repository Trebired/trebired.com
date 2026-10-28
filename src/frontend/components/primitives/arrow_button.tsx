import { button as PrimitiveButton, Icon } from "@trebired/frontend/react";

export function ArrowButton({ href, label }: { href: string; label: string }) {
  return (
    <PrimitiveButton softRedirect href={href} variant="primary">
    {label}
    <Icon spec="remixicon:arrow-right-line" />
    </PrimitiveButton>
  );
}
