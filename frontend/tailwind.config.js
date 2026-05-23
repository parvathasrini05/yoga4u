// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FFB088",
        surface: "#FFF7F2",
        dark: "#2F2F2F",
      },

      borderRadius: {
        "4xl": "32px",
      },
    },
  },

  plugins: [],
};