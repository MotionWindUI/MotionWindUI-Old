export type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type ColorScale = Partial<ColorShades> | string;

export type ThemeColors = {
  neutral: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};

export type ColorShadesList = ColorShadeKeys[];

export const DEFAULT_COLOR_SHADES: ColorShadesList = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
];

/**
 * A type representing a CSS color scale. The key is CSS variable name and the value is the color value.
 */
export type CssColorScale = Record<string, string>;

export type ColorShadeKeys = keyof ColorShades;

export type ColorTypes = keyof ThemeColors;

export type CSSColorVarScale = Partial<{
  [K in `${ColorTypes}-${ColorShadeKeys}`]: string;
}>;

/**
 * A type representing a token object.
 */
export interface Tokens {
  [key: string]: string | string[];
}

/**
 * The key for the color tokens in the design tokens file.
 */
export const COLOR_TOKENS = "colors";

/**
 * The key for every final variable to get the actual values.
 */
export const VALUES_KEYWORD = "values";

/**
 * The key for the entry to the style tokens.
 */
export const STYLE_TOKENS = "style-tokens";
