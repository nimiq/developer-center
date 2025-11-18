# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nimiq Developer Center is a VitePress-based documentation site for the Nimiq blockchain ecosystem. Provides comprehensive guides, resources, and API documentation for developers building with Nimiq.

## Development Commands

```bash
# Install dependencies (pnpm only)
pnpm install

# Development server (runs at localhost:5173 with base /developer-center)
pnpm dev

# Build for production (base: /developers)
pnpm build

# Build for staging (base: /)
pnpm build:staging

# Preview built site
pnpm preview

# Code quality
pnpm lint           # Check code quality
pnpm lint:fix       # Auto-fix linting issues
pnpm typecheck      # Run TypeScript type checking

# Documentation generation
pnpm build:web-client  # Generate Web Client API docs from @nimiq/core
pnpm build:rpc         # Generate RPC method docs from OpenRPC spec

# Dependency management
pnpm update         # Update dependencies using taze
```

## Architecture

### Stack
- **VitePress 2.0** - Static site generator with Vue 3
- **Nimiq VitePress Theme** - Custom theme (`defineNimiqVitepressConfig`, `defineNimiqThemeConfig`)
- **UnoCSS** with `presetNimiq` - Nimiq design system utilities
- **Nuxt v3** - Server API routes (Cloudflare Pages Functions)
- **Vue 3** + TypeScript - Components and interactivity

### Workspace Structure
Monorepo with two workspaces:
- **Root (`.`)** - VitePress documentation site
- **Server (`server/`)** - Nuxt-based MCP server + API routes

All dependencies managed via pnpm catalog categorized by usage type.

### Module System
Navigation modules defined in `.vitepress/theme.config.ts`:
- **Web Client** - Browser blockchain client docs
- **Protocol** - Albatross protocol specs
- **RPC** - JSON-RPC API docs (auto-generated from OpenRPC)
- **Nimiq Utils** - Developer utility libraries
- **Hub** - Wallet integration API
- **Nodes & Validators** - Staking and validation guides

### Environment Modes
Controlled by `DEPLOYMENT_MODE` env var in scripts:
- `development` - Local dev (base: `/developer-center`)
- `staging` - Staging (base: `/`)
- `production` - Production (base: `/developers`)

### Server Architecture
Nuxt v3 workspace for API routes + MCP server:
- **Server code**: `server/` directory (workspace with own `package.json`)
- **RPC Proxy**: `server/server/api/rpc-proxy.ts` - CORS-free proxy
- **MCP Server**: `server/server/routes/mcp.ts` - Model Context Protocol
- **Dev mode**: Runs independently at localhost:3000
- **Prod mode**: Deployed via Cloudflare Pages Functions

## Key Configuration Files

- `.vitepress/config.ts` - Main VitePress config (uses `defineNimiqVitepressConfig`)
- `.vitepress/theme.config.ts` - Navigation modules, sidebar structure (6 modules: Web Client, Protocol, RPC, Nimiq Utils, Hub, Nodes & Validators)
- `.vitepress/vite.config.ts` - Vite plugins, build config, auto-imports
- `.vitepress/theme/index.ts` - Theme setup, custom slots
- `uno.config.ts` - UnoCSS with Nimiq presets, custom icons
- `server/nuxt.config.ts` - Nuxt config for MCP/API server workspace
- `server/` - Separate Nuxt workspace for API routes and MCP server

## Content & Documentation

### Auto-Generated Docs
- **Web Client API**: Generated from `@nimiq/core` package via TypeDoc
  - Source: `node_modules/@nimiq/core`
  - Output: `web-client/reference/`
  - Version cached in `web-client/.version` to skip rebuilds
  - Generated via `.vitepress/scripts/web-client.ts`

- **RPC Methods**: Generated from OpenRPC specification
  - Source: `.vitepress/rpc/openrpc-document.json`
  - Output: `rpc/methods/` (dynamic routes)
  - Uses `.vitepress/rpc/vite.ts` plugin

