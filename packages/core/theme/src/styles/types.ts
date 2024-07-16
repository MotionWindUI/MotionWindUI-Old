import { BorderRadius } from "./spacingStyles/types";
import {
    AccentColors,
    BackgroundColors,
    BorderColors,
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
}
