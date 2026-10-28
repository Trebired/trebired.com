type Rgb = [number, number, number];

type Lab = [lightness: number, greenRed: number, blueYellow: number];

const CEILING = 0.12;

const SHARE = 0.55;

const TEXT = { dark: 0.97, light: 0.24 };

const PAPER = 0.97;

const RATIO = 4.5;

const STEP = 0.005;

function toLinear(channel: number): number {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function toChannel(linear: number): number {
  const value = Math.min(1, Math.max(0, linear));
  return Math.round((value <= 0.0031308 ? value * 12.92 : 1.055 * value ** (1 / 2.4) - 0.055) * 255);
}

function toLab(rgb: Rgb): Lab {
  const [red, green, blue] = rgb.map(toLinear);
  const long = Math.cbrt(0.4122214708 * red + 0.5363325363 * green + 0.0514459929 * blue);
  const middle = Math.cbrt(0.2119034982 * red + 0.6806995451 * green + 0.1073969566 * blue);
  const short = Math.cbrt(0.0883024619 * red + 0.2817188376 * green + 0.6299787005 * blue);
  return [
    0.2104542553 * long + 0.793617785 * middle - 0.0040720468 * short,
    1.9779984951 * long - 2.428592205 * middle + 0.4505937099 * short,
    0.0259040371 * long + 0.7827717662 * middle - 0.808675766 * short,
  ];
}

function toLinearRgb([lightness, greenRed, blueYellow]: Lab): Rgb {
  const long = (lightness + 0.3963377774 * greenRed + 0.2158037573 * blueYellow) ** 3;
  const middle = (lightness - 0.1055613458 * greenRed - 0.0638541728 * blueYellow) ** 3;
  const short = (lightness - 0.0894841775 * greenRed - 1.291485548 * blueYellow) ** 3;
  return [
    4.0767416621 * long - 3.3077115913 * middle + 0.2309699292 * short,
    -1.2684380046 * long + 2.6097574011 * middle - 0.3413193965 * short,
    -0.0041960863 * long - 0.7034186147 * middle + 1.707614701 * short,
  ];
}

const toRgb = (lab: Lab): Rgb => toLinearRgb(lab).map(toChannel) as Rgb;

function reach(lightness: number, angle: number): number {
  let [inside, outside] = [0, 0.4];
  for (let step = 0; step < 24; step++) {
    const chroma = (inside + outside) / 2;
    const fits = toLinearRgb([lightness, Math.cos(angle) * chroma, Math.sin(angle) * chroma]).every((value) => value >= 0 && value <= 1);
    [inside, outside] = fits ? [chroma, outside] : [inside, chroma];
  }
  return inside;
}

function muted(rgb: Rgb, source: Rgb = rgb, paper = false): Rgb {
  const [lightness, greenRed, blueYellow] = toLab(rgb);
  const [, sourceGreenRed, sourceBlueYellow] = toLab(source);
  const angle = Math.atan2(sourceBlueYellow, sourceGreenRed);
  const ceiling = paper ? Math.min(CEILING, SHARE * reach(lightness, angle)) : CEILING;
  if (Math.hypot(greenRed, blueYellow) <= ceiling) return rgb;
  return toRgb([lightness, Math.cos(angle) * ceiling, Math.sin(angle) * ceiling]);
}

function luminance(rgb: Rgb): number {
  const [red, green, blue] = rgb.map(toLinear) as Rgb;
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(first: number, second: number): number {
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function readable(ink: Rgb, dark: boolean): Rgb {
  const text = (dark ? TEXT.dark : TEXT.light) ** 3;
  if (contrast(luminance(ink), text) >= RATIO) return ink;
  const [start, greenRed, blueYellow] = toLab(ink);
  const step = dark ? -STEP : STEP;
  let shifted = ink;
  for (let lightness = start; lightness >= 0 && lightness <= 1; lightness += step) {
    shifted = toRgb([lightness, greenRed, blueYellow]);
    if (contrast(luminance(shifted), text) >= RATIO) return shifted;
  }
  return shifted;
}

function printedTogether(inks: Rgb[]): Rgb {
  const paper = toChannel(PAPER ** 3) / 255;
  const channel = (index: number) => Math.round(inks.reduce((rest, ink) => rest * ((ink[index] ?? 0) / 255), paper) * 255);
  return [channel(0), channel(1), channel(2)];
}

function lighter(ink: Rgb, by: number): Rgb {
  const [lightness, greenRed, blueYellow] = toLab(ink);
  return toRgb([Math.min(1, lightness + by), greenRed, blueYellow]);
}

function legible(inks: Rgb[], dark: boolean): Rgb[] {
  const own = inks.map((ink) => readable(ink, dark));
  if (dark) return own;
  const text = TEXT.light ** 3;
  let shifted = own;
  for (let by = 0; by <= 1; by += STEP) {
    shifted = own.map((ink) => lighter(ink, by));
    if (contrast(luminance(printedTogether(shifted)), text) >= RATIO) return shifted;
  }
  return shifted;
}

export { legible, muted };
