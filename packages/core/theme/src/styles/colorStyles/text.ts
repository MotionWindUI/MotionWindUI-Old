import { ColorShadeKeys } from "../../colors/types";
import { adjustShade } from "../../utils/colors";
import { BaseTextColors, TextColors, TextColorsPlugin } from "./types";

export const TEXT_CONSTANT = "text";

export const textColors: TextColors = {
    default: {
        light: "var(--neutral-900)",
        dark: "var(--neutral-100)",
    },
    subtle: {
        light: "var(--neutral-700)",
        dark: "var(--neutral-300)",
    },
    disabled: {
        light: "var(--neutral-500)",
        dark: "var(--neutral-500)",
    },
    inverse: {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    link: {
        light: "var(--primary-500)",
        dark: "var(--primary-500)",
    },
    "link-hover": {
        light: "var(--primary-600)",
        dark: "var(--primary-400)",
    },
    "link-active": {
        light: "var(--primary-700)",
        dark: "var(--primary-300)",
    },
    "link-visited": {
        light: "var(--primary-700)",
        dark: "var(--primary-300)",
    },
    "link-disabled": {
        light: "var(--neutral-500)",
        dark: "var(--neutral-500)",
    },
    neutral: {
        light: "var(--neutral-700)",
        dark: "var(--neutral-100)",
    },
    "neutral-hover": {
        light: "var(--neutral-800)",
        dark: "var(--neutral-200)",
    },
    "neutral-active": {
        light: "var(--neutral-900)",
        dark: "var(--neutral-300)",
    },
    "on-neutral": {
        light: "var(--neutral-50)",
        dark: "var(--neutral-950)",
    },
    "on-neutral-hover": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    "on-neutral-active": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-950)",
    },
    "on-neutral-disabled": {
        light: "var(--neutral-900)",
        dark: "var(--neutral-100)",
    },
    "on-neutral-subtle": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    "on-neutral-subtle-subtle": {
        light: "var(--neutral-400)",
        dark: "var(--neutral-700)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-500)",
    },
    "primary-hover": {
        light: "var(--primary-800)",
        dark: "var(--primary-400)",
    },
    "primary-active": {
        light: "var(--primary-900)",
        dark: "var(--primary-300)",
    },
    "on-primary": {
        light: "var(--primary-50)",
        dark: "var(--primary-900)",
    },
    "on-primary-hover": {
        light: "var(--primary-100)",
        dark: "var(--primary-950)",
    },
    "on-primary-active": {
        light: "var(--primary-200)",
        dark: "var(--primary-950)",
    },
    "on-primary-disabled": {
        light: "var(--primary-900)",
        dark: "var(--primary-100)",
    },
    "on-primary-subtle": {
        light: "var(--primary-100)",
        dark: "var(--primary-900)",
    },
    "on-primary-subtle-subtle": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    secondary: {
        light: "var(--secondary-700)",
        dark: "var(--secondary-500)",
    },
    "secondary-hover": {
        light: "var(--secondary-800)",
        dark: "var(--secondary-400)",
    },
    "secondary-active": {
        light: "var(--secondary-900)",
        dark: "var(--secondary-300)",
    },
    "on-secondary": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-800)",
    },
    "on-secondary-hover": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "on-secondary-active": {
        light: "var(--secondary-200)",
        dark: "var(--secondary-950)",
    },
    "on-secondary-disabled": {
        light: "var(--secondary-900)",
        dark: "var(--secondary-100)",
    },
    "on-secondary-subtle": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "on-secondary-subtle-subtle": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-700)",
    },
    success: {
        light: "var(--success-700)",
        dark: "var(--success-500)",
    },
    "success-hover": {
        light: "var(--success-800)",
        dark: "var(--success-400)",
    },
    "success-active": {
        light: "var(--success-900)",
        dark: "var(--success-300)",
    },
    "on-success": {
        light: "var(--success-50)",
        dark: "var(--success-900)",
    },
    "on-success-hover": {
        light: "var(--success-100)",
        dark: "var(--success-950)",
    },
    "on-success-active": {
        light: "var(--success-200)",
        dark: "var(--success-950)",
    },
    "on-success-disabled": {
        light: "var(--success-900)",
        dark: "var(--success-100)",
    },
    "on-success-subtle": {
        light: "var(--success-100)",
        dark: "var(--success-900)",
    },
    "on-success-subtle-subtle": {
        light: "var(--success-400)",
        dark: "var(--success-700)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-500)",
    },
    "warning-hover": {
        light: "var(--warning-800)",
        dark: "var(--warning-400)",
    },
    "warning-active": {
        light: "var(--warning-900)",
        dark: "var(--warning-300)",
    },
    "on-warning": {
        light: "var(--warning-50)",
        dark: "var(--warning-900)",
    },
    "on-warning-hover": {
        light: "var(--warning-100)",
        dark: "var(--warning-950)",
    },
    "on-warning-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-950)",
    },
    "on-warning-disabled": {
        light: "var(--warning-900)",
        dark: "var(--warning-100)",
    },
    "on-warning-subtle": {
        light: "var(--warning-100)",
        dark: "var(--warning-900)",
    },
    "on-warning-subtle-subtle": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-500)",
    },
    "danger-hover": {
        light: "var(--danger-800)",
        dark: "var(--danger-400)",
    },
    "danger-active": {
        light: "var(--danger-900)",
        dark: "var(--danger-300)",
    },
    "on-danger": {
        light: "var(--danger-50)",
        dark: "var(--danger-900)",
    },
    "on-danger-hover": {
        light: "var(--danger-100)",
        dark: "var(--danger-950)",
    },
    "on-danger-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-950)",
    },
    "on-danger-disabled": {
        light: "var(--danger-900)",
        dark: "var(--danger-100)",
    },
    "on-danger-subtle": {
        light: "var(--danger-100)",
        dark: "var(--danger-900)",
    },
    "on-danger-subtle-subtle": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
};

export const baseTextColors: BaseTextColors = {
    neutral: {
        light: "var(--neutral-700)",
        dark: "var(--neutral-100)",
    },
    "on-neutral": {
        light: "var(--neutral-50)",
        dark: "var(--neutral-950)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-500)",
    },
    "on-primary": {
        light: "var(--primary-50)",
        dark: "var(--primary-900)",
    },
    secondary: {
        light: "var(--secondary-700)",
        dark: "var(--secondary-500)",
    },
    "on-secondary": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-800)",
    },
    success: {
        light: "var(--success-700)",
        dark: "var(--success-500)",
    },
    "on-success": {
        light: "var(--success-50)",
        dark: "var(--success-900)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-500)",
    },
    "on-warning": {
        light: "var(--warning-50)",
        dark: "var(--warning-900)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-500)",
    },
    "on-danger": {
        light: "var(--danger-50)",
        dark: "var(--danger-900)",
    },
};

export const generateTextColors = (
    defaultTextColors: TextColors,
    textColors: BaseTextColors,
    darkenOnHover: boolean = true,
): TextColors => {
    // Set a return object to avoid mutating the default text colors
    // The default text colors are used as a fallback if the text colors are not provided
    const returnTextColors = defaultTextColors;

    // Get the keys of the base text colors
    const baseTextColorKeys = Object.keys(textColors) as Array<
        keyof BaseTextColors
    >;

    // For each text colors key, grab the light and dark shade
    // Then adjust the shade for hover and active states
    baseTextColorKeys.forEach((key) => {
        const lightBaseShade = parseInt(
            textColors[key].light.split("-").at(-1) as string,
            10,
        ) as ColorShadeKeys;

        const darkBaseShade = parseInt(
            textColors[key].dark.split("-").at(-1) as string,
            10,
        ) as ColorShadeKeys;

        const { hoverShade: lightHoverShade, activeShade: lightActiveShade } =
            adjustShade(lightBaseShade, darkenOnHover);
        const { hoverShade: darkHoverShade, activeShade: darkActiveShade } =
            adjustShade(darkBaseShade, darkenOnHover);

        let adjustedKey = key;

        if (key.match(/on-/)) {
            adjustedKey = key.replace("on-", "") as keyof BaseTextColors;
        }

        returnTextColors[`${key}-hover`] = {
            light: `var(--${adjustedKey}-${lightHoverShade})`,
            dark: `var(--${adjustedKey}-${darkHoverShade})`,
        };

        returnTextColors[`${key}-active`] = {
            light: `var(--${adjustedKey}-${lightActiveShade})`,
            dark: `var(--${adjustedKey}-${darkActiveShade})`,
        };
    });

    return returnTextColors;
};

export const filterBaseTextColors = (
    textColors: TextColors,
): BaseTextColors => {
    const keys: (keyof BaseTextColors)[] = [
        "neutral",
        "on-neutral",
        "primary",
        "on-primary",
        "secondary",
        "on-secondary",
        "success",
        "on-success",
        "warning",
        "on-warning",
        "danger",
        "on-danger",
    ];

    return keys.reduce((acc, key) => {
        acc[key] = textColors[key];
        return acc;
    }, {} as TextColors);
};

