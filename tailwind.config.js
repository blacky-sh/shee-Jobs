/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'custom-yellow': 'hsl(51.49, 87.06%, 66.67%)',
        'custom-brown': 'hsl(24.92, 76.62%, 30.2%)'
      }
    },
  },
  plugins: [],
};
