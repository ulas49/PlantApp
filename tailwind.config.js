/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-normal"],
        'rubik-semibold': ["Rubik-semibold"],
        'rubik-medium': ["Rubik-medium"],
        'rubik-bold': ["Rubik-bold"],
        'rubik-extrabold': ["Rubik-extrabold"],
      },
    },
  },
  plugins: [],
}