import gaenerateName from "./index.js";

const rawArgs = process.argv.slice(2);

/** Very small CLI parsing: support flags:
 * --no-adj     : disables adjectives
 * --no-num     : disables numeric suffix
 * --sep=<s>    : set separator character
 * --no-cap     : don't capitalize
 * --numlen=N   : number length
 * --hashlen=N  : hash length
 */

const options = {
  useAdjective: true,
  addNumber: true,
  separator: "-",
  capitalize: true,
  numberLength: 3,
  hashLength: 4,
};

for (const arg of rawArgs) {
  if (arg === "--no-adj") {
    options.useAdjective = false;
  } else if (arg === "--no-num") {
    options.addNumber = false;
  } else if (arg.startsWith("--sep=")) {
    options.separator = arg.split("=")[1] ?? "-";
  } else if (arg === "--no-cap") {
    options.capitalize = false;
  } else if (arg.startsWith("--numlen=")) {
    const len = parseInt(arg.split("=")[1] ?? "3", 10);
    if (!isNaN(len) && len >= 0) {
      options.numberLength = len;
    }
  } else if (arg.startsWith("--hashlen=")) {
    const len = parseInt(arg.split("=")[1] ?? "4", 10);
    if (!isNaN(len) && len >= 0) {
      options.hashLength = len;
    }
  } else if (arg === "--help" || arg === "-h") {
    console.log(`Usage: ts-node src/cli.ts [options]
                Options:
                --no-adj     : disables adjectives
                --no-num     : disables numeric suffix
                --sep=<s>    : set separator character
                --no-cap     : don't capitalize
                --numlen=N   : number length
                --hashlen=N  : hash length
                `);
    process.exit(0);
  }
}

console.log(gaenerateName(options));

// Example usage:
//   ts-node src/cli.ts --no-adj --sep="_" --no-cap --numlen=4 --hashlen=2
// outputs: bytecode_fuzzy_penguin123ab
//   ts-node src/cli.ts --sep="-" --no-num
// outputs: Fusion-Sleek-Dolphin
//   ts-node src/cli.ts
// outputs: Quantum-Plucky-Fox456cd
//   ts-node src/cli.ts --no-adj --no-num
// outputs: Nebula-Tiger
