/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      // Adding a new size of margin
      spacing: {
        '13': '10rem'
      },

      // Adding a new font
      fontFamily: {
        'watashi': 'Andika'
      }
    },
  },
  plugins: [],
}

