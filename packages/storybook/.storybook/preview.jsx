/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withThemeByDataAttribute({
            defaultTheme: "Default Light",
            attributeName: "data-theme",
            themes: {
                "Default Light": "default-light",
                "Default Dark": "default-dark",
            },
        }),
    ],
};

export default preview;
