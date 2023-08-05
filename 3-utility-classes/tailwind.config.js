/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,.js}'],
  theme: {
    extend: {
      fontFamily: {
        borel: "'Borel', cursive"
      },
      margin: {
        '13': '100vh'
      },
      colors: {
        'malam': 'red'
      }
    },
  },
  plugins: [],
}

