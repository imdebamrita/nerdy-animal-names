# Nerdy Animal Names — Random Animal Name Generator

[![npm version](https://badge.fury.io/js/nerdy-animal-names.svg)](https://www.npmjs.com/package/nerdy-animal-names)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js->=14-green.svg)](https://nodejs.org/)
[![npm downloads](https://img.shields.io/npm/dm/nerdy-animal-names.svg)](https://www.npmjs.com/package/nerdy-animal-names)
[![GitHub stars](https://img.shields.io/github/stars/imdebamrita/nerdy-animal-names?style=social)](https://github.com/imdebamrita/nerdy-animal-names)

> Nerdy Animal Names is a random animal name generator for JavaScript and the CLI. It creates funny, nerdy, and unique names like Google Docs — perfect for containers, test data, project names, or any place you need a memorable, collision-safe identifier.

Generate memorable, collision-resistant names perfect for temporary resources, development environments, container names, or anything that needs a fun, unique identifier.

## Table of Contents

- [Features](#features)
- [Why This Random Animal Name Generator?](#why-this-random-animal-name-generator)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [CLI Options](#cli-options)
- [Use Cases](#use-cases)
- [TypeScript](#typescript)
- [Contributing](#contributing)

## Features

- **Nerdy prefixes + animal names**: Tech-themed prefixes combined with cute animal names like “Quantum Otter” or “Cyber Capybara”
- **Collision-safe**: Combines random numbers and hashes for uniqueness
- **Flexible formatting**: Customizable separators, capitalization, and components
- **Zero dependencies**: No runtime dependencies, lightweight bundle
- **TypeScript ready**: Full type definitions included
- **Dual usage**: Use as a library or CLI tool
- **Fast**: Optimized for performance with minimal overhead

## Why This Random Animal Name Generator?

Most random name libraries are either too simple or too heavy. This package strikes the balance:

- Creates unique, **collision-safe random animal names**
- Mimics Google Docs–style codenames like `Quantum-Smart-Otter`
- Works both in JavaScript projects and the CLI
- No dependencies, blazing fast
- Perfect for Docker containers, testing, environments, or playful project naming

## Quick Start

### Installation

```bash
# Install as a dependency
npm install nerdy-animal-names

# Or install globally for CLI usage
npm install -g nerdy-animal-names
```

### Basic Usage

```javascript
import generateName from "nerdy-animal-names";

// Generate a default name
console.log(generateName());
// Output: "Quantum-Smart-Otter123abc4"

// Customize the output
console.log(
  generateName({
    separator: "_",
    capitalize: false,
    numberLength: 2,
  })
);
// Output: "cyber_fluffy_capybara12def5"
```

### CLI Usage

```bash
# Generate a name with default settings
npx nerdy-animal-names
# Output: Meta-Clever-Penguin456ghi7

# Generate without adjectives
npx nerdy-animal-names --no-adj
# Output: Nano-Axolotl789jkl8

# Generate without numbers
npx nerdy-animal-names --no-num
# Output: Astro-Witty-Quokka

# Use custom separator
npx nerdy-animal-names --sep=_
# Output: Hyper_Smart_Wallaby012mno9

# See all CLI options
npx nerdy-animal-names --help
```

## API Reference

### `generateName(options?: Options): string`

Generates a random nerdy animal name with the specified options.

#### Options

| Option         | Type      | Default | Description                                     |
| -------------- | --------- | ------- | ----------------------------------------------- |
| `separator`    | `string`  | `"-"`   | Character(s) to separate name components        |
| `capitalize`   | `boolean` | `true`  | Whether to capitalize each word                 |
| `addNumber`    | `boolean` | `true`  | Whether to append numeric suffix for uniqueness |
| `numberLength` | `number`  | `3`     | Length of the random number suffix              |
| `hashLength`   | `number`  | `4`     | Length of the hash suffix (base36)              |
| `useAdjective` | `boolean` | `true`  | Whether to include adjectives in the name       |

#### Examples

```javascript
import generateName from "nerdy-animal-names";

// Minimal configuration
generateName({ separator: " " });
// "Quantum Brilliant Otter123abc4"

// No numbers for cleaner names
generateName({ addNumber: false });
// "Meta-Clever-Penguin"

// Custom length numbers and hash
generateName({
  numberLength: 5,
  hashLength: 6,
});
// "Cyber-Smart-Capybara12345abcdef"

// No adjectives for shorter names
generateName({ useAdjective: false });
// "Nano-Axolotl456ghi7"

// Lowercase with underscores
generateName({
  capitalize: false,
  separator: "_",
});
// "astro_witty_quokka789jkl8"
```

## CLI Options

The CLI supports the following flags:

| Flag            | Description                    |
| --------------- | ------------------------------ |
| `--no-adj`      | Disable adjectives             |
| `--no-num`      | Disable numeric suffix         |
| `--no-cap`      | Don't capitalize words         |
| `--sep=<char>`  | Set separator character        |
| `--numlen=<n>`  | Set number length (default: 3) |
| `--hashlen=<n>` | Set hash length (default: 4)   |
| `--help`        | Show help message              |

## Use Cases

- **Container names**: `docker run --name quantum-smart-otter123abc4`
- **Temporary files**: `temp_cyber_fluffy_penguin456def7.json`
- **Development environments**: `staging-meta-clever-capybara789ghi8`
- **Test data**: Generate unique identifiers for testing
- **Code names**: Fun project or feature names
- **Database fixtures**: Unique but readable test data

## TypeScript

Full TypeScript support is included out of the box:

```typescript
import generateName, { Options } from "nerdy-animal-names";

const options: Options = {
  separator: "_",
  capitalize: false,
  addNumber: true,
  numberLength: 4,
  hashLength: 5,
  useAdjective: true,
};

const name: string = generateName(options);
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here are some ways you can contribute:

- Add more nerdy prefixes, adjectives, or animals
- Improve the CLI interface
- Add new formatting options
- Improve documentation
- Report bugs or suggest features
- Help us make this the best random animal name generator on npm by adding more prefixes, animals, or fun ideas!

### Development Setup

```bash
# Clone the repository
git clone https://github.com/imdebamrita/nerdy-animal-names.git
cd nerdy-animal-names

# Install dependencies
npm install

# Build the project
npm run build

# Test the CLI
node dist/cli.js
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the naming schemes used by Docker, Google Docs, and other services
- Built with love for the developer community
- Thanks to all contributors and users of this package

## Package Stats

- **Bundle size**: ~5KB minified
- **Runtime dependencies**: 0
- **TypeScript**: Full support
- **Node.js**: >=14
- **License**: MIT

---

Made with ❤️ + ☕ by [Debamrita Paul](https://github.com/imdebamrita)

_The easiest way to generate nerdy, funny, and unique random animal names — anywhere. Need a quick name? Try it now: `npx nerdy-animal-names`_
