/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ofi-blue": "#1d263b",
        "ofi-dark": "#151d2d",
        "ofi-light": "#283144",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Registering the Inter font
      },
    },
  },
  plugins: [],
};
