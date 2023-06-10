/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cta': '#A259FF',
        'back': '#2B2B2B',
        'backSecond': '#3B3B3B',
        'caption': '#858584'
      },
    },
  },
  plugins: [],
}
