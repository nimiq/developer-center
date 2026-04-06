---
title: Developer Center 101
description: Maintainer reference for the Developer Center repository, architecture, and Nuxt/Docus migration.
navigation: false
layout: docs
---

# Developer Center 101

This page is the architecture and repo-understanding guide for maintainers of the Nimiq Developer Center. It explains how the repository is structured today, what changed in the Nuxt/Docus migration, and where the main source-of-truth files live.

## See Also

For conventions, comments, validation, and guardrails, see [Best Practices](/maintainers/best-practices).

For page front matter and `_dir.yml` metadata, see [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

For landing-page ownership, module ordering, and sidebar file ownership, see [Navigation Map](/maintainers/navigation-map).

For the operational steps for running the site and making changes, see [Maintenance Workflow](/maintainers/maintenance-workflow).

For the current brand layer, visual ownership, asset locations, and external visual dependencies, see [Visual Language Cheatsheet](/maintainers/visual-language-cheatsheet).

## What This Repository Is

This repository is the source for the Nimiq Developer Center docs site. In the current architecture, it is a Nuxt application that uses Docus, Nuxt Content, Nuxt UI, and Nitro to serve documentation, dynamic docs features, and a small set of server endpoints.

In practice, the repo contains five kinds of things:

- Authored markdown content under `content/`
- App-level UI customization and Vue components under `app/`
- Server-side helper endpoints under `server/`
- Generated/reference content and generated build artifacts
- Runtime and deployment configuration for Cloudflare Workers

## Migration Context

This branch is the large migration from the old VitePress-based Developer Center to a Nuxt/Docus-based one.

The important architectural changes are:

- The site framework moved from VitePress to Nuxt + Docus.
- Authored docs were moved into `content/`, which is now the source of truth for most pages.
- App customization moved into `app/`, which now contains Vue components, app config, styling, icons, and a small amount of local app logic.
- Navigation is no longer driven by a single VitePress theme config file. It is now split across content metadata and app-level module definitions.
- Nitro server routes now handle remote-backed or dynamic functionality such as RPC proxying and fetching remote JSON.
- The branch also adds AI-facing docs surfaces like MCP and `llms.txt`.

The diff looks much larger than the real maintainable change because it includes generated output and runtime artifacts such as `.nuxt/`, `.output/`, and `.data/content/contents.sqlite`.

### What To Care About

If you are maintaining the repo, the files and folders that matter most are:

- `content/`
- `app/`
- `server/`
- `scripts/`
- `nuxt.config.ts`
- `content.config.ts`
- `app/app.config.ts`

### What Not To Hand-Edit

These are usually generated or runtime artifacts and should not be treated as source of truth:

- `.nuxt/`
- `.output/`
- `.data/`
- `.wrangler/`

Even if these folders appear in the branch diff, they are not the primary place to make maintainable changes.

## Tech Stack

### Core Frameworks

- `Nuxt`: the application framework. It owns the app shell, routing, module system, runtime config, and build/deploy pipeline.
- `Nitro`: Nuxt's server runtime. It powers the API routes in `server/api/` and the Cloudflare Worker deployment target.
- `Vue`: the component layer used for local custom UI in `app/components/`.

### Documentation Layer

- `Nuxt Content`: the content engine. It loads markdown files, defines content collections, and powers the docs content model.
- `Docus`: the documentation layer built on top of Nuxt and Nuxt Content. It provides the docs layouts, content rendering, assistant integration hooks, search/navigation primitives, and the overall documentation-site structure.
- `Nuxt UI`: the UI component system and theme layer used across custom docs UI and MDC components.

### Tooling and Libraries

- `pnpm`: package manager
- `ESLint`: linting
- `TypeScript`: types and app/tooling code
- `Wrangler`: Cloudflare Worker tooling
- `Iconify`: icon system and custom icon collections
- `Typedoc` and `typedoc-plugin-markdown`: generate web-client reference docs
- `@open-rpc/meta-schema` plus local scripts: power RPC docs and dynamic RPC method pages
- `remark-math` and `rehype-katex`: math rendering in markdown
- `ofetch`: server-side fetching in scripts and API handlers

### What Docus Is

Docus is the documentation site layer used by this repo. It is not a replacement for Nuxt Content. It sits on top of Nuxt Content.

The relationship is:

- Nuxt Content provides the content model and markdown loading.
- Docus provides the docs experience built on top of that content model.
- Nuxt UI provides the component primitives and theming used by the docs experience.

In this repo, `nuxt.config.ts` extends `docus`, and then the Developer Center customizes that Docus base with its own content, components, app config, CSS, and patches.

## Top-Level Folder Map

The most important folders are:

| Path | Purpose | Source of truth? |
| --- | --- | --- |
| `content/` | Authored docs pages, section metadata, and most maintainable content | Yes |
| `app/` | Local Vue components, app config, icons, utilities, composables, and custom docs UI | Yes |
| `server/` | Nitro API routes for remote-backed or helper endpoints | Yes |
| `scripts/` | Generation scripts for RPC and web-client docs | Yes |
| `data/` | Input data used by dynamic/generated docs, including OpenRPC and generated web-client reference data | Yes, but some files are generated from scripts |
| `public/` | Static assets served as-is, such as favicons and public images | Yes |
| `patches/` | pnpm patch files applied to dependencies, especially Docus | Yes |
| `.pnpm-patch-docus/` | Local checked-in copy of the patched Docus source used to maintain the patch | Yes, for patch maintenance |
| `.github/` | CI workflow configuration | Yes |
| `.nuxt/` | Nuxt-generated dev/build artifacts and type output | No |
| `.output/` | Built site/server output | No |
| `.data/` | Generated content database and related runtime artifacts | No |
| `.wrangler/` | Wrangler local runtime/deploy state | No |

### Where Key Things Live

- Authored docs live in `content/`
- Vue components live in `app/components/`
- Global styling lives in `app/assets/css/main.css`
- App-level theme configuration lives in `app/app.config.ts`
- Remote fetch logic lives in `server/api/`
- Generated RPC and web-client docs logic lives in `scripts/`

## Key Config Files

### `nuxt.config.ts`

`nuxt.config.ts` is the main application and runtime configuration file.

In this repo it controls:

- app metadata in `app.head`
- global CSS inclusion
- Nuxt modules such as `@nuxt/eslint`
- Nitro and Cloudflare Worker deployment settings
- prerendering and route rules
- markdown processing for Nuxt Content
- icon configuration and custom icon collections
- LLMS and MCP-related features

It also includes custom logic for:

- scanning `content/` to compute prerender routes
- excluding dynamic-heavy routes from prerendering
- deriving RPC method routes from `data/openrpc-document.json`

### `content.config.ts`

`content.config.ts` defines the Nuxt Content collections and the typed content schema used by the app.

Today it defines two collections:

- `landing`: the landing-page collection, sourced from `index.md`
- `docs`: the main documentation collection, sourced from `**/*.md` with selected exclusions

The `docs` collection excludes:

- `index.md`
- `README.md`
- `LICENSE.md`
- `rpc/methods/[method].md`
- files that start with `_`

The typed schema currently models:

- `icon`
- `layout`

Everything else is allowed through `catchall(z.any())`, which means the app uses more front matter than the schema strictly types today.

### `app/app.config.ts`

`app/app.config.ts` is where the Developer Center customizes the Docus/Nuxt UI layer.

It controls things like:

- header branding
- GitHub link
- assistant settings
- component slot styling
- component variants
- theme-level behavior for cards, buttons, page sections, header, navigation, and more

If you need to change how shared UI primitives look or behave across the site, this is one of the first files to inspect.

### `app/assets/css/main.css`

`app/assets/css/main.css` is the main global stylesheet for the current site.

It defines:

- CSS variables used to map the Nimiq design system to Nuxt UI tokens
- color scales
- shared design tokens
- Tailwind v4-style `@theme` tokens
- global theme-level styling overrides

If you need to change colors, design tokens, or global docs styling behavior, start here.

Font-family tokens also live here. In the current setup, `--font-sans` and `--font-mono` are defined in the `@theme` block.

For working conventions around styling and comments, see [Best Practices](/maintainers/best-practices).

### `package.json`

`package.json` defines:

- the package manager version
- local scripts such as `dev`, `build`, `typecheck`, `build:rpc`, and `build:web-client`
- runtime dependencies
- development dependencies
- pnpm patch configuration
- lint-staged and git hook behavior

It is also the fastest source of truth for how to run the project locally.

## Styling and UI System

The current styling stack is:

- global styling in `app/assets/css/main.css`
- shared component theming in `app/app.config.ts`
- utility-class usage in markdown and Vue templates
- Nuxt UI as the component system

There is no active repo-level `uno.config.ts` in the current architecture.

This branch does still carry historical migration context from the old VitePress setup, but the current source-of-truth styling path is the Nuxt/Docus/Nuxt UI stack.

### Before vs Now

The links in the "Now" column point to the current `nuxt` migration branch source files.

| Area | Before | Now |
| --- | --- | --- |
| Site framework | VitePress | [Nuxt + Docus](https://github.com/nimiq/developer-center/blob/nuxt/nuxt.config.ts) |
| Content root | top-level docs folders like `hub/`, `rpc/`, `mini-apps/` | [`content/`](https://github.com/nimiq/developer-center/tree/nuxt/content) |
| Global styling | `.vitepress/theme/main.css` | [`app/assets/css/main.css`](https://github.com/nimiq/developer-center/blob/nuxt/app/assets/css/main.css) |
| Theme and shared UI customization | `.vitepress/theme.config.ts` and `.vitepress/theme/components/**` | [`app/app.config.ts`](https://github.com/nimiq/developer-center/blob/nuxt/app/app.config.ts) and [`app/components/**`](https://github.com/nimiq/developer-center/tree/nuxt/app/components) |
| Top-level module navigation | `.vitepress/theme.config.ts` | [`app/utils/modules.ts`](https://github.com/nimiq/developer-center/blob/nuxt/app/utils/modules.ts) plus content metadata |
| Content schema | VitePress front matter conventions | [`content.config.ts`](https://github.com/nimiq/developer-center/blob/nuxt/content.config.ts) |
| Remote-backed docs helpers | VitePress/Nitro plugin glue | [`server/api/**`](https://github.com/nimiq/developer-center/tree/nuxt/server/api) |

## Content Model

The current content model is defined in `content.config.ts`.

At a high level:

- `landing` contains only the homepage at `content/index.md`
- `docs` contains the normal markdown docs pages
- the schema explicitly types only `icon` and `layout`
- other front-matter fields still work because the schema uses `catchall(z.any())`

In practice, that means the repo is permissive today: pages use fields like `title`, `description`, and `navigation.*`, even though only a small subset is explicitly typed.

For the actual metadata keys and examples, use [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

## Navigation Architecture

Navigation is now split across several layers.

At a high level:

- the global module bar comes from `app/utils/modules.ts`
- the content tree comes from folder structure under `content/`
- section metadata comes from `_dir.yml`
- page metadata comes from front matter
- the sidebar renderer filters the tree to the current module and special-cases RPC method expansion

Use [Navigation Map](/maintainers/navigation-map) for the exact file ownership and placement rules.

## Remote-backed and Generated Content

Not everything in the site is hand-authored markdown.

Two important patterns exist:

- remote-backed content served through Nitro endpoints in `server/api/`
- generated reference docs and input data maintained through scripts in `scripts/` and `data/`

The architecture matters because the maintainable source of truth is usually the endpoint or script, not the generated output.

Use [Maintenance Workflow](/maintainers/maintenance-workflow) for the operational steps for refreshing or extending those pieces.

## Suggested Reading Order

If you are new to the repo, start here:

1. [Developer Center 101](/maintainers/)
2. [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet)
3. [Navigation Map](/maintainers/navigation-map)
4. [Best Practices](/maintainers/best-practices)
5. [Maintenance Workflow](/maintainers/maintenance-workflow)

Then read the actual source files that drive the repo:

1. `package.json`
2. `nuxt.config.ts`
3. `content.config.ts`
4. `app/app.config.ts`
5. `app/assets/css/main.css`
6. `app/utils/modules.ts`
7. a representative content module under `content/`
8. `server/api/`
