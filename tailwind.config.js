// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: {
          accent: "#66c0f4",
          dark: "#171a21",
          deep: "#1b2838",
        },
      },
    },
  },
  plugins: [],
};
