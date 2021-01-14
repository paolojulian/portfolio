const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './dist/bundle.js',
    './dist/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      beige: '#808080',
      teal: '#2195A5',
      red: '#eb5757',
      transparent: 'transparent',
      blue: colors.blue,
      gray: colors.warmGray,
      green: colors.green,
      indigo: colors.indigo,
      pink: colors.pink,
      violet: colors.violet,
      yellow: colors.yellow,
    },
    fontFamily: {
      body: ['Nunito']
    },
    extend: {
      backgroundImage: theme => ({
        'background-pc': "url('/images/background-pc.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}