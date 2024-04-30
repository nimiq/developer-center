# Install for CommonJS

The Nimiq Web Client ships with support for CommonJS.

---

## Installation {.mt-16}

::: code-group

```bash [npm]
npm install @nimiq/core-web@next
```

```bash [yarn]
yarn add @nimiq/core-web@next
```

And now you are ready to go!

```javascript
const Nimiq = require("@nimiq/core-web");

async function main() {
    const config = new Nimiq.ClientConfiguration();
    const client = await Nimiq.Client.create(config.build());
}
main();
```

<!--@include: ./_contribute.md-->
