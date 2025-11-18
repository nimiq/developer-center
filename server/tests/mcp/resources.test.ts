import { experimental_createMCPClient as createMCPClient } from '@ai-sdk/mcp'
import { describe, expect, it } from 'vitest'

const MCP_URL = 'http://localhost:3000/mcp'

describe('mCP Resources', () => {
  it('should list all available resources', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listResources()

    expect(result).toBeDefined()
    expect(result.resources).toBeDefined()
    expect(Array.isArray(result.resources)).toBe(true)
    expect(result.resources.length).toBeGreaterThan(0)
  })

  it('should have nimiq-documentation-pages resource', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listResources()

    const docsResource = result.resources.find(r => r.name === 'nimiq-documentation-pages')
    expect(docsResource).toBeDefined()
    expect(docsResource?.uri).toBe('resource://nimiq/documentation-pages')
    expect(docsResource?.description).toContain('JSON list of all available')
  })

  it('should have nimiq-tutorials resource', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listResources()

    const tutorialsResource = result.resources.find(r => r.name === 'nimiq-tutorials')
    expect(tutorialsResource).toBeDefined()
    expect(tutorialsResource?.uri).toBe('resource://nimiq/tutorials')
    expect(tutorialsResource?.description).toContain('JSON list of hands-on')
  })

  it('should have nimiq-open-rpc-specification-document resource', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listResources()

    const specResource = result.resources.find(r => r.name === 'nimiq-open-rpc-specification-document')
    expect(specResource).toBeDefined()
    expect(specResource?.uri).toBe('resource://nimiq/open-rpc-specification-document')
    expect(specResource?.description).toContain('Complete OpenRPC specification')
  })

  it('should read nimiq-documentation-pages resource content', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.readResource({ uri: 'resource://nimiq/documentation-pages' })

    expect(result).toBeDefined()
    expect(result.contents).toBeDefined()
    expect(Array.isArray(result.contents)).toBe(true)
    expect(result.contents[0].mimeType).toBe('application/json')

    const data = JSON.parse(result.contents[0].text)
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toHaveProperty('title')
    expect(data[0]).toHaveProperty('path')
    expect(data[0]).toHaveProperty('module')
  })

  it('should read nimiq-tutorials resource content', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.readResource({ uri: 'resource://nimiq/tutorials' })

    expect(result).toBeDefined()
    expect(result.contents).toBeDefined()
    expect(Array.isArray(result.contents)).toBe(true)
    expect(result.contents[0].mimeType).toBe('application/json')

    const data = JSON.parse(result.contents[0].text)
    expect(Array.isArray(data)).toBe(true)
  })

  it('should read nimiq-open-rpc-specification-document resource content', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.readResource({ uri: 'resource://nimiq/open-rpc-specification-document' })

    expect(result).toBeDefined()
    expect(result.contents).toBeDefined()
    expect(Array.isArray(result.contents)).toBe(true)
    expect(result.contents[0].mimeType).toBe('application/json')

    const data = JSON.parse(result.contents[0].text)
    expect(data).toHaveProperty('openrpc')
    expect(data).toHaveProperty('info')
    expect(data).toHaveProperty('methods')
    expect(Array.isArray(data.methods)).toBe(true)
  })
})
