/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        robot: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "marca-red":{
          DEFAULT: "#BA0000"
        },
        "marca-geen":{
          DEFAULT: "#00b800"
        }
      }
    },
  },
  plugins: [],
}

