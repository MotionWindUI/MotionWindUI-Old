import { ColorScale } from "./colors/types";
import { PluginStyles } from "./styles/types";

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
    style?: Partial<PluginStyles>;
    /* Whether to darken the colors on hover */
    darkenOnHover?: boolean;
  };
}

export interface MotionWindUIPluginConfig {
  theme?: {
    colors?: Partial<BaseColors>;
    style?: Partial<PluginStyles>;
    darkenOnHover?: boolean;
  };
  themes?: ThemeCreator;
}
