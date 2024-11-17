# Nimiq Identicons

<div flex="~ items-baseline gap-16 justify-start" mt-20 nq-mb-48 class="nq-raw">
    <a href="https://www.nimiq.com/blog/nimiq-identicons/" nq-pill-tertiary nq-pill-sm cursor-pointer nq-arrow flex="~ gap-8 items-center" un-text="neutral-900">
      <div i-nimiq:info op-80 />
      Blog Post
    </a>
    <a href="https://github.com/onmax/nimiq-identicons" nq-pill-tertiary nq-pill-sm cursor-pointer nq-arrow flex="~ gap-8 items-center" un-text="neutral-900">
      <div i-nimiq:logos-github op-80 />
      Source code
    </a>
  </div>

A simple, visually recognizable way to verify addresses.{.nq-subline}

<Identicon />

## More than 9 Million combintations!

Each Identicon is a unique combination of colors and shapes based on an account's hash, providing instant visual confirmation.

<Suspense>
  <IdenticonBuilder mt-16 />
</Suspense>

## Installation

To start using Nimiq Identicons in your project, run:

::: code-group

```bash [npm]
npm install identicons-esm
```

```bash [yarn]
yarn add identicons-esm
```

```bash [pnpm]
pnpm add identicons-esm
```

```bash [bun]
bun add identicons-esm
```
:::

## Basic Usage

Import and create an identicon using `createIdenticon`:

```ts
import { createIdenticon } from 'identicons-esm'

const input = 'Your input here'
const svg = await createIdenticon(input)
```

## Customization

For specific colors or sections of the identicon, use `getIdenticonsParams`:

```ts
import { ensambleSvg, formatIdenticon, getIdenticonsParams } from 'identicons-esm'

const input = 'Your input here'
const { colors, sections } = await getIdenticonsParams(input)

// You can modify any parameter as you wish
// colors.background, colors.main, colors.accent
// sections.top, sections.bottom, sections.sides, sections.face (SVG paths)

// Generate SVG string
const customSvg = ensambleSvg({ colors, sections, /* Other optional values to overwrite default backgroundShape, innerShadow, circleShape */ })

// Also possible to change the Identicon format
const formatted = formatIdenticon(customSvg, { format: 'image/svg+xml' })
```

## Migration from Legacy

This module has updated performance and packaging over the legacy version.

<details>

<summary>

### Generating a SVG {.nq-no-prose}

</summary>

<div px-20>

#### Old {.mt-0}

```js
import Identicons from '@nimiq/identicons/dist/identicons.min.js'
IdenticonsLegacy.svgPath = '@nimiq/identicons/dist/identicons.min.svg'

const input = 'Your input here'
const svg = await Identicons.svg(input)
```

#### New {.mt-0}

```js
import { createIdenticon } from 'identicons-esm'

const input = 'Your input here'
const svg = await createIdenticon(input)
```

</div>

</details>

<details>

<summary>

### Generating a Data URI {.nq-no-prose}

</summary>

<div px-20>

#### Old {.mt-0}

```js
import Identicons from '@nimiq/identicons/dist/identicons.min.js'
IdenticonsLegacy.svgPath = '@nimiq/identicons/dist/identicons.min.svg'

const input = 'Your input here'
const svg = await Identicons.toDataUri(input)
```

#### New {.mt-0}

```ts
import { createIdenticon } from 'identicons-esm'

const input = 'Your input here'
const svg = await createIdenticon(input, { format: 'image/svg+xml' })
```

</div>

</details>

### Discontiuned functions

There are functions in the original library that are not included in this implementation due to lack of use. These functions are:

- `makeLetterHash`
- `wordsByEntropy`
- `Identicons.render`
- `Identicons.image`
- `Identicons.placeholder`
