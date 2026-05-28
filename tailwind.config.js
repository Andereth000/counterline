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
      colors: {
        'brand-red': '#822626',
        'brand-red-light': '#9e2e2e',
        'brand-muted': '#5a5a5a',
        'brand-hair': '#d8d6d0',
        'brand-hair-light': '#ebebeb',
        'brand-paper': '#fafaf8',
        'brand-paper-alt': '#f2f0eb',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
