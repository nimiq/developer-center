import { experimental_createMCPClient as createMCPClient } from '@ai-sdk/mcp'
import { describe, expect, it } from 'vitest'

const MCP_URL = 'http://localhost:3000/mcp'

describe('mCP Tools', () => {
  it('should list all available tools', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools).toBeDefined()
    expect(Object.keys(tools).length).toBeGreaterThan(0)
  })

  it('should have list_documentation_pages tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.list_documentation_pages).toBeDefined()
    expect(tools.list_documentation_pages.description).toContain('Retrieve structured index')
  })

  it('should have get_documentation_page tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.get_documentation_page).toBeDefined()
    expect(tools.get_documentation_page.description).toContain('Fetch complete content')
  })

  it('should have list_tutorials tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.list_tutorials).toBeDefined()
    expect(tools.list_tutorials.description).toContain('catalog of hands-on')
  })

  it('should have get_tutorial tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.get_tutorial).toBeDefined()
    expect(tools.get_tutorial.description).toContain('Fetch full content')
  })

  it('should have list_rpc_methods tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.list_rpc_methods).toBeDefined()
    expect(tools.list_rpc_methods.description).toContain('Retrieve filtered list')
  })

  it('should have call_rpc_method tool', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const tools = await mcpClient.tools()

    expect(tools.call_rpc_method).toBeDefined()
    expect(tools.call_rpc_method.description).toContain('Execute JSON-RPC method')
  })
})
