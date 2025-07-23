import { defaultTheme } from './src/theme/default-theme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}', // Include .scss files!
  ],
  theme: {
    extend: {
      colors: defaultTheme.colors,
      fontFamily: defaultTheme.fonts,
    },
  },
  plugins: [],
}
