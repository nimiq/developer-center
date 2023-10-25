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

// @unocss-include
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/nimiq-developer-center/',
  title: "Nimiq Developer Center",
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
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      '/build/': [
        {
          text: `
            <div mt-8 flex gap-x-8 mb-24 items-center>
              <div w-24 h-24 i-nimiq:tools></div>
              <span text="24 darkblue dark:white">Build</span>
            </div>
          `,
          items: [
            { text: 'Overview', link: '/' },
            { text: 'Good practices', link: '/' }
          ],
        },
        {
          text: `
            <div text="14 darkblue/50 dark:white/50" pt-20>Build on it via</div>
            <div mt-8 flex gap-x-8 mb-24 items-center>
              <div w-20 h-20 i-nimiq:nodes></div>
              <span text="20 darkblue dark:white">RCP</span>
            </div>`,
          items: [
            {
              text: '<span class="label">Tutorials</span>',
              collapsed: false,
              items: [
                { text: 'Tutorial 1', link: '/config/' },
                { text: 'Tutorial 2', link: '/config/' },
                { text: 'Tutorial 3', link: '/config/' },
              ]
            }
          ]
        },
        {
          text: `
            <div text="14 darkblue/50 dark:white/50" pt-20>Build on it via</div>
            <div mt-8 flex gap-x-8 mb-24 items-center>
              <div w-20 h-20 i-nimiq:globe></div>
              <span text="20 darkblue dark:white">Web Client</span>
            </div>`,
          items: [
            { text: 'The WASM client', link: '/config/' },
            { text: 'Another useful resource', link: '/config/three' },
            { text: 'Finally the end', link: '/config/four' }
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

        safelist: ["root"],
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            collections: {
              "nimiq": FileSystemIconLoader('./assets/icons', svg => svg),
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
              30: '#bcbdc8',
              40: '#a5a7b6',
              50: '#8f91a3',
              60: '#797b91',
              80: '#4c4f6d',
              90: '#35395a',
              94: '#2c3053',
              1000: '#12163C',
              dimmed: '#292d51'
            },
            yellow: "#E9B213"
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
        {
          find: /^.*\/VPSiadebar\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/Sidebar.vue", import.meta.url),
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
