/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'selected': 'orange',
        'unselected': 'none',
      },
    },
  },
  plugins: [],

}

