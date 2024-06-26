// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
      privateKey: process.env.API_PRIVATE_KEY,
      apiBase: process.env.API_URL,
      apiBase2: process.env.API_URL2,
      layoutConfigKey: process.env.LAYOUT_CONFIG_KEY,
  },
  typescript: false,
  app: {
      head: {
          title: 'TOTAL SHIFT',
          htmlAttrs: {
            lang: 'ko-KR'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { hid: 'description', name: 'description', content: 'TOTAL SHIFT' },
          ],
          link: [
              {
                  id: 'theme-css',
                  rel: 'stylesheet',
                  type: 'text/css',
                  href: '/themes/dark/theme.css'
              }
          ]
      }
  },
  modules: [
    'nuxt-primevue',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  primevue: {
    options: { ripple: true },
    components: {
        exclude: ['Editor']
    }
  },
  sitemap: {
    sitemaps: {
        pages: {
            includeAppSources: true,
          },        
    }
  },
  css: ['primeflex/primeflex.scss', '@/assets/styles.scss'],
});