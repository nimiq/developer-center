import { URL, fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { env } from 'node:process'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, postcssIsolateStyles } from 'vitepress'
import container from 'markdown-it-container'
import transformerDirectives from '@unocss/transformer-directives'
import VueDevTools from 'vite-plugin-vue-devtools'
import { version } from '../package.json'
import { Accordion, SidebarSectionHeader, getFilesItemsFromFolder } from './theme/utils/sidebar'

// @unocss-include

const repoUrl = execSync('git config --get remote.origin.url').toString().trim()
const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
const commitUrl = `${repoUrl}/commit/${commitHash}`

console.log('OMAGI ______________', { mode: env.NODE_ENV })
const buildMode = env.NODE_ENV

// Files to ignore when generating the sidebar
// We use micromatch to match the files: https://github.com/micromatch/micromatch
export const IGNORED_FILES = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/nimiq-developer-center/',
  title: 'Nimiq Developer Center',
  srcExclude: ['**/README.md'],
  description:
    'Nimiq\'s official documentation to interact with the Nimiq ecosystem',

  cleanUrls: true,
  themeConfig: {

    nav: [
      { text: 'Learn', link: '/learn/' },
      { text: 'Build', link: '/build/' },
      {
        text: 'Contributing',
        items: [
          { text: 'Nimiq Core RS Albatross', link: 'https://github.com/nimiq/core-rs-albatross#contributing' },
          { text: 'Nimiq Wallet', link: 'https://github.com/nimiq/wallet' },
          { text: 'Nimiq Core JS', link: 'https://github.com/nimiq/core-js' },
        ],
      },
    ],

    sidebar: {
      '/learn/': [
        {
          text: SidebarSectionHeader({ text: 'Learn', icon: 'bulb' }),
          items: [
            { text: 'Getting started', link: '/learn/index' },
          ],
        },
        {
          text: SidebarSectionHeader({ text: 'Protocol', icon: 'nodes', prefix: 'About the' }),
          items: [
            { text: 'Overview', link: '/learn' },
            ...getFilesItemsFromFolder('learn/protocol', { include: ['overview', 'glossary', 'block-format'] }),
            Accordion({ path: 'learn/protocol/validators' }),
            ...getFilesItemsFromFolder('learn/protocol', { include: ['skip-blocks', 'penalties', 'accounts', 'transactions', 'mempool'] }),
            Accordion({ path: 'learn/protocol/sync-protocol', sort: ['nodes-and-sync'] }),
            ...getFilesItemsFromFolder('learn/protocol', { include: ['ZKP-and-recursive-SNARKs', 'prover-node', 'migration', 'verifiable-random-functions'] }),
          ],
        },
      ],

      '/build/': [
        {
          text: SidebarSectionHeader({ text: 'Build', icon: 'i-nimiq:icons-lg-tools' }),
          items: [
            { text: 'Overview', link: '/' },
          ],
        },
        {
          text: SidebarSectionHeader({ text: 'Web client', icon: 'i-nimiq:icons-lg-bulb' }),

          // Needs to be dynamic. The first time the developer does run the project in needs to run the
          // plugin to generate the docs first. After that it should just use the generated docs.
          get items() {
            return [
              {
                text: 'Getting started',
                link: '/build/web-client/index',
              },
              Accordion({ path: 'build/web-client/classes' }),
              Accordion({ path: 'build/web-client/enums' }),
              Accordion({ path: 'build/web-client/interfaces' }),
            ]
          },
        },
        {
          text: SidebarSectionHeader({ text: 'UI', icon: 'i-nimiq:globe', prefix: 'Using Nimiq\'s' }),
          items: [
            Accordion({ path: 'build/ui/design-system' }),
            Accordion({
              path: 'build/ui/icons',
              sort: ['getting-started'],
            }),
            Accordion({ path: 'build/ui/css-framework', sort: ['overview', 'fonts', 'typography', 'colors', 'buttons', 'inputs', 'cards'] }),
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nimiq' },
      { icon: 'twitter', link: 'https://twitter.com/nimiq' },
    ],

    search: {
      provider: 'local',
    },
  },

  markdown: {
    math: true, // Allow latex math

    // Add ::: goal ::: custom markdown-it plugins
    config: (md) => {
      md.use(...[container, 'goal', {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `
              <div class="custom-block" bg="green-10 dark:green/20" text="green dark:green-60">
                <p flex gap-x-8><div i-nimiq:flag></div><span>Goal</span></p>
              `
          }
          else { return `</div>\n` }
        },
      }])
      md.use(...[container, 'warning', {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `
              <div class="custom-block" bg="yellow/10 dark:yellow/20" text="orange dark:yellow-60">
                <p flex gap-x-8><div i-nimiq:icons-lg-tools text="orange dark:yellow-60"></div><span>Warning</span></p>
              `
          }
          else { return `</div>\n` }
        },
      }])
      md.use(...[container, 'tip', {
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `
              <div class="custom-block" bg="gold/10" text="gold">
                <p flex gap-x-8><div i-nimiq:icons-lg-bulb></div><span>Tip</span></p>
              `
          }
          else { return `</div>\n` }
        },
      }])
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: { overlay: false },
    },

    define: {
      __REPO_LAST_COMMIT_URL__: JSON.stringify(commitUrl),
      __REPO_LAST_COMMIT_HASH__: JSON.stringify(commitHash),
      __REPO_URL__: JSON.stringify(repoUrl),
      __DEVELOPER_CENTER_VERSION__: JSON.stringify(version),
      __BUILD_ENVIRONMENT__: JSON.stringify(buildMode),
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
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
      UnoCSS({
        content: {
          filesystem: ['.vitepress/config.ts', '.vitepress/theme/utils/sidebar.ts'],
        },
        variants: [
          (matcher) => {
            if (!matcher.startsWith('inverted:'))
              return matcher
            return {
              matcher: matcher.slice(9),
              selector: s => `[data-inverted] ${s}`,
            }
          },
        ],

        transformers: [
          transformerDirectives(),
        ],

        presets: [
          presetUno({ attributifyPseudo: true }),
          presetAttributify(),
          presetIcons({
            collections: {
              logos: () => import('../node_modules/@iconify-json/logos/icons.json').then(res => res.default as any),
              nimiq: () => fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json()),
            },
          }),
          presetWebFonts({
            provider: 'bunny',
            fonts: {
              sans: 'Mulish:400,600,700',
              mono: 'Fira Code:400',
            },
          }),
          presetRemToPx({ baseFontSize: 4 }),
        ],
        theme: {
          colors: {
            darkblue: {
              DEFAULT: '#1f2348',
              6: '#ededf0',
              10: '#e9e9ed',
              15: '#cdcdd5',
              20: '#d2d3da',
              25: '#c7c8d1',
              30: '#bcbdc8',
              40: '#a5a7b6',
              50: '#8f91a3',
              60: '#797b91',
              70: '#62657f',
              80: '#4c4f6d',
              90: '#35395a',
              94: '#2c3053',
              1000: '#12163C',
              dimmed: '#292d51',
            },
            blue: {
              DEFAULT: '#0582CA',
              10: '#e6f3fa',
              60: '#69b4df',
            },
            gold: {
              DEFAULT: '#E9B213',
              10: '#fcf7e6',
              20: '#faf0ce',
              30: '#f6e8b6',
              40: '#f3e09e',
              50: '#f1d884',
              60: '#eed06a',
              70: '#ecc850',
              80: '#e8c033',
              90: '#e6b909',
            },
            green: {
              DEFAULT: '#13b59d',
              10: '#e3f2f0',
              20: '#d0f0eb',
              30: '#b8e9e2',
              40: '#a1e1d8',
              50: '#89dace',
              60: '#71d2c4',
              70: '#5acbba',
              80: '#42c3b0',
              90: '#13b59d',
            },
          },
          breakpoints: {
            sm: '640px',
            md: '768px',
            md2: '960px',
            lg: '1024px',
            xl: '1280px',
          },
        },
        rules: [
          ['bg-radial-lightblue', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #265DD7 0%, #0582CA 100%)' }],
          ['bg-radial-green', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #41A38E 0%, #21BCA5 100%)' }],
          ['shadow', { 'box-shadow': '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)' }],

          [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
        ],

        shortcuts: {
          'label': 'font-bold text-12 leading-12 md:text-14 md:leading-14 uppercase [letter-spacing:1.3px] whitespace-nowrap',
          'border-base': 'border-[1.5px] border-solid border-darkblue-10 dark:border-darkblue-94',
        },
      }),
      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/HeaderLogo.vue', import.meta.url),
          ),
        },
        {
          find: /^.*\/VPDocFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Footer.vue', import.meta.url),
          ),
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
  },
})

