/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '20px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
      '4xl': ['52px', '66px'],
    },
    fontWeight: {
      thin: 300,
      regular: 600,
      bold: 800,
    },
    extend: {
      colors: {
        purple: {
          300: '#8257E5',
          400: '#550080',
          700: '#34014E',
        },
        gray: {
          300: '#EFEAEA',
          500: '#3B3F45',
        },
      },
    },
  },
  plugins: [
  ],
}
