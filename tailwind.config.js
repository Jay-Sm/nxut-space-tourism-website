/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: "Bellefair",
        barlow: "Barlow",
        "barlow-condensed": "Barlow Condensed",
      },
      backgroundImage: {
        "background-home-desktop": "url('./assets/images/home/background-home-desktop.jpg')",
        "background-technology-desktop": "url('./assets/images/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
