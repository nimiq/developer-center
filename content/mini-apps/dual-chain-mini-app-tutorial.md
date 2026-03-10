---
icon: i-tabler:arrows-split-2
---

<!-- url: https://nimiq.com/developers/mini-apps/dual-chain-mini-app-tutorial -->
<!-- type: setup guide -->
<!-- summary: Build a mini app that uses both Nimiq and Ethereum providers with user confirmation flows -->

# Build a Dual-Chain Mini App with Nimiq Pay

::callout{icon="i-tabler-info-circle" color="info"}
**Temporary Testing Access**

Mini app testing is currently limited to allowlisted users.

- On iOS, share the email associated with your Apple account. Install TestFlight, and the Nimiq Pay test build will appear there once your account is allowlisted.
- On Android, share the email associated with your Google account. You will receive an email when access is enabled.
::

In this tutorial, you will build a mini app that uses both injected providers:

- `window.nimiq` for Nimiq account and signing flows
- `window.ethereum` for EIP-1193 account and signing flows

You will implement methods that require user confirmations so you can test real wallet interactions end to end.

## 1. What you'll build

The mini app includes two action buttons:

| Flow | Methods | User confirmation expected |
| --- | --- | --- |
| Nimiq | `listAccounts()` -> `sign()` | 2 prompts (account sharing, signing) |
| Ethereum | `eth_requestAccounts` -> `personal_sign` | 2 prompts (account connection, signing) |

## 2. Prerequisites

- **Node.js** (version 22+ required)
- **Nimiq Pay** app on a mobile device (or emulator)
- Phone and dev machine on the same Wi-Fi network
- At least one Ethereum account available in Nimiq Pay for the Ethereum success path

## 3. Create the project

Use Vite with Vue + TypeScript for this tutorial:

```bash
npm create vite@latest my-mini-app -- --template vue-ts
cd my-mini-app
npm install
```

## 4. Configure the dev server

Edit `vite.config.ts`:

```ts
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

## 5. Add the dual-chain mini app

In `src/App.vue`, use separate script, template, and style blocks.

### 5.1 Add the script block

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface NimiqProvider {
  listAccounts: () => Promise<string[]>
  sign: (message: string | { message: string, isHex: boolean }) => Promise<unknown>
}

interface EthereumProvider {
  request: (args: { method: string, params?: unknown[] | Record<string, unknown> }) => Promise<any>
}

declare global {
  interface Window {
    nimiq?: NimiqProvider
    ethereum?: EthereumProvider
  }
}

const loading = ref(false)
const status = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

const nimiqAccounts = ref<string[] | null>(null)
const nimiqSignature = ref<string | null>(null)
const ethAccounts = ref<string[] | null>(null)
const ethSignature = ref<string | null>(null)

// Convert a UTF-8 string to hex for personal_sign.
function toHexUtf8(input: string) {
  return `0x${Array.from(new TextEncoder().encode(input))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('')}`
}

function resetMessages() {
  errorMessage.value = null
  status.value = null
}

async function runNimiqFlow() {
  if (!window.nimiq) {
    errorMessage.value = 'Nimiq provider not found. Open this app inside Nimiq Pay.'
    return
  }

  resetMessages()
  loading.value = true

  try {
    // Prompt 1: account sharing confirmation.
    status.value = 'Requesting Nimiq accounts...'
    const accounts = await window.nimiq.listAccounts()
    nimiqAccounts.value = accounts
    if (!accounts.length)
      throw new Error('No Nimiq accounts returned.')

    // Prompt 2: signing confirmation.
    status.value = 'Requesting Nimiq signing confirmation...'
    const signatureResult = await window.nimiq.sign('Nimiq Pay dual-chain tutorial')
    nimiqSignature.value = JSON.stringify(signatureResult, null, 2)
    status.value = 'Nimiq flow completed.'
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : String(error)
    status.value = 'Nimiq flow failed.'
  }
  finally {
    loading.value = false
  }
}

async function runEthereumFlow() {
  if (!window.ethereum) {
    errorMessage.value = 'Ethereum provider not found. Open this app inside Nimiq Pay.'
    return
  }

  resetMessages()
  loading.value = true

  try {
    // Prompt 1: wallet connection confirmation.
    status.value = 'Requesting Ethereum accounts...'
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    }) as string[]
    ethAccounts.value = accounts
    if (!accounts.length)
      throw new Error('No Ethereum accounts returned.')

    // Prompt 2: signing confirmation.
    const message = toHexUtf8('Nimiq Pay dual-chain tutorial')
    status.value = 'Requesting Ethereum signing confirmation...'
    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, accounts[0]],
    }) as string
    ethSignature.value = signature
    status.value = 'Ethereum flow completed.'
  }
  catch (error) {
    errorMessage.value = error instanceof Error ? error.message : String(error)
    status.value = 'Ethereum flow failed.'
  }
  finally {
    loading.value = false
  }
}
</script>
```

