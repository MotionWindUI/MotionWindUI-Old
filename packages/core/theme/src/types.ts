import { ColorScale } from "./colors/types";
import { ColorStyleTheme } from "./styles/colorStyles/types";

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

export interface StylesTheme {
    styleTheme?: Partial<ColorStyleTheme>;
}

export interface ThemeCreator {
    [key: string]: {
        baseColors?: Partial<BaseColors>;
        light?: StylesTheme;
        dark?: StylesTheme;
    };
}

export interface MotionWindUIPluginConfig {
    themes?: ThemeCreator;
}
