const SHARE = 1;

const FRONT = { "& > :not([aria-hidden])": { position: "relative", zIndex: "1" } };

function host(height: string, below: string, share: number | string = SHARE) {
  const kept = typeof share === "number" ? `${height} * ${share}` : `${height} - ${share}`;
  return { paddingBlockEnd: `max(0px, calc(${kept} - ${below}))`, position: "relative" };
}

const LOOSE = { gridColumn: "auto", gridRow: "auto", order: "0", position: "absolute", zIndex: "0" };

function rise(height: string, below = "0px", share: number | string = SHARE) {
  return { host: host(height, below, share), on: FRONT, slot: { ...LOOSE, blockSize: height, inset: `auto 0 calc(-1 * ${below})` } };
}

function riseItem(width: string, ratio: number, below = "0px", share: number | string = SHARE) {
  return {
    host: host(`${width} * ${ratio}`, below, share),
    item: { ...LOOSE, inlineSize: width, insetBlockEnd: `calc(-1 * ${below})`, insetBlockStart: "auto" },
    on: FRONT,
  };
}

export { rise, riseItem };
