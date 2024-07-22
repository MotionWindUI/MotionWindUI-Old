import plugin from "tailwindcss/plugin";
import { BaseColors, ModeValue, MotionWindUIPluginConfig } from "./types";
import { themeColors } from "./colors/colors";
import { ColorShadeKeys, ColorShades, CSSColorVarScale } from "./colors/types";
import { colorScaleToCssVars } from "./utils/colors";
import { ThemeMode } from "../../provider/src/MotionWindUIProvider";
import {
    BACKGROUND_CONSTANT,
    backgroundColors,
    backgroundColorsPlugin,
} from "./styles/colorStyles/background";
import {
    SURFACE_CONSTANT,
    surfaceColors,
    surfaceColorsPlugin,
} from "./styles/colorStyles/surface";
import {
    ACCENT_CONSTANT,
    accentColors,
    accentColorsPlugin,
    baseAccentColors,
    generateAccentColors,
} from "./styles/colorStyles/accent";
import {
    BORDER_CONSTANT,
    borderColors,
    borderColorsPlugin,
} from "./styles/colorStyles/border";
import {
    TEXT_CONSTANT,
    textColors,
    textColorsPlugin,
} from "./styles/colorStyles/text";
import { Styles } from "./styles/types";
import {
    opacity,
    OPACITY_CONSTANT,
    opacityPlugin,
} from "./styles/colorStyles/opacity";
import {
    FONT_SIZE_CONSTANT,
    fontSize,
    fontSizePlugin,
    LINE_HEIGHT_CONSTANT,
    lineHeight,
} from "./styles/spacingStyles/fontSize";
import {
    BORDER_RADIUS_CONSTANT,
    borderRadius,
    borderRadiusPlugin,
} from "./styles/spacingStyles/borderRadius";
import {
    BORDER_WIDTH_CONSTANT,
    borderWidth,
    borderWidthPlugin,
} from "./styles/spacingStyles/borderWidth";

const DEFAULT_THEME = "default";

/**
 * Given the default color styles (if present), go through each style (if present) and generate the appropiate CSS variable.
 *
 * @param colorStyles The default color styles.
 * @param mode The theme mode (light or dark) to work in.
 * @returns The map of color variables to their values
 */
const generateVars = (colorStyles?: Styles, mode: ThemeMode = "light") => {
    // Skip if there are no themes present
    if (!colorStyles) return {};

    // Set up the return variable map
    const vars: { [key: string]: string } = {};

    // A function that prefixes any given string using the given mode key
    const addVars = (prefix: string, colors: { [key: string]: ModeValue }) => {
        Object.entries(colors).forEach(([key, value]) => {
            vars[`--${prefix}-${key}`] = value[mode];
        });
    };

    // Go through each style, and if it is there, generate the variables
    if (colorStyles.background)
        addVars(BACKGROUND_CONSTANT, colorStyles.background);
    if (colorStyles.surface) addVars(SURFACE_CONSTANT, colorStyles.surface);
    if (colorStyles.accent) addVars(ACCENT_CONSTANT, colorStyles.accent);
    if (colorStyles.border) addVars(BORDER_CONSTANT, colorStyles.border);
    if (colorStyles.text) addVars(TEXT_CONSTANT, colorStyles.text);

    return vars;
};

/**
 * Given the default color styles (if present), go through each style (if present) and generate the appropi
 *
 * @param styles The default styles.
 * @returns The map of color variables to their values
 */
const generateVarsWithoutMode = (styles: Styles) => {
    const vars: { [key: string]: string } = {};

    const addVars = (prefix: string, colors: { [key: string]: string }) => {
        Object.entries(colors).forEach(([key, value]) => {
            vars[`--${prefix}-${key}`] = value;
        });
    };

    if (styles.borderRadius)
        addVars(BORDER_RADIUS_CONSTANT, styles.borderRadius);
    if (styles.borderWidth) addVars(BORDER_WIDTH_CONSTANT, styles.borderWidth);
    if (styles.opacity) addVars(OPACITY_CONSTANT, styles.opacity);
    if (styles.fontSize) addVars(FONT_SIZE_CONSTANT, styles.fontSize);
    if (styles.lineHeight) addVars(LINE_HEIGHT_CONSTANT, styles.lineHeight);
    return vars;
};

const corePlugin = (config: MotionWindUIPluginConfig) => {
    const userTheme = config.theme || {};
    const userThemes = config.themes || {};

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
        accent: generateAccentColors(baseAccentColors, userTheme.darkenOnHover),
        border: borderColors,
        text: textColors,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        opacity: opacity,
        fontSize: fontSize,
        lineHeight: lineHeight,
    };

    const mergedBaseColors: BaseColors = {
        ...defaultBaseColors,
        ...userTheme.colors,
    };

    const mergedStyes: Styles = {
        ...defaultStyles,
        ...userTheme.style,
    };

    const colorStyles: CSSColorVarScale = {
        ...colorScaleToCssVars("neutral", mergedBaseColors.neutral, false),
        ...colorScaleToCssVars("primary", mergedBaseColors.primary, false),
        ...colorScaleToCssVars("secondary", mergedBaseColors.secondary, false),
        ...colorScaleToCssVars("success", mergedBaseColors.success, false),
        ...colorScaleToCssVars("warning", mergedBaseColors.warning, false),
        ...colorScaleToCssVars("danger", mergedBaseColors.danger, false),
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
                    ...generateVars(mergedStyes, "light"),
                    ...generateVarsWithoutMode(mergedStyes),
                },
                [`:root[data-theme="${DEFAULT_THEME}-dark"]`]: {
                    ...generateVars(mergedStyes, "dark"),
                    ...generateVarsWithoutMode(mergedStyes),
                },
            });

            Object.keys(userThemes).forEach((themeName) => {
                const themeConfig = userThemes[themeName];
                const themeBaseColors = {
                    ...mergedBaseColors,
                    ...themeConfig.colors,
                };
                const themeStyles = {
                    ...mergedStyes,
                    ...themeConfig.style,
                };
                const themeColorStyles: CSSColorVarScale = {
                    ...colorScaleToCssVars(
                        "neutral",
                        themeBaseColors.neutral,
                        false,
                    ),
                    ...colorScaleToCssVars(
                        "primary",
                        themeBaseColors.primary,
                        false,
                    ),
                    ...colorScaleToCssVars(
                        "secondary",
                        themeBaseColors.secondary,
                        false,
                    ),
                    ...colorScaleToCssVars(
                        "success",
                        themeBaseColors.success,
                        false,
                    ),
                    ...colorScaleToCssVars(
                        "warning",
                        themeBaseColors.warning,
                        false,
                    ),
                    ...colorScaleToCssVars(
                        "danger",
                        themeBaseColors.danger,
                        false,
                    ),
                };

                addBase({
                    [`:root[data-theme="${themeName}-light"]`]: {
                        ...generateVars(themeStyles, "light"),
                        ...themeColorStyles,
                        ...generateVarsWithoutMode(themeStyles),
                    },
                    [`:root[data-theme="${themeName}-dark"]`]: {
                        ...generateVars(themeStyles, "dark"),
                        ...themeColorStyles,
                        ...generateVarsWithoutMode(themeStyles),
                    },
                });
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
                        ...borderRadiusPlugin,
                    },
                    borderWidth: {
                        ...borderWidthPlugin,
                    },
                    /* Other styles for the plugin */
                    fontSize: {
                        ...fontSizePlugin,
                    },
                    opacity: {
                        ...opacityPlugin,
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
