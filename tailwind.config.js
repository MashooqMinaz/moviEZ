/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      colors: {
        'theme-black': '#0f0f0f',
        'theme-light-black': '#161616',
        'theme-orange': '#af2319',
        'theme-green': '#42b582',
        'theme-text-white': '#e7e7e7',
        'theme-gray':'#595859'
      }
    }
  },
  plugins: [],
}

