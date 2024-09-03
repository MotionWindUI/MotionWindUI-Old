/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MotionWindUIProvider, useMotionWindUI } from "@motionwindui/provider";
import { useEffect } from "react";

const customViewports = {
  sm: {
    name: "Small (sm)",
    styles: {
      width: "640px",
      height: "1000px", // Sensible height for small devices
    },
  },
  md: {
    name: "Medium (md)",
    styles: {
      width: "768px",
      height: "1000px", // Sensible height for medium devices
    },
  },
  lg: {
    name: "Large (lg)",
    styles: {
      width: "1024px",
      height: "1100px", // Slightly taller for larger devices
    },
  },
  xl: {
    name: "Extra Large (xl)",
    styles: {
      width: "1280px",
      height: "1200px", // Taller height for extra large devices
    },
  },
  "2xl": {
    name: "2X Large (2xl)",
    styles: {
      width: "1536px",
      height: "1300px", // Even taller for 2X large devices
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
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
    tempTheme: {
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

        useEffect(() => {
          setDisableAnimations(context.globals.disableAnimations);
        }, [context.globals.disableAnimations]);

        useEffect(() => {
          setCurrentTheme(context.globals.tempTheme);
        }, [context.globals.tempTheme]);

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
