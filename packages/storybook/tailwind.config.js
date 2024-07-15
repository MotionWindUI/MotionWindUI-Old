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
        pleaseWork: true
    })],
    darkMode: ['class', '[data-mode="dark"]'],
}

