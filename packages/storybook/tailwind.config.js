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
                        dark: "var(--primary-300)"
                    }
                }
            }
        },
        themes: {
            "custom": {
                darkenOnHover: true,
                baseColors: {
                    primary: {
                        50: "#f9f8ff",
                        100: "#f3f0ff",
                        200: "#e6dbff",
                        300: "#d9c6ff",
                        400: "#bf99ff",
                        500: "#a56cff",
                        600: "#954fc2",
                        700: "#7d4099",
                        800: "#63336f",
                        900: "#522b57"
                    }
                }
            }
        }
    })],
    darkMode: ['class', '[data-mode="dark"]'],
}

