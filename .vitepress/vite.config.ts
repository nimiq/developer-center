import { readFileSync } from 'node:fs'
import { consola } from 'consola'
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
import llmstxt from 'vitepress-plugin-llms'
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
            // Exclude nimiq-utils module pages (they don't exist yet, data is in nimiq-utils.data.ts)
            'nimiq-utils/*',
            '!nimiq-utils/index.md',
            '!nimiq-utils/installation.md',
            '!nimiq-utils/[module].md',
          ],
          experimental: {
            depth: 2,
          },
        },
      ),

      NimiqVitepressVitePlugin({
        repoURL: 'https://github.com/nimiq/developer-center',
      }),
    ],
  }
})
