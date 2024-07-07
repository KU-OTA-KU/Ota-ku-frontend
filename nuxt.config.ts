import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: [
    '~/assets/root.scss',
    '~/assets/variables.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  plugins: [
      '~/plugins/nprogress.ts',
      '~/plugins/themeLogo.ts',
  ],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  ssr: true,
  components: true,

  compatibilityDate: '2024-07-06',
})