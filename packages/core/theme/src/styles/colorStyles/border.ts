import { ColorShadeKeys } from "../../colors/types";
import { adjustShade } from "../../utils/colors";
import { BaseBorderColors, BorderColors, BorderColorsPlugin } from "./types";

export const BORDER_CONSTANT = "border";

/**
 * The default border colors for the theme
 */
export const borderColors: BorderColors = {
    neutral: {
        light: "var(--neutral-600)",
        dark: "var(--neutral-300)",
    },
    "neutral-hover": {
        light: "var(--neutral-700)",
        dark: "var(--neutral-200)",
    },
    "neutral-active": {
        light: "var(--neutral-800)",
        dark: "var(--neutral-100)",
    },
    "neutral-negative": {
        light: "var(--neutral-300)",
        dark: "var(--netural-700)",
    },
    "neutral-negative-hover": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-800)",
    },
    "neutral-negative-active": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-400)",
    },
    "primary-hover": {
        light: "var(--primary-800)",
        dark: "var(--primary-300)",
    },
    "primary-active": {
        light: "var(--primary-900)",
        dark: "var(--primary-200)",
    },
    "primary-negative": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    "primary-negative-hover": {
        light: "var(--primary-300)",
        dark: "var(--primary-800)",
    },
    "primary-negative-active": {
        light: "var(--primary-200)",
        dark: "var(--primary-900)",
    },
    secondary: {
        light: "var(--secondary-600)",
        dark: "var(--secondary-400)",
    },
    "secondary-hover": {
        light: "var(--secondary-700)",
        dark: "var(--secondary-300)",
    },
    "secondary-active": {
        light: "var(--secondary-800)",
        dark: "var(--secondary-200)",
    },
    "secondary-negative": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-600)",
    },
    "secondary-negative-hover": {
        light: "var(--secondary-300)",
        dark: "var(--secondary-700)",
    },
    "secondary-negative-active": {
        light: "var(--secondary-200)",
        dark: "var(--secondary-800)",
    },
    success: {
        light: "var(--success-600)",
        dark: "var(--success-400)",
    },
    "success-hover": {
        light: "var(--success-700)",
        dark: "var(--success-300)",
    },
    "success-active": {
        light: "var(--success-800)",
        dark: "var(--success-200)",
    },
    "success-negative": {
        light: "var(--success-400)",
        dark: "var(--success-600)",
    },
    "success-negative-hover": {
        light: "var(--success-300)",
        dark: "var(--success-700)",
    },
    "success-negative-active": {
        light: "var(--success-200)",
        dark: "var(--success-800)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-400)",
    },
    "warning-hover": {
        light: "var(--warning-800)",
        dark: "var(--warning-300)",
    },
    "warning-active": {
        light: "var(--warning-900)",
        dark: "var(--warning-200)",
    },
    "warning-negative": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    "warning-negative-hover": {
        light: "var(--warning-300)",
        dark: "var(--warning-800)",
    },
    "warning-negative-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-900)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-400)",
    },
    "danger-hover": {
        light: "var(--danger-800)",
        dark: "var(--danger-300)",
    },
    "danger-active": {
        light: "var(--danger-900)",
        dark: "var(--danger-200)",
    },
    "danger-negative": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
    "danger-negative-hover": {
        light: "var(--danger-300)",
        dark: "var(--danger-800)",
    },
    "danger-negative-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-900)",
    },
};

export const baseBorderColors: BaseBorderColors = {
    neutral: {
        light: "var(--neutral-600)",
        dark: "var(--neutral-300)",
    },
    "neutral-negative": {
        light: "var(--neutral-300)",
        dark: "var(--netural-700)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-400)",
    },
    "primary-negative": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    secondary: {
        light: "var(--secondary-600)",
        dark: "var(--secondary-400)",
    },
    "secondary-negative": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-600)",
    },
    success: {
        light: "var(--success-600)",
        dark: "var(--success-400)",
    },
    "success-negative": {
        light: "var(--success-400)",
        dark: "var(--success-600)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-400)",
    },
    "warning-negative": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-400)",
    },
    "danger-negative": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
};

/**
 * Generate border colors based on the base border colors
 * @param baseBorderColors The base border colors to generate the border colors from
 * @param darkenOnHover Whether to darken the border colors on hover
 */
