# Nimiq RPC Clients

Connect to the Nimiq blockchain using your preferred programming language or AI assistant.

## AI Assistant Integration

### Nimiq MCP Server
**For AI assistants like Claude, ChatGPT, and others**

The [Nimiq Model Context Protocol (MCP) Server](https://github.com/onmax/nimiq-mcp) enables AI assistants to interact directly with the Nimiq blockchain through a standardized protocol.

- **Installation**: `npx nimiq-mcp`
- **Features**: 20+ blockchain tools for accounts, transactions, validators, and documentation
- **Use Cases**: AI-assisted development, automated analysis, smart contract interactions
- **Documentation**: [GitHub Repository](https://github.com/onmax/nimiq-mcp)

#### Quick Setup for Claude Desktop
```json
{
  "mcpServers": {
    "nimiq": {
      "command": "npx",
      "args": ["nimiq-mcp"]
    }
  }
}
```

## Programming Language Clients

### TypeScript/JavaScript
- **nimiq-rpc-client-ts**: Fully typed RPC client for TypeScript and JavaScript
- **Browser Compatible**: Works in both Node.js and browser environments
- **WebSocket Support**: Real-time blockchain event subscriptions

### Python
- **Coming Soon**: Python RPC client with full type hints
- **Features**: Async/await support, Pydantic models, comprehensive error handling

### Rust
- **Coming Soon**: High-performance Rust client
- **Features**: Zero-copy serialization, async runtime support

### Go
- **Coming Soon**: Go client with goroutine support
- **Features**: Context-aware operations, structured logging

## Community Clients

Missing your favorite language? We welcome community contributions for additional client libraries. Check our [development guidelines](https://github.com/nimiq) for creating new clients.

## Need Help?

- **Documentation**: [RPC API Reference](./methods/)
- **Community**: [Telegram Developer Chat](https://t.me/nimiq)
- **GitHub**: [Nimiq Organization](https://github.com/nimiq)
- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/nimiq/core-rs-albatross/issues)
