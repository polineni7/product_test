/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          500: '#00bcd4',
          600: '#0097a7'
        }
      }
    },
  },
  plugins: [],
}
