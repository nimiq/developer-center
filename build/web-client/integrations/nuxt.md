# Nimiq Web Client in Nuxt

The Nimiq Web Client ships with support for Nuxt.

---

<!--@include: ./_installation-vite.md-->


Update your `nuxt.config.js`:

```javascript 
import wasm from "vite-plugin-wasm"; // [!code ++]
import topLevelAwait from "vite-plugin-top-level-await"; // [!code ++]

export default defineNuxtConfig({
  vite: { // [!code ++]
    plugins: [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ], // [!code ++]

    optimizeDeps: { // [!code ++]
      exclude: ['@nimiq/core-web'], // [!code ++]
    }, // [!code ++]
  } // [!code ++]
})
```

<Callout type="warning">

Ensure the package is only run client-side: either set `ssr: false` in your Nuxt config, import this package only in client-side plugins, or wrap it in `<ClientOnly>`.

</Callout>

Now you are ready to go!

<!--@include: ../_demo.md-->

<!--@include: ./_contribute.md-->
