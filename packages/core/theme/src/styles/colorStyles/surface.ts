import { SurfaceColors, SurfaceColorsPlugin } from "./types";

export const surfaceColors: SurfaceColors = {
    subtle: {
        light: "var(--neutral-100)",
        dark: "var(--neutral-800)",
    },
    default: {
        light: "var(--neutral-200)",
        dark: "var(--neutral-800)",
    },
};

export const surfaceColorsPlugin: SurfaceColorsPlugin = {
    subtle: "var(--surface-subtle)",
    default: "var(--surface-default)",
};
