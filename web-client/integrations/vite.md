# Nimiq Web Client in Vite

The Nimiq Web Client ships with support for Vite.

---

<!--@include: ./_installation-vite.md-->

Update your `vite.config.js`:

```javascript
import topLevelAwait from 'vite-plugin-top-level-await' // [!code ++]
import wasm from 'vite-plugin-wasm' // [!code ++]

export default defineConfig({
  plugins: [
    wasm(), // [!code ++]
    topLevelAwait(), // [!code ++]
  ],
  worker: { // [!code ++]
    plugins: () => [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ] // [!code ++]
  }, // [!code ++]

  optimizeDeps: { // [!code ++]
    exclude: ['@nimiq/core'], // [!code ++]
  }, // [!code ++]
})
```

Now you are ready to go!

<!--@include: ../_demo.bundler.md-->

<!--@include: ./_contribute.md-->
