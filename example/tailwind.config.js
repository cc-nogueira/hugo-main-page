/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "themes/main-page/content/**/*.md",
    "themes/main-page/layouts/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", '"Open Sans"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
