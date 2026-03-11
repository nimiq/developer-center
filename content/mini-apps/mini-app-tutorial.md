---
icon: i-tabler:rocket
navigation:
  title: Build Your First Mini App
  order: 2
---

<!-- url: https://nimiq.com/developers/mini-apps/mini-app-tutorial -->
<!-- type: setup guide -->
<!-- summary: Guide to setting up a Nimiq Pay minimal mini app dev -->

# Build Your First Nimiq Mini App

::callout{icon="i-tabler-info-circle" color="info"}
**Temporary Testing Access**

Mini app testing is currently limited to allowlisted users.

- On iOS, share the email associated with your Apple account. Install TestFlight, and the Nimiq Pay test build will appear there once your account is allowlisted.
- On Android, share the email associated with your Google account. You will receive an email when access is enabled.
::

In this tutorial, you’ll build a minimal mini app that runs inside Nimiq Pay and calls three Nimiq provider methods:

| Method | Description |
| --- | --- |
| `listAccounts()` | Get available Nimiq addresses from the wallet |
| `isConsensusEstablished()` | Check if the wallet has network consensus |
| `getBlockNumber()` | Get the current blockchain height |

## 1. Create the project

Scaffold your app with one of these framework options:

::code-group

```bash [Vue + Vite]
npm create vite@latest my-mini-app -- --template vue-ts
cd my-mini-app
npm install
```

```bash [React + JSX]
npm create vite@latest my-mini-app -- --template react
cd my-mini-app
npm install
```

```bash [Svelte]
npm create vite@latest my-mini-app -- --template svelte
cd my-mini-app
npm install
```

::

## 2. Configure the dev server

Enable network access so Nimiq Pay on your device can reach the app:

::code-group

```ts [Vue + Vite (vite.config.ts)]
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
  },
})
```

```js [React + JSX (vite.config.js)]
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
```

```js [Svelte (vite.config.js)]
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5173,
    host: true,
  },
})
```

::

## 3. Add mini app logic and UI

Replace the main app component with the variant for your framework:

::code-group

```vue [Vue + Vite (src/App.vue)]
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface NimiqProvider {
  listAccounts: () => Promise<string[]>
  isConsensusEstablished: () => Promise<boolean>
  getBlockNumber: () => Promise<number>
}

declare global {
  interface Window {
    nimiq?: NimiqProvider
  }
}

const isAvailable = ref(false)
const accounts = ref<string[] | null>(null)
const consensus = ref<boolean | null>(null)
const blockNumber = ref<number | null>(null)
const errorMessage = ref<string | null>(null)

let checkInterval: number | undefined

onMounted(() => {
  isAvailable.value = !!window.nimiq
  checkInterval = window.setInterval(() => {
    if (window.nimiq) {
      isAvailable.value = true
      clearInterval(checkInterval)
    }
  }, 500)
})

onUnmounted(() => {
  if (checkInterval)
    clearInterval(checkInterval)
})

async function runThreeRequests() {
  if (!window.nimiq)
    return

  errorMessage.value = null

  try {
    const [accountsResult, consensusResult, blockResult] = await Promise.all([
      window.nimiq.listAccounts(),
      window.nimiq.isConsensusEstablished(),
      window.nimiq.getBlockNumber(),
    ])

    accounts.value = accountsResult
    consensus.value = consensusResult
    blockNumber.value = blockResult
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : String(error)
  }
}
</script>

<template>
  <div style="padding: 24px; font-family: system-ui;">
    <h1>Nimiq Mini App</h1>

    <p v-if="!isAvailable">
      Open this inside Nimiq Pay to access <code>window.nimiq</code>.
    </p>

    <button :disabled="!isAvailable" @click="runThreeRequests">
      Run 3 requests
    </button>

    <pre v-if="accounts">Accounts: {{ accounts }}</pre>
    <pre v-if="consensus !== null">Consensus: {{ consensus }}</pre>
    <pre v-if="blockNumber !== null">Block: {{ blockNumber }}</pre>

    <p v-if="errorMessage" style="color: #c00;">
      {{ errorMessage }}
    </p>
  </div>
</template>
```

