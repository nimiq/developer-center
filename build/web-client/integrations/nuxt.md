# Nimiq Web Client in Nuxt

The Nimiq Web Client ships with support for Nuxt.

---

<!--@include: ./_installation-vite.md-->

Update your `nuxt.config.js`:

```javascript
import wasm from "vite-plugin-wasm"; // [!code ++]
import topLevelAwait from "vite-plugin-top-level-await"; // [!code ++]

export default defineNuxtConfig({
  ssr: false, // Nimiq Web Client is client-side only. You can wrap the parts of you are that use the WebClient using <ClientOnly>

  vite: { // [!code ++]
    plugins: [ // [!code ++]
      wasm(), // [!code ++]
      topLevelAwait(), // [!code ++]
    ], // [!code ++]

    optimizeDeps: { // [!code ++]
      exclude: ['@nimiq/core'], // [!code ++]
    }, // [!code ++]
  } // [!code ++]
})
```

<Callout type="warning">

The Web Client cannot run in the server. To ensure that the package only runs on the client side, you have three options:

- Set `ssr: false` in your Nuxt config. If you use this option, consider also using [loading template](https://nuxt.com/docs/api/nuxt-config#spaloadingtemplate).
- Wrap it in `<ClientOnly>`.

</Callout>

Now you are ready to go!

<!--@include: ../_demo.md-->

<!--@include: ./_contribute.md-->
