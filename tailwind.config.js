/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Georgia',
            secondary: 'Cambria',
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
                accent: '#B809C3',
            },
            backgroundImage: {
                about: "url('./assets/picture.jpg')",
                services: "url('./assets/services.png')",
            },
        },
    },
    plugins: [],
};
