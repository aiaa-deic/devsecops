import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'AIAA DEIC DevSecOps',
  description: "A documentation site for the AIAA DEIC DevSecOps Subcommittee",
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/img/darkLogo.png',
      dark: '/img/lightLogo.png',
      alt: 'AIAA DEIC - DevSecOps'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiaa-deic/devsecops' }
    ],
    footer: {
      message: 'AIAA DEIC DevSecOps Subcommittee.  Site and content licensed under <a href="https://github.com/aiaa-deic/devsecops/blob/main/LICENSE">MIT</a>.',
      copyright: '© 2023-present American Institute of Aeronautics and Astronautics'
    }
  }
})
