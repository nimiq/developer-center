---
title: Front Matter Cheatsheet
description: Quick reference for page front matter and section metadata in the Developer Center repository.
navigation: false
layout: docs
---

# Front Matter Cheatsheet

Use this page when you are writing or editing docs content in the Developer Center and need the exact metadata shape for pages and sections.

For page placement, landing-page cards, module order, and sidebar behavior, see [Navigation Map](/maintainers/navigation-map).

For the step-by-step workflow for adding pages, sections, or modules, see [Maintenance Workflow](/maintainers/maintenance-workflow).

## Front Matter Cheatsheet

These are the front-matter keys currently used in this repo.

| Key | What it does | Typical use | Example |
| --- | --- | --- | --- |
| `title` | Sets the page title | Most normal pages | `content/hub/index.md` |
| `description` | Sets the page description | Most normal pages | `content/hub/index.md` |
| `icon` | Sets the icon used in navigation or page UI | Most normal pages | `content/rpc/index.md` |
| `layout` | Chooses a page layout | Maintainer or special pages | `content/maintainers/index.md` |
| `navigation.title` | Overrides the sidebar label | When the sidebar label should be shorter or different | `content/hub/index.md` |
| `navigation.order` | Orders the page inside its section | Pages that need explicit ordering | `content/hub/api-reference.md` |
| `navigation: false` | Hides the page from generated navigation | Internal or landing pages | `content/index.md` |
| `prose: false` | Disables default prose styling | Custom layout pages | `content/nodes/index.md` |
| `prev: false` | Hides the previous-page link | Custom overview pages | `content/nodes/index.md` |
| `next: false` | Hides the next-page link | Custom overview pages | `content/nodes/index.md` |
| `aside: false` | Hides the main aside | Custom overview pages | `content/nodes/index.md` |
| `footer: false` | Hides the page footer | Custom overview pages | `content/nodes/index.md` |
| `secondarySidebar: false` | Disables secondary sidebar behavior | Special or overview pages | `content/rpc/methods/index.md` |
| `pageFooterLeftText` | Sets custom left footer text | Attribution or page-note use cases | `content/web-client/integrations/NextJS.md` |
| `changelog: false` | Hides the changelog block | Special reference pages | `content/rpc/methods/index.md` |

### Normal Docs Page

```yaml
---
title: Example Page
description: Explain what this page covers.
icon: i-tabler:book
navigation:
  title: Example
  order: 2
---
```

### Custom Overview Page

```yaml
---
title: Example Overview
description: Landing-style page for a docs area.
icon: i-tabler:layout-grid
prose: false
prev: false
next: false
aside: false
footer: false
secondarySidebar: false
navigation:
  title: Overview
  order: 1
---
```

### Hidden Internal Page

```yaml
---
title: Internal Maintainer Page
description: Hidden internal documentation.
navigation: false
layout: docs
---
```

## How `title` and `description` Work

The page title displayed in the header comes from the **H1 heading** in the markdown file, not from the frontmatter `title` field. A remark plugin (`remark-extract-title.mjs`) extracts the H1 text and removes it from the body so it renders once via `UPageHeader`.

- **`title` in frontmatter** — used for the sidebar label and SEO. Does not appear as the page heading.
- **`# H1` in markdown** — used as the visible page title in the header.
- **`description` in frontmatter** — shown as the gray subtitle under the page title. If omitted, no subtitle is shown.

## Add a New Typed Front Matter Field

If you want a front matter field to be part of the project's typed content schema, add it in `content.config.ts`.

Today, the schema is permissive because it uses `.catchall(z.any())`. That means extra fields can still work even if they are not explicitly typed yet.

To formalize a new field:

1. Add it to the `schema` object for the relevant collection.
2. Pick the right Zod type.
3. Keep it optional unless the project really requires it on every page.

Example:

```ts
schema: z.object({
  icon: z.string().optional(),
  layout: z.string().optional(),
  description: z.string().optional(),
}).catchall(z.any())
```

Use this when you want stronger typing, clearer conventions, or better editor support for a field that is already becoming standard in the repo.

## Section Metadata With `_dir.yml`

Use `_dir.yml` when you need to control metadata for a folder or section instead of a single page.

Keys used here today:

- `title`
- `icon`
- `navigation.order`

Example:

```yaml
title: Integrations
icon: i-tabler-puzzle
navigation.order: 5
```

Real examples:

- `content/web-client/integrations/_dir.yml`
- `content/protocol/consensus/_dir.yml`
- `content/rpc/methods/_dir.yml`
