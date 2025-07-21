/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Para que procese todos los archivos TS/JS en src
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
  themes: ["light"],
},
};
