type Point = [number, number];

type Mark = { canvas: Point; d: string; fit: "fill"; rule: "evenodd"; viewBox: Point };

const VIEW: Point = [400, 2400];

const RAIL = 58;

const RUNG = 44;

const PITCH = 200;

const rect = (left: number, top: number, width: number, height: number) => `M${left} ${top}H${left + width}V${top + height}H${left}Z`;

const rung = (index: number) => rect(RAIL, PITCH / 2 + index * PITCH, VIEW[0] - RAIL * 2, RUNG);

const RUNGS = Array.from({ length: VIEW[1] / PITCH }, (_, index) => rung(index)).join("");

const mark = (d: string): Mark => ({ canvas: VIEW, d, fit: "fill", rule: "evenodd", viewBox: VIEW });

const LADDER = { rails: mark(rect(0, 0, RAIL, VIEW[1]) + rect(VIEW[0] - RAIL, 0, RAIL, VIEW[1])), rungs: mark(RUNGS) };

export { LADDER };
