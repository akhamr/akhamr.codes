/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-nunito)', 'sans-serif'],
                doodle: ['var(--font-doodle)', 'cursive'],
                footer: ['var(--font-footer)', 'cursive'],
            },
            colors: {
                dark: '#1c1917',
                light: '#f5f5f5',
            },
        },
    },
    plugins: [],
};
