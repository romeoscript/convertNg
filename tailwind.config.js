/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(54, 67, 70, 0.5)', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, rgba(30, 30, 30, 1), rgba(61, 61, 61, 1))',
      },
    },
  },
  plugins: [],
}

