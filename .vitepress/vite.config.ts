import { env } from 'node:process'
import { GitChangelog } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { consola } from 'consola'
import { NimiqVitepressVitePlugin } from 'nimiq-vitepress-theme/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VueDevTools from 'vite-plugin-vue-devtools'
import { RpcDocsGeneratorPlugin } from './rpc/vite'

export default defineConfig(async () => {
  const environment = env.DEPLOYMENT_MODE
  consola.info(`Building for ${environment}`)

  // const { albatrossCommitDate, albatrossCommitHash, repoUrl } = await getGitStats()

  return {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: { overlay: false },
    },

    resolve: {
      alias: {
        'rpc-docs.json': '/.vitepress/rpc/openrpc-document.json',
      },
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
        include: ['{build,learn,validators}/**/*.md', 'rpc-docs/index.md'],
      }),
      NimiqVitepressVitePlugin(),
    ],
  }
})
