import { BorderWidth, BorderWidthPlugin } from "./types";

export const BORDER_WIDTH_CONSTANT = "border-width";

export const borderWidth: BorderWidth = {
    DEFAULT: "2px",
    sm: "1px",
    md: "2px",
    lg: "4px",
};

export const borderWidthPlugin: BorderWidthPlugin = {
    DEFAULT: `var(--${BORDER_WIDTH_CONSTANT}-default)`,
    sm: `var(--${BORDER_WIDTH_CONSTANT}-sm)`,
    md: `var(--${BORDER_WIDTH_CONSTANT}-md)`,
    lg: `var(--${BORDER_WIDTH_CONSTANT}-lg)`,
};
