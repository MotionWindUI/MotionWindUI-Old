import { BackgroundColors, BackgroundColorsPlugin } from "./types";

export const BACKGROUND_CONSTANT = "background";

export const backgroundColors: BackgroundColors = {
  default: {
    light: "var(--neutral-50)",
    dark: "var(--neutral-950)",
  },
  subtle: {
    light: "var(--neutral-100)",
    dark: "var(--neutral-900)",
  },
};

export const backgroundColorsPlugin: BackgroundColorsPlugin = {
  default: `var(--${BACKGROUND_CONSTANT}-default)`,
  subtle: `var(--${BACKGROUND_CONSTANT}-subtle)`,
};
