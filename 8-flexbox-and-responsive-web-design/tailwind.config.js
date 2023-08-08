/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'danger': 'hsl(348, 100%, 61%)'
      }
    },
  },
  plugins: [],
}

