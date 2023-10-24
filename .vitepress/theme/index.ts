// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import 'uno.css'
import DeveloperCenterLayout from './DeveloperCenterLayout.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(DeveloperCenterLayout)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
