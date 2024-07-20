import plugin from "tailwindcss/plugin";
import { BaseColors, ModeValue, MotionWindUIPluginConfig } from "./types";
import { themeColors } from "./colors/colors";
import { ColorShadeKeys, ColorShades, CSSColorVarScale } from "./colors/types";
import { colorScaleToCssVars } from "./utils/colors";
import { ThemeMode } from "../../provider/src/MotionWindUIProvider";
import {
    backgroundColors,
    backgroundColorsPlugin,
} from "./styles/colorStyles/background";
import {
    surfaceColors,
    surfaceColorsPlugin,
} from "./styles/colorStyles/surface";
import { accentColors, accentColorsPlugin } from "./styles/colorStyles/accent";
import { borderColors, borderColorsPlugin } from "./styles/colorStyles/border";
import { textColors, textColorsPlugin } from "./styles/colorStyles/text";
import { Styles } from "./styles/types";
import { borderRadius } from "./styles/spacingStyles/borderRadius";
import { borderWidth } from "./styles/spacingStyles/borderWidth";

const DEFAULT_THEME = "default";

const defaultBaseColors: BaseColors = {
    neutral: themeColors.neutral,
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    warning: themeColors.warning,
    danger: themeColors.danger,
};

const defaultStyles: Styles = {
    background: backgroundColors,
    surface: surfaceColors,
    accent: accentColors,
    border: borderColors,
    text: textColors,
};

/**
 * Given the default color styles (if present), go through each style (if present) and generate the appropiate CSS variable.
 *
 * @param colorStyles The default color styles.
 * @param mode The theme mode (light or dark) to work in.
 * @returns The map of color variables to their values
 */
const generateColorStyleVars = (
    colorStyles?: Styles,
    mode: ThemeMode = "light",
    isTailwind: boolean = false,
) => {
    // Skip if there are no themes present
    if (!colorStyles) return {};

    // Set up the return variable map
    const vars: { [key: string]: string } = {};

    // A function that prefixes any given string using the given mode key
    const addVars = (prefix: string, colors: { [key: string]: ModeValue }) => {
        Object.entries(colors).forEach(([key, value]) => {
            if (!isTailwind) {
                vars[`--${prefix}-${key}`] = value[mode];
            } else {
                vars[`${prefix}-${key}`] = `var(--${prefix}-${key})`;
            }
        });
    };

    // Go through each style, and if it is there, generate the variables
    if (colorStyles.background) addVars("background", colorStyles.background);
    if (colorStyles.surface) addVars("surface", colorStyles.surface);
    if (colorStyles.accent) addVars("accent", colorStyles.accent);
    if (colorStyles.border) addVars("border", colorStyles.border);
    if (colorStyles.text) addVars("text", colorStyles.text);

    return vars;
};

const corePlugin = (config: MotionWindUIPluginConfig) => {
    const userThemes = config.themes || {};

    const colorStyles: CSSColorVarScale = {
        ...colorScaleToCssVars("neutral", defaultBaseColors.neutral, false),
        ...colorScaleToCssVars("primary", defaultBaseColors.primary, false),
        ...colorScaleToCssVars("secondary", defaultBaseColors.secondary, false),
        ...colorScaleToCssVars("success", defaultBaseColors.success, false),
        ...colorScaleToCssVars("warning", defaultBaseColors.warning, false),
        ...colorScaleToCssVars("danger", defaultBaseColors.danger, false),
    };

    const colorKeys = [
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
    ];

    const colorShadeKeys: ColorShadeKeys[] = [
        50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
    ];

    const tailwindColors = colorKeys.reduce(
        (acc, key) => {
            acc[key] = colorShadeKeys.reduce((scale, shade) => {
                scale[shade] = `var(--${key}-${shade})`;
                return scale;
            }, {} as Partial<ColorShades>);
            return acc;
        },
        {} as { [key: string]: Partial<ColorShades> },
    );

    return plugin(
        ({ addBase }) => {
            addBase({
                [":root"]: {
                    ...colorStyles,
                },
                [`:root[data-theme="${DEFAULT_THEME}-light"]`]: {
                    ...generateColorStyleVars(defaultStyles, "light"),
                },
                [`:root[data-theme="${DEFAULT_THEME}-dark"]`]: {
                    ...generateColorStyleVars(defaultStyles, "dark"),
                },
            });
        },
        {
            theme: {
                extend: {
                    /* Colors for the plugin */
                    colors: {
                        ...tailwindColors,
                    },
                    borderColor: {
                        ...borderColorsPlugin,
                    },
                    textColor: {
                        ...textColorsPlugin,
                    },
                    backgroundColor: {
                        ...backgroundColorsPlugin,
                        ...accentColorsPlugin,
                        ...surfaceColorsPlugin,
                    },
                    /* Spacing for the plugin */
                    borderRadius: {
                        ...borderRadius,
                    },
                    borderWidth: {
                        ...borderWidth,
                    },
                },
            },
        },
    );
};

export const motionWindUIPlugin = (
    config: MotionWindUIPluginConfig,
): ReturnType<typeof plugin> => {
    return corePlugin(config);
};
