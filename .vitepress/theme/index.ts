// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './style.css'
import 'uno.css'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import DeveloperCenterLayout from './DeveloperCenterLayout.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(DeveloperCenterLayout)
  },
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}