```jsx [React + JSX (src/App.jsx)]
import { useEffect, useState } from 'react'

function App() {
  const [isAvailable, setIsAvailable] = useState(Boolean(window.nimiq))
  const [accounts, setAccounts] = useState(null)
  const [consensus, setConsensus] = useState(null)
  const [blockNumber, setBlockNumber] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const checkInterval = window.setInterval(() => {
      if (window.nimiq) {
        setIsAvailable(true)
        window.clearInterval(checkInterval)
      }
    }, 500)

    return () => window.clearInterval(checkInterval)
  }, [])

  async function runThreeRequests() {
    if (!window.nimiq)
      return

    setErrorMessage(null)

    try {
      const [accountsResult, consensusResult, blockResult] = await Promise.all([
        window.nimiq.listAccounts(),
        window.nimiq.isConsensusEstablished(),
        window.nimiq.getBlockNumber(),
      ])

      setAccounts(accountsResult)
      setConsensus(consensusResult)
      setBlockNumber(blockResult)
    }
    catch (error) {
      setErrorMessage(error instanceof Error ? error.message : String(error))
    }
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Nimiq Mini App</h1>

      {!isAvailable && (
        <p>
          Open this inside Nimiq Pay to access
          {' '}
          <code>window.nimiq</code>
          .
        </p>
      )}

      <button disabled={!isAvailable} onClick={runThreeRequests}>
        Run 3 requests
      </button>

      {accounts && (
        <pre>
          Accounts:
          {JSON.stringify(accounts)}
        </pre>
      )}
      {consensus !== null && (
        <pre>
          Consensus:
          {String(consensus)}
        </pre>
      )}
      {blockNumber !== null && (
        <pre>
          Block:
          {String(blockNumber)}
        </pre>
      )}

      {errorMessage && <p style={{ color: '#c00' }}>{errorMessage}</p>}
    </div>
  )
}

export default App
```

```svelte [Svelte (src/App.svelte)]
<script>
  import { onMount } from 'svelte'

  let isAvailable = false
  let accounts = null
  let consensus = null
  let blockNumber = null
  let errorMessage = null

  onMount(() => {
    isAvailable = !!window.nimiq

    const checkInterval = window.setInterval(() => {
      if (window.nimiq) {
        isAvailable = true
        window.clearInterval(checkInterval)
      }
    }, 500)

    return () => window.clearInterval(checkInterval)
  })

  async function runThreeRequests() {
    if (!window.nimiq)
      return

    errorMessage = null

    try {
      const [accountsResult, consensusResult, blockResult] = await Promise.all([
        window.nimiq.listAccounts(),
        window.nimiq.isConsensusEstablished(),
        window.nimiq.getBlockNumber(),
      ])

      accounts = accountsResult
      consensus = consensusResult
      blockNumber = blockResult
    }
    catch (error) {
      errorMessage = error instanceof Error ? error.message : String(error)
    }
  }
</script>

<div style="padding: 24px; font-family: system-ui;">
  <h1>Nimiq Mini App</h1>

  {#if !isAvailable}
    <p>
      Open this inside Nimiq Pay to access <code>window.nimiq</code>.
    </p>
  {/if}

  <button disabled={!isAvailable} on:click={runThreeRequests}>
    Run 3 requests
  </button>

  {#if accounts}
    <pre>Accounts: {JSON.stringify(accounts)}</pre>
  {/if}

  {#if consensus !== null}
    <pre>Consensus: {String(consensus)}</pre>
  {/if}

  {#if blockNumber !== null}
    <pre>Block: {String(blockNumber)}</pre>
  {/if}

  {#if errorMessage}
    <p style="color: #c00;">{errorMessage}</p>
  {/if}
</div>
```

::

## 4. Run the mini app

Start the Vite dev server:

```bash
npm run dev -- --host
```

Note the **Network** URL in the terminal, for example:

```bash
http://192.168.1.42:5173
```

## 5. Test inside Nimiq Pay

1. Make sure your phone and dev machine are on the same Wi‑Fi network.
2. Open **Nimiq Pay**.
3. Go to **Mini Apps**.
4. Enter your network URL: `http://<your-ip>:5173`

Open your mini app and tap **Run 3 requests**.

You should see:

- Your Nimiq account address.
- Whether consensus is established.
- The current Nimiq block number.

If you see an error message, confirm:

- You are opening the app inside Nimiq Pay (not a regular browser).
- `window.nimiq` exists in the console.
- Your dev server is reachable from the device.

From here, you can start adding your own UI, additional Nimiq calls, or mix in `window.ethereum` to build dual-chain mini apps.

For the full list of available methods and events, see the [Nimiq Provider API](/mini-apps/api-reference/nimiq-provider) and [Ethereum Provider API](/mini-apps/api-reference/ethereum-provider).

You can also check [this demo](https://github.com/Eligioo/nimiq-mini-app-demo) repository to see all supported methods.
