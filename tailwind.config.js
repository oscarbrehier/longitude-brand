/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "two": 'repeat(2, minmax(0, 1fr)',
      }
    },
    fontFamily: {
      "monument": ['MonumentExtended'],
      "courrier": ['Courier New']
    }
  },
  plugins: [],
}
