---
title: Navigation Map
description: Reference for how navigation works in the Developer Center and where to change module order, landing-page cards, sections, and sidebar structure.
navigation: false
layout: docs
---

# Navigation Map

Use this page when you need to know which file controls placement, ordering, or a visible navigation surface in the docs experience.

For page front matter and `_dir.yml` metadata examples, see [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

For the step-by-step workflow for adding modules, sections, or pages, see [Maintenance Workflow](/maintainers/maintenance-workflow).

## The Three Navigation Layers

The Developer Center has three main navigation layers:

1. The landing page at `/`, including homepage sections and cards
2. The top module bar across docs pages, such as Web Client, RPC, AI, and Hub
3. The sidebar inside each module, built from content structure and page metadata

Each layer is controlled differently.

## Where To Change What

Use this as a fast map.

| If you want to change... | Start here |
| --- | --- |
| Add or reorder landing-page cards | `content/index.md` |
| Change homepage sections | `content/index.md` |
| Reorder the module bar on every page | `app/utils/modules.ts` |
| Change module labels, icons, or routes | `app/utils/modules.ts` |
| Change desktop module-bar rendering | `app/components/app/AppHeaderBottom.vue` |
| Change mobile module-bar rendering | `app/components/app/AppHeaderBody.vue` |
| Reorder pages inside a section | Page front matter `navigation.order` |
| Rename a page in the sidebar only | Page front matter `navigation.title` |
| Hide a page from generated navigation | `navigation: false` in page front matter |
| Reorder generated content sections or folders | `_dir.yml` with `navigation.order` |
| Adapt the left sidebar order for a module | `app/components/docs/DocsAsideLeftBody.vue` |
| Change sidebar filtering behavior | `app/components/docs/DocsAsideLeftBody.vue` |
| Understand RPC methods sidebar special-case | `app/components/docs/DocsAsideLeftBody.vue` and `app/utils/rpc.ts` |

## Global Module Bar

The top module bar comes from `DOC_MODULES` in `app/utils/modules.ts`.

That array controls:

- module label
- module icon
- module route
- module order

If you move one object higher or lower in the array, that changes the order everywhere the module bar is rendered.

Current rendering files:

- `app/components/app/AppHeaderBottom.vue` for desktop
- `app/components/app/AppHeaderBody.vue` for mobile

Example:

```ts
export const DOC_MODULES = [
  { label: 'RPC', icon: 'i-custom-nimiq-rpc', to: '/rpc/', segment: 'rpc' },
  { label: 'Web Client', icon: 'i-custom-nimiq-web-client', to: '/web-client/', segment: 'web-client' },
]
```

In that example, `RPC` would appear before `Web Client`.

## Landing Page

The homepage is `content/index.md`.

That file controls:

- the hero at the top
- the "Choose your path" cards
- quick-start cards
- popular resource sections
- all landing-page sections and their order

Landing-page cards are authored inline using:

- `u-page-section`
- `u-page-grid`
- `u-page-columns`
- `u-page-card`

Example landing-page card block:

```md
::::u-page-card
---
title: RPC
description: Build full-stack applications with the JSON-RPC API
icon: i-lucide-terminal
to: /rpc/
variant: outline
---
::::
```

If you want to add, remove, reorder, or rewrite homepage cards, `content/index.md` is the place.

## Sidebar Navigation

The sidebar inside a docs module comes from Nuxt Content navigation data, which is shaped by:

- folder structure under `content/`
- `_dir.yml` files
- page front matter

The main keys that affect sidebar behavior are:

- `navigation.title`
- `navigation.order`
- `navigation: false`

The sidebar renderer is `app/components/docs/DocsAsideLeftBody.vue`.

If you need to adapt the left sidebar order for a module, start in `app/components/docs/DocsAsideLeftBody.vue`.

That component does two important things:

1. It filters the full content navigation down to the current top-level module.
2. It expands `/rpc/methods/` as a special case using generated RPC method groups.

So if the question is "why is the sidebar structured this way?", the answer is usually:

- content structure and metadata decide the raw navigation tree
- `DocsAsideLeftBody.vue` decides how that tree is shown for the current module

## Add a New Module

The ownership points for a new top-level module are:

- a new top-level folder under `content/`
- that module's `index.md`
- `_dir.yml` if the module or its sections need folder metadata
- the `DOC_MODULES` entry in `app/utils/modules.ts`

If you do not add the module to `DOC_MODULES`, it will not appear in the global module bar.

## Add a New Section

The ownership points for a new section inside an existing module are:

- a nested folder under the module
- `_dir.yml` for section metadata
- `navigation.order` when section order matters
- the pages inside that folder

Example `_dir.yml`:

```yaml
title: Integrations
icon: i-tabler-puzzle
navigation.order: 5
```

## Add a New Page

The ownership points for a normal page are:

- the markdown file under the correct folder in `content/`
- page front matter for title, description, icon, and navigation metadata
- `_dir.yml` if the surrounding section needs ordering or metadata

Example:

```yaml
---
title: My New Page
description: Explain what this page is about.
icon: i-tabler:book
navigation:
  title: My Page
  order: 3
---
```

## `content.config.ts` in Navigation Terms

`content.config.ts` explains which markdown files become content pages and how they are grouped.

In practice:

- the `landing` collection contains only `content/index.md`
- the `docs` collection contains normal markdown docs pages

The `docs` collection excludes:

- `index.md`
- `README.md`
- `LICENSE.md`
- `rpc/methods/[method].md`
- files that start with `_`

That matters because:

- the homepage is handled separately from normal docs pages
- helper or private underscore files do not show up as regular docs pages
- the RPC methods detail route is handled dynamically rather than from a normal markdown page

The schema is permissive because it uses `.catchall(z.any())`.

That means many front-matter fields work even though only a small subset is explicitly typed there today.

If you want stricter front-matter typing later, `content.config.ts` is the file to expand.
