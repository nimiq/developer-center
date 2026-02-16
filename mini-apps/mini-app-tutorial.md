<!-- url: https://nimiq.com/developers/mini-apps/mini-app-tutorial -->
<!-- type: setup guide -->
<!-- summary: Guide to setting up a Nimiq Pay minimal mini app dev -->

# Build Your First Nimiq Mini App

In this tutorial, you’ll build a minimal mini app that runs inside Nimiq Pay and calls three Nimiq provider methods:

| Method | Description |
| --- | --- |
| `listAccounts()` | Get available Nimiq addresses from the wallet |
| `isConsensusEstablished()` | Check if the wallet has network consensus |
| `getBlockNumber()` | Get the current blockchain height |

> This guide assumes you’ve already followed the [Developer Setup](/mini-apps/developer-setup.md) page and can open a local URL inside Nimiq Pay.

## 1. Create the project

Use Vite with Vue + TypeScript for this example, but you can use any framework you like.

```bash
npm create vite@latest my-mini-app -- --template vue-ts
cd my-mini-app
npm install
```

## 2. Configure the dev server

Tell Vite to listen on all interfaces so Nimiq Pay on your device can reach it.

Edit `vite.config.ts`:

```ts
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5175,
    host: true,
  },
})
```

## 3. Add the mini app logic

Replace the contents of `src/App.vue` with the following script. It:

- Waits for `window.nimiq` to be injected by Nimiq Pay.
- Calls three methods in parallel.
- Displays the results or any error.

```vue
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface NimiqProvider {
  listAccounts: () => Promise<string[]>
  isConsensusEstablished: () => Promise<boolean>
  getBlockNumber: () => Promise<number>
}

// Extend Window interface to include the Nimiq provider
declare global {
  interface Window {
    nimiq?: NimiqProvider
  }
}

// Reactive state
const isAvailable = ref(false)
const accounts = ref<string[] | null>(null)
const consensus = ref<boolean | null>(null)
const blockNumber = ref<number | null>(null)
const errorMessage = ref<string | null>(null)

let checkInterval: number | undefined

// Provider is injected asynchronously by Nimiq Pay; poll every 500ms until it appears.
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
    // Run requests in parallel
    const [accountsResult, consensusResult, blockResult] = await Promise.all([
      window.nimiq.listAccounts(),
      window.nimiq.isConsensusEstablished(),
      window.nimiq.getBlockNumber(),
    ])

    accounts.value = accountsResult
    consensus.value = consensusResult
    blockNumber.value = blockResult
  }
  catch (err: any) {
    errorMessage.value = err?.message ?? String(err)
  }
}
</script>
```

## 4. Add the UI

Below the `<script setup>` block in the same `App.vue` file, add this template:

```vue
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

## 5. Run the mini app

Start the Vite dev server:

```bash
npm run dev
```

Note the **Network** URL in the terminal, for example:

```text
http://192.168.1.42:5175
```

## 6. Test inside Nimiq Pay

1. Make sure your phone and dev machine are on the same Wi‑Fi network.
2. Open **Nimiq Pay**.
3. Go to **Mini Apps**.
4. Enter your dev URL: `http://<your-ip>:5175`

Open your mini app and tap **Run 3 requests**.

You should see:

- Your Nimiq account address.
- Whether consensus is established.
- The current Nimiq block number.

If you see an error message, confirm:

- You are opening the app inside Nimiq Pay (not a regular browser).
- `window.nimiq` exists in the console.
- Your dev server is reachable from the device.

From here, you can start adding your own UI, additional Nimiq calls, or mix in `window.ethereum` to build multi‑chain mini apps.

You can also check [this demo](https://github.com/Eligioo/nimiq-mini-app-demo) repository to see all supported methods.
