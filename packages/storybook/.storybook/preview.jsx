/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { MotionWindUIProvider, useMotionWindUI } from "@motionwindui/provider";
import { useEffect } from "react";

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
        dynamicTitle: true,
      },
    },
    mode: {
      description: "The light or dark mode of MotionWindUI",
      defaultValue: "light",
      toolbar: {
        title: "Mode",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: "The theme of MotionWindUI",
      defaultValue: "default",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "default", title: "Default" },
          { value: "custom", title: "Custom" },
          { value: "tailwindColors", title: "Tailwind Colors" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const StoryWithProvider = () => {
        const { setDisableAnimations, setCurrentTheme, setCurrentMode } = useMotionWindUI();

        // Set the theme to default on initial load
        useEffect(() => {
          setCurrentTheme("default");
        }, []);

        useEffect(() => {
          setDisableAnimations(context.globals.disableAnimations);
        }, [context.globals.disableAnimations]);

        useEffect(() => {
          setCurrentTheme(context.globals.theme);
        }, [context.globals.theme]);

        useEffect(() => {
          setCurrentMode(context.globals.mode);
        }, [context.globals.mode]);

        return <Story />;
      };
      return (
        <MotionWindUIProvider>
          <StoryWithProvider />
        </MotionWindUIProvider>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
