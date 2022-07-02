/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#4b9195',
        midnight: '#121063'
      }
    },
    // colors:{
    //   background: '#4b9195'
    // }
  },
  plugins: [require('tailwind-scrollbar')],
}
