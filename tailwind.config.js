const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1168px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      boxShadow: {
        "lg": "0px 12px 14px rgba(26, 33, 71, 0.25)"
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      "source-serif": ["Source Serif Pro", "sans-serif"],
    },
    colors: {
      ...colors,
      blue: {
        50: "#ecedf4",
        100: "#c5c7dd",
        200: "#a9abcd",
        300: "#8185b6",
        400: "#696da8",
        500: "#434992",
        600: "#3d4285",
        700: "#303468",
        800: "#252850",
        900: "#1c1f3d",
      },
      green: {
        50: "#edf7f3",
        100: "#c8e6d9",
        200: "#aed9c6",
        300: "#89c8ad",
        400: "#72bd9d",
        500: "#4fad84",
        600: "#489d78",
        700: "#387b5e",
        800: "#2b5f49",
        900: "#214937",
      },
      gray: {
        50: "#e8e9ed",
        100: "#b8bac6",
        200: "#9699aa",
        300: "#666a84",
        400: "#484d6c",
        500: "#1a2147",
        600: "#181e41",
        700: "#121732",
        800: "#0e1227",
        900: "#0b0e1e",
      },
      purple: {
        50: "#f4f1fe",
        100: "#dcd2fc",
        200: "#cbbdfb",
        300: "#b49ff9",
        400: "#a58cf8",
        500: "#8f6ff6",
        600: "#8265e0",
        700: "#664faf",
        800: "#4f3d87",
        900: "#3c2f67",
      },
      orange: {
        50: "#fceeed",
        100: "#f5ccc6",
        200: "#f0b3aa",
        300: "#ea9084",
        400: "#e57a6c",
        500: "#df5947",
        600: "#cb5141",
        700: "#9e3f32",
        800: "#7b3127",
        900: "#5e251e",
      },
      slate: {
        50: "#fbfcfd",
        100: "#f2f7f8",
        200: "#ebf3f5",
        300: "#e2edf0",
        400: "#dde9ed",
        500: "#d4e4e9",
        600: "#c1cfd4",
        700: "#97a2a5",
        800: "#757d80",
        900: "#596062",
      },
      brown: {
        50: "#faf8f2",
        100: "#f0e4cf",
        200: "#eadabe",
        300: "#dbbe96",
        400: "#cc9e6c",
        500: "#c08550",
        600: "#b17144",
        700: "#935939",
        800: "#764933",
        900: "#603d2c",
      },
    }
  },
  plugins: [],
}
