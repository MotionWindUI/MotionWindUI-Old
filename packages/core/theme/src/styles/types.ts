import {
    BorderRadius,
    BorderWidth,
    FontSize,
    LineHeight,
} from "./spacingStyles/types";
import {
    AccentColors,
    BackgroundColors,
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
