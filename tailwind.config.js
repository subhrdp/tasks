/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'InterVariable, sans-serif',
      },
      fontSize: {
        base: [
          '16px',
          {
            lineHeight: '22px',
            letterSpacing: '-0.011em',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '25px',
            letterSpacing: '-0.014em',
          },
        ],
        xl: [
          '24px',
          {
            lineHeight: '34px',
            letterSpacing: '-0.019em',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
