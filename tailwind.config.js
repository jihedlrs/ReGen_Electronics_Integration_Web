/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './src/**/*.{scss,js}'],
  theme: {
    extend: {
      colors: {
         primary: '#1EB980',
         secondary: '#B2F2D7',
         dark: '#000000'
      }
    },
  },
  plugins: [],
}