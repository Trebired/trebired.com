import type { I18nTranslator } from "@trebired/i18n";
import { Title } from "@trebired/frontend/react";
import type { CSSProperties, ReactNode } from "react";

const WIDTH = 150;
const SCALE = 160;
const FILE_LINES = 350;
const FUNCTION_LINES = 50;
const COMMIT = 72;
const MEMORY_SCALE = 700;
const MEMORY_TARGET = 200;
const MEMORY_CAP = 500;
const STROKE = "0.56";

type Stroke = { pitch?: number; top?: number; width?: number; x?: number };

function noise(seed: number): number {
  let value = (seed + 0x6d2b79f5) | 0;
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
}

function strokes(from: number, to: number, { pitch = 1, top = 0, width = WIDTH, x = 0 }: Stroke = {}): string {
  let path = "";
  for (let line = from; line < to; line += 1) {
    if (noise(line) < 0.12) continue;
    const indent = Math.floor(noise(line + 1000) * 4) * 4;
    const length = Math.min(width - indent, Math.round(10 + noise(line + 2000) ** 1.7 * (width - 22)));
    path += `M${x + indent} ${top + (line - from + 0.5) * pitch}h${length}`;
  }
  return path;
}

function ticks(from: number, to: number, height: number): string {
  let path = "";
  for (let cell = Math.round(from); cell < Math.round(to); cell += 1) path += `M${cell + 0.5} 0v${height}`;
  return path;
}

function Lines({ lines, mark, overflow }: { lines: number; mark?: boolean; overflow: number }) {
  return (
    <svg aria-hidden="true" className="tbfm-standard__drawing" viewBox={`0 0 ${WIDTH} ${lines + overflow}`}>
    <path className={mark ? "tbfm-standard__mark" : undefined} d={strokes(
        0,
        lines
    )} stroke="currentColor" strokeOpacity={mark ? "1" : "0.42"} strokeWidth={STROKE} />
    <path className="tbfm-standard__refused" d={strokes(lines, lines + overflow, { top: lines })} strokeWidth={STROKE} />
    <path className="tbfm-standard__refused" d={`M0 ${lines}h${WIDTH}`} strokeWidth="0.8" />
    <path d={`M${WIDTH} 0v${lines}`} stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}

function Characters({ limit, mark }: { limit: number; mark?: boolean }) {
  return (
    <svg aria-hidden="true" className="tbfm-standard__drawing" viewBox={`0 0 ${SCALE} 8`}>
    <path className={mark ? "tbfm-standard__mark" : undefined} d={ticks(0, limit, 8)} stroke="currentColor" strokeWidth="0.6" />
    {mark ? <path d={ticks(limit, WIDTH, 8)} stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.6" /> : null}
    <path className="tbfm-standard__refused" d={ticks(WIDTH, SCALE, 8)} strokeWidth="0.6" />
    </svg>
  );
}

function Duplicate() {
  const body = (x: number) => strokes(41, 46, { pitch: 2, top: 2, width: 70, x: x + 6 });
  const name = (x: number, length: number) => `M${x} 1h${length}`;
  return (
    <svg aria-hidden="true" className="tbfm-standard__drawing" viewBox={`0 0 ${SCALE} 12`}>
    <path d={name(0, 30) + name(SCALE - 76, 46)} stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.8" />
    <path className="tbfm-standard__mark" d={body(0) + body(SCALE - 76)} strokeWidth="1" />
    </svg>
  );
}

function Memory() {
  const at = (megabytes: number) => (megabytes / MEMORY_SCALE) * SCALE;
  return (
    <svg aria-hidden="true" className="tbfm-standard__drawing" viewBox={`0 0 ${SCALE} 12`}>
    <path className="tbfm-standard__target" d={ticks(0, at(MEMORY_TARGET), 12)} strokeWidth={STROKE} />
    <path d={ticks(at(MEMORY_TARGET), at(MEMORY_CAP), 12)} stroke="currentColor" strokeOpacity="0.42" strokeWidth={STROKE} />
    <path className="tbfm-standard__refused" d={ticks(at(MEMORY_CAP), SCALE, 12)} strokeWidth={STROKE} />
    <path d={`M${at(MEMORY_CAP)} 0v12`} stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

const PLATES: [key: string, drawing: ReactNode][] = [
  ["file", <Lines key="file" lines={FILE_LINES} overflow={24} />],
  ["function", <Lines key="function" mark lines={FUNCTION_LINES} overflow={4} />],
  ["memory", <Memory key="memory" />],
  ["line", <Characters key="line" limit={WIDTH} />],
  ["duplicate", <Duplicate key="duplicate" />],
  ["commit", <Characters key="commit" mark limit={COMMIT} />],
];

export function StandardFigure({ translator }: { translator: I18nTranslator }) {
  return (
    <ul className="tbfm-standard">
    {PLATES.map(([key, drawing]) => (
          <li className={`tbfm-standard__cell tbfm-standard__${key}`} key={key} style={{ gridArea: key } as CSSProperties}>
          {drawing}
          <Title className="tbf-text-xl4 tbf-lh-xs" level={3}>{translator(`figure.${key}.value`)}</Title>
          <p>{translator(`figure.${key}.text`)}</p>
          </li>
    ))}
    </ul>
  );
}
