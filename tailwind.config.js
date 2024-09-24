/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['Jersey 20', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

