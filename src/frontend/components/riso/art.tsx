import { classNames } from "#wdjzp3jwei75";
import { isValidElement, useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Art, Point, Print } from "@trebired/overprint";
import { Overprint } from "@trebired/overprint/react";
import { posterArt, sealOf } from "./poster";
import { printPlates, type Field, type Plate, type Recipe, type Rgb } from "./recipes";
import { legible } from "./mute";
import { formArt, type Form } from "./shapes";
import { COVER_SIZE, coverArt, coverPlates } from "./cover";

type Mark = { canvas?: Point; d: string; fit?: "fill" | "slice"; rule?: "evenodd"; viewBox: Point };

type RisoArtProps = {
  as?: "div" | "h3" | "span" | "strong";
  children?: ReactNode;
  className?: string;
  dark?: boolean;
  density?: number;
  field?: Field;
  form?: Form;
  hidden?: boolean;
  kind: "cover" | "fill" | "photo" | "poster" | "shape" | "svg" | "text";
  mark?: Mark;
  recipe: Recipe;
  seed?: string;
  single?: boolean;
  size?: Point;
  style?: CSSProperties;
  tall?: boolean;
  tilt?: number;
  tones?: [string, string];
  underText?: boolean;
};

type Layout = {
  art: (part?: string) => Art;
  plates?: Plate[];
  scale: { cells?: boolean; density?: number; side?: number };
  size: Point;
  spread?: number;
};

function sourceOf(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (isValidElement<{ src?: string }>(children)) return children.props.src || "";
  return "";
}

function layoutOf(props: RisoArtProps, source: string): Layout {
  if (props.kind === "fill") return { art: () => ({ kind: "fill" }), scale: { side: 400 }, size: [600, 200] };
  if (props.kind === "photo") return { art: () => ({ href: source, kind: "image" }), scale: { side: 200 }, size: props.size || [400, 400] };
  if (props.kind === "cover") {
    const seed = props.seed || source;
    return { art: coverArt(seed), plates: coverPlates(seed), scale: { side: COVER_SIZE[1] }, size: [COVER_SIZE[0], COVER_SIZE[1]], spread: 10 };
  }
  if (props.kind === "poster") {
    const seal = sealOf({ href: source }, props.tall);
    return { art: (part) => posterArt(part, seal), scale: { side: 560 }, size: [960, 560], spread: 12 };
  }
  if (props.kind === "text") return { art: () => ({ kind: "text", text: source }), scale: { side: 150 }, size: [1200, 320] };
  if (props.kind === "svg" && props.mark) {
    const mark: Art = { d: props.mark.d, fit: props.mark.fit, kind: "path", rule: props.mark.rule, viewBox: props.mark.viewBox };
    return { art: () => mark, scale: { cells: true, density: props.density }, size: props.mark.canvas || [400, 400] };
  }
  const form = formArt(props.form || "sun");
  return { art: () => form, scale: { cells: true }, size: [320, 320] };
}

function printOf(props: RisoArtProps, source: string): Print {
  const layout = layoutOf(props, source);
  const art = props.tilt ? (part?: string): Art => ({ kind: "group", parts: [layout.art(part)], rotate: props.tilt }) : layout.art;
  const printed = printPlates(props.recipe, {
      art,
      dark: Boolean(props.dark),
      field: props.field,
      image: props.kind === "photo" ? source : undefined,
      plates: layout.plates,
      scale: layout.scale,
      spread: layout.spread,
      tones: props.tones,
  });
  const paper = props.dark ? "dark" : "light";
  const inks = props.underText ? legible(printed.map((plate) => plate.ink as Rgb), Boolean(props.dark)) : [];
  const plates = printed.map((plate, index) => ({ ...plate, ink: inks[index] ?? plate.ink }));
  return props.single ? { paper, plates: plates.slice(0, 1), single: true, size: layout.size } : { paper, plates, size: layout.size };
}

export function RisoArt(props: RisoArtProps) {
  const { as: Tag = "span", children, className, field, form, hidden, kind, mark, recipe, seed, style, tilt, tones } = props;
  const { dark, density, single, size, tall, underText } = props;
  const [first, second] = tones || [];
  const source = sourceOf(children);
  const print = useMemo(
    () => printOf(props, source),
    [dark, density, field, first, form, kind, mark, recipe, second, seed, single, size, source, tall, tilt, underText],
  );

  return (
    <Tag aria-hidden={hidden || undefined} className={classNames(["tbfm-riso", className])} data-riso="live" data-riso-kind={kind} style={style}>
    {children}
    <Overprint className="tbfm-riso__plate" print={print} />
    </Tag>
  );
}
