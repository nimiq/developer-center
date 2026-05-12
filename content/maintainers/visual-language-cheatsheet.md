---
title: Visual Language Cheatsheet
description: Quick reference for the current visual language, brand-layer ownership, asset locations, and external visual dependencies in the Developer Center repository.
navigation: false
layout: docs
---

# Visual Language Cheatsheet

Use this page when you need a fast map of where the current Developer Center visual language comes from and which files own which parts of it.

For architecture and repo structure, see [Developer Center 101](/maintainers/).

For workflow and validation steps, see [Maintenance Workflow](/maintainers/maintenance-workflow).

## Quick Answer

The visual stack is layered:

- `Docus` and `Nuxt UI` provide the docs shell, component system, and base theming primitives.
- `app/assets/css/main.css` maps the Nimiq design language onto those primitives.
- `app/app.config.ts` skins shared components such as the header, cards, buttons, sections, and navigation.
- `public/` contains the main served brand assets such as logos, favicons, the OG image, and docs images.
- a small set of visuals are remote-backed at runtime, most notably blockchain explorer logos fetched from `nimiq/awesome`

If you only remember two files, remember these:

- `app/assets/css/main.css`
- `app/app.config.ts`

## Source Of Truth Map

| If you want to change... | Start here | Notes |
| --- | --- | --- |
| Global colors, design tokens, shadows, radius, and typography tokens | `app/assets/css/main.css` | Main Nimiq brand-layer styling |
| Shared component appearance and behavior | `app/app.config.ts` | Header, cards, buttons, sections, navigation, and shared Nuxt UI skinning |
| Header logo and main brand mark paths | `app/app.config.ts` plus `public/logos/nimiq/` | The header points to the served logo files |
| Module icons in the top navigation | `app/assets/icons/` plus `app/utils/modules.ts` | Custom local Iconify collection with `i-custom-*` names |
| Favicons and browser/share branding | `public/favicons/`, `public/og-image.png`, and `nuxt.config.ts` | `nuxt.config.ts` wires the assets into `app.head` |
| Docs diagrams and page images | `public/assets/images/` | Pages use `/assets/images/...` paths |
| Remote explorer logos shown in docs UI | `server/api/blockchain-explorers.get.ts` | Fetched from `nimiq/awesome` at runtime |

## What Is Framework And What Is Brand Layer

Use this split when deciding where a change belongs.

### Framework Layer

This is the generic docs and app foundation:

- `nuxt.config.ts` extends `docus`
- Docus provides the docs layouts and content experience
- Nuxt UI provides shared components and theme slots
- Nuxt Icon and Iconify provide the icon pipeline

This layer explains why the site has a docs shell, cards, navigation menus, and content components.

It does **not** define the final Nimiq visual language by itself.

### Nimiq Brand Layer

This is the project-specific identity that sits on top of the framework:

- Nimiq color scales and semantic token mapping in `app/assets/css/main.css`
- shared component styling in `app/app.config.ts`
- local logo files in `public/logos/nimiq/`
- local module icons in `app/assets/icons/`
- local favicons and social image assets in `public/`
- docs imagery in `public/assets/images/`

If a change is about the "look and feel" of the Developer Center, it usually belongs here.

## Colors And Tokens

`app/assets/css/main.css` is the main global styling file for the site.

It currently defines:

- `Mulish` as the sans font token
- `Fira Code` as the mono font token
- Nimiq color scales for `primary`, `secondary`, `success`, `info`, `warning`, `error`, and `neutral`
- semantic shortcuts such as `--ui-primary`
- shared tokens such as radius, container width, shadows, and easing
- Tailwind v4-style `@theme` tokens

In practice, this is the strongest single file for the Nimiq visual identity.

If the question is "where do our colors come from?" or "where does the global look come from?", start here.

## Shared Component Skinning

`app/app.config.ts` customizes the Docus and Nuxt UI layer for this project.

It currently owns things like:

- header branding
- the light and dark logo file paths
- button shape and hover behavior
- card, page-card, page-section, and page-feature styling
- header and navigation appearance
- content-search font behavior

If `main.css` defines the brand tokens, `app/app.config.ts` is where those tokens get applied to the shared UI patterns.

## Typography

The active typography is:

- `Mulish` for sans text
- `Fira Code` for monospace text

