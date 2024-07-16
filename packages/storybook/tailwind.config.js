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
        themes: {
            "custom-theme": {
                baseColors: {
                    primary: {
                        50: '#fdf2f6',
                        100: '#fce7f0',
                        200: '#fccee1',
                        300: '#fba6c8',
                        400: '#f76fa2',
                        500: '#f04c85',
                        600: '#df235b',
                        700: '#c11543',
                        800: '#a01438',
                        900: '#851633',
                        950: '#520519',
                    }
                },
                light: {
                    styleTheme: {
                        background: {
                            default: {
                                light: '#fdf2f6'
                            },
                        }
                    }
                }
            }
        }
    })],
    darkMode: ['class', '[data-mode="dark"]'],
}

