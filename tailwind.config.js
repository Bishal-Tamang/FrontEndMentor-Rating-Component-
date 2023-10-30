/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "lightGrey": 'hsl(217, 12%, 63%)',
         "mediumGrey": 'hsl(216, 12%, 54%)',
         "darkBlue": 'hsl(213, 19%, 18%)',
         "veryDarkBlue": 'hsl(216, 12%, 8%)',
      }
    },
  },
  plugins: [],
}