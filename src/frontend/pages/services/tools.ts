import {
  siBun,
  siGo,
  siLinux,
  siPostgresql,
  siQt,
  siReact,
  siRust,
  siSass,
  siSqlite,
  siTypescript,
} from "simple-icons";
import type { Recipe } from "./../../components/riso/recipes";

export type StackTool = { icon: { path: string }; inks: [string, string]; name: string; recipe: Recipe };

export type StackLayer = "data" | "desktop" | "interface" | "languages" | "machines" | "runtime";

const RUST: StackTool = { icon: siRust, inks: ["#f3bda8", "#cfd5df"], name: "Rust", recipe: "grain" };

export const STACK_TOOLS: Record<StackLayer, StackTool[]> = {
  data: [
    { icon: siPostgresql, inks: ["#a6c6f3", "#cfd5df"], name: "PostgreSQL", recipe: "weave" },
    { icon: siSqlite, inks: ["#a6c6f3", "#aee5bd"], name: "SQLite", recipe: "squares" },
  ],
  desktop: [RUST, { icon: siQt, inks: ["#aee5bd", "#9de2ee"], name: "Qt", recipe: "cross" }],
  interface: [
    { icon: siReact, inks: ["#a6c6f3", "#aee5bd"], name: "React", recipe: "dots" },
    { icon: siSass, inks: ["#f3bda8", "#c4c4c4"], name: "Sass", recipe: "lines" },
  ],
  languages: [
    RUST,
    { icon: siTypescript, inks: ["#a6c6f3", "#c4c4c4"], name: "TypeScript", recipe: "squares" },
    { icon: siGo, inks: ["#a6c6f3", "#aee5bd"], name: "Go", recipe: "weave" },
  ],
  machines: [{ icon: siLinux, inks: ["#9cc4f5", "#cfd5df"], name: "Linux", recipe: "grain" }],
  runtime: [{ icon: siBun, inks: ["#f2aebd", "#f3bda8"], name: "Bun", recipe: "dots" }],
};
