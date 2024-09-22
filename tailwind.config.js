/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        "custom-pink": {
          "500": "#c16ec0",
        },
      },
      fontFamily: {
        museo: ['MuseoModerno', 'sans-serif'], // Menambahkan font MuseoModerno
      },
    },
  },
  plugins: [],
}
