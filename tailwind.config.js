/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  mode: 'jit',
  purge: ['./src/**/*', './src/**/*.{js,jsx,ts,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
  plugins: [require('nightwind')],
};
