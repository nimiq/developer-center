import { URL, fileURLToPath } from 'node:url'
import { env } from 'node:process'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { postcssIsolateStyles } from 'vitepress'
import { version } from '../package.json'
import { getGitStats } from './scripts/git-stats'

export default defineConfig(async ({ mode }) => {
  const environment = env.DEPLOYMENT_ENV || mode
  console.log(`Building for ${environment}. ${JSON.stringify({ env: env.DEPLOYMENT_ENV, mode })}`) // eslint-disable-line no-console

  const { albatrossCommitDate, albatrossCommitHash, commitHash, commitUrl, repoUrl } = await getGitStats()

  return {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: { overlay: false },
    },

    define: {
      __REPO_LAST_COMMIT_URL__: JSON.stringify(commitUrl),
      __REPO_LAST_COMMIT_HASH__: JSON.stringify(commitHash),
      __ALBATROSS_COMMIT_HASH__: JSON.stringify(albatrossCommitHash),
      __ALBATROSS_COMMIT_DATE__: JSON.stringify(albatrossCommitDate.toString()),
      __REPO_URL__: JSON.stringify(repoUrl),
      __DEVELOPER_CENTER_VERSION__: JSON.stringify(version),
      __BUILD_ENVIRONMENT__: JSON.stringify(environment),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },

    plugins: [
      Components({
        dirs: ['.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
          'vitepress',
        ],
        vueTemplate: true,
      }),
      UnoCSS({ configFile: './.vitepress/uno.config.ts' }),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

      ViteImageOptimizer(),

    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/HeaderLogo.vue', import.meta.url)),
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/Sidebar.vue', import.meta.url)),
        },
        {
          find: /^.*\/VPDocFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/DocFooter.vue', import.meta.url)),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/Footer.vue', import.meta.url)),
        },

      ],
    },
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },
    },
  }
})
