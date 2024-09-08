/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            maxWidth: {
                'big': 'calc(1920px - (162px * 2px))',
                'medium': 'calc(1280px - (162px * 2px))',
                'small': 'calc(1920px - (162px * 2px))',
            },
            colors: {
                'vlada-color-primary': '#141414',
                'vlada-color-secondary': '#0F0F0F',
                'vlada-color-tertiary': '#1F1F1F',
                'vlada-color-quaternary': '#1A1A1A',
                'vlada-color-quinary': '#E50000',
                'vlada-color-senary': '#999999',
                'vlada-color-septenary': '#262626',
                'vlada-color-octonary': '#F76C6C',
                'vlada-color-nonary': '#6A4C41',
                'vlada-color-denary': '#D3A0A5',
            },
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

