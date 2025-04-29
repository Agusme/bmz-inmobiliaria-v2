/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Para que procese todos los archivos TS/JS en src
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}