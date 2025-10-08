const pickRandom = <T>(arr: readonly T[]): T | undefined => {
  if (arr.length === 0) {
    throw new Error("Cannot pick from an empty array");
  }
  return arr[Math.floor(Math.random() * arr.length)];
};

const randomNumberString = (length: number = 3): string => {
  const max = Math.pow(10, length);
  const num = Math.floor(Math.random() * max);
  return num.toString().padStart(length, "0");
};

const shortHash = (length: number = 4): string => {
  const t = Date.now();
  const r = Math.floor(Math.random() * 0xfff);
  const b36 = (t + r).toString(36);
  return b36.slice(-length);
};

const capitalize = (str: string): string => {
  if (!str || str.length === 0) return str;

  return str[0]?.toUpperCase() + str.slice(1);
};

export { pickRandom, randomNumberString, shortHash, capitalize };
