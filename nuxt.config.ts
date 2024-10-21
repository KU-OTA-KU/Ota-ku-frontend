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
      '@nuxtjs/i18n',
      '@nuxtjs/color-mode'
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
    colorMode: {
        preference: 'system',
        fallback: 'dark',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classSuffix: '-mode',
        storage: 'localStorage',
        storageKey: 'nuxt-color-mode'
    },
    i18n: {
        locales: [
            { code: 'en', language: 'en-US', name: 'English' },
            { code: 'es', language: 'es-ES', name: 'Español' },
            { code: 'fr', language: 'fr-FR', name: 'Français' },
            { code: 'hy', language: 'hy-AM', name: 'Հայերեն' },
            { code: 'ja', language: 'ja-JP', name: '日本語' },
            { code: 'ru', language: 'ru-RU', name: 'Русский' },
            { code: 'uk', language: 'uk-UA', name: 'Українська' },
            { code: 'zh', language: 'zh-CN', name: '中文' }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts'
    }
})
