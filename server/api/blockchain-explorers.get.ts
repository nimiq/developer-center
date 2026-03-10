import { defineCachedEventHandler } from 'nitropack/runtime'

export default defineCachedEventHandler(async () => {
  return await $fetch('https://raw.githubusercontent.com/nimiq/awesome/main/src/data/dist/nimiq-explorers.json')
}, {
  maxAge: 60 * 60,
})
