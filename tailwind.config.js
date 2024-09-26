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
      colors:{
        'greenwhite':'#EFF7EC',
        'bluemusic':'#79ADDC',
        'redmusic':'#FF6B6B',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

