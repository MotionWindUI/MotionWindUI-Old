import { ColorScale } from "./types";

/**
 * Get the danger color scale.
 *
 * @param tokens The theme tokens object
 * @returns The danger color scale
 */
export function danger(): ColorScale {
  return {
    50: "#fdf4f3",
    100: "#fce7e7",
    200: "#f8d3d4",
    300: "#f3aeb1",
    400: "#eb8186",
    500: "#df545f",
    600: "#ca3447",
    700: "#bb2a40",
    800: "#8e2336",
    900: "#7a2134",
    950: "#440d18",
  };
}
