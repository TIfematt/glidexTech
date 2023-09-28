/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#F2F2F2',
        'primary':'#4D7E3E',
        'pText': '#514040'
      }
    },
  },
  plugins: [],
}