/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '500px' },  // Use 'max' instead of 'max-width'
      },
    },
  },
  plugins: [],
}
