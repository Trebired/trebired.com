import { HollowText } from "@trebired/frontend/hollow";
import { Title, type HeadingLevel } from "@trebired/frontend/react";
import { Fragment } from "react";

const NOWRAP = { whiteSpace: "nowrap" } as const;

function lines(text: string) {
  return text.split("\n").map((line, index) => (
      <Fragment key={index}>
      {index > 0 ? <br /> : null}
      {line}
      </Fragment>
  ));
}

type HollowTitleProps = { dark?: boolean; text: string };

type HollowHeadingProps = HollowTitleProps & { className?: string; level?: HeadingLevel };

export function HollowTitle({ dark, text }: HollowTitleProps) {
  const parts = text.split("*");
  const tails = parts.map((part, index) => (index % 2 === 0 && index > 0 ? (/^[^\s]+/u.exec(part)?.[0] ?? "") : ""));
  return parts.map((part, index) => (index % 2 ? (
        <span key={index} style={NOWRAP}>
        <HollowText dark={dark}>{part}</HollowText>
        {tails[index + 1]}
        </span>
      ) : (
        <Fragment key={index}>{lines(part.slice(tails[index].length))}</Fragment>
  )));
}

export function HollowHeading({ className, dark, level = 2, text }: HollowHeadingProps) {
  return (
    <Title className={className} level={level} text={text.split("*").join("")}>
    <HollowTitle dark={dark} text={text} />
    </Title>
  );
}