### Component Patterns
```vue
<!-- Grid layouts -->
<NqGrid f-my-xl :cards="$frontmatter.cards" />

<!-- Responsive spacing (fluid sizing preset) -->
<div f-my-xl>  <!-- Fluid margin-y extra-large -->
```

### Custom Components
Located in `.vitepress/theme/components/`:
- `AlbatrossLiveview/` - Real-time blockchain visualization with WebGL canvas
- `Rpc/` - Interactive RPC playground with live server testing
- `ConsensusMap.vue` - Network consensus geographic visualization

### Icon System
UnoCSS icon collections configured in `uno.config.ts`:
- `i-nimiq:*` - Nimiq brand icons
- `i-tabler:*` - Tabler icons
- `i-logos:*` - Technology logos
- `i-local:*` - Custom SVG icons from `public/assets/icons/`

## Styling with UnoCSS

### Nimiq Utilities
Use `nq-` prefixed utilities from Nimiq CSS:
- Layout: `nq-grid`, `nq-flex`
- Spacing: `nq-space-*`
- Typography: `nq-text-*`, `nq-label`
- Colors: `nq-blue`, `nq-gold`, etc.

### Fluid Spacing
Use `f-*` utilities for responsive spacing:
- `f-my-xl`, `f-px-lg`, etc.
- Automatically scales between breakpoints

## Build & Deployment

### Development Build
```bash
DEPLOYMENT_MODE=development pnpm dev
# Runs VitePress dev server with RPC proxy plugin
# Base URL: /developer-center
```

### Production Build
```bash
DEPLOYMENT_MODE=production pnpm build
# 1. Generates Web Client docs (if @nimiq/core version changed)
# 2. Builds VitePress site to .vitepress/dist/
# (Server deployed separately via NuxtHub - see .github/workflows/nuxthub.yml)
# Base URL: /developers
```

### Deployment
- **Platform**: Cloudflare Pages
- **Trigger**: Auto-deploy on push to GitHub
- **Output**: `.vitepress/dist/` (static site), `server/.output/` (Nuxt server)
- **Build command**: `pnpm build` (uses DEPLOYMENT_MODE=production)

## Code Quality

### Git Hooks
Pre-commit hook runs `pnpm lint-staged` via simple-git-hooks:
- Auto-fixes ESLint issues on staged files
- Configured in `package.json` under `lint-staged`

### TypeScript
- Config: `tsconfig.json` (main), `tsconfig.web-client.json` (docs generation)
- Auto-imports: Components and composables auto-imported via unplugin
- Type declarations: `.vitepress/auto-imports.d.ts`, `.vitepress/components.d.ts`

## Working with Documentation

### Adding New Pages
1. Create `.md` file in appropriate module directory
2. Add to sidebar in `.vitepress/theme.config.ts`
3. Use frontmatter for page metadata

### Adding Components
1. Create `.vue` file in `.vitepress/theme/components/`
2. Auto-imported via unplugin-vue-components
3. Available in all `.md` files

### Updating RPC Methods
Edit `.vitepress/rpc/openrpc-document.json` - docs regenerate on build

### Updating Web Client Docs
Update `@nimiq/core` version in `package.json` - docs regenerate if version changes

## Working with Server/MCP

The `server/` directory is a separate Nuxt workspace providing API routes and MCP server:

### Running Server Locally
```bash
cd server
pnpm dev              # Nuxt dev server at localhost:3000
pnpm mcp:studio       # Test MCP server with inspector
```

### Server Structure
- `server/server/api/` - API endpoints (e.g., `/api/rpc-proxy`, `/api/mcp/*`)
- `server/server/routes/` - Routes (e.g., `/mcp` - MCP server endpoint)
- `server/content.config.ts` - Nuxt Content configuration
- Auto-deployed as Cloudflare Pages Functions via `_worker.js`

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md
