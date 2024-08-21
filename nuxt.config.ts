// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: { enabled: true },
    target: 'static',
    override: true,
    app: {
      // baseURL: '/Ota-ku-frontend/'
    },
  
    plugins: ['~/plugins/nprogress.ts', '~/plugins/statusBar.ts', '~/plugins/navigationBar.ts', '~/plugins/cursor.ts'],
    modules: [
      "nuxt-gtag",
      "@nuxtjs/ionic",
      '@nuxtjs/tailwindcss',
      '@nuxtjs/robots',
      '@nuxt/image',
      'nuxt-swiper',
    ],

    gtag: {
        id: 'G-XKSYJXXKPB'
    },

    routeRules: {
      '/': { prerender: true},
      '/welcome': { prerender: true}, 
    },

    vuetify: {
        moduleOptions: {
        },
        vuetifyOptions: {
            theme: {
                defaultTheme: 'dark',
                themes: {

                }
            }
        }
    },

    css: [
        '~/assets/root.scss',
        `~/assets/variables.css`,
        '~/assets/nprogress.css',
        '~/assets/cursor.css',
    ],

    build: {
        extractCSS: true,
        optimizeCSS: true
    },

    ionic: {
      integrations: {
        capacitor: true,
      },
      css: false
    },
    
})