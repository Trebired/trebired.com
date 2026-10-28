import { TextDocumentBody } from "@trebired/frontend/react";
import type { TextDocument } from "@trebired/frontend/config";
import type { ReactNode } from "react";

const CHAPTERS = ["tbfm-chapter", "tbfm-chapter tbfm-chapter--muted"];

export function DocumentSection({
    aside,
    className,
    document,
    label,
    opening,
    outline,
  }: {
    aside?: ReactNode;
    className?: string;
    document: TextDocument;
    label?: string;
    opening?: boolean;
    outline?: boolean;
}) {
  return (
    <TextDocumentBody
    alternate={CHAPTERS}
    aside={aside}
    className={className}
    document={document}
    label={label}
    opening={opening}
    outline={outline}
    />
  );
}
