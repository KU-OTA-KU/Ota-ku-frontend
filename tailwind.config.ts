// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',
      },
      aspectRatio: {
        '1/3': '1/1.3',
        '1/4': '1/1.45',
        '1/5': '1/1.5',
      },
      backgroundImage: {
        'custom-gradient-r': 'linear-gradient(90deg, rgba(9,9,11,1) 20%, rgba(9,9,11,0.3) 80%, rgba(0,0,0,0) 100%)',
        'custom-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,1) 40%, rgba(9,9,11,0.3) 80%, rgba(0,0,0,0) 100%)',
        'custom-genre-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,1) 20%, rgba(9,9,11,0.6) 50%, rgba(0,0,0,0) 100%)',
        'custom-series-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,0.8) 5%, rgba(0,0,0,0) 100%)',
        'custom-feed-gradient-t': 'linear-gradient(0deg, rgba(9,9,11,1) 10%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  variants: {},
  plugins: [],
}
