/** @type { import('@storybook/react').Preview } */
import React from "react";
import "./styles.css";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MotionWindUIProvider, useMotionWindUI } from "@motionwindui/provider";
import { useEffect } from "react";

const commonTheme = {
  brandTitle: "MotionWindUI",
  brandUrl: "https://motionwindui.github.io/MotionWindUI/storybook",
};

const locales = [
  "ar-AE",
  "bg-BG",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "en-US",
  "es-ES",
  "et-EE",
  "fi-FI",
  "fr-FR",
  "he-IL",
  "hr-HR",
  "hu-HU",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "lt-LT",
  "lv-LV",
  "nb-NO",
  "nl-NL",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sl-SI",
  "sr-SP",
  "sv-SE",
  "tr-TR",
  "uk-UA",
  "zh-CN",
  "zh-TW",
];

const customViewports = {
  sm: {
    name: "Small (sm)",
    styles: {
      width: "640px",
      height: "1000px",
    },
  },
  md: {
    name: "Medium (md)",
    styles: {
      width: "768px",
      height: "1000px",
    },
  },
  lg: {
    name: "Large (lg)",
    styles: {
      width: "1024px",
      height: "1100px",
    },
  },
  xl: {
    name: "Extra Large (xl)",
    styles: {
      width: "1280px",
      height: "1200px",
    },
  },
  "2xl": {
    name: "2X Large (2xl)",
    styles: {
      width: "1536px",
      height: "1300px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      method: "alphabetical",
      order: ["Design System", "Components", "Examples"],
    },
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
    locale: {
      description: "Internationalization locale",
      defaultValue: "en-US",
      toolbar: {
        title: "Locale",
        icon: "globe",
        items: locales.map((locale) => ({
          value: locale,
          title: new Intl.DisplayNames(undefined, { type: "language" }).of(locale),
          right:
            new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "Right To Left" : undefined,
        })),
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

      const direction =
        context.globals.locale &&
        new Intl.Locale(context.globals.locale)?.textInfo?.direction === "rtl"
          ? "rtl"
          : undefined;

      return (
        <MotionWindUIProvider locale={context.globals.locale}>
          <div lang={context.globals.locale} dir={direction}>
            <StoryWithProvider />
          </div>
        </MotionWindUIProvider>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
