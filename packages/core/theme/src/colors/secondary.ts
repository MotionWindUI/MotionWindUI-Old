import { ColorScale } from "./types";

/**
 * Get the fuchsia blue color scale.
 *
 * @returns The fuchsia blue color scale
 */
export function secondary(): ColorScale {
  return {
    50: "#faf6fe",
    100: "#f2ebfc",
    200: "#e7dafa",
    300: "#d5bdf5",
    400: "#bc93ed",
    500: "#a269e3",
    600: "#8a48d3",
    700: "#7737b9",
    800: "#643297",
    900: "#52297a",
    950: "#361259",
  };
}
