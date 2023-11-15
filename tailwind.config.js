/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './.storybook/*.ts'],
    theme: {
        extend: {
            colors: {
                brand: {
                    'dark-grey': '#0e0e0e',
                    orange: '#ff6444',
                    'orange-1': '#e98024',
                    secondary: '#85acb0',
                },
                general: {
                    'section-1': '#f2f3f4',
                },
                purchase: {
                    'section-1': '#3d9494',
                    'section-2': '#d33636',
                },
                primary: {
                    DEFAULT: '#ff444f',
                    hover: '#eb3e48',
                },
                secondary: '#999999',
                tertiary: {
                    hover: 'rgba(255,68,79,.08)',
                },
                disabled: {
                    DEFAULT: '#eaeced',
                    100: '#e6e9e9',
                    200: '#d6d6d6',
                },
                prominent: '#333333',
                'colored-barrier': '#008000',
                active: '#d6dadb',
                danger: '#ec3f3f',
                success: '#4bb4b3',
                warning: '#ffad3a',
                info: '#377cfc',
                transparent: 'transparent',
            },
            backgroundImage: {
                'gradient-success': 'linear-gradient(to top, #ffffff, rgba(75, 180, 179, 0.16))',
                'gradient-danger': 'linear-gradient(to top, #ffffff, rgba(255, 68, 79, 0.16))',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                ibm: ['IBM Plex Sans', 'sans-serif'],
            },
            lineHeight: {
                body: 1.375,
                base: 1,
            },
            fontWeight: {
                normal: 400,
                medium: 500,
                bold: 700,
            },
            screens: {
                sm: { min: '576px', max: '767px' },
                // => @media (min-width: 576px) { ... }
                xs: { max: '575px' },

                md: '768px',
                // => @media (min-width: 768px) { ... }
            },
            spacing: {
                base: '1rem',
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss-animate'),
        // eslint-disable-next-line func-names
        function addComponentsFunc({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '960px',
                    marginInline: 'auto',
                    paddingInline: '10px',
                    position: 'relative',
                    zIndex: 10,
                },
            });
        },
    ],
};
