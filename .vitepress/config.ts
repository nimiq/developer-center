import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import presetWebFonts from '@unocss/preset-web-fonts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nimiq Developer Center",
  description:
    "Nimiq's official documentation to interact with the Nimiq ecosystem",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nimiq" },
      { icon: "twitter", link: "https://twitter.com/nimiq" },
    ],

    search: {
      provider: "local",
    }
  },
  vite: {
    plugins: [
      Components({
        dirs: ["components"],
        include: [/\.vue$/, /\.md$/],
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
      AutoImport({
        imports: [
          "vue",
          "@vueuse/core",
        ],
        vueTemplate: true,
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
      UnoCSS({
        safelist: ["root"],
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons(),
          presetWebFonts({
            provider: 'bunny',
            fonts: {
              sans: 'Mulish:400,600,700',
              mono: 'Fira Code:400'
            },
          }),
        ],
        theme: {
          colors: {
            darkblue: {
              DEFAULT: "#1f2348",
              6: '#ededf0',
              15: '#cdcdd5',
              20: '#d2d3da',
              40: '#a5a7b6',
              50: '#8f91a3',
              60: '#797b91',
              80: '#4c4f6d',
              1000: '#12163C'
            },
            yellow: "#E9B213"
          },
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/header/CustomTitle.vue", import.meta.url),
          ),
        },
      ],
    },
  },
});
