/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-120px * 2))",
          },
        },
      },
      animation: {
        "infinite-slider": "infiniteSlider 10s linear infinite",
      },
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          DEFAULT: "#424242",
          light: "rgb(243 244 246)",
          dark: "#282829",
        },
      },
    },
  },
  plugins: [],
};