export const textColorsPlugin: TextColorsPlugin = {
    default: `var(--${TEXT_CONSTANT}-default)`,
    subtle: `var(--${TEXT_CONSTANT}-subtle)`,
    disabled: `var(--${TEXT_CONSTANT}-disabled)`,
    inverse: `var(--${TEXT_CONSTANT}-inverse)`,
    link: `var(--${TEXT_CONSTANT}-link)`,
    "link-hover": `var(--${TEXT_CONSTANT}-link-hover)`,
    "link-active": `var(--${TEXT_CONSTANT}-link-active)`,
    "link-visited": `var(--${TEXT_CONSTANT}-link-visited)`,
    "link-disabled": `var(--${TEXT_CONSTANT}-link-disabled)`,
    neutral: `var(--${TEXT_CONSTANT}-neutral)`,
    "neutral-hover": `var(--${TEXT_CONSTANT}-neutral-hover)`,
    "neutral-active": `var(--${TEXT_CONSTANT}-neutral-active)`,
    "on-neutral": `var(--${TEXT_CONSTANT}-on-neutral)`,
    "on-neutral-hover": `var(--${TEXT_CONSTANT}-on-neutral-hover)`,
    "on-neutral-active": `var(--${TEXT_CONSTANT}-on-neutral-active)`,
    "on-neutral-disabled": `var(--${TEXT_CONSTANT}-on-neutral-disabled)`,
    "on-neutral-subtle": `var(--${TEXT_CONSTANT}-on-neutral-subtle)`,
    "on-neutral-subtle-subtle": `var(--${TEXT_CONSTANT}-on-neutral-subtle-subtle)`,
    primary: `var(--${TEXT_CONSTANT}-primary)`,
    "primary-hover": `var(--${TEXT_CONSTANT}-primary-hover)`,
    "primary-active": `var(--${TEXT_CONSTANT}-primary-active)`,
    "on-primary": `var(--${TEXT_CONSTANT}-on-primary)`,
    "on-primary-hover": `var(--${TEXT_CONSTANT}-on-primary-hover)`,
    "on-primary-active": `var(--${TEXT_CONSTANT}-on-primary-active)`,
    "on-primary-disabled": `var(--${TEXT_CONSTANT}-on-primary-disabled)`,
    "on-primary-subtle": `var(--${TEXT_CONSTANT}-on-primary-subtle)`,
    "on-primary-subtle-subtle": `var(--${TEXT_CONSTANT}-on-primary-subtle-subtle)`,
    secondary: `var(--${TEXT_CONSTANT}-secondary)`,
    "secondary-hover": `var(--${TEXT_CONSTANT}-secondary-hover)`,
    "secondary-active": `var(--${TEXT_CONSTANT}-secondary-active)`,
    "on-secondary": `var(--${TEXT_CONSTANT}-on-secondary)`,
    "on-secondary-hover": `var(--${TEXT_CONSTANT}-on-secondary-hover)`,
    "on-secondary-active": `var(--${TEXT_CONSTANT}-on-secondary-active)`,
    "on-secondary-disabled": `var(--${TEXT_CONSTANT}-on-secondary-disabled)`,
    "on-secondary-subtle": `var(--${TEXT_CONSTANT}-on-secondary-subtle)`,
    "on-secondary-subtle-subtle": `var(--${TEXT_CONSTANT}-on-secondary-subtle-subtle)`,
    success: `var(--${TEXT_CONSTANT}-success)`,
    "success-hover": `var(--${TEXT_CONSTANT}-success-hover)`,
    "success-active": `var(--${TEXT_CONSTANT}-success-active)`,
    "on-success": `var(--${TEXT_CONSTANT}-on-success)`,
    "on-success-hover": `var(--${TEXT_CONSTANT}-on-success-hover)`,
    "on-success-active": `var(--${TEXT_CONSTANT}-on-success-active)`,
    "on-success-disabled": `var(--${TEXT_CONSTANT}-on-success-disabled)`,
    "on-success-subtle": `var(--${TEXT_CONSTANT}-on-success-subtle)`,
    "on-success-subtle-subtle": `var(--${TEXT_CONSTANT}-on-success-subtle-subtle)`,
    warning: `var(--${TEXT_CONSTANT}-warning)`,
    "warning-hover": `var(--${TEXT_CONSTANT}-warning-hover)`,
    "warning-active": `var(--${TEXT_CONSTANT}-warning-active)`,
    "on-warning": `var(--${TEXT_CONSTANT}-on-warning)`,
    "on-warning-hover": `var(--${TEXT_CONSTANT}-on-warning-hover)`,
    "on-warning-active": `var(--${TEXT_CONSTANT}-on-warning-active)`,
    "on-warning-disabled": `var(--${TEXT_CONSTANT}-on-warning-disabled)`,
    "on-warning-subtle": `var(--${TEXT_CONSTANT}-on-warning-subtle)`,
    "on-warning-subtle-subtle": `var(--${TEXT_CONSTANT}-on-warning-subtle-subtle)`,
    danger: `var(--${TEXT_CONSTANT}-danger)`,
    "danger-hover": `var(--${TEXT_CONSTANT}-danger-hover)`,
    "danger-active": `var(--${TEXT_CONSTANT}-danger-active)`,
    "on-danger": `var(--${TEXT_CONSTANT}-on-danger)`,
    "on-danger-hover": `var(--${TEXT_CONSTANT}-on-danger-hover)`,
    "on-danger-active": `var(--${TEXT_CONSTANT}-on-danger-active)`,
    "on-danger-disabled": `var(--${TEXT_CONSTANT}-on-danger-disabled)`,
    "on-danger-subtle": `var(--${TEXT_CONSTANT}-on-danger-subtle)`,
    "on-danger-subtle-subtle": `var(--${TEXT_CONSTANT}-on-danger-subtle-subtle)`,
};
