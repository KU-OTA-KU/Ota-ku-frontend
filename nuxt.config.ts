import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  css: [
    '~/assets/root.scss',
    '~/assets/variables.scss',
  ],

  generate: {
    routes: ['/', '/catalog', '/openAnimeView']
  },

  build: {
    transpile: ['vuetify'],
  },

  plugins: [
      '~/plugins/nprogress.ts',
  ],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  ssr: true,

  compatibilityDate: '2024-07-06',
})