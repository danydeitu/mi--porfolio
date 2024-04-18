/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        darker: "#1a1a1a",
      },
      backgroundColor: {
        dark: "#333333",
        darker: "#1a1a1a",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.html'],
};

