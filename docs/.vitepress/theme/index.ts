// https://vitepress.dev/guide/custom-theme
import "./tailwind.postcss"
import { h } from "vue"
import Theme from "vitepress/theme"
import "./style.css"

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ _app, _router, _siteData }) {
    // ...
  },
}
