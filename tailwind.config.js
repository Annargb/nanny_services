/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      green: '#103931',
      white: '#fbfbfb',
      borderColor: 'rgba(251, 251, 251, 0.4)',

      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      yellow: '#ffc82c',
      gray: '#8492a6',
    },
    fontSize: {
      sm: '16px',
      base: '1rem',
      xl: '24px',
      '2xl': '28px',
      '4xl': '70px',
      '5xl': '3.052rem',
    },
    letterSpacing: {
      tightest: '-0.03em',
      tighter: '-0.02em',
      tight: '-0.01em',
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '14px': '14px',
        '20px': '20px',
        '28px': '28px',
        '32px': '32px',
        '40px': '40px',
        '64px': '64px',
        '88px': '88px',
        '96px': '96px',
        '251px': '251px',
        '677px': '677px',
        '736px': '736px',
        '1376px': '1376px',
      },
      gap: {
        1: '4px',
        2: '8px',
        10: '40px',
        23: '92px',
      },
      borderRadius: {
        '30px': '30px',
      },
      fontFamily: {
        customFont: ['Helvetica', 'sans-serif'],
      },
      lineHeight: {
        117: '1.17',
        107: '1.07',
      },
      backgroundImage: {
        hero: "url('./src/images/home.png')",
      },
    },
  },
  plugins: [],
};
