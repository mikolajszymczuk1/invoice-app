/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue,js,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      purple: {
        medium: '#7C5DFA',
        light: '#9277FF',
      },
      blue: {
        strong: '#1E2139',
        medium: '#252945',
        light: '#7E88C3',
        dark: '#0C0E16',
        mediumDark: '#141625',
        navLight: '#373B53',
        navBorder: '#494E6E',
        itemsPrev: '#F9FAFE'
      },
      white: '#F8F8FB',
      trueWhite: '#FFFFFF',
      gray: {
        light: '#DFE3FA',
        medium: '#888EB0',
      },
      red: {
        medium: '#EC5757',
        light: '#9277FF',
      },
      invoice: {
        paid: '#33D69F',
        pending: '#FF8F00',
        draft: '#373B53',
      },
    },
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    screens: {
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: false,
    darkTheme: 'dark',
    base: false,
    logs: false,
  },
}
