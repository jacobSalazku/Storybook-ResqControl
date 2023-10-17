/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements-react/dist/js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'dark-green': '#1B6067',
                'light-blue': '#66CDCC',
                'background-color': '#EDF6F5',
                'brown-accent': '#EAC893',
                'p-text-color': '#152A23',
                's-text-color': '#141414',
                'dark-red': '#B94D4D,',
                'p-yellow': '#F59E0B',
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
