/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#E1EBFA',
        primary: '#486A6F',
        darkblue: '#4397A4',
        lightblue: '#C6DBFF',
        bright: '#f0f5fc',
        brighter: '#5BCCDE',
        normal:'#678C92'
      }
    },
  },
  plugins: [],
}
