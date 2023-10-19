/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements-react/dist/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
            },
            colors: {
                'dark-blue': '#294564',
                'light-blue': '#45B7D5',
                'background-color': '#F6F8FF',
                'brown-accent': '#EAC893',
                'p-text-color': '#152A23',
                's-text-color': '#141414',
                'p-red': '#DF2935,',
                'p-yellow': '#FF9F1C',
                'p-grey': '#808080',
                'p-green': '#63D471',
            },
            borderColor: {
                'white-green': 'linear-gradient(to right, white, #6EE7B7)',
                'white-red': 'linear-gradient(to right, white, #EF4444)',
                'white-yellow': 'linear-gradient(to right, white, #F59E0B)',
            },
        },
    },
    plugins: [require('tw-elements-react/dist/plugin.cjs')],
}
