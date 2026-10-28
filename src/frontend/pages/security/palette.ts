import { heroTone } from "./../../components/chrome/hero/tones";
import { deepen } from "./../../components/riso/recipes";

const [CRIMSON, STONE] = heroTone("/security");

const INK = { butter: "#ffe08a", crimson: CRIMSON, grey: "#8c8c8c", stone: STONE };

const SOFT = { butter: deepen(INK.butter, 1.6), crimson: deepen(CRIMSON, 1) };

export { INK, SOFT };
