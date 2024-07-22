/**
 * The supported border radius values.
 */
export interface BorderRadius {
    none: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    full: string;
}

export interface BorderRadiusPlugin {
    none: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    full: string;
}

/**
 * The supported border width values.
 */
export interface BorderWidth {
    DEFAULT: string;
    sm: string;
    md: string;
    lg: string;
}

export interface BorderWidthPlugin {
    DEFAULT: string;
    sm: string;
    md: string;
    lg: string;
}

export interface FontSize {
    tiny: string;
    small: string;
    base: string;
    large: string;
    xlarge: string;
}

export interface LineHeight {
    tiny: string;
    small: string;
    base: string;
    large: string;
    xlarge: string;
}

type FontSizePluginValue = [string, { lineHeight: string }];

export interface FontSizePlugin {
    tiny: FontSizePluginValue;
    small: FontSizePluginValue;
    base: FontSizePluginValue;
    large: FontSizePluginValue;
    xlarge: FontSizePluginValue;
}
