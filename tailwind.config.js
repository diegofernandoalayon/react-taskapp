/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#4b9195'
      }
    },
    // colors:{
    //   background: '#4b9195'
    // }
  },
  plugins: [],
}
