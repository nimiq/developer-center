---
description: Guide to setting up a Nimiq Pay minimal mini app dev
icon: i-tabler:rocket
navigation:
  title: Build Your First Mini App
  order: 2
---

# Build Your First Nimiq Mini App

::callout{icon="i-tabler-info-circle" color="info" title="Temporary Testing Access"}

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

## 2. Install the Nimiq Mini App SDK

Install the Nimiq Mini App SDK. For package details, see [`@nimiq/mini-app-sdk`](https://www.npmjs.com/package/@nimiq/mini-app-sdk).

```bash
npm install @nimiq/mini-app-sdk
```

## 3. Configure the dev server

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

## 4. Add mini app logic and UI

Replace the main app component with the variant for your framework:

::code-group

```vue [Vue + Vite (src/App.vue)]
<script setup lang="ts">
import { init } from '@nimiq/mini-app-sdk'
import { onMounted, ref } from 'vue'

let nimiqPromise: ReturnType<typeof init> | null = null
const isConnecting = ref(true)
const isReady = ref(false)
const accounts = ref<string[] | null>(null)
const consensus = ref<boolean | null>(null)
const blockNumber = ref<number | null>(null)
const errorMessage = ref<string | null>(null)

function getProviderErrorMessage(value: unknown): string | null {
  if (typeof value !== 'object' || value === null || !('error' in value))
    return null

  const maybeError = (value as { error?: { message?: unknown } }).error
  if (maybeError && typeof maybeError.message === 'string')
    return maybeError.message

  return 'Provider request failed.'
}

onMounted(async () => {
  try {
    nimiqPromise = init({ timeout: 10_000 })
    await nimiqPromise
    isReady.value = true
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : String(error)
  }
  finally {
    isConnecting.value = false
  }
})

async function runThreeRequests() {
  if (!nimiqPromise)
    return

  errorMessage.value = null

  try {
    const nimiq = await nimiqPromise
    const [accountsResult, consensusResult, blockResult] = await Promise.all([
      nimiq.listAccounts(),
      nimiq.isConsensusEstablished(),
      nimiq.getBlockNumber(),
    ])

    const accountsError = getProviderErrorMessage(accountsResult)
    if (accountsError)
      throw new Error(accountsError)

    accounts.value = accountsResult as string[]
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

    <p v-if="isConnecting">
      Waiting for Nimiq Pay to initialize the provider...
    </p>

    <p v-else-if="!isReady">
      Open this mini app inside Nimiq Pay to connect to the Nimiq provider.
    </p>

    <button :disabled="isConnecting || !isReady" @click="runThreeRequests">
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
import { init } from '@nimiq/mini-app-sdk'
import { useEffect, useRef, useState } from 'react'

function getProviderErrorMessage(value) {
  if (typeof value !== 'object' || value === null || !('error' in value))
    return null

  const maybeError = value.error
  if (maybeError && typeof maybeError.message === 'string')
    return maybeError.message

  return 'Provider request failed.'
}

function App() {
  const nimiqPromiseRef = useRef(null)
  const [isConnecting, setIsConnecting] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [accounts, setAccounts] = useState(null)
  const [consensus, setConsensus] = useState(null)
  const [blockNumber, setBlockNumber] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    let ignore = false

    async function connect() {
      try {
        nimiqPromiseRef.current = init({ timeout: 10000 })
        await nimiqPromiseRef.current
        if (!ignore)
          setIsReady(true)
      }
      catch (error) {
        if (!ignore)
          setErrorMessage(error instanceof Error ? error.message : String(error))
      }
      finally {
        if (!ignore)
          setIsConnecting(false)
      }
    }

    connect()

    return () => {
      ignore = true
    }
  }, [])

  async function runThreeRequests() {
    if (!nimiqPromiseRef.current)
      return

    setErrorMessage(null)

    try {
      const nimiq = await nimiqPromiseRef.current
      const [accountsResult, consensusResult, blockResult] = await Promise.all([
        nimiq.listAccounts(),
        nimiq.isConsensusEstablished(),
        nimiq.getBlockNumber(),
      ])

      const accountsError = getProviderErrorMessage(accountsResult)
      if (accountsError)
        throw new Error(accountsError)

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

      {isConnecting && (
        <p>Waiting for Nimiq Pay to initialize the provider...</p>
      )}

      {!isConnecting && !isReady && (
        <p>Open this mini app inside Nimiq Pay to connect to the Nimiq provider.</p>
      )}

      <button disabled={isConnecting || !isReady} onClick={runThreeRequests}>
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
  import { init } from '@nimiq/mini-app-sdk'

  let nimiqPromise = null
  let isConnecting = true
  let isReady = false
  let accounts = null
  let consensus = null
  let blockNumber = null
  let errorMessage = null

  function getProviderErrorMessage(value) {
    if (typeof value !== 'object' || value === null || !('error' in value))
      return null

    const maybeError = value.error
    if (maybeError && typeof maybeError.message === 'string')
      return maybeError.message

    return 'Provider request failed.'
  }

  onMount(() => {
    let active = true

    async function connect() {
      try {
        nimiqPromise = init({ timeout: 10000 })
        await nimiqPromise
        if (active)
          isReady = true
      }
      catch (error) {
        if (active)
          errorMessage = error instanceof Error ? error.message : String(error)
      }
      finally {
        if (active)
          isConnecting = false
      }
    }

    connect()

    return () => {
      active = false
    }
  })

  async function runThreeRequests() {
    if (!nimiqPromise)
      return

    errorMessage = null

    try {
      const nimiq = await nimiqPromise
      const [accountsResult, consensusResult, blockResult] = await Promise.all([
        nimiq.listAccounts(),
        nimiq.isConsensusEstablished(),
        nimiq.getBlockNumber(),
      ])

      const accountsError = getProviderErrorMessage(accountsResult)
      if (accountsError)
        throw new Error(accountsError)

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

  {#if isConnecting}
    <p>Waiting for Nimiq Pay to initialize the provider...</p>
  {:else if !isReady}
    <p>
      Open this mini app inside Nimiq Pay to connect to the Nimiq provider.
    </p>
  {/if}

  <button disabled={isConnecting || !isReady} on:click={runThreeRequests}>
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

## 5. Run the mini app

Start the Vite dev server:

```bash
npm run dev -- --host
```

Note the **Network** URL in the terminal, for example:

```bash
http://192.168.1.42:5173
```

## 6. Test inside Nimiq Pay

1. Make sure your phone and dev machine are on the same Wi-Fi network.
2. Open **Nimiq Pay**.
3. Go to **Mini Apps**.
4. Enter your network URL: `http://<your-ip>:5173`

Open your mini app and wait for the provider to initialize. Once the button becomes enabled, tap **Run 3 requests**.

You should see:

- Your Nimiq account address.
- Whether consensus is established.
- The current Nimiq block number.

If you see an error message, confirm:

- You are opening the app inside Nimiq Pay and not a regular browser.
- Your dev server is reachable from the device.
- If your app uses secure-context-only Web APIs, check whether they are available over the local network URL. For example, `crypto.randomUUID()` may not be available at `http://<your-ip>:5173`. Add feature detection and a fallback.

For the full list of available methods and events, see the [Nimiq Provider API](/mini-apps/api-reference/nimiq-provider) and [Ethereum Provider API](/mini-apps/api-reference/ethereum-provider).

You can also check [this demo](https://github.com/Eligioo/nimiq-mini-app-demo) repository to see all supported methods.
