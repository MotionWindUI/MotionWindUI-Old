import React from "react";

/**
 * The various options of color styles of a component.
 */
export type ColorVariants = "neutral" | "primary" | "secondary" | "success" | "warning" | "danger";

/**
 * The various options of sizes of a component.
 */
export type SizeVariants = "sm" | "md" | "lg";

/**
 * The various options of radius sizes of a component.
 */
export type RadiusSizeVariants = "none" | "sm" | "md" | "lg" | "full";

/**
 * A generic component type that can be used to render any HTML element.
 */
export type AsRoot<Props = any> = React.ElementType<Props>;

/**
 * The props of a component based on the HTML element it is rendering.
 */
export type PropsOf<T extends AsRoot> = React.ComponentPropsWithoutRef<T> & {
  asRoot?: AsRoot;
};

/**
 * The base props that apply to all MotionWindUI components.
 */
export type MotionWindUIBaseProps = {
  /** The color style of the component */
  color?: ColorVariants;

  /** The size of the component */
  size?: SizeVariants;

  /** The radius size of the component */
  radius?: RadiusSizeVariants;

  /** Whether or not the component is disabled from further interactions */
  isDisabled?: boolean;

  /* Disables all animation */
  disableAnimations?: boolean;

  /** The HTML DOM element that the component is */
  asRoot?: AsRoot;
};
