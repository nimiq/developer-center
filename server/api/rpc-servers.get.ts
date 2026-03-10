import { defineCachedEventHandler } from 'nitropack/runtime'

export default defineCachedEventHandler(async () => {
  return await $fetch('https://raw.githubusercontent.com/nimiq/awesome/main/src/data/dist/rpc-servers.json')
}, {
  maxAge: 60 * 60,
})
