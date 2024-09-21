# Nimiq Web Client in Nuxt

The Nimiq Web Client ships with support for Nuxt.

---

<!--@include: ./_installation-vite.md-->

Update your `nuxt.config.js`:

```javascript
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineNuxtConfig({
  vite: { // [!code ++]
    plugins: [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ], // [!code ++]

    optimizeDeps: { // [!code ++]
      exclude: ['@nimiq/core'], // [!code ++]
    }, // [!code ++]
  }, // [!code ++]

  // Only if you are using SSR or @nimiq/core in the server,
  // otherwise use `ssr: false` or `<ClientOnly />`
  // Check https://github.com/unjs/nitro/issues/1952 for more info
  nitro: { // [!code ++]
    experimental: { // [!code ++]
      wasm: true // [!code ++]
    }, // [!code ++]
  }, // [!code ++]
})
```

Now you are ready to go!

<!--@include: ../_demo.md-->

<!--@include: ./_contribute.md-->
