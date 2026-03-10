<!-- eslint-disable antfu/no-top-level-await -->
```js
import { Client, ClientConfiguration } from '@nimiq/core'

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```
