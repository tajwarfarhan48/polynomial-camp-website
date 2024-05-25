/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'red': '#9c1414'
    },

    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },

          '100%': {
            opacity: 100
          }
        }
      }
    },
  },
  plugins: [],
}

