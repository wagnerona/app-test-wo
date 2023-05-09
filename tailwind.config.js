/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/src/Images/Pattern.png')",
      },
      fontFamily: {
        'bodyFont': ['Pathway Gothic One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}