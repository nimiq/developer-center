# Install for CommonJS

The Nimiq Web Client ships with support for CommonJS.

---

<!--@include: ./_installation.md-->

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
