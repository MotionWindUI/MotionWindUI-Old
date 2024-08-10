/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { MotionWindUIProvider } from "@motionwindui/provider";

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
  gloablTypes: {
    disableAnimations: {
      description: "Disables animations globally throughout the library",
      defaultValue: false,
      toolbar: {
        title: "Disable Animations",
        icon: "circlehollow",
        items: [
          { value: false, title: "Enable" },
          { value: true, title: "Disable" },
        ],
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
        "Custom Light": "custom-light",
        "Custom Dark": "custom-dark",
        "Tailwind Colors Light": "tailwindColors-light",
        "Tailwind Colors Dark": "tailwindColors-dark",
      },
    }),
    (Story, context) => {
      const disiableAnimations = context.globals.disableAnimations;
      return (
        <MotionWindUIProvider disableAnimations={disiableAnimations}>
          <Story />
        </MotionWindUIProvider>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
