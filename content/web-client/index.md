---
icon: i-tabler:layout-grid
title: Nimiq Web Client
description: The JavaScript library that lets you build blockchain applications directly in the browser — zero servers, zero complexity.
---

::u-page-hero
---
title: Nimiq Web Client
description: The JavaScript library that lets you build blockchain applications directly in the browser — zero servers, zero complexity.
---
::

## Start with 4 lines of code

Get up and running in under a minute.

::code-group

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

::

::code-group

```js [browser.js]
import init, * as Nimiq from '@nimiq/core'

await init()

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

```js [Node.js]
import Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

::

::u-page-section
---
headline: Why Choose Web Client
title: Skip the Infrastructure, Build the Future
description: Traditional blockchain apps require servers, databases, and complex setups. Nimiq Web Client connects directly to the blockchain from any browser.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Zero Infrastructure
    description: No servers, APIs, or third-party dependencies
    icon: i-nimiq:duotone-network
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Fast Sync
    description: Connect to the network in seconds, not hours
    icon: i-nimiq:duotone-speedmeter
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Mobile Ready
    description: Works on phones, tablets, and desktops
    icon: i-nimiq:duotone-incognito
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: WebAssembly Powered
    description: Rust performance compiled to WASM
    icon: i-nimiq:verified
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Developer Friendly
    description: Modern JavaScript APIs you already know
    icon: i-nimiq:widget
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Always Online
    description: Your users' data stays with them
    icon: i-nimiq:watch-1-50
    variant: outline
    ---
    ::::
  :::
::

::callout{icon="i-tabler:device-laptop" to="./browser-vs-server"}
**Building for browser or server environment?** — Learn about the differences between browser and Node.js implementations and choose the right approach.
::

::callout{icon="i-tabler:arrows-exchange"}
**Need More Power?** — For advanced use cases, consider our [RPC interface](/rpc/) with full node capabilities, or [compare Web Client vs RPC](./web-client-vs-rpc).
::

::u-page-section
---
headline: Get Started
title: Choose Your Stack
description: Nimiq works with the tools you already use. Pick your framework and start building in minutes.
---

  :::u-page-grid
    ::::u-page-card
    ---
    title: Vite
    description: Lightning-fast development with hot reload
    icon: i-logos:vitejs
    to: ./integrations/vite
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Next.js
    description: Full-stack React with server-side rendering
    icon: i-logos:nextjs-icon
    to: ./integrations/NextJS
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: Nuxt
    description: Vue.js framework with auto-imports
    icon: i-logos:nuxt-icon
    to: ./integrations/nuxt
    variant: outline
    ---
    ::::

    ::::u-page-card
    ---
    title: ESM
    description: Native ES modules for modern browsers
    icon: i-logos:javascript
    to: ./integrations/ESM
    variant: outline
    ---
    ::::
  :::
::