### 5.2 Add the template block

```vue
<template>
  <div class="app">
    <h1>Dual-Chain Mini App</h1>

    <div class="actions">
      <button :disabled="loading" @click="runNimiqFlow">
        Run Nimiq flow
      </button>
      <button :disabled="loading" @click="runEthereumFlow">
        Run Ethereum flow
      </button>
    </div>

    <p v-if="status">
      <strong>Status:</strong> {{ status }}
    </p>
    <p v-if="errorMessage" class="error">
      <strong>Error:</strong> {{ errorMessage }}
    </p>

    <h2>Nimiq Output</h2>
    <pre v-if="nimiqAccounts" class="result">Accounts: {{ JSON.stringify(nimiqAccounts, null, 2) }}</pre>
    <pre v-if="nimiqSignature" class="result">Signature: {{ nimiqSignature }}</pre>

    <h2>Ethereum Output</h2>
    <pre v-if="ethAccounts" class="result">Accounts: {{ JSON.stringify(ethAccounts, null, 2) }}</pre>
    <pre v-if="ethSignature" class="result">Signature: {{ ethSignature }}</pre>
  </div>
</template>
```

### 5.3 Add the style block (mobile-friendly)

```vue
<style scoped>
.app {
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #1f3553;
}

h1 {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 7vw, 2.4rem);
  line-height: 1.2;
}

h2 {
  margin: 1rem 0 0.5rem;
}

.actions {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  min-height: 44px;
  border: none;
  border-radius: 0.625rem;
  padding: 0.625rem 0.875rem;
  font-weight: 600;
  background: #1f3553;
  color: #fff;
}

button:disabled {
  opacity: 0.55;
}

.error {
  color: #b31b1b;
}

.result {
  margin: 0 0 0.625rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  background: #f5f8fc;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (min-width: 640px) {
  .actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
```

## 6. Run the mini app

```bash
npm run dev -- --host
```

Copy the **Network** URL from the terminal output, for example:

```bash
http://192.168.1.42:5173
```

## 7. Test inside Nimiq Pay

1. Make sure your phone and dev machine are on the same Wi‑Fi network.
2. Open **Nimiq Pay**.
3. Go to **Mini Apps**.
4. Enter your network URL: `http://<your-ip>:5173`

Open your mini app, tap **Run Nimiq flow**, then tap **Run Ethereum flow**.

You should see:

- Nimiq accounts and a Nimiq signature response.
- Ethereum account(s) and an Ethereum signature response.

## 8. Troubleshooting

**No Ethereum account returned**\
  The Ethereum success path requires at least one account available through Nimiq Pay.

**Cannot open local URL from phone**\
  Restart the dev server with `--host`, then use the terminal's Network URL.

**Port 5173 is busy**\
  Vite chooses another port automatically (for example `5174` or `5175`). Always use the exact Network URL shown in the terminal.
