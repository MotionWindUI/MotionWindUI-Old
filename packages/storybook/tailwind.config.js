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

        }
    })],
    darkMode: ['class', '[data-mode="dark"]'],
}

