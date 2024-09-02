// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: { enabled: true },

    app: {
        // baseURL: '/Ota-ku-frontend/' // Убедитесь, что это нужно, иначе раскомментируйте
    },

    plugins: [
        '~/plugins/nprogress.ts',
        '~/plugins/statusBar.ts',
        '~/plugins/navigationBar.ts',
        '~/plugins/cursor.ts',
        '~/plugins/vueToastie.ts'
    ],

    modules: [
        'nuxt-gtag',
        '@nuxtjs/ionic',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
        '@nuxt/image',
        'nuxt-swiper',
        'nuxt-aos',
        'nuxt-i18n-micro'
    ],

    gtag: {
        id: 'G-XKSYJXXKPB'
    },

    routeRules: {
        '/': { prerender: true },
        '/welcome': { prerender: true }
    },

    i18n: {
        lazy: true,
        translationDir: 'locales',
        strategy: 'prefix',
        autoDetectLanguage: true,
        meta: true,
        locales: [
            { code: 'en', name: 'English',},
            { code: 'ru', name: 'Русский',},
            { code: 'hy', name: 'Հայերեն',}
        ],
        defaultLocale: 'en'
    },

    css: [
        '~/assets/root.scss',
        '~/assets/css/variables.css',
        '~/assets/nprogress.css',
        '~/assets/cursor.css'
    ],

    build: {
        extractCSS: true,
        optimizeCSS: true
    },

    ionic: {
        integrations: {
            capacitor: true
        },
        css: false
    }
});
