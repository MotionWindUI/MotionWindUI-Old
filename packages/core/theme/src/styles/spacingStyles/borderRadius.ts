import { BorderRadius, BorderRadiusPlugin } from "./types";

export const BORDER_RADIUS_CONSTANT = "border-radius";

/**
 * The design system supported border radi.
 */
export const borderRadius: BorderRadius = {
  none: "0",
  small: "0.125rem",
  medium: "0.25rem",
  large: "0.5rem",
  xlarge: "1rem",
  full: "9999px",
};

export const borderRadiusPlugin: BorderRadiusPlugin = {
  none: `var(--${BORDER_RADIUS_CONSTANT}-none)`,
  small: `var(--${BORDER_RADIUS_CONSTANT}-small)`,
  medium: `var(--${BORDER_RADIUS_CONSTANT}-medium)`,
  large: `var(--${BORDER_RADIUS_CONSTANT}-large)`,
  xlarge: `var(--${BORDER_RADIUS_CONSTANT}-xlarge)`,
  full: `var(--${BORDER_RADIUS_CONSTANT}-full)`,
};
