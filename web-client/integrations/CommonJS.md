# Install for CommonJS

The Nimiq Web Client ships with support for CommonJS.

---

## Installation

::: code-group

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

:::

And now you are ready to go!

```javascript
const Nimiq = require('@nimiq/core')

async function main() {
  const config = new Nimiq.ClientConfiguration()
  const client = await Nimiq.Client.create(config.build())
}
main()
```

<!--@include: ./_contribute.md-->
