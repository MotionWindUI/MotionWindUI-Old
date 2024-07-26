import { FontSize, FontSizePlugin, LineHeight } from "./types";

export const FONT_SIZE_CONSTANT = "font-size";
export const LINE_HEIGHT_CONSTANT = "line-height";

export const fontSize: FontSize = {
  tiny: "0.75rem",
  small: "0.875rem",
  base: "1rem",
  large: "1.125rem",
  xlarge: "1.25rem",
};

export const lineHeight: LineHeight = {
  tiny: "1rem",
  small: "1.25rem",
  base: "1.5rem",
  large: "1.75rem",
  xlarge: "2rem",
};

export const fontSizePlugin: FontSizePlugin = {
  tiny: [
    `var(--${FONT_SIZE_CONSTANT}-tiny)`,
    { lineHeight: `var(--${LINE_HEIGHT_CONSTANT}-tiny)` },
  ],
  small: [
    `var(--${FONT_SIZE_CONSTANT}-small)`,
    { lineHeight: `var(--${LINE_HEIGHT_CONSTANT}-small)` },
  ],
  base: [
    `var(--${FONT_SIZE_CONSTANT}-base)`,
    { lineHeight: `var(--${LINE_HEIGHT_CONSTANT}-base)` },
  ],
  large: [
    `var(--${FONT_SIZE_CONSTANT}-large)`,
    { lineHeight: `var(--${LINE_HEIGHT_CONSTANT}-large)` },
  ],
  xlarge: [
    `var(--${FONT_SIZE_CONSTANT}-xlarge)`,
    { lineHeight: `var(--${LINE_HEIGHT_CONSTANT}-xlarge)` },
  ],
};
