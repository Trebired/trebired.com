import { heroTone } from "./../../components/chrome/hero/tones";
import { deepen } from "./../../components/riso/recipes";

const [MINT, PERIWINKLE] = heroTone("/accessibility");

const INK = { butter: "#ffe08a", grey: "#8c8c8c", mint: MINT, periwinkle: PERIWINKLE, sky: "#a3d6f4", stone: "#c4c4c4" };

const SOFT = {
  butter: deepen(INK.butter, 1.6),
  mint: deepen(MINT, 1.6),
  periwinkle: deepen(PERIWINKLE, 1.6),
  sky: deepen(INK.sky, 1.6),
};

export { INK, SOFT };
