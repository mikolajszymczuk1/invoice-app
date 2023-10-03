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
      },
      white: '#F8F8FB',
      gray: {
        light: '#DFE3FA',
        medium: '#888EB0',
      },
      red: {
        medium: '#EC5757',
        light: '#9277FF',
      },
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
  },
  plugins: [],
}
