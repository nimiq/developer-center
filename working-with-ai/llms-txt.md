# LLMs.txt

Nimiq provides structured documentation optimized for large language models through `/llms.txt` endpoints, enabling AI assistants to understand and help with Nimiq development.

## What is LLMs.txt?

LLMs.txt is a structured documentation format designed for large language models. Provides framework info, API references, and best practices in format optimized for AI consumption.

Part of emerging standard for making docs accessible to AI. Learn more at [llmstxt.org](https://llmstxt.org).

## Available Routes

### `/llms.txt` - Overview

**URL**: `https://nimiq.com/developers/llms.txt`

**Size**: ~5-10K tokens

**Content**:
- Documentation structure overview
- Module summaries (Web Client, RPC, Protocol, Hub, Validators)
- Quick reference links
- Getting started guides

**Use for**: General AI assistance, quick questions, standard context windows

### `/llms-full.txt` - Comprehensive

**URL**: `https://nimiq.com/developers/llms-full.txt`

**Size**: ~200K+ tokens

**Content**:
- Complete API documentation
- Detailed protocol specifications
- All RPC methods with examples
- Integration guides
- Best practices

**Use for**: Detailed implementation help, complex questions, AI assistants with large context windows (200K+ tokens)

## Which Endpoint?

**Most developers should use `/llms.txt`** - provides enough context for common questions while fitting in most context windows.

**Use `/llms-full.txt` when**:
- Complex integrations
- Need detailed API specs
- Using AI with 200K+ token capacity (Claude Opus, GPT-4 Turbo, etc.)
- Building validators or protocol-level tools

## AI Assistant Integration

### Cursor

Reference docs using `@docs` context:

1. Type `@docs` in chat
2. Cursor fetches from `/llms.txt`
3. Ask question

Example:
```
@docs How do I create a Nimiq transaction in the browser?
```

**Important**: Type `@` manually - copy-pasting breaks context recognition.

### Windsurf

Add to workspace rules:
```
When helping with Nimiq development, reference https://nimiq.com/developers/llms.txt
```

Supports workspace rules and web search with LLMs.txt.

### ChatGPT, Claude, Generic LLMs

Reference URL directly in prompt:

```
Using Nimiq documentation from https://nimiq.com/developers/llms.txt,
how do I integrate the Hub API?
```

```
Based on https://nimiq.com/developers/llms-full.txt,
explain the Albatross consensus mechanism.
```

### GitHub Copilot

Create `.github/copilot-instructions.md`:

```markdown
When assisting with Nimiq development, reference:
- Overview: https://nimiq.com/developers/llms.txt
- Detailed: https://nimiq.com/developers/llms-full.txt
```

## Benefits

**Accuracy** - AI gets up-to-date info from official docs

**Context-Aware** - Responses consider full Nimiq ecosystem and best practices

**Faster Development** - Instant answers without searching multiple pages

**Code Generation** - AI generates working Nimiq code based on current APIs

**Learning** - Understand complex protocol concepts with AI explanations

## Example Use Cases

**Quick Integration**
> "Using `/llms.txt`, show me how to query account balance"

**Protocol Understanding**
> "Based on `/llms-full.txt`, explain validator slot allocation"

**Code Generation**
> "Generate TypeScript function to send NIM using RPC client (use `/llms.txt`)"

**Migration**
> "Using `/llms-full.txt`, help me migrate from Web Client to RPC"

## Technical Details

Endpoints generated using `vitepress-plugin-llms`, include:
- Structured markdown docs
- Code examples with syntax highlighting
- API references with type info
- Cross-references between related topics
- Curated content optimized for AI understanding

Documentation auto-updated with each deployment - AI always has latest info.

## Combining with MCP

For best AI dev experience with Nimiq:

1. **Use MCP** for deep integration with AI assistants (recommended for Claude Code, Cursor, etc.)
2. **Use LLMs.txt** for general doc reference in any AI chat interface

MCP provides interactive access to doc resources, LLMs.txt offers simpler text-based approach. Both kept in sync.

## Troubleshooting

**AI Can't Access Docs**
- Verify URL: `https://nimiq.com/developers/llms.txt`
- Some AI assistants may not support web fetching - use MCP instead
- Check if AI tool requires explicit permissions for web access

**Outdated Info**
- Docs updated with each deployment
- If discrepancies, [report issue](https://github.com/nimiq/developer-center/issues)

**Need Help?**
- [Discord](https://discord.gg/nimiq)
- [Telegram](https://t.me/nimiq)
- [GitHub Discussions](https://github.com/nimiq/developer-center/discussions)
