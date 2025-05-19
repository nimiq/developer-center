import { readFileSync } from 'node:fs'
import { GitChangelog } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { consola } from 'consola'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import { resolve } from 'pathe'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VueDevTools from 'vite-plugin-vue-devtools'
import { loadMethods } from './rpc/utils'
import { RpcDocsGeneratorPlugin } from './rpc/vite'

export default defineConfig(async () => {
  //  FIXME Generation is broken
  // await generateWebClientDocs()

  // Load the OpenRPC document
  const openRpcDocPath = resolve(__dirname, 'rpc/openrpc-document.json')
  const openRpcDoc = JSON.parse(readFileSync(openRpcDocPath, 'utf-8'))
  const openRpcDocInfo = openRpcDoc.info
  const methods = await loadMethods(openRpcDoc)

  return {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: { overlay: false },

      // TODO move proxy to real backend
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

    define: {
      __NIMIQ_OPENRPC_INFO__: JSON.stringify(openRpcDocInfo),
      __NIMIQ_OPENRPC_METHODS__: JSON.stringify(methods),
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

      RpcDocsGeneratorPlugin(),

      GitChangelog({
        repoURL: 'https://github.com/nimi/developer-center',
      }),
      NimiqVitepressVitePlugin(),
    ],
  }
})
