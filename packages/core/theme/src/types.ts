import { ColorScale } from "./colors/types";
import { Styles } from "./styles/types";

export type ModeValue = {
    light: string;
    dark: string;
};

export interface BaseColors {
    neutral: ColorScale;
    primary: ColorScale;
    secondary: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    danger: ColorScale;
}

export interface ThemeCreator {
    [key: string]: {
        /* The neutral, primary, secondary, success, warning, or danger colors */
        colors?: Partial<BaseColors>;
        /* The overall design system */
        style?: Partial<Styles>;
        /* Whether to darken the colors on hover */
        darkenOnHover?: boolean;
    };
}

export interface MotionWindUIPluginConfig {
    theme?: {
        colors?: Partial<BaseColors>;
        style?: Partial<Styles>;
        darkenOnHover?: boolean;
    };
    themes?: ThemeCreator;
}
