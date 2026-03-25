---
title: Best Practices
description: Maintainer conventions, comment rules, validation expectations, and guardrails for the Developer Center repository.
navigation: false
layout: docs
---

# Best Practices

Use this page when you already know what you need to change and want the repo conventions and guardrails in one place.

For architecture, file map, and migration context, start with [Developer Center 101](/maintainers/).

For page front matter and `_dir.yml` metadata, see [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

For landing-page ownership, module ordering, and sidebar file ownership, see [Navigation Map](/maintainers/navigation-map).

For step-by-step operational tasks, see [Maintenance Workflow](/maintainers/maintenance-workflow).

## How To Use This Page

Use this guide when you need conventions for:

- comments and metadata
- CSS comment syntax
- validation before committing
- deciding which layer should own a change
- avoiding common maintenance mistakes

If you need architecture, placement, or workflow steps, use the other maintainer pages linked above.

## Comment and Metadata Rules

Use front matter for page metadata.

Use HTML comments only when you intentionally need a hidden comment inside Markdown body content.

Do not use `//` as Markdown comment syntax.

### Markdown Example

```md
---
title: Example Page
description: Example metadata in front matter.
---

<!-- Internal maintainer note: revisit this example after the next design update. -->
```

### Rule of Thumb

- Use front matter for metadata such as `title`, `description`, `icon`, and `navigation.*`
- Use HTML comments for hidden Markdown comments
- Do not add new legacy metadata comments like `<!-- url -->`, `<!-- type -->`, or `<!-- summary -->` unless the team explicitly decides to keep using them

For the exact page and section metadata shape, use [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

## CSS Comment Conventions

CSS comments use `/* ... */`.

Do not use HTML comments in CSS.

Do not use `//` comments in CSS files.

### CSS Example

```css
/* Global typography tokens */
@theme {
  --font-sans: 'Mulish', sans-serif;
}
```

## What To Run Before Committing

Before committing a meaningful change, use this baseline:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Use these additional commands when relevant:

- `pnpm dev` for visual checks, navigation checks, and content rendering checks
- `pnpm build:rpc` when RPC-generated docs or OpenRPC-derived output changed
- `pnpm build:web-client` when web-client reference docs changed

For fast local iteration, `pnpm exec eslint path/to/file.md` is fine, but it is not the full final validation path.

### Also Know This

The repo has a pre-commit hook via `lint-staged` that runs `eslint --fix` on staged `js`, `ts`, `vue`, and `md` files. That is helpful, but it is not a substitute for `pnpm lint`, `pnpm typecheck`, and `pnpm build` before you push important changes.

## Work In The Correct Layer

Use these rules of thumb before you start editing:

- `content/` is for authored docs and section metadata
- `app/components/` is for reusable local Vue UI
- `app/app.config.ts` is for shared app and component behavior
- `app/assets/css/main.css` is for global CSS, design tokens, and font-family changes
- `server/api/` is for remote-backed helpers and endpoints
- `scripts/` is for generated-doc refresh logic and other maintenance scripts

If the question is "which file owns placement or order?", use [Navigation Map](/maintainers/navigation-map).

If the question is "what steps should I follow to make this change?", use [Maintenance Workflow](/maintainers/maintenance-workflow).

## Maintenance Habits

Use these habits to avoid common mistakes:

- Do not treat `.nuxt/`, `.output/`, `.data/`, and `.wrangler/` as primary edit targets
- Decide whether the change belongs in `content/`, `app/`, `server/`, `scripts/`, or config before editing
- Prefer source-of-truth files over generated artifacts
- Verify navigation placement whenever you add docs
- Verify styling changes both in CSS tokens and in real rendered pages
- Run the baseline validation commands before finalizing non-trivial changes
