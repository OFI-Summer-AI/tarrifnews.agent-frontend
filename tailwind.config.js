// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        "ofi-blue": "#1d263b",
        "ofi-dark": "#151d2d",
        "ofi-light": "#283144",
      },
    },
  },
  plugins: [],
};
