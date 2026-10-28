const WIDTHS: Record<string, number> = {
  " ": 0.31, "&": 0.78, "'": 0.3, ",": 0.31, "-": 0.41, ".": 0.31, "0": 0.7, "1": 0.43, "2": 0.62, "3": 0.62, "4": 0.72, "5": 0.62,
  "6": 0.67, "7": 0.65, "8": 0.69, "9": 0.67, A: 0.84, B: 0.78, C: 0.72, D: 0.83, E: 0.68, F: 0.65, G: 0.78, H: 0.81, I: 0.36, J: 0.58,
  K: 0.77, L: 0.62, M: 0.96, N: 0.81, O: 0.86, P: 0.74, Q: 0.86, R: 0.75, S: 0.66, T: 0.67, U: 0.79, V: 0.79, W: 1.21, X: 0.77, Y: 0.71,
  Z: 0.69,
};

const ems = (text: string) => [...text.normalize("NFD").replace(/\p{M}/gu, "").toUpperCase()].reduce((sum, char) => sum + (WIDTHS[char] ?? 0.8), 0);

const words = (text: string) => text.split(/\s+/u).filter(Boolean);

const longestWord = (text: string) => Math.max(...words(text).map(ems));

export { ems, longestWord, words };
