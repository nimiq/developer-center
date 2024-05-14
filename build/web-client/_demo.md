```js
import init, { Client, ClientConfiguration } from '@nimiq/core-web/web'

await init()

const config = new ClientConfiguration()
const client = await Client.create(config.build())

await client.waitForConsensusEstablished()
```
