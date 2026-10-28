import brandMark from "bundler-data:brandMark";

type Point = [number, number];

const VIEW: Point = brandMark?.size || [1, 1];

type Mark = { canvas: Point; d: string; fit: "fill"; viewBox: Point };

const LOGO: Mark = { canvas: VIEW, d: brandMark?.d || "", fit: "fill", viewBox: VIEW };

export { LOGO, VIEW };
