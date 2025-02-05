/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#186FCA",
          light: "rgba(24, 110, 202, 0.3)",
        },
        black: {
          DEFAULT: "#000",
          shadow: "rgba(0, 0, 0, 0.12)",
        },
        white: "#fff",
        gray: {
          DEFAULT: "#424242",
          light: "rgb(243 244 246)",
          dark: "#282829",
          "secondary-text": "#7D8387",
        },
      },
    },
  },
  plugins: [],
};
