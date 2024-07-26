import { SurfaceColors, SurfaceColorsPlugin } from "./types";

export const SURFACE_CONSTANT = "surface";

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
  subtle: `var(--${SURFACE_CONSTANT}-subtle)`,
  default: `var(--${SURFACE_CONSTANT}-default)`,
};
