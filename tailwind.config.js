/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
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

