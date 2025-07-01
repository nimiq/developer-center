# Framework Integrations

Learn how to integrate the Nimiq Web Client with popular JavaScript frameworks and build tools. {.nq-subline}

The Nimiq Web Client is designed to work seamlessly with modern JavaScript development environments. Whether you're building with Vite, Nuxt, Next.js, or traditional bundlers like Webpack, we have guides to help you get started quickly.

## Available Integrations

### Modern Build Tools

<div grid="~ cols-1 md:cols-2 gap-24" mt-32>
  <a href="./vite" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:vitejs text-32></div>
      <h3 text="f-lg" font-bold mb-0>Vite</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      Fast development with Vite's modern build system and hot module replacement.
    </p>
  </a>

  <a href="./webpack" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:webpack text-32></div>
      <h3 text="f-lg" font-bold mb-0>Webpack</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      Traditional bundling with Webpack for complex build configurations.
    </p>
  </a>
</div>

### Vue Ecosystem

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./nuxt" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:nuxt-icon text-32></div>
      <h3 text="f-lg" font-bold mb-0>Nuxt</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      Full-stack Vue framework with server-side rendering and static generation.
    </p>
  </a>
</div>

### React Ecosystem

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./NextJS" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-logos:nextjs-icon text-32></div>
      <h3 text="f-lg" font-bold mb-0>Next.js</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      React framework with built-in optimization and server-side rendering.
    </p>
  </a>
</div>

### Module Systems

<div grid="~ cols-1 md:cols-2 gap-24" mt-24>
  <a href="./ESM" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-tabler:package text-32></div>
      <h3 text="f-lg" font-bold mb-0>ES Modules</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      Modern JavaScript modules for tree-shaking and optimal bundle sizes.
    </p>
  </a>

  <a href="./CommonJS" nq-card p-24 no-underline>
    <div flex="~ items-center gap-16" mb-16>
      <div i-tabler:package text-32></div>
      <h3 text="f-lg" font-bold mb-0>CommonJS</h3>
    </div>
    <p text="f-base neutral-700 dark:neutral-300" mb-0>
      Traditional Node.js module system for server-side applications.
    </p>
  </a>
</div>

## Quick Start

Most integrations follow a similar pattern:

1. **Install the Web Client**
   ```bash
   pnpm add @nimiq/core-web
   ```

2. **Configure your bundler** (if needed)
   - Add WebAssembly support
   - Configure worker support for web workers

3. **Import and initialize**
   ```typescript
   import { Client } from '@nimiq/core-web'

   const client = await Client.create()
   ```

4. **Start building**
   - Create accounts
   - Send transactions
   - Listen to blockchain events

## Additional Resources

### Developer Tools
- **[Nimiq Utils](/web-client/nimiq-utils)** - Helper utilities for addresses, formatting, and more
- **[Nimiq UI](https://onmax.github.io/nimiq-ui/)** - Ready-to-use React and Vue components

### Need Help?
- Check framework-specific guides for detailed setup instructions
- Join our [developer community](https://t.me/nimiq) for support
- Browse the [Web Client reference](/web-client/reference/) for API documentation

## Contributing

Missing an integration guide for your favorite framework? We'd love your contribution!

<div mt-32>
  <a href="https://github.com/nimiq/developer-center" nq-pill-tertiary target="_blank">
    Contribute to Documentation
  </a>
</div>
