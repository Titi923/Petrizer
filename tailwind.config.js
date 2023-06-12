/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: ['Poppins', 'sans-serif'],
            secondary: ['Poppins', 'sans-serif'],
            tertiary: 'serift',

        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                primary: '#0a0a0a',
                accent: '#ec0bd1',
            },
            backgroundImage: {
                about: "url('./assets/picture.jpg')",
                services: "url('./assets/services.png')",
            },
        },
    },
    plugins: [],
};
