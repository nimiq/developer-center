<p align="center">
  <a href="https://github.com/nimiq/nimiq-developer-center">
    <img src="public/nimiq-dev-center-banner.png" alt="Nimiq Developer Center Logo" width="400" />
  </a>
</p>

# Nimiq Developer Center

This repository powers the [Nimiq Developer Center](https://nimiq.com/developers). It contains the docs site, local UI customizations, server helpers, and generated reference content used to publish developer documentation for the Nimiq ecosystem.

## What This Repo Contains

- Documentation content written in Markdown
- App-level UI customization and local Vue components
- Nitro server endpoints for dynamic or remote-backed features
- Generated reference docs such as RPC and web-client content
- Runtime and deployment configuration for the docs site

## Tech Stack

- [Nuxt](https://nuxt.com/) - Application framework and app runtime
- [Docus](https://docus.dev/) - Documentation layer built on top of Nuxt
- [Nuxt Content](https://content.nuxt.com/) - Markdown content engine and collections layer
- [Nuxt UI](https://ui.nuxt.com/) - Shared UI components and app theming
- [Nitro](https://nitro.build/) - Server runtime and deployment layer
- CSS + Tailwind v4-style theme tokens - Global styling and design tokens
- [pnpm](https://pnpm.io/) - Package manager

## File Map

```text
developer-center/
├── content/                 # Authored docs content
│   └── maintainers/         # Internal maintainer docs
├── app/                     # Components, styling, app config, local UI logic
│   ├── components/
│   └── assets/css/
├── server/                  # Nitro API routes
│   └── api/
├── scripts/                 # Generation scripts
├── public/                  # Static assets
├── nuxt.config.ts           # App/runtime configuration
├── content.config.ts        # Content collections and schema
└── README.md                # Repository entrypoint
```

## Local Development

Use `Node 22+`.

```bash
git clone https://github.com/nimiq/developer-center
cd developer-center
pnpm install
pnpm dev
```

## Useful Commands

- `pnpm dev` - Start the local docs site
- `pnpm lint` - Run ESLint across the repository
- `pnpm typecheck` - Run Nuxt type checking
- `pnpm build` - Build the production site

## Maintainer Docs

Use the README as the quick start, then go deeper here:

- [Developer Center 101](content/maintainers/index.md)
- [Best Practices](content/maintainers/best-practices.md)
- [Front Matter Cheatsheet](content/maintainers/front-matter-cheatsheet.md)
- [Navigation Map](content/maintainers/navigation-map.md)
- [Maintenance Workflow](content/maintainers/maintenance-workflow.md)

These internal docs split the maintainer reference by purpose: architecture, conventions, metadata, navigation ownership, and operational workflow.

## Contributing

PRs are welcome if you want to improve the Developer Center.

For repository structure, maintenance guidance, and "go here to change this" instructions, start with the maintainer docs linked above.

## Help

[Discord](https://discord.gg/cMHemg8) | [Telegram](https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw) | [Issues](https://github.com/nimiq/developer-center/issues/new)

## License

This project is licensed under the Apache 2.0 License. See [LICENSE.md](LICENSE.md) for details.

The documentation and written content are licensed under the [Creative Commons Attribution 4.0 International License (CC-BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
