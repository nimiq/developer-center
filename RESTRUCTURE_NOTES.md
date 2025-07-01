# Developer Center Navigation Restructure

## Overview

The Nimiq Developer Center has been restructured to provide a more intuitive navigation experience. Instead of having everything under the "build" umbrella, content is now organized into focused sections.

## New Structure

### 🔬 Protocol (formerly `/learn`)
- **Path**: `/protocol/`
- **Description**: Learn about Nimiq's Albatross protocol technicalities
- **Content**: Protocol specifications, validators, network sync, ZKP, etc.

### 🌐 Web Client (extracted from `/build/web-client`)
- **Path**: `/web-client/`
- **Description**: Build web applications with Nimiq
- **Content**: Getting started, installation, integrations, API reference

### 🔌 RPC Client (formerly `/rpc-docs`)
- **Path**: `/rpc-client/`
- **Description**: Interact with Nimiq nodes via JSON-RPC
- **Content**: RPC methods, client libraries, examples

### ✅ Validators (enhanced)
- **Path**: `/validators/`
- **Description**: Your Staking and Pools Hub
- **Content**: Setup guides, staking info, trustscore, FAQs
- **New additions**: Becoming a validator, prover node setup guide, staking handbook

### 🔄 Migration (hidden by default)
- **Path**: `/migration/`
- **Description**: Migration guides for Nimiq 2.0
- **Content**: Integrator guide, JSON-RPC migration, web developers migration, technical details
- **Note**: Hidden from main navigation but accessible via direct links

## File Movements

### Directories Renamed/Moved:
- `learn/` → `protocol/`
- `rpc-docs/` → `rpc-client/`
- Created new `web-client/` (copied from `build/web-client/`)
- Created new `migration/` directory

### Files Moved:
- `build/integrator-guide.md` → `migration/migration-integrators.md`
- `archive/migration-*.md` → `migration/`
- `build/migration-404.md` → `migration/`
- `build/set-up-your-own-node/*` → `validators/`

## Redirects

The `nginx.conf` file includes comprehensive redirects to ensure all old URLs continue to work:

- `/developers/learn/*` → `/developers/protocol/*`
- `/developers/build/web-client/*` → `/developers/web-client/*`
- `/developers/rpc-docs/*` → `/developers/rpc-client/*`
- `/developers/build/set-up-your-own-node/*` → `/developers/validators/*`
- `/developers/build/integrator-guide` → `/developers/migration/migration-integrators`
- And more...

## Theme Configuration

The `.vitepress/theme.config.ts` has been updated to reflect the new navigation structure with:
- Updated module definitions for each section
- Corrected sidebar navigation
- New icons and descriptions
- Hidden migration section (accessible but not shown in main nav)

## Benefits

1. **Clearer Purpose**: Each section has a focused purpose and audience
2. **Better Organization**: Content is logically grouped by use case
3. **Improved Navigation**: Users can find relevant information faster
4. **Future-Proof**: Structure scales better for additional content
5. **Backward Compatibility**: All existing URLs redirect properly

## Migration Impact

- All existing URLs will continue to work via redirects
- Search engines will be redirected to new URLs
- Bookmarks will automatically redirect
- The migration section provides guidance for developers upgrading from Nimiq 1.0
