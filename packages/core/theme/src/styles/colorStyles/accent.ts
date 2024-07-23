import { ColorShadeKeys } from "../../colors/types";
import { adjustShade } from "../../utils/colors";
import { AccentColors, AccentColorsPlugin, BaseAccentColors } from "./types";

export const ACCENT_CONSTANT = "accent";

export const baseAccentColors: BaseAccentColors = {
    neutral: {
        light: "var(--neutral-600)",
        dark: "var(--neutral-300)",
    },
    "neutral-negative": {
        light: "var(--neutral-300)",
        dark: "var(--netural-700)",
    },
    "neutral-subtle": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-950)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-400)",
    },
    "primary-negative": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    "primary-subtle": {
        light: "var(--primary-100)",
        dark: "var(--primary-950)",
    },
    secondary: {
        light: "var(--secondary-600)",
        dark: "var(--secondary-400)",
    },
    "secondary-negative": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-600)",
    },
    "secondary-subtle": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-950)",
    },
    success: {
        light: "var(--success-600)",
        dark: "var(--success-400)",
    },
    "success-negative": {
        light: "var(--success-400)",
        dark: "var(--success-600)",
    },
    "success-subtle": {
        light: "var(--success-50)",
        dark: "var(--success-950)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-400)",
    },
    "warning-negative": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    "warning-subtle": {
        light: "var(--warning-50)",
        dark: "var(--warning-950)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-400)",
    },
    "danger-negative": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
    "danger-subtle": {
        light: "var(--danger-50)",
        dark: "var(--danger-950)",
    },
};

export const generateAccentColors = (
    baseColors: BaseAccentColors = baseAccentColors,
    darkenOnHover: boolean = true,
): AccentColors => {
    const baseColorKeys = Object.keys(baseColors) as Array<
        keyof BaseAccentColors
    >;

    const accentColors: AccentColors = {} as AccentColors;

    baseColorKeys.forEach((key) => {
        const lightBaseShade = parseInt(
            baseColors[key].light.split("-").at(-1) as string,
            10,
        );
        const darkBaseShade = parseInt(
            baseColors[key].dark.split("-").at(-1) as string,
            10,
        );

        const { hoverShade: lightHoverShade, activeShade: lightActiveShade } =
            adjustShade(lightBaseShade as ColorShadeKeys, darkenOnHover);
        const { hoverShade: darkHoverShade, activeShade: darkActiveShade } =
            adjustShade(darkBaseShade as ColorShadeKeys, darkenOnHover);

        accentColors[key] = {
            light: baseColors[key].light,
            dark: baseColors[key].dark,
        };

        accentColors[`${key}-hover`] = {
            light: `var(--${key.split("-")[0]}-${lightHoverShade})`,
            dark: `var(--${key.split("-")[0]}-${darkHoverShade})`,
        };

        accentColors[`${key}-active`] = {
            light: `var(--${key.split("-")[0]}-${lightActiveShade})`,
            dark: `var(--${key.split("-")[0]}-${darkActiveShade})`,
        };
    });

    return accentColors;
};

/**
 * Filter the base accent colors (colors without hover and active states) from the accent colors
 * @param baseColors The accent colors to filter
 * @returns The list of base accent colors
 */
export const filterBaseAccentColors = (
    baseColors: Partial<AccentColors>,
): BaseAccentColors => {
    // Get the list of keys from the base accent colors
    const keys: (keyof BaseAccentColors)[] = [
        "neutral",
        "neutral-negative",
        "neutral-subtle",
        "primary",
        "primary-negative",
        "primary-subtle",
        "secondary",
        "secondary-negative",
        "secondary-subtle",
        "success",
        "success-negative",
        "success-subtle",
        "warning",
        "warning-negative",
        "warning-subtle",
        "danger",
        "danger-negative",
        "danger-subtle",
    ];

    // Return the filtered base accent
    return keys.reduce((acc, key) => {
        if (key in baseColors && baseColors[key]) {
            acc[key] = baseColors[key];
        }
        return acc;
    }, {} as BaseAccentColors);
};

export const accentColors: AccentColors = {
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
    "neutral-subtle": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-950)",
    },
    "neutral-subtle-hover": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-900)",
    },
    "neutral-subtle-active": {
        light: "var(--neutral-300)",
        dark: "var(--neutral-800)",
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
    "primary-subtle": {
        light: "var(--primary-100)",
        dark: "var(--primary-950)",
    },
    "primary-subtle-hover": {
        light: "var(--primary-200)",
        dark: "var(--primary-900)",
    },
    "primary-subtle-active": {
        light: "var(--primary-300)",
        dark: "var(--primary-800)",
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
    "secondary-subtle": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-950)",
    },
    "secondary-subtle-hover": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "secondary-subtle-active": {
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
    "success-subtle": {
        light: "var(--success-50)",
        dark: "var(--success-950)",
    },
    "success-subtle-hover": {
        light: "var(--success-100)",
        dark: "var(--success-900)",
    },
    "success-subtle-active": {
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
    "warning-subtle": {
        light: "var(--warning-50)",
        dark: "var(--warning-950)",
    },
    "warning-subtle-hover": {
        light: "var(--warning-100)",
        dark: "var(--warning-900)",
    },
    "warning-subtle-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-800)",
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
    "danger-subtle": {
        light: "var(--danger-50)",
        dark: "var(--danger-950)",
    },
    "danger-subtle-hover": {
        light: "var(--danger-100)",
        dark: "var(--danger-900)",
    },
    "danger-subtle-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-800)",
    },
};

export const accentColorsPlugin: AccentColorsPlugin = {
    neutral: `var(--${ACCENT_CONSTANT}-neutral)`,
    "neutral-hover": `var(--${ACCENT_CONSTANT}-neutral-hover)`,
    "neutral-active": `var(--${ACCENT_CONSTANT}-neutral-active)`,
    "neutral-negative": `var(--${ACCENT_CONSTANT}-neutral-negative)`,
    "neutral-negative-hover": `var(--${ACCENT_CONSTANT}-neutral-negative-hover)`,
    "neutral-negative-active": `var(--${ACCENT_CONSTANT}-neutral-negative-active)`,
    "neutral-subtle": `var(--${ACCENT_CONSTANT}-neutral-subtle)`,
    "neutral-subtle-hover": `var(--${ACCENT_CONSTANT}-neutral-subtle-hover)`,
    "neutral-subtle-active": `var(--${ACCENT_CONSTANT}-neutral-subtle-active)`,
    primary: `var(--${ACCENT_CONSTANT}-primary)`,
    "primary-hover": `var(--${ACCENT_CONSTANT}-primary-hover)`,
    "primary-active": `var(--${ACCENT_CONSTANT}-primary-active)`,
    "primary-negative": `var(--${ACCENT_CONSTANT}-primary-negative)`,
    "primary-negative-hover": `var(--${ACCENT_CONSTANT}-primary-negative-hover)`,
    "primary-negative-active": `var(--${ACCENT_CONSTANT}-primary-negative-active)`,
    "primary-subtle": `var(--${ACCENT_CONSTANT}-primary-subtle)`,
    "primary-subtle-hover": `var(--${ACCENT_CONSTANT}-primary-subtle-hover)`,
    "primary-subtle-active": `var(--${ACCENT_CONSTANT}-primary-subtle-active)`,
    secondary: `var(--${ACCENT_CONSTANT}-secondary)`,
    "secondary-hover": `var(--${ACCENT_CONSTANT}-secondary-hover)`,
    "secondary-active": `var(--${ACCENT_CONSTANT}-secondary-active)`,
    "secondary-negative": `var(--${ACCENT_CONSTANT}-secondary-negative)`,
    "secondary-negative-hover": `var(--${ACCENT_CONSTANT}-secondary-negative-hover)`,
    "secondary-negative-active": `var(--${ACCENT_CONSTANT}-secondary-negative-active)`,
    "secondary-subtle": `var(--${ACCENT_CONSTANT}-secondary-subtle)`,
    "secondary-subtle-hover": `var(--${ACCENT_CONSTANT}-secondary-subtle-hover)`,
    "secondary-subtle-active": `var(--${ACCENT_CONSTANT}-secondary-subtle-active)`,
    success: `var(--${ACCENT_CONSTANT}-success)`,
    "success-hover": `var(--${ACCENT_CONSTANT}-success-hover)`,
    "success-active": `var(--${ACCENT_CONSTANT}-success-active)`,
    "success-negative": `var(--${ACCENT_CONSTANT}-success-negative)`,
    "success-negative-hover": `var(--${ACCENT_CONSTANT}-success-negative-hover)`,
    "success-negative-active": `var(--${ACCENT_CONSTANT}-success-negative-active)`,
    "success-subtle": `var(--${ACCENT_CONSTANT}-success-subtle)`,
    "success-subtle-hover": `var(--${ACCENT_CONSTANT}-success-subtle-hover)`,
    "success-subtle-active": `var(--${ACCENT_CONSTANT}-success-subtle-active)`,
    warning: `var(--${ACCENT_CONSTANT}-warning)`,
    "warning-hover": `var(--${ACCENT_CONSTANT}-warning-hover)`,
    "warning-active": `var(--${ACCENT_CONSTANT}-warning-active)`,
    "warning-negative": `var(--${ACCENT_CONSTANT}-warning-negative)`,
    "warning-negative-hover": `var(--${ACCENT_CONSTANT}-warning-negative-hover)`,
    "warning-negative-active": `var(--${ACCENT_CONSTANT}-warning-negative-active)`,
    "warning-subtle": `var(--${ACCENT_CONSTANT}-warning-subtle)`,
    "warning-subtle-hover": `var(--${ACCENT_CONSTANT}-warning-subtle-hover)`,
    "warning-subtle-active": `var(--${ACCENT_CONSTANT}-warning-subtle-active)`,
    danger: `var(--${ACCENT_CONSTANT}-danger)`,
    "danger-hover": `var(--${ACCENT_CONSTANT}-danger-hover)`,
    "danger-active": `var(--${ACCENT_CONSTANT}-danger-active)`,
    "danger-negative": `var(--${ACCENT_CONSTANT}-danger-negative)`,
    "danger-negative-hover": `var(--${ACCENT_CONSTANT}-danger-negative-hover)`,
    "danger-negative-active": `var(--${ACCENT_CONSTANT}-danger-negative-active)`,
    "danger-subtle": `var(--${ACCENT_CONSTANT}-danger-subtle)`,
    "danger-subtle-hover": `var(--${ACCENT_CONSTANT}-danger-subtle-hover)`,
    "danger-subtle-active": `var(--${ACCENT_CONSTANT}-danger-subtle-active)`,
};
