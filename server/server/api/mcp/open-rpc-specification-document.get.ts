import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

export default defineCachedEventHandler(async () => {
  const specPath = resolve(process.cwd(), '../.vitepress/rpc/openrpc-document.json')
  const spec = await readFile(specPath, 'utf-8')
  return JSON.parse(spec)
}, { maxAge: 3600 })
