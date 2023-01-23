/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      semiblack: '#242424',
      lightgrey: '#797979',
      nicegreen: '#02A209',
      nicewhite: '#f9f9f9',
      tomato: '#ff6347',
    },
  },
  plugins: [],
}
