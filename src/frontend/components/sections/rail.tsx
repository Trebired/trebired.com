import type { CSSProperties, ReactNode } from "react";
import { Title } from "@trebired/frontend/react";
import { classNames } from "#wdjzp3jwei75";
import { SectionBand, type BandTone, type SectionWeight } from "./band";
import { RisoArt } from "./../riso/art";
import { rounded } from "./../riso/shapes";

const SHEET: [number, number] = [350, 600];

const LINKED: [number, number] = [398, 600];

const CARD = { canvas: SHEET, d: rounded(6, 6, 338, 588, 22), fit: "fill" as const, viewBox: SHEET };

const LINKED_CARD = { canvas: LINKED, d: `${rounded(6, 6, 340, 588, 22)}M330 297H398V303H330Z`, fit: "fill" as const, viewBox: LINKED };

export type RailCard = {
  key: string;
  label?: ReactNode;
  print?: string;
  text: ReactNode | ReactNode[];
  title: ReactNode;
  tone?: string;
};

const TONES = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

type CardTone = { className: string | false; style?: CSSProperties };

function toneOf(card: RailCard | undefined) {
  return card?.tone ? `color-mix(in srgb, ${card.tone} 16%, var(--tbf-page))` : null;
}

function cardTone(cards: RailCard[], index: number): CardTone {
  const tone = toneOf(cards[index]);
  if (!tone) return { className: `tbfm-rail--${TONES[index % TONES.length]}` };
  const next = toneOf(cards[index + 1]);
  const style: Record<string, string> = { "--rail-tone": tone, "--rail-tone-next": next || tone };
  if (cards[index]?.print) style["--rail-fill"] = "transparent";
  return { className: false, style: style as CSSProperties };
}

function cardNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function RailItem({ cards, index }: { cards: RailCard[]; index: number }) {
  const card = cards[index] as RailCard;
  const tone = cardTone(cards, index);
  return (
    <li className={classNames(["tbfm-rail__card", tone.className])} style={tone.style}>
    {card.print ? (
        <RisoArt
        as="span"
        className="tbfm-rail__print"
        hidden
        kind="svg"
        mark={index < cards.length - 1 ? LINKED_CARD : CARD}
        recipe="sheet"
        single
        tones={[card.print, card.print]}
        />
      ) : null}
    <span className="tbfm-rail__mark">{cardNumber(index)}</span>
    {card.label ? <h4 className="tbf-text-xs tbf-text-muted">{card.label}</h4> : null}
    <Title level={3}>{card.title}</Title>
    {(Array.isArray(card.text) ? card.text : [card.text]).map((paragraph, textIndex) => (
          <p className="tbf-text-sm" key={textIndex}>{paragraph}</p>
    ))}
    </li>
  );
}

export function RailSection({
    cards,
    id,
    label,
    lead,
    title,
    tone,
    weight,
  }: {
    cards: RailCard[];
    id?: string;
    label: string;
    lead?: ReactNode;
    title?: ReactNode;
    tone?: BandTone;
    weight?: SectionWeight;
}) {
  return (
    <SectionBand archetype="rail" field={title} id={id} tone={tone} weight={weight}>
    {lead ? <p className="tbf-width-xl3">{lead}</p> : null}
    <div
    aria-label={label}
    className="tbfm-rail tbf-overflow-x-auto tbf-scroll-min"
    role="group"
    tabIndex={0}
    >
    <ol className="tbfm-rail__track tbf-gap-lg tbf-list-plain">
    {cards.map((card, index) => <RailItem cards={cards} index={index} key={card.key} />)}
    </ol>
    </div>
    </SectionBand>
  );
}
