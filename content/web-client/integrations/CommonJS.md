---
icon: i-tabler:package
description: Use the Nimiq Web Client with CommonJS require() in Node.js environments.
navigation:
  title: CommonJS
  order: 5
---

# Nimiq Web Client CommonJS Integration

Integrate Nimiq Web Client using CommonJS `require()` for Node.js environments.

## Installation

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

## Usage Example

```javascript
const Nimiq = require('@nimiq/core')

async function main() {
  const config = new Nimiq.ClientConfiguration()
  const client = await Nimiq.Client.create(config.build())
  await client.waitForConsensusEstablished()
}
main()
```

## Next steps

Once your client is connected, see the [guides](../guides/query-the-blockchain) to start building. For other integration options, see [Vite](./vite), [Nuxt](./nuxt), [Next.js](./NextJS), or [ESM](./ESM).
