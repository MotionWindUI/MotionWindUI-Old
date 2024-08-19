import { ColorScale } from "./types";

/**
 * Get the neutral color scale.
 *
 * @param tokens The theme tokens object
 * @returns The neutral color scale
 */
export function neutral(): ColorScale {
  return {
    50: "#f5f8fa",
    100: "#e0e6eb",
    200: "#c2cdd6",
    300: "#a3b4c2",
    400: "#859aad",
    500: "#668199",
    600: "#52677a",
    700: "#3d4e5c",
    800: "#29343d",
    900: "#141a1f",
    950: "#0a0d0f",
  };
}
