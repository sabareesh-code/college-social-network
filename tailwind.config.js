/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#3B82F6', // Custom secondary color
        dark: '#1F2937', // Dark color for dark mode
        light: '#F3F4F6', // Light color for light mode
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};