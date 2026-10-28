import { heroTone } from "./../../components/chrome/hero/tones";
import { deepen } from "./../../components/riso/recipes";

const STONE = heroTone("/")[1];

const LEAD = "#946e93";

const INK = {
  blue: "#9cc4f5",
  butter: "#ffe08a",
  grey: "#8c8c8c",
  lead: LEAD,
  periwinkle: "#aab9f5",
  pink: "#f2aed6",
  sky: "#a3d6f4",
  stone: STONE,
  teal: "#9fd9c6",
  violet: "#ad9ff0",
};

const SOFT = {
  blue: deepen(INK.blue, 1.6),
  butter: deepen(INK.butter, 1.6),
  lead: deepen(LEAD, 1),
  pink: deepen(INK.pink, 1.6),
  violet: deepen(INK.violet, 1.6),
};

const PALE = {
  blue: deepen(INK.blue, 0.7),
  butter: deepen(INK.butter, 0.8),
  lead: deepen(LEAD, 0.7),
  stone: deepen(STONE, 0.7),
};

const FAINT = { pink: deepen(INK.pink, 0.42), stone: deepen(STONE, 0.5) };

export { FAINT, INK, PALE, SOFT };
