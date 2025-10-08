import { adjectives } from "./data/adjectives.js";
import { animals } from "./data/animals.js";
import { nerdyPrefixes } from "./data/nerdyPrefixes.js";
import {
  capitalize,
  pickRandom,
  randomNumberString,
  shortHash,
} from "./utils/random.js";

export interface Options {
  separator?: string; // default: ""
  capitalize?: boolean; // default: true
  addNumber?: boolean; // default: true
  numberLength?: number; // default: 3
  hashLength?: number; // default: 3 (short base36 hash appended after number)
  useAdjective?: boolean; // default: true - toggle adjectives on/off (added per user request)
}

const gaenerateName = (options?: Options) => {
  const {
    separator = "-",
    capitalize: doCap = true,
    addNumber = true,
    numberLength = 3,
    hashLength = 4,
    useAdjective = true,
  } = options || {};

  const prefix = pickRandom(nerdyPrefixes);
  const adjective = useAdjective ? pickRandom(adjectives) : "";
  const animal = pickRandom(animals);

  const parts: string[] = [];

  if (prefix) parts.push(prefix);
  if (useAdjective && adjective) parts.push(adjective);
  if (animal) parts.push(animal);

  const mayBeCap = (s: string) => (doCap ? capitalize(s) : s);

  const joined = parts.map(mayBeCap).join(separator);

  if (!addNumber) {
    return joined;
  }

  const num = randomNumberString(numberLength);
  const hash = shortHash(hashLength);

  return `${joined}${num}${hash}`;
};

export default gaenerateName;
