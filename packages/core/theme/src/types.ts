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
        baseColors?: Partial<BaseColors>;
        /* The overall design system */
        styleTheme?: Partial<Styles>;
    };
}

export interface MotionWindUIPluginConfig {
    themes?: ThemeCreator;
}
