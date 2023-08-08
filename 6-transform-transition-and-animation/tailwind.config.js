/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        animasiReactBerputarYangLambat: 'spin 3s linear infinite',
        animasiKu: 'animasiKuKeyFrames 3s linear infinite'
      },
      keyframes: {
        animasiKuKeyFrames: {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(45deg)'
          }
        }
      }
    },
  },
  plugins: [],
}

