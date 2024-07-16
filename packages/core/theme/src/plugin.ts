import plugin from "tailwindcss/plugin";
import {
    BaseColors,
    ModeValue,
    MotionWindUIPluginConfig,
    StylesTheme,
    ThemeCreator,
} from "./types";
import { themeColors } from "./colors/colors";
import { CSSColorVarScale } from "./colors/types";
import { colorScaleToCssVars } from "./utils/colors";
import { ColorStyleTheme } from "./styles/colorStyles/types";
import { ThemeMode } from "../../provider/src/MotionWindUIProvider";
import { backgroundColors } from "./styles/colorStyles/background";
import { surfaceColors } from "./styles/colorStyles/surface";
import { accentColors } from "./styles/colorStyles/accent";
import { borderColors } from "./styles/colorStyles/border";
import { textColors } from "./styles/colorStyles/text";

const DEFAULT_THEME = "default";

const defaultBaseColors: BaseColors = {
    neutral: themeColors.neutral,
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    success: themeColors.success,
    warning: themeColors.warning,
    danger: themeColors.danger,
};

const defaultColorStyles: ColorStyleTheme = {
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
    colorStyles?: ColorStyleTheme,
    mode: ThemeMode = "light",
) => {
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
    if (colorStyles.background) addVars("background", colorStyles.background);
    if (colorStyles.surface) addVars("surface", colorStyles.surface);
    if (colorStyles.accent) addVars("accent", colorStyles.accent);
    if (colorStyles.border) addVars("border", colorStyles.border);
    if (colorStyles.text) addVars("text", colorStyles.text);

    return vars;
};

const mergeModeValues = (
    defaultValues: ModeValue,
    userValues?: Partial<ModeValue>,
): ModeValue => ({
    light: userValues?.light || defaultValues.light,
    dark: userValues?.dark || defaultValues.dark,
});

const mergeColors = (
    defaultColors: { [key: string]: ModeValue },
    userColors?: Partial<{ [key: string]: ModeValue }>,
) => {
    return Object.keys(defaultColors).reduce(
        (acc, key) => {
            acc[key] = mergeModeValues(defaultColors[key], userColors?.[key]);
            return acc;
        },
        {} as { [key: string]: ModeValue },
    );
};

const mergeThemes = (
    defaultTheme: ColorStyleTheme,
    userTheme?: Partial<ColorStyleTheme>,
): ColorStyleTheme => {
    return {
        background: userTheme?.background
            ? mergeColors(defaultTheme.background!, userTheme.background)
            : defaultTheme.background,
        surface: userTheme?.surface
            ? mergeColors(defaultTheme.surface!, userTheme.surface)
            : defaultTheme.surface,
        accent: userTheme?.accent
            ? mergeColors(defaultTheme.accent!, userTheme.accent)
            : defaultTheme.accent,
        border: userTheme?.border
            ? mergeColors(defaultTheme.border!, userTheme.border)
            : defaultTheme.border,
        text: userTheme?.text
            ? mergeColors(defaultTheme.text!, userTheme.text)
            : defaultTheme.text,
    };
};

const processThemes = (themes: ThemeCreator) => {
    return Object.entries(themes).reduce(
        (acc, [themeName, themeValues]) => {
            const mergedLightTheme = mergeThemes(
                defaultColorStyles,
                themeValues.light?.styleTheme,
            );
            const mergedDarkTheme = mergeThemes(
                defaultColorStyles,
                themeValues.dark?.styleTheme,
            );

            acc[`:root[data-theme="${themeName}-light"]`] =
                generateColorStyleVars(mergedLightTheme, "light");
            acc[`:root[data-theme="${themeName}-dark"]`] =
                generateColorStyleVars(mergedDarkTheme, "dark");
            return acc;
        },
        {} as { [key: string]: { [key: string]: string } },
    );
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

    const proccessedThemes = processThemes(userThemes);

    return plugin(
        ({ addBase }) => {
            addBase({
                [":root"]: {
                    ...colorStyles,
                },
                [`:root[data-theme="${DEFAULT_THEME}-light"]`]: {
                    ...generateColorStyleVars(defaultColorStyles, "light"),
                },
                [`:root[data-theme="${DEFAULT_THEME}-dark"]`]: {
                    ...generateColorStyleVars(defaultColorStyles, "dark"),
                },
                ...proccessedThemes,
            });
        },
        {
            theme: {
                extend: {
                    colors: {
                        neutral: {
                            50: "var(--neutral-50)",
                            100: "var(--neutral-100)",
                            200: "var(--neutral-200)",
                            300: "var(--neutral-300)",
                            400: "var(--neutral-400)",
                            500: "var(--neutral-500)",
                            600: "var(--neutral-600)",
                            700: "var(--neutral-700)",
                            800: "var(--neutral-800)",
                            900: "var(--neutral-900)",
                            950: "var(--neutral-950)",
                        },
                        primary: {
                            50: "var(--primary-50)",
                            100: "var(--primary-100)",
                            200: "var(--primary-200)",
                            300: "var(--primary-300)",
                            400: "var(--primary-400)",
                            500: "var(--primary-500)",
                            600: "var(--primary-600)",
                            700: "var(--primary-700)",
                            800: "var(--primary-800)",
                            900: "var(--primary-900)",
                            950: "var(--primary-950)",
                        },
                        secondary: {
                            50: "var(--secondary-50)",
                            100: "var(--secondary-100)",
                            200: "var(--secondary-200)",
                            300: "var(--secondary-300)",
                            400: "var(--secondary-400)",
                            500: "var(--secondary-500)",
                            600: "var(--secondary-600)",
                            700: "var(--secondary-700)",
                            800: "var(--secondary-800)",
                            900: "var(--secondary-900)",
                            950: "var(--secondary-950)",
                        },
                        success: {
                            50: "var(--success-50)",
                            100: "var(--success-100)",
                            200: "var(--success-200)",
                            300: "var(--success-300)",
                            400: "var(--success-400)",
                            500: "var(--success-500)",
                            600: "var(--success-600)",
                            700: "var(--success-700)",
                            800: "var(--success-800)",
                            900: "var(--success-900)",
                            950: "var(--success-950)",
                        },
                        warning: {
                            50: "var(--warning-50)",
                            100: "var(--warning-100)",
                            200: "var(--warning-200)",
                            300: "var(--warning-300)",
                            400: "var(--warning-400)",
                            500: "var(--warning-500)",
                            600: "var(--warning-600)",
                            700: "var(--warning-700)",
                            800: "var(--warning-800)",
                            900: "var(--warning-900)",
                            950: "var(--warning-950)",
                        },
                        danger: {
                            50: "var(--danger-50)",
                            100: "var(--danger-100)",
                            200: "var(--danger-200)",
                            300: "var(--danger-300)",
                            400: "var(--danger-400)",
                            500: "var(--danger-500)",
                            600: "var(--danger-600)",
                            700: "var(--danger-700)",
                            800: "var(--danger-800)",
                            900: "var(--danger-900)",
                            950: "var(--danger-950)",
                        },
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
