import { URL, fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { env } from 'node:process'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetAttributify, presetIcons, presetMini, presetTypography, presetUno } from 'unocss'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, postcssIsolateStyles } from 'vitepress'
import container from 'markdown-it-container'
import transformerDirectives from '@unocss/transformer-directives'
import VueDevTools from 'vite-plugin-vue-devtools'
import { spawn } from 'cross-spawn'
import { version } from '../package.json'
import { Accordion } from './theme/utils/sidebar'

// @unocss-include

const repoUrl = execSync('git config --get remote.origin.url').toString().trim()
const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
const commitUrl = `${repoUrl}/tree/${commitHash}`

const { hash: albatrossCommitHash, date: albatrossCommitDate } = await fetch('https://api.github.com/repos/nimiq/core-rs-albatross/commits?per_page=1')
  .then(res => res.json()).then(res => ({ hash: res[0].sha.slice(0, 7), date: res[0].commit.author.date }))

const buildMode = env.NODE_ENV || 'development'

const baseUrl = '/nimiq-developer-center/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  title: 'Nimiq Developer Center',
  srcExclude: ['**/README.md'],
  description:
    'Nimiq\'s official documentation to interact with the Nimiq ecosystem',

  lastUpdated: true,
  cleanUrls: true,

  async transformPageData(pageData) {
    function getCommitHash(file: string): Promise<string | undefined> {
      return new Promise<string | undefined>((resolve, reject) => {
        const cwd = dirname(file)
        if (!existsSync(cwd))
          return resolve(undefined)
        const fileName = basename(file)
        const child = spawn('git', ['log', '-1', '--pretty="%H"', fileName], { cwd })
        let output = ''
        child.stdout.on('data', d => (output += String(d)))
        child.on('close', () => resolve(output.trim().replace(/"/g, '')))
        child.on('error', reject)
      })
    }
    pageData.updatedCommitHash = await getCommitHash(pageData.filePath)
  },

  themeConfig: {

    nav: [
      { text: 'Learn', link: '/learn/' },
      { text: 'Build', link: '/build/' },
      {
        text: 'Contribute',
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
          text: 'Learn',
          icon: 'i-nimiq:icons-lg-bulb',
          items: [
            { text: 'Overview', link: '/learn/' },
          ],
        },
        {
          prefix: 'About the',
          text: 'Protocol',
          icon: 'i-nimiq:icons-lg-nodes',
          items: [
            { text: 'Overview', link: '/learn/protocol/overview' },
            { text: 'Glossary', link: '/learn/protocol/glossary' },
            { text: 'Block format', link: '/learn/protocol/block-format' },
            {
              text: 'Validators',
              collapsed: false,
              items: [
                { text: 'Slots', link: '/learn/protocol/validators/slots' },
                { text: 'Staking Contract', link: '/learn/protocol/validators/staking-contract' },
                { text: 'Validator Keys', link: '/learn/protocol/validators/validator-keys' },
                { text: 'Validator and stakers', link: '/learn/protocol/validators/validators-and-stakers' },
              ],
            },
            { text: 'Skip blocks', link: '/learn/protocol/skip-blocks' },
            { text: 'Penalties', link: '/learn/protocol/penalties' },
            { text: 'Accounts', link: '/learn/protocol/accounts' },
            { text: 'Transactions', link: '/learn/protocol/transactions' },
            { text: 'Mempool', link: '/learn/protocol/mempool' },
            {
              text: 'Sync protocol',
              collapsed: false,
              items: [
                { text: 'Block live sync', link: '/learn/protocol/sync-protocol/block-live-sync' },
                { text: 'History macro sync', link: '/learn/protocol/sync-protocol/history-macro-sync' },
                { text: 'Light macro sync', link: '/learn/protocol/sync-protocol/light-macro-sync' },
                { text: 'State live sync', link: '/learn/protocol/sync-protocol/state-live-sync' },
                { text: 'Nodes and sync', link: '/learn/protocol/sync-protocol/nodes-and-sync' },
              ],
            },
            { text: 'ZKP and recursive SNARKs', link: '/learn/protocol/ZKP-and-recursive-SNARKs' },
            { text: 'Prover node', link: '/learn/protocol/prover-node' },
            { text: 'Migration', link: '/learn/protocol/migration' },
            { text: 'Verifiable random functions', link: '/learn/protocol/verifiable-random-functions' },
          ],
        },
      ],

      '/build/': [
        {
          text: 'Build',
          icon: 'i-nimiq:icons-lg-tools',
          items: [
            { text: 'Overview', link: '/build/' },
          ],
        },
        {
          text: 'Web client',
          icon: 'i-nimiq:icons-lg-bulb',

          // Needs to be dynamic. The first time the developer does run the project in needs to run the
          // plugin to generate the docs first. After that it should just use the generated docs.
          get items() {
            return [
              {
                text: 'Getting started',
                link: '/build/web-client/index',
              },
              Accordion({ path: 'build/web-client/classes', collapsed: false }),
              Accordion({ path: 'build/web-client/enums', collapsed: true }),
              Accordion({ path: 'build/web-client/interfaces', collapsed: true }),
            ]
          },
        },
        {
          text: 'UI',
          icon: 'i-nimiq:globe',
          prefix: 'Using Nimiq\'s',
          items: [
            {
              text: 'Design kit',
              collapsed: false,
              items: [
                { text: 'Design Guidelines', link: '/build/ui/design-kit/guidelines' },
                buildMode !== 'production'
                  ? { text: 'Nimiq Icons', link: '/build/ui/design-kit/icons' }
                  : {},
              ],
            },
            {
              text: 'CSS framework',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/build/ui/css-framework/overview' },
                { text: 'Fonts', link: '/build/ui/css-framework/fonts' },
                { text: 'Typography', link: '/build/ui/css-framework/typography' },
                { text: 'Colors', link: '/build/ui/css-framework/colors' },
                { text: 'Buttons', link: '/build/ui/css-framework/buttons' },
                { text: 'Inputs', link: '/build/ui/css-framework/inputs' },
                { text: 'Cards', link: '/build/ui/css-framework/cards' },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nimiq', ariaLabel: 'Nimiq on GitHub' },
      { icon: 'x', link: 'https://twitter.com/nimiq', ariaLabel: 'Nimiq on Twitter' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="none"><g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M14.3 18c.6 0 1.156-.32 1.456-.844l4.207-7.312a1.687 1.687 0 0 0 .002-1.688L15.76.844A1.685 1.685 0 0 0 14.3 0H5.905a1.689 1.689 0 0 0-1.456.84L.748 7.248l-.523.908a1.695 1.695 0 0 0 0 1.684l4.224 7.313A1.68 1.68 0 0 0 5.905 18h8.396Zm-5.416-5.107a5.643 5.643 0 0 0 1.62.232c2.687 0 4.878-1.875 4.878-4.125s-2.191-4.125-4.878-4.125C7.818 4.875 5.627 6.75 5.627 9a3.749 3.749 0 0 0 1.35 2.85l-.974 1.995a.225.225 0 0 0 .09.292.212.212 0 0 0 .187 0l2.604-1.245Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20.19v18H0z"/></clipPath></defs></svg>' }, ariaLabel: 'Nimiq Forum', link: 'https://forum.nimiq.community/' },
    ],

    search: { provider: 'local',
    },
  },

  markdown: {
    math: true, // Allow latex math

    // Add ::: goal|warning ::: custom markdown-it plugins
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

  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}assets/favicons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}assets/favicons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}assets/favicons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `${baseUrl}assets/favicons/site.webmanifest` }],
    ['link', { rel: 'mask-icon', href: `${baseUrl}asset/favicons/safari-pinned-tab.svg`, color: '#eaaf0c' }],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ],

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
      __ALBATROSS_COMMIT_HASH__: JSON.stringify(albatrossCommitHash),
      __ALBATROSS_COMMIT_DATE__: JSON.stringify(albatrossCommitDate.toString()),
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
          presetMini(),
          presetUno({ attributifyPseudo: true }),
          presetTypography(),
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
            gray: {
              DEFAULT: '#f8f8f8',
            },
            lightgray: {
              DEFAULT: '#fbfbfb',
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
          // [/^shadow-(.*)$/, ([,c]) => {
          //   const [r, g, b] = {
          //     blue: [5, 130, 202],
          //     green: [19, 181, 157],
          //   }[c]
          //   return { 'box-shadow': `0px 18px 38px rgba(${r}, ${g}, ${b}, 0.07), 0px 7px 8.5px rgba((${r}, ${g}, ${b}, 0.04), 0px 2px 2.5px rgba((${r}, ${g}, ${b}, 0.02);` }
          // }],
          [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
        ],

        shortcuts: [
          {
            'label': 'font-bold text-12 leading-12 md:text-14 md:leading-14 uppercase [letter-spacing:1.3px] whitespace-nowrap',
            'border-base': 'border-[1.5px] border-solid border-darkblue-10 dark:border-darkblue-94',
            'blue-pill': 'flex items-center gap-8 rounded-full px-16 py-5.5 w-max font-bold bg-blue-10 dark:bg-blue text-blue dark:text-white',
          },
          [/^border-base-(.*)$/, ([,c]) => `border-${c}-[1.5px] border-${c}-solid border-darkblue-10 dark:border-darkblue-94`],
        ],
      }),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

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
  },
})

;(async () => {
  // Read installed package version of @nimiq/core-web
  const packageVersion = JSON.parse(readFileSync(join(__dirname, '../node_modules/@nimiq/core-web/package.json'), 'utf-8')).version as string

  // Read package version of generated docs, if already built
  const versionFile = join(__dirname, '../build/web-client/_version')
  if (existsSync(versionFile)) {
    const generatedVersion = readFileSync(versionFile, 'utf-8')

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
  const entryFile = join(__dirname, '../build/web-client/index.md')
  let entryFileContent = readFileSync(entryFile, 'utf-8')
  entryFileContent = `---\ndocFooter: false\n---\n${entryFileContent}`
  writeFileSync(entryFile, entryFileContent)

  // Write version file for generated docs
  writeFileSync(versionFile, packageVersion)
})()
