// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: {enabled: true},
    app: {
        // baseURL: '/Ota-ku-frontend/'
    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/icon',
      'vue3-carousel-nuxt',
      'nuxt-aos',
      '@nuxt/image',
      '@nuxtjs/i18n'
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
    },
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', name: 'English' },
            { code: 'fr', iso: 'fr-FR', name: 'Français' },
            { code: 'hy', iso: 'hy-AM', name: 'Հայերեն' },
            { code: 'ja', iso: 'ja-JP', name: '日本語' },
            { code: 'ru', iso: 'ru-RU', name: 'Русский' },
            { code: 'uk', iso: 'uk-UA', name: 'Українська' },
            { code: 'zh', iso: 'zh-CN', name: '中文' }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts'
    }
})