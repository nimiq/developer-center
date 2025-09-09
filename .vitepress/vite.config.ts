import { readFileSync } from 'node:fs'
import { consola } from 'consola'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import { resolve } from 'pathe'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import topLevelAwait from 'vite-plugin-top-level-await'
import VueDevTools from 'vite-plugin-vue-devtools'
import wasm from 'vite-plugin-wasm'
import llmstxt from 'vitepress-plugin-llms'
import { loadMethods } from './rpc/utils'
import { RpcDocsGeneratorPlugin } from './rpc/vite'
import { generateWebClientDocs } from './scripts/web-client'

export default defineConfig(async () => {
  await generateWebClientDocs()

  // Load the OpenRPC document
  const openRpcDocPath = resolve(__dirname, 'rpc/openrpc-document.json')
  const openRpcDoc = JSON.parse(readFileSync(openRpcDocPath, 'utf-8'))
  const openRpcDocInfo = openRpcDoc.info
  const methods = await loadMethods(openRpcDoc)

  return {
    optimizeDeps: {
      exclude: ['vitepress', '@nimiq/core'],
    },
    server: {
      hmr: { overlay: false },

      proxy: {
        // Create a proxy for RPC requests to nimiqwatch
        '/api/rpc': {
          target: 'https://rpc.nimiqwatch.com/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/rpc/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (_proxyReq, req, _res) => {
              // Log RPC requests for debugging
              consola.info(`Proxying RPC request to nimiqwatch: ${req.method} ${req.url}`)
            })
            proxy.on('error', (err, _req, _res) => {
              consola.error(`Proxy error: ${err}`)
            })
          },
        },
      },
    },

    ssr: {
      noExternal: ['shiki'],
    },

    define: {
      __NIMIQ_OPENRPC_INFO__: JSON.stringify(openRpcDocInfo),
      __NIMIQ_OPENRPC_METHODS__: JSON.stringify(methods),
      global: 'globalThis',
    },

    build: {
      target: ['es2020', 'edge108', 'firefox114', 'chrome108', 'safari14'],
    },

    worker: {
      plugins: () => [
        wasm(),
        topLevelAwait(),
      ],
    },

    plugins: [
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
      topLevelAwait(),

      RpcDocsGeneratorPlugin(),
      llmstxt(
        {
          ignoreFiles: [
            'archive/**',
            '**/migration*',
            '**/nimiq-styles/**',
            '**/*nimiq-style*',
            'nimiq-pow/**',
            '**/*.json',
            '**/*.js',
            '**/*.ts',
            '**/_*',
            'README.md',
            'LICENSE.md',
            '.*',
            // Exclude RPC client methods directory to avoid dynamic file issues
            'rpc-client/methods/**',
            '!rpc-client/methods/index.md',
            '!rpc-client/methods/[method].md',
          ],
          experimental: {
            depth: 2,
          },
        },
      ),

      NimiqVitepressVitePlugin({
        gitChangelog: { repoURL: 'https://github.com/nimiq/developer-center' },
      }),
    ],
  }
})
