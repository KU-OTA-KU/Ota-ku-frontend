/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            maxWidth: {
                'big': 'calc(1920px - (162px * 2px))',
                'medium': 'calc(1280px - (162px * 2px))',
                'small': 'calc(1920px - (162px * 2px))',
                'small2': 'calc(1920px - (162px * 2px))',
            },
            colors: {
                'vlada-color-primary': '#141414',
                'vlada-color-secondary': '#0F0F0F',
                'vlada-color-tertiary': '#1F1F1F',
                'vlada-color-quaternary': '#1A1A1A',
                'vlada-color-quinary': '#E50000',
                'vlada-color-senary': '#999999',
                'vlada-color-septenary': '#262626',
                'vlada-color-octonary': '#950606',
                'vlada-color-nonary': '#c81b1b',
                'vlada-color-denary': '#',
                'vlada-color-primary-light': 'rgba(0,0,0,0.05)',
            },
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

