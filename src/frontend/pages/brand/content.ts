import brandMark from "bundler-data:brandMark";

export type MarkSwatch = { key: string; value: string };

export const markSwatches: MarkSwatch[] = [
  { key: "ink", value: brandMark?.colors.dark || "" },
  { key: "reversed", value: brandMark?.colors.light || "" },
];
