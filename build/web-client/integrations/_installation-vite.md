## Installation {.mt-16}

::: code-group

```bash [npm]
npm install @nimiq/core
npm install -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [yarn]
yarn add @nimiq/core
yarn add -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [pnpm]
pnpm add @nimiq/core
pnpm add -D vite-plugin-top-level-await vite-plugin-wasm
```

```bash [bun]
bun add @nimiq/core
bun add -D vite-plugin-top-level-await vite-plugin-wasm
```

:::

<Callout type="info">

Currently, Vite does not support WebAssembly out of the box. To enable WebAssembly support, you need to install the `vite-plugin-wasm` plugin. Learn more <b>[here](https://vitejs.dev/guide/features#webassembly)</b>.

</Callout>
