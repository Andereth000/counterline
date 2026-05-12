/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './hugo_stats.json',
      './themes/hugo-news/layouts/**/*.html',
      './layouts/**/*.html',
      './content/**/*.md',
    ],
    transform: {
      json: (content) => {
        const data = JSON.parse(content);
        return (data.htmlElements?.classes ?? []).join(' ');
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
