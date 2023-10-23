// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import 'virtual:uno.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // We also override default components. Refer to https://vitepress.dev/guide/extending-default-theme#overriding-internal-components
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
