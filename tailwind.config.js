/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    gridTemplateColumns: {
      'fill-36': 'repeat(auto-fill, 9rem)',
      'fill-60': 'repeat(auto-fill, 15rem)',
    },
    gridTemplateRows: {
      'full-auto': '1fr auto',
    },
  },
  plugins: [],
};