;(async () => {
  // Read installed package version of @nimiq/core-web
  const packageVersion = JSON.parse(fs.readFileSync(path.join(__dirname, '../node_modules/@nimiq/core-web/package.json'), 'utf-8')).version as string

  // Read package version of generated docs, if already built
  const versionFile = path.join(__dirname, '../build/web-client/_version')
  if (fs.existsSync(versionFile)) {
    const generatedVersion = fs.readFileSync(versionFile, 'utf-8')

    // Skip build if package version and generated version match
    if (packageVersion === generatedVersion) {
      // eslint-disable-next-line no-console
      console.log(`Web-Client docs ${packageVersion} already generated`)
      return
    }
  }

  // Rebuild docs
  // eslint-disable-next-line no-console
  console.log(`Generating Web-Client docs ${packageVersion} ...`)
  execSync('pnpm run build:web-client', { stdio: 'inherit' })

  // Update entry file with frontmatter to disable the "next" footer button
  const entryFile = path.join(__dirname, '../build/web-client/index.md')
  let entryFileContent = fs.readFileSync(entryFile, 'utf-8')
  entryFileContent = `---\nnext: false\n---\n${entryFileContent}`
  fs.writeFileSync(entryFile, entryFileContent)

  // Write version file for generated docs
  fs.writeFileSync(versionFile, packageVersion)
})()
