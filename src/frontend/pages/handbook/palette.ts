import { heroTone } from "./../../components/chrome/hero/tones";
import { deepen } from "./../../components/riso/recipes";

const [ORCHID, BLUE] = heroTone("/handbook");

const INK = {
  blue: BLUE,
  butter: "#ffe08a",
  char: "#484848",
  orchid: ORCHID,
  sky: "#a3d6f4",
  stone: "#c4c4c4",
  teal: "#9fd9c6",
};

const PALE = {
  blue: deepen(BLUE, 0.6),
  butter: deepen(INK.butter, 0.75),
  orchid: deepen(ORCHID, 0.6),
  stone: deepen(INK.stone, 0.6),
};

const DIM = { sky: "#2f4a58", teal: "#2f4c46" };

const SOFT = {
  blue: deepen(BLUE, 1.15),
  butter: deepen(INK.butter, 1.3),
  orchid: deepen(ORCHID, 1.3),
  sky: deepen(INK.sky, 1.15),
  stone: deepen(INK.stone, 1.1),
  teal: deepen(INK.teal, 1.3),
};

export { DIM, INK, PALE, SOFT };
