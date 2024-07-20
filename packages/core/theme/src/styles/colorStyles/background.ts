import { BackgroundColors, BackgroundColorsPlugin } from "./types";

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

export const backgroundColorsPlugin: Record<string, string> = {
    default: "var(--background-default)",
    subtle: "var(--background-subtle)",
};
