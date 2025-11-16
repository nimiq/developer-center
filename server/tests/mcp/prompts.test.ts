import { experimental_createMCPClient as createMCPClient } from '@ai-sdk/mcp'
import { describe, expect, it } from 'vitest'

const MCP_URL = 'http://localhost:3000/mcp'

describe('mCP Prompts', () => {
  it('should list all available prompts', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listPrompts()

    expect(result).toBeDefined()
    expect(result.prompts).toBeDefined()
    expect(Array.isArray(result.prompts)).toBe(true)
    expect(result.prompts.length).toBeGreaterThan(0)
  })

  it('should have find_documentation_for_topic prompt', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listPrompts()

    const findDocsPrompt = result.prompts.find(p => p.name === 'find_documentation_for_topic')
    expect(findDocsPrompt).toBeDefined()
    expect(findDocsPrompt?.arguments?.[0]?.name).toBe('topic')
  })

  it('should have find_tutorial_for_topic prompt', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listPrompts()

    const findTutorialPrompt = result.prompts.find(p => p.name === 'find_tutorial_for_topic')
    expect(findTutorialPrompt).toBeDefined()
    expect(findTutorialPrompt?.arguments?.[0]?.name).toBe('topic')
  })

  it('should have find_rpc_method_for_task prompt', async () => {
    const mcpClient = await createMCPClient({ transport: { type: 'http', url: MCP_URL } })
    const result = await mcpClient.listPrompts()

    const findRpcPrompt = result.prompts.find(p => p.name === 'find_rpc_method_for_task')
    expect(findRpcPrompt).toBeDefined()
    expect(findRpcPrompt?.arguments?.[0]?.name).toBe('task')
  })
})
