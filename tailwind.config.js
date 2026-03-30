/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bodoni Moda"', "Georgia", "serif"],
        sans:    ['"DM Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          DEFAULT: "#F0EBE1",
          dark:    "#E4DECE",
        },
        ink: {
          DEFAULT: "#111111",
          light:   "#444444",
          muted:   "#888888",
        },
      },
    },
  },
  plugins: [],
};
