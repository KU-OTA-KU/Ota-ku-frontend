// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: {enabled: true},
    app: {
        baseURL: '/Ota-ku-frontend/'
    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/icon',
      '@nuxt/image',
      'vue3-carousel-nuxt',
      'nuxt-aos'
    ],

    css: ['~/assets/css/_root.css'],

    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    googleFonts: {
        families: {
            Manrope: true
        }
    }
})