// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customDark= {
    dark: true,
    colors: {
        background: '#ffffff',
        surface: '#1763b1',
        primary: '#0047ff',
        'primary-darken-1': '#afa5df',
        secondary: '#212121',
        'secondary-darken-1': '#018786',
        error: '#0337bc',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark',
            themes: {
                customDark,
            }
        }
    })
    app.vueApp.use(vuetify)
})
