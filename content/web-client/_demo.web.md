<!-- eslint-disable antfu/no-top-level-await -->
```js
import init, { Client, ClientConfiguration } from '@nimiq/core/web'

await init()

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```
