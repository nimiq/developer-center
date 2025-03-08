import { env } from 'node:process'
import { consola } from 'consola'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VueDevTools from 'vite-plugin-vue-devtools'

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

    plugins: [
      Components({
        dirs: ['.vitepress/theme/components', 'nimiq-vitepress-theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
          'vitepress',
        ],

        dirs: ['.vitepress/theme/components', '.vitepress/theme/utils'],

        vueTemplate: true,
      }),
      UnoCSS({ configFile: './uno.config.ts' }),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

      ViteImageOptimizer(),
    ],
    ssr: {
      noExternal: [
        'nimiq-vitepress-theme',
      ],
    },
  }
})
