/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { MotionWindUIProvider, useTheme } from "@motionwindui/provider";

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
    globalTypes: {
        theme: {
            name: "Theme",
            description: "The global theme to use for components",
            defaultValue: "default",
            toolbar: {
                icon: "circlehollow",
                items: [
                    {
                        value: "default",
                        title: "Default",
                    },
                ],
                showName: true,
            },
        },
        mode: {
            name: "Mode",
            description: "The global mode to use for components",
            defaultValue: "light",
            toolbar: {
                icon: "mirror",
                items: ["light", "dark"],
                showName: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "default";
            const mode = context.globals.mode || "dark";

            return (
                <MotionWindUIProvider theme={theme} mode={mode}>
                    <Story />
                </MotionWindUIProvider>
            );
        },
    ],
};

export default preview;
