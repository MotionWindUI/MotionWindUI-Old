import { ColorScale } from "./types";

/**
 * Get the warning color scale.
 *
 * @returns The warning color scale
 */
export function warning(): ColorScale {
  return {
    50: "#fbf8ef",
    100: "#f3e9d2",
    200: "#e7d0a0",
    300: "#dab46f",
    400: "#d29d4d",
    500: "#c78037",
    600: "#b0642f",
    700: "#934a2a",
    800: "#793c27",
    900: "#643323",
    950: "#381910",
  };
}
