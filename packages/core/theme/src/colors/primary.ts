import { ColorScale } from "./types";

/**
 * Get the primary color scale.
 *
 * @returns The primary color scale
 */
export function primary(): ColorScale {
  return {
    50: "#f1f7fe",
    100: "#e3ecfb",
    200: "#c0d9f7",
    300: "#88bbf1",
    400: "#4998e7",
    500: "#227bd5",
    600: "#1565c0",
    700: "#114c93",
    800: "#12427a",
    900: "#153965",
    950: "#0e2443",
  };
}
