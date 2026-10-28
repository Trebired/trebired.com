import { ProseText } from "@trebired/frontend/react";

export function ProseParagraph({ lede, text }: { lede?: boolean; text: string }) {
  return <p className={lede ? "tbfm-lede" : undefined}><ProseText softRedirect text={text} /></p>;
}
