const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('theme-system', '.theme-system &');
        })
    ],
    future: {
        hoverOnlyWhenSupported: true
    }
};
