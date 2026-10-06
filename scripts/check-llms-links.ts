import assert from 'node:assert/strict'
import { argv } from 'node:process'

const baseURL = new URL(argv[2] || 'http://localhost:3000/')
const indexResponse = await fetch(new URL('llms.txt', baseURL))
assert.equal(indexResponse.status, 200, 'llms.txt must be available')
const index = await indexResponse.text()
const links = [...index.matchAll(/^- \[[^\n]*\]\((https?:\/\/[^)]+)\)/gm)].map(match => match[1]!)
const fullLink = links.find(link => link.endsWith('/llms-full.txt'))
assert.ok(fullLink, 'llms.txt must link to the full documentation')
const publishedBase = fullLink.slice(0, -'llms-full.txt'.length)
assert.ok(links.some(link => link.includes('/raw/')), 'llms.txt must include raw documentation links')

const failures: string[] = []
for (let offset = 0; offset < links.length; offset += 8) {
  await Promise.all(links.slice(offset, offset + 8).map(async (link) => {
    // Check this deployment even when its index uses the public domain.
    const url = new URL(link.startsWith(publishedBase) ? link.slice(publishedBase.length) : link, baseURL)
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(30_000) })
      assert.equal(response.status, 200, `HTTP ${response.status}`)
      const raw = url.pathname.includes('/raw/')
      assert.match(response.headers.get('content-type') || '', raw ? /^text\/markdown/ : /^text\/plain/)
      const markdown = await response.text()
      assert.match(markdown, /^(?:---\r?\n[\s\S]*?\r?\n---\r?\n)?# /, 'Documentation must start with a title after optional frontmatter')
      assert.ok(markdown.trim().length > 0, 'Documentation must not be empty')
    }
    catch (error) {
      failures.push(`${url}: ${error instanceof Error ? error.message : error}`)
    }
  }))
}

assert.equal(failures.length, 0, `${failures.length}/${links.length} broken LLM links:\n${failures.join('\n')}`)
console.log(`Checked ${links.length} LLM links: all return documentation.`)
