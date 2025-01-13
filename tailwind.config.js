/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#C33241",
        lightRed: "#F9EBEC"
      }
    },
  },
  plugins: [],
}