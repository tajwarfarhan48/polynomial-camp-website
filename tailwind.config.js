/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'cream': '#dddddd',
      'black': '#000000',
      'purple': '#6344ae',
      'teal': '#4ecdc4',
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

