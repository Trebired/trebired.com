import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import { SectionBand } from "./../../components/sections";
import { RisoArt } from "./../../components/riso/art";
import { EMBLEM } from "./emblem_mark";
import { DIM, INK, PALE, SOFT } from "./palette";
import { labelAt, tree, type Form, type Node } from "./tree_mark";

type Entry = [name: string, level: number, form: Form];

type Emblem = [mark: keyof typeof EMBLEM, tones: [string, string], tilt: string];

const TREES: [kind: string, tones: [string, string], entries: Entry[], emblem: Emblem][] = [
  [
    "app",
    [SOFT.orchid, SOFT.blue],
    [
      ["", 0, "root"],
      ["src/", 1, "folder"],
      ["backend/", 2, "folder"],
      ["frontend/", 2, "folder"],
      ["shared/", 2, "folder"],
      ["bin/", 2, "folder"],
      ["types/", 2, "folder"],
    ],
    ["gear", [PALE.orchid, PALE.blue], "14deg"],
  ],
  [
    "package",
    [INK.teal, INK.sky],
    [["", 0, "root"], ["src/", 1, "folder"], ["index.ts", 2, "file"], ["flags/", 2, "folder"], ["scripts/", 1, "folder"], ["verify/", 2, "folder"]],
    ["parcel", [DIM.teal, DIM.sky], "-10deg"],
  ],
  [
    "text",
    [SOFT.butter, SOFT.stone],
    [
      ["", 0, "root"],
      ["faq/", 1, "folder"],
      ["en.md", 2, "file"],
      ["cs.md", 2, "file"],
      ["privacy/", 1, "folder"],
      ["en.md", 2, "file"],
      ["cs.md", 2, "file"],
    ],
    ["document", [PALE.butter, PALE.stone], "11deg"],
  ],
];

function Backdrop({ dark, emblem: [mark, tones, tilt] }: { dark: boolean; emblem: Emblem }) {
  return (
    <RisoArt
    as="div"
    className="tbfm-trees__emblem"
    dark={dark}
    hidden
    kind="svg"
    mark={EMBLEM[mark]}
    recipe="screen"
    style={{ rotate: tilt }}
    tones={tones}
    />
  );
}

function Tree({ dark, entries, tones }: { dark: boolean; entries: Entry[]; tones: [string, string] }) {
  const mark = tree(entries.map(([, level, form]): Node => [level, form]));
  return (
    <div aria-hidden="true" className="tbfm-trees__tree" style={{ aspectRatio: `${mark.canvas[0]} / ${mark.canvas[1]}` }}>
    <RisoArt as="div" className="tbfm-trees__print" dark={dark} hidden kind="svg" mark={mark} recipe="slab" tones={tones} />
    {entries.map(([name, level, form], row) => (
          <span className="tbfm-trees__label tbf-text-xl" key={row} style={labelAt([level, form], row, entries.length)}>{name}</span>
    ))}
    </div>
  );
}

export function ShapesBands({ translator }: { translator: I18nTranslator }) {
  const copy = (key: string) => translator(`shapes.${key}`);
  return (
    <>
    {TREES.map(([kind, tones, entries, emblem], index) => (
          <SectionBand archetype="statement" className="tbfm-prints" key={kind} tone={index === 1 ? "inverse" : undefined} weight="major">
          {index === 0 ? <Title className="tbf-text-xl6" level={2}>{copy("title")}</Title> : null}
          {index === 0 ? <p className="tbfm-trees__copy">{copy("text")}</p> : null}
          <div className={index === 1 ? "tbfm-trees tbfm-trees--flip" : "tbfm-trees"}>
          <Backdrop dark={index === 1} emblem={emblem} />
          <Tree dark={index === 1} entries={entries} tones={tones} />
          <div className="tbfm-trees__text tbf-column tbf-gap-md">
          <Title className="tbf-text-xl3" level={3}>{copy(`kinds.${kind}.name`)}</Title>
          <p>{copy(`kinds.${kind}.text`)}</p>
          </div>
          </div>
          </SectionBand>
    ))}
    </>
  );
}
