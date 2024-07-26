import { Opacity, OpacityPlugin } from "./types";

export const OPACITY_CONSTANT = "opacity";

export const opacity: Opacity = {
  disabled: "0.6",
};

export const opacityPlugin: OpacityPlugin = {
  disabled: `var(--${OPACITY_CONSTANT}-disabled)`,
};
