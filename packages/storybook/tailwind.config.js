import { motionWindUIPlugin } from '@motionwindui/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../core/theme/src/components/**/*.{js,jsx,ts,tsx}",
        "../components/*/src/**/*.{js,jsx,ts,tsx}",
        "../components/*/stories/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    },
    variants: {},
    plugins: [motionWindUIPlugin({
        theme: {
            style: {
                accent: {
                    primary: {
                        light: "var(--primary-600)",
                    }
                }
            }
        },
        themes: {
            "custom": {
                darkenOnHover: false,
                colors: {
                    primary: {
                        50: '#fbf5ef',
                        100: '#f3e1d2',
                        200: '#e6c2a1',
                        300: '#d99e70',
                        400: '#d0824e',
                        500: '#c6653a',
                        600: '#af4b30',
                        700: '#92372b',
                        800: '#782c28',
                        900: '#632724',
                        950: '#381110',
                    }
                },
            }
        }
    })],
    darkMode: ['class', '[data-mode="dark"]'],
}

