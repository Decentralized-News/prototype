const colors = require("tailwindcss/colors")
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#11C9AA",
      darkgray: "rgb(118, 118, 118)",
      lightgray: "rgb(217, 217, 217)",
      cgrey: "#333333",
      gray: colors.slate,
      amber: colors.amber,
      grayedOut: "#999999",
      white: "#FFFFFF",
      black: "#000000",
      blue_link: "#0645AD",
      blue_link_light: "#ADD8E6",
      green: colors.green,
      red: colors.red
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        '.unset': {
          'all': 'unset',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}