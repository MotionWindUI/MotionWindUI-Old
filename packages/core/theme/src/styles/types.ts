import {
    BorderRadius,
    BorderWidth,
    FontSize,
    LineHeight,
} from "./spacingStyles/types";
import {
    AccentColors,
    BackgroundColors,
    BaseAccentColors,
    BaseBorderColors,
    BaseTextColors,
    BorderColors,
    Opacity,
    SurfaceColors,
    TextColors,
} from "./colorStyles/types";

export interface Styles {
    background?: Partial<BackgroundColors>;
    surface?: Partial<SurfaceColors>;
    accent?: Partial<AccentColors>;
    border?: Partial<BorderColors>;
    text?: Partial<TextColors>;
    borderRadius?: Partial<BorderRadius>;
    borderWidth?: Partial<BorderWidth>;
    opacity?: Partial<Opacity>;
    fontSize?: Partial<FontSize>;
    lineHeight?: Partial<LineHeight>;
}

export interface PluginStyles {
    background?: Partial<BackgroundColors>;
    surface?: Partial<SurfaceColors>;
    accent?: Partial<BaseAccentColors>;
    border?: Partial<BaseBorderColors>;
    text?: Partial<BaseTextColors>;
    borderRadius?: Partial<BorderRadius>;
    borderWidth?: Partial<BorderWidth>;
    opacity?: Partial<Opacity>;
    fontSize?: Partial<FontSize>;
    lineHeight?: Partial<LineHeight>;
}
