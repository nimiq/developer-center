import { readFileSync } from 'node:fs'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import { resolve } from 'pathe'
import { readPackageJSON } from 'pkg-types'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VueDevTools from 'vite-plugin-vue-devtools'
import wasm from 'vite-plugin-wasm'
// import llmstxt from 'vitepress-plugin-llms'
import { RpcProxyPlugin } from './plugins/rpc-proxy'
import { RpcDocsGeneratorPlugin } from './rpc/vite'
import { generateWebClientDocs } from './scripts/web-client'

export default defineConfig(async () => {
  await generateWebClientDocs()

  // Load the OpenRPC document
  const openRpcDocPath = resolve(__dirname, 'rpc/openrpc-document.json')
  const openRpcDoc = JSON.parse(readFileSync(openRpcDocPath, 'utf-8'))
  const openRpcDocInfo = openRpcDoc.info

  // Get the nimiq-rpc-client-ts version from package.json
  const { devDependencies } = await readPackageJSON()
  const nimiqRpcVersion = devDependencies?.['@nimiq/core']
    // Nimiq Web Client !== GitHub release
    .replace('^2', 'v1') || 'unknown'

  return {
    optimizeDeps: {
      exclude: ['vitepress', '@nimiq/core'],
    },
    server: {
      hmr: { overlay: false },
    },

    ssr: {
      noExternal: ['shiki'],
    },

    define: {
      __NIMIQ_OPENRPC_INFO__: JSON.stringify(openRpcDocInfo),
      __NIMIQ_RPC_VERSION__: JSON.stringify(nimiqRpcVersion),
      global: 'globalThis',
    },

    build: {
      target: ['esnext'],
    },

    worker: {
      plugins: () => [
        wasm(),
      ],
    },

    plugins: [
      // NitroBuildPlugin(), // Disabled - using native Cloudflare Pages Functions instead
      RpcProxyPlugin(),
      Components({
        dirs: ['.vitepress/theme/components', 'nimiq-vitepress-theme/components'],
        dts: './.vitepress/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
          'vitepress',
        ],

        dts: './.vitepress/auto-imports.d.ts',
        dirs: ['.vitepress/theme/components', '.vitepress/theme/utils'],

        vueTemplate: true,
      }),
      UnoCSS({ configFile: './uno.config.ts' }),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

      ViteImageOptimizer(),
      wasm(),

      RpcDocsGeneratorPlugin(),

      NimiqVitepressVitePlugin({
        repoURL: 'https://github.com/nimiq/developer-center',
        llms: {
          experimental: { depth: 2 },
        },
      }),
    ],
  }
})
