# Nimiq Web Client Vite Integration

Integrate Nimiq Web Client with Vite for fast blockchain development with minimal configuration.

## Quick Start with Templates

Get started instantly with our pre-configured starter templates:

::: code-group
```bash [Vue]
npx degit onmax/nimiq-starter/starters/vue-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```

```bash [React]
npx degit onmax/nimiq-starter/starters/react-ts my-nimiq-app
cd my-nimiq-app && pnpm install && pnpm dev
```
:::

## Installation

Install the Nimiq Web Client:

::: code-group

```bash [pnpm]
pnpm add @nimiq/core
```

```bash [npm]
npm install @nimiq/core
```

```bash [yarn]
yarn add @nimiq/core
```

```bash [bun]
bun add @nimiq/core
```

:::

## Configuration

The Nimiq Web Client includes a Vite plugin that automatically configures WebAssembly support and all required optimizations.

> [!TIP]
> View the [plugin source code](https://github.com/nimiq/core-rs-albatross/blob/main/web-client/dist/vite.js) for implementation details.

Update your `vite.config.ts`:

::: code-group

```ts [vite.config.ts]
import nimiq from '@nimiq/core/vite' // [!code ++]
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [nimiq()], // [!code ++]
})
```

:::

The plugin automatically configures:
- WebAssembly support with `vite-plugin-wasm`
- Worker configuration for WASM modules (opt-out via `{ worker: false }`)
- Build target optimizations (`esnext`)
- Dependency exclusions for `@nimiq/core`

<details>
<summary>Legacy Browser Support</summary>

Modern browsers (Chrome 89+, Firefox 89+, Safari 15+, Edge 89+) support top-level await natively. If you need to support older browsers, install `vite-plugin-top-level-await`:

::: code-group

```bash [pnpm]
pnpm add -D vite-plugin-top-level-await
```

```bash [npm]
npm install -D vite-plugin-top-level-await
```

```bash [yarn]
yarn add -D vite-plugin-top-level-await
```

```bash [bun]
bun add -D vite-plugin-top-level-await
```

:::

Then add it to your Vite config:

::: code-group

```ts [vite.config.ts]
import nimiq from '@nimiq/core/vite'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]

export default defineConfig({
  plugins: [
    nimiq(),
    topLevelAwait(), // [!code ++]
  ],
})
```

:::

> [!NOTE]
> Top-level await is required for ES modules when using dynamic WASM imports. The plugin transforms top-level await to work in older browsers.

</details>

## Usage Example

<!--@include: ../_demo.web.md-->