export const generateBorderColors = (
    baseBorderColors: BaseBorderColors,
    darkenOnHover: boolean = true,
): BorderColors => {
    // Set a return object to avoid mutating the original object
    // Set the return object to the original object, so that we can modify existing props but leave others
    const returnBorderColors = borderColors;

    // Get the keys of the baseBorderColors object
    const baseBorderColorsKeys = Object.keys(baseBorderColors) as Array<
        keyof BaseBorderColors
    >;

    // For each base border colors key, grab the light and dark shade
    // Then adjust the shade for hover and active states
    baseBorderColorsKeys.forEach((key) => {
        const lightBaseShade = parseInt(
            baseBorderColors[key].light.split("-").at(-1) as string,
            10,
        ) as ColorShadeKeys;

        const darkBaseShade = parseInt(
            baseBorderColors[key].dark.split("-").at(-1) as string,
            10,
        ) as ColorShadeKeys;

        const { hoverShade: lightHoverShade, activeShade: lightActiveShade } =
            adjustShade(lightBaseShade, darkenOnHover);
        const { hoverShade: darkHoverShade, activeShade: darkActiveShade } =
            adjustShade(darkBaseShade, darkenOnHover);

        returnBorderColors[`${key}-hover`] = {
            light: `var(--${key.split("-")[0]}-${lightHoverShade})`,
            dark: `var(--${key.split("-")[0]}-${darkHoverShade})`,
        };

        returnBorderColors[`${key}-active`] = {
            light: `var(--${key.split("-")[0]}-${lightActiveShade})`,
            dark: `var(--${key.split("-")[0]}-${darkActiveShade})`,
        };
    });

    // Return the modified object
    return returnBorderColors;
};

/**
 * Filter the base border colors from the border colors
 * @param borderColors The border colors to filter
 * @return Returns the base border colors from the list of border colors
 */
export const filterBaseBorderColors = (
    borderColors: Partial<BorderColors>,
): BaseBorderColors => {
    const keys: (keyof BaseBorderColors)[] = [
        "neutral",
        "neutral-negative",
        "primary",
        "primary-negative",
        "secondary",
        "secondary-negative",
        "success",
        "success-negative",
        "warning",
        "warning-negative",
        "danger",
        "danger-negative",
    ];

    return keys.reduce((acc, key) => {
        if (key in borderColors && borderColors[key]) {
            acc[key] = borderColors[key];
        }
        return acc;
    }, {} as BaseBorderColors);
};

export const borderColorsPlugin: BorderColorsPlugin = {
    neutral: `var(--${BORDER_CONSTANT}-neutral)`,
    "neutral-hover": `var(--${BORDER_CONSTANT}-neutral-hover)`,
    "neutral-active": `var(--${BORDER_CONSTANT}-neutral-active)`,
    "neutral-negative": `var(--${BORDER_CONSTANT}-neutral-negative)`,
    "neutral-negative-hover": `var(--${BORDER_CONSTANT}-neutral-negative-hover)`,
    "neutral-negative-active": `var(--${BORDER_CONSTANT}-neutral-negative-active)`,
    primary: `var(--${BORDER_CONSTANT}-primary)`,
    "primary-hover": `var(--${BORDER_CONSTANT}-primary-hover)`,
    "primary-active": `var(--${BORDER_CONSTANT}-primary-active)`,
    "primary-negative": `var(--${BORDER_CONSTANT}-primary-negative)`,
    "primary-negative-hover": `var(--${BORDER_CONSTANT}-primary-negative-hover)`,
    "primary-negative-active": `var(--${BORDER_CONSTANT}-primary-negative-active)`,
    secondary: `var(--${BORDER_CONSTANT}-secondary)`,
    "secondary-hover": `var(--${BORDER_CONSTANT}-secondary-hover)`,
    "secondary-active": `var(--${BORDER_CONSTANT}-secondary-active)`,
    "secondary-negative": `var(--${BORDER_CONSTANT}-secondary-negative)`,
    "secondary-negative-hover": `var(--${BORDER_CONSTANT}-secondary-negative-hover)`,
    "secondary-negative-active": `var(--${BORDER_CONSTANT}-secondary-negative-active)`,
    success: `var(--${BORDER_CONSTANT}-success)`,
    "success-hover": `var(--${BORDER_CONSTANT}-success-hover)`,
    "success-active": `var(--${BORDER_CONSTANT}-success-active)`,
    "success-negative": `var(--${BORDER_CONSTANT}-success-negative)`,
    "success-negative-hover": `var(--${BORDER_CONSTANT}-success-negative-hover)`,
    "success-negative-active": `var(--${BORDER_CONSTANT}-success-negative-active)`,
    warning: `var(--${BORDER_CONSTANT}-warning)`,
    "warning-hover": `var(--${BORDER_CONSTANT}-warning-hover)`,
    "warning-active": `var(--${BORDER_CONSTANT}-warning-active)`,
    "warning-negative": `var(--${BORDER_CONSTANT}-warning-negative)`,
    "warning-negative-hover": `var(--${BORDER_CONSTANT}-warning-negative-hover)`,
    "warning-negative-active": `var(--${BORDER_CONSTANT}-warning-negative-active)`,
    danger: `var(--${BORDER_CONSTANT}-danger)`,
    "danger-hover": `var(--${BORDER_CONSTANT}-danger-hover)`,
    "danger-active": `var(--${BORDER_CONSTANT}-danger-active)`,
    "danger-negative": `var(--${BORDER_CONSTANT}-danger-negative)`,
    "danger-negative-hover": `var(--${BORDER_CONSTANT}-danger-negative-hover)`,
    "danger-negative-active": `var(--${BORDER_CONSTANT}-danger-negative-active)`,
};