The font-family tokens are defined in `app/assets/css/main.css`.

The current runtime font loading is configured in `nuxt.config.ts` through Google Fonts.

There are also local font files under `public/assets/fonts/`, but the current source wiring points at Google Fonts rather than those local files.

If you change the site typography, inspect both:

- `app/assets/css/main.css`
- `nuxt.config.ts`

## Logos And Brand Assets

The main served logo files live in:

- `public/logos/nimiq/`

That folder currently contains:

- hexagon marks
- horizontal wordmarks
- mono variants
- white variants
- PNG and SVG versions

The header logo configuration lives in `app/app.config.ts`.

The public-facing design-kit page is:

- `content/design-kit.md`

That page exposes the official logo downloads and links out to other Nimiq design resources.

## Icons

There are three icon sources in the current repo.

### Local Custom Module Icons

These live in:

- `app/assets/icons/`

They are registered as a custom Iconify collection in `nuxt.config.ts` and used as `i-custom-*` icons in places like:

- `app/utils/modules.ts`

These are the clearest repo-owned icons for the top-level docs modules.

### Bundled Iconify Collections

The repo also uses several packaged icon collections such as:

- `tabler`
- `lucide`
- `simple-icons`
- `logos`
- `carbon`
- `vscode-icons`

These support many of the generic icons used across docs content and shared UI.

### `i-nimiq:*` Icons

`i-nimiq:*` references resolve to the [`nimiq-icons`](https://www.npmjs.com/package/nimiq-icons) npm package — the Nimiq design system's icon set as an Iconify collection. It is installed as a dev dependency and registered in `nuxt.config.ts` as a custom collection (`prefix: nimiq`).

The package ships ~323 icons. Browse the full set in [the Nimiq UI repository](https://github.com/onmax/nimiq-ui).

Notes for maintainers:

- `customCollections` in `nuxt.config.ts` loads `nimiq-icons/icons.json` directly — no separate svg files in this repo.
- Adding the collection bumped the client icon bundle past Nuxt Icon's default 256KB limit, so `clientBundle.sizeLimitKb` is set to `512`.
- If an `i-nimiq:*` reference fails to render, first confirm the icon name exists in the package (its `icons.json` is the source of truth). Some legacy names from earlier `nimiq-css` versions may not exist (e.g. `wallet`, `duotone-send`) — use a Tabler alternative or a different nimiq icon in those cases.

## Images And Diagrams

Docs pages currently reference image paths like:

- `/assets/images/protocol/...`
- `/assets/images/migration/...`
- `/assets/images/learn/...`

The served files for those paths live under:

- `public/assets/images/`

There is also a duplicate checked-in tree under:

- `assets/images/`

Today, the duplicate files appear to match, but the app code and markdown usage point at the served `public/` paths.

If you update a docs image, verify whether both copies need to stay in sync.

## Runtime-Fetched Visuals

Most of the visual identity is local, but a few visuals are fetched at runtime.

The main example is blockchain explorer logos:

- `server/api/blockchain-explorers.get.ts` fetches explorer data from `nimiq/awesome`
- `app/components/BlockchainExplorers.vue` renders the returned `logo` fields

In practice, those logos can come from:

- inline SVG data URIs
- remote image URLs from `raw.githubusercontent.com`

This means the explorer cards are not fully repo-local brand assets.

## Rule Of Thumb

Use this shortcut when deciding where to edit:

- If the change is a global look-and-feel change, start in `app/assets/css/main.css`.
- If the change is a shared UI pattern change, start in `app/app.config.ts`.
- If the change is a logo or favicon swap, start in `public/`.
- If the change is a module icon change, start in `app/assets/icons/` and `app/utils/modules.ts`.
- If the change is a docs image change, start in `public/assets/images/` and verify the duplicate `assets/images/` tree.
- If the change is an explorer-logo issue, inspect `server/api/blockchain-explorers.get.ts` before editing local assets.

## What To Inspect First

When investigating visual issues, inspect these files in this order:

1. `app/assets/css/main.css`
2. `app/app.config.ts`
3. `nuxt.config.ts`
4. `public/logos/nimiq/`
5. `app/assets/icons/`
6. `public/assets/images/`
7. `server/api/blockchain-explorers.get.ts`
