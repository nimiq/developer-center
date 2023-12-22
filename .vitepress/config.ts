import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetWebFonts from '@unocss/preset-web-fonts';
import { fileURLToPath, URL } from "node:url";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig, postcssIsolateStyles } from "vitepress";
import fs from 'node:fs'
import path from 'node:path'
import container from 'markdown-it-container'
import transformerDirectives from '@unocss/transformer-directives'

// @unocss-include

const IGNORED_FILES = ['learn/protocol/rewards.md', 'learn/protocol/overview.md', 'learn/protocol/optimistic-and-pessimistic-mode.md', 'learn/protocol/security-analysis.md', 'learn/protocol/messages-and-requests.md', 'learn/protocol/fork-proofs.md']

/**
 * Retrieves file items from a specified folder, ordered by a given order.
 * 
 * @param folder The folder from which to retrieve file items.
 * @param order The order in which to arrange the retrieved file items.
 * @returns An array of file items from the specified folder, ordered by the given order.
 */
function getFilesItemsFromFolder(folder: string, order: string[] = []) {
  const files = fs.readdirSync(path.join(__dirname, `../${folder}`))
  const notIgnoredFiles = files.filter(file => !IGNORED_FILES.includes(`${folder}/${file}`))
  const orderedFiles = order.map(file => file.includes('.') ? file : `${file}.md`)
  const unorderedFiles = notIgnoredFiles.filter(file => !orderedFiles.includes(file))
  const items = [...orderedFiles, ...unorderedFiles].map(file => {
    const fileName = path.basename(file, path.extname(file));
    const text = fileName.replace(/-/g, ' ');
    return {
      text: text.charAt(0).toUpperCase() + text.slice(1),
      link: `/${folder}/${fileName}` // Use the original filename for the link
    }
  })
  return items
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/nimiq-developer-centre/',
  title: "Nimiq Developer Centre",
  srcExclude: ['**/README.md'],
  description:
    "Nimiq's official documentation to interact with the Nimiq ecosystem",
  themeConfig: {
    nav: [
      { text: "Learn", link: "/learn/" },
      { text: "Build", link: "/build/" },
      {
        text: 'Contribute',
        items: [
          {
            text: 'Comunity Projects',
            items: [
              { text: 'Nimtrix', link: '...' },

              { text: 'Space Nimiq', link: '...' }
            ]
          },
          {
            text: 'Contribute to Nimiq',
            items: [
              { text: 'Nimiq Core', link: '...' },
              { text: 'Nimiq Hub', link: '...' },
              { text: 'The good old Nimiq Safe', link: '...' },
            ]
          }
        ]
      },
    ],

    sidebar: {
      '/learn/': [
        {
          text: `
            <div m="t-8 b-24" flex gap-x-8 items-center>
              <div w-24 h-24 i-nimiq:bulb></div>
              <span text="24 darkblue-90 dark:white/90">Learn</span>
            </div>
          `,
          items: [
            { text: 'Overview', link: '/learn/protocol/overview' },
          ]
        },
        {
          text: `
            <div text="14 darkblue/50 dark:white/50" pt-20>About the</div>
            <div mt-8 flex gap-x-8 mb-24 items-center>
              <div w-20 h-20 i-nimiq:nodes></div>
              <span text="20 darkblue-80 dark:white/80">Protocol</span>
            </div>`,
          items: [
            ...getFilesItemsFromFolder("learn/protocol", ['overview', 'glossary']),
            {
              text: '<span class="label">Sync protocol</span>',
              collapsed: true,
              items: getFilesItemsFromFolder('learn/protocol/sync-protocol', ['nodes-and-sync'])
            },
            {
              text: '<span class="label">Validators</span>',
              collapsed: true,
              items: getFilesItemsFromFolder('learn/protocol/validators'),
            },
          ]
        },
        // {
        //   text: `
        //     <div text="14 darkblue/50 dark:white/50" pt-20>About the</div>
        //     <div mt-8 flex gap-x-8 mb-24 items-center>
        //       <div w-20 h-20 i-nimiq:nodes></div>
        //       <span text="20 darkblue-80 dark:white/80">Other</span>
        //     </div>`,
        //   items: [
        //     {
        //       text: '<span class="label">OASIS</span>',
        //       collapsed: false,
        //       items: getFilesItemsFromFolder('learn/other')
        //     }
        //   ]
        // },

      ],

      '/build/': [
        {
          text: `
            <div m="t-8 b-24" flex gap-x-8 items-center>
              <div w-24 h-24 i-nimiq:tools></div>
              <span text="24 darkblue-90 dark:white/90">Build</span>
            </div>
          `,
          items: [
            { text: 'Overview', link: '/' },
          ],
        },
        // {
        //   text: `
        //     <div text="14 darkblue/50 dark:white/50" pt-20>Build on it via</div>
        //     <div mt-8 flex gap-x-8 mb-24 items-center>
        //       <div w-20 h-20 i-nimiq:nodes></div>
        //       <span text="20 darkblue-80 dark:white/80">RCP</span>
        //     </div>`,
        //   items: [
        //     {
        //       text: '<span class="label">Tutorials</span>',
        //       collapsed: false,
        //       items: [
        //         { text: 'Tutorial 1', link: '/config/' },
        //         { text: 'Tutorial 2', link: '/config/' },
        //         { text: 'Tutorial 3', link: '/config/' },
        //       ]
        //     }
        //   ]
        // },
        // {
        //   text: `
        //     <div text="14 darkblue/50 dark:white/50" pt-20>Build on it via</div>
        //     <div mt-8 flex gap-x-8 mb-24 items-center>
        //       <div w-20 h-20 i-nimiq:globe></div>
        //       <span text="20 darkblue-80 dark:white/80">Web Client</span>
        //     </div>`,
        //   items: [
        //     { text: 'The WASM client', link: '/config/' },
        //     { text: 'Another useful resource', link: '/config/three' },
        //     { text: 'Finally the end', link: '/config/four' }
        //   ]
        // },
        {
          text: `
            <div text="14 darkblue/50 dark:white/50" pt-20>Using Nimiq's</div>
            <div mt-8 flex gap-x-8 mb-24 items-center>
              <div w-20 h-20 i-nimiq:globe></div>
              <span text="20 darkblue-80 dark:white/80">UI</span>
            </div>`,
          items: [
            { text: '<div flex items-center gap-x-8 mb-4><div i-logos:figma h-16 w-16 text-white></div> Style Guide</div>', link: 'https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&node-id=0-1&mode=design&t=kLhdbJNNEnvBZrxV-0' },
            {
              text: '<span label>CSS Framework</span>',
              collapsed: false,
              items: getFilesItemsFromFolder('build/ui/css-framework', ['overview', 'fonts', 'typography', 'colors', 'buttons', 'inputs', 'cards'])
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/nimiq" },
      { icon: "twitter", link: "https://twitter.com/nimiq" },
    ],

    search: {
      provider: "local",
    }
  }, 

  markdown: {
    math: true, // Allow latex math

    // Add ::: goal ::: custom markdown-it plugins
    config: (md) => {
      md.use(...[
        container, 'goal', {
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
              <div class="custom-block" bg="green-10 dark:green/20" text="green dark:green-60">
                <p flex gap-x-8><div i-nimiq:flag></div><span>Goal</span></p>
              `
            } else return `</div>\n`
          }
        },
      ])
      md.use(...[
        container, 'tip', {
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
              <div class="custom-block" bg="gold/10" text="gold">
                <p flex gap-x-8><div i-nimiq:bulb></div><span>Tip</span></p>
              `
            } else return `</div>\n`
          }
        }]
      )
    }
  },

  vite: {
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      hmr: { overlay: false },
    },
    plugins: [
      Components({
        dirs: [".vitepress/theme/components"],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/,],
      }),
      AutoImport({
        imports: [
          "vue",
          "@vueuse/core",
          'vitepress'
        ],
        vueTemplate: true,
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
      UnoCSS({
        content: {
          filesystem: ['.vitepress/config.ts']
        },
        variants: [
          (matcher) => {
            if (!matcher.startsWith('inverted:'))
              return matcher
            return {
              matcher: matcher.slice(9),
              selector: (s) => `[data-inverted] ${s}`,
            }
          },
        ],

        transformers: [
          transformerDirectives(),
        ],

        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            collections: {
              "nimiq": FileSystemIconLoader('./assets/icons', svg => svg),
              "logos": FileSystemIconLoader('./node_modules/@iconify-json/logos/icons', svg => svg),
            }
          }),
          presetWebFonts({
            provider: 'bunny',
            fonts: {
              sans: 'Mulish:400,600,700',
              mono: 'Fira Code:400'
            },
          }),
          presetRemToPx({ baseFontSize: 4 }),
        ],
        theme: {
          colors: {
            darkblue: {
              DEFAULT: "#1f2348",
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
              dimmed: '#292d51'
            },
            blue: {
              DEFAULT: '#0582CA',
              10: '#e6f3fa',
              60: '#69b4df',
            },  
            gold: {
              DEFAULT: "#E9B213",
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
            }
          },
        },
        rules: [
          ['bg-radial-lightblue', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #265DD7 0%, #0582CA 100%)' }],
          ['bg-radial-green', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #41A38E 0%, #21BCA5 100%)' }],
          ['shadow', { 'box-shadow': '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)' }],

          [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
        ],

        shortcuts: {
          'label': 'font-bold text-14 leading-14 uppercase [letter-spacing:1.3px]',
          'css-framework-card': 'flex justify-center flex-col',
        }
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/HeaderLogo.vue", import.meta.url),
          ),
        },
      ],
    },
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ]
      }
    }
  },
});
