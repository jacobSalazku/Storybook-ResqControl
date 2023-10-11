/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#60A5FA',
        'p-blue': '#0648B3',
        'dark-blue:': '#1E293B',
        'p-red': '#EF4444',
        'p-purple': '#C4B5FD',
        'p-green': '#34D399',
        'light-green': '#6EE7B7',
        'light-grey': '#EBEBEB',
        'p-yellow':'#F59E0B'
      },
      borderColor: {
        'white-green': 'linear-gradient(to right, white, #6EE7B7)',
        'white-red': 'linear-gradient(to right, white, #EF4444)',
        'white-yellow': 'linear-gradient(to right, white, #F59E0B)',
      },
    },
  },
  plugins: [],
};
