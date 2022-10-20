/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Nunito', '"Open Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
