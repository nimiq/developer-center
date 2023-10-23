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
        preflights: [
          {
            getCSS: ({ theme }) => `
              html.dark {
                --vp-c-bg: ${theme.colors["dark-blue"]};
              }
              :root {
                --vp-font-family-base: Mulish,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
               --vp-font-family-mono: 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace
              }
            `,
          },
        ],
        theme: {
          colors: {
            "dark-blue": "#1f2348",
          },
        },
        shortcuts: [
          ["root", "html.dark:[--vp-c-bg:#1f2348]"],
        ],
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
