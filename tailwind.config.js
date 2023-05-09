/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/src/Images/Pattern.png')",
      },
    },
  },
  plugins: [],
}