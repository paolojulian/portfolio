module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-pc': "url('/images/background_pc.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}