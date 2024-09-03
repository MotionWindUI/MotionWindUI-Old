import { ModeValue } from "../../types";

export type BackgroundColorsKeys = ["subtle", "default"];

export interface BackgroundColors {
  subtle: ModeValue;
  default: ModeValue;
}

export type BackgroundColorsPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof BackgroundColors]: string;
};

export interface SurfaceColors {
  subtle: ModeValue;
  default: ModeValue;
}

export type SurfaceColorsPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof SurfaceColors]: string;
};

export interface AccentColors {
  neutral: ModeValue;
  "neutral-hover": ModeValue;
  "neutral-active": ModeValue;
  "neutral-negative": ModeValue;
  "neutral-negative-hover": ModeValue;
  "neutral-negative-active": ModeValue;
  "neutral-subtle": ModeValue;
  "neutral-subtle-hover": ModeValue;
  "neutral-subtle-active": ModeValue;
  primary: ModeValue;
  "primary-hover": ModeValue;
  "primary-active": ModeValue;
  "primary-negative": ModeValue;
  "primary-negative-hover": ModeValue;
  "primary-negative-active": ModeValue;
  "primary-subtle": ModeValue;
  "primary-subtle-hover": ModeValue;
  "primary-subtle-active": ModeValue;
  secondary: ModeValue;
  "secondary-hover": ModeValue;
  "secondary-active": ModeValue;
  "secondary-negative": ModeValue;
  "secondary-negative-hover": ModeValue;
  "secondary-negative-active": ModeValue;
  "secondary-subtle": ModeValue;
  "secondary-subtle-hover": ModeValue;
  "secondary-subtle-active": ModeValue;
  success: ModeValue;
  "success-hover": ModeValue;
  "success-active": ModeValue;
  "success-negative": ModeValue;
  "success-negative-hover": ModeValue;
  "success-negative-active": ModeValue;
  "success-subtle": ModeValue;
  "success-subtle-hover": ModeValue;
  "success-subtle-active": ModeValue;
  warning: ModeValue;
  "warning-hover": ModeValue;
  "warning-active": ModeValue;
  "warning-negative": ModeValue;
  "warning-negative-hover": ModeValue;
  "warning-negative-active": ModeValue;
  "warning-subtle": ModeValue;
  "warning-subtle-hover": ModeValue;
  "warning-subtle-active": ModeValue;
  danger: ModeValue;
  "danger-hover": ModeValue;
  "danger-active": ModeValue;
  "danger-negative": ModeValue;
  "danger-negative-hover": ModeValue;
  "danger-negative-active": ModeValue;
  "danger-subtle": ModeValue;
  "danger-subtle-hover": ModeValue;
  "danger-subtle-active": ModeValue;
  "input-neutral-subtle": ModeValue;
  "input-neutral-subtle-hover": ModeValue;
  "input-neutral-subtle-active": ModeValue;
  "input-primary-subtle": ModeValue;
  "input-primary-subtle-hover": ModeValue;
  "input-primary-subtle-active": ModeValue;
  "input-secondary-subtle": ModeValue;
  "input-secondary-subtle-hover": ModeValue;
  "input-secondary-subtle-active": ModeValue;
  "input-success-subtle": ModeValue;
  "input-success-subtle-hover": ModeValue;
  "input-success-subtle-active": ModeValue;
  "input-warning-subtle": ModeValue;
  "input-warning-subtle-hover": ModeValue;
  "input-warning-subtle-active": ModeValue;
  "input-danger-subtle": ModeValue;
  "input-danger-subtle-hover": ModeValue;
  "input-danger-subtle-active": ModeValue;
}

export type AccentColorsPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof AccentColors]: string;
};

/**
 * Base accent colors. Accent colors are used on top of surfaces and backgrounds. The base accent colors
 * are colors that are accent colors without any hover or active states.
 */
export type BaseAccentColors = {
  neutral: ModeValue;
  "neutral-negative": ModeValue;
  "neutral-subtle": ModeValue;
  primary: ModeValue;
  "primary-negative": ModeValue;
  "primary-subtle": ModeValue;
  secondary: ModeValue;
  "secondary-negative": ModeValue;
  "secondary-subtle": ModeValue;
  success: ModeValue;
  "success-negative": ModeValue;
  "success-subtle": ModeValue;
  warning: ModeValue;
  "warning-negative": ModeValue;
  "warning-subtle": ModeValue;
  danger: ModeValue;
  "danger-negative": ModeValue;
  "danger-subtle": ModeValue;
  "input-neutral-subtle": ModeValue;
  "input-primary-subtle": ModeValue;
  "input-secondary-subtle": ModeValue;
  "input-success-subtle": ModeValue;
  "input-warning-subtle": ModeValue;
  "input-danger-subtle": ModeValue;
};

export interface BorderColors {
  neutral: ModeValue;
  "neutral-hover": ModeValue;
  "neutral-active": ModeValue;
  "neutral-negative": ModeValue;
  "neutral-negative-hover": ModeValue;
  "neutral-negative-active": ModeValue;
  "neutral-subtle": ModeValue;
  "neutral-subtle-hover": ModeValue;
  "neutral-subtle-active": ModeValue;
  primary: ModeValue;
  "primary-hover": ModeValue;
  "primary-active": ModeValue;
  "primary-negative": ModeValue;
  "primary-negative-hover": ModeValue;
  "primary-negative-active": ModeValue;
  "primary-subtle": ModeValue;
  "primary-subtle-hover": ModeValue;
  "primary-subtle-active": ModeValue;
  secondary: ModeValue;
  "secondary-hover": ModeValue;
  "secondary-active": ModeValue;
  "secondary-negative": ModeValue;
  "secondary-negative-hover": ModeValue;
  "secondary-negative-active": ModeValue;
  "secondary-subtle": ModeValue;
  "secondary-subtle-hover": ModeValue;
  "secondary-subtle-active": ModeValue;
  success: ModeValue;
  "success-hover": ModeValue;
  "success-active": ModeValue;
  "success-negative": ModeValue;
  "success-negative-hover": ModeValue;
  "success-negative-active": ModeValue;
  "success-subtle": ModeValue;
  "success-subtle-hover": ModeValue;
  "success-subtle-active": ModeValue;
  warning: ModeValue;
  "warning-hover": ModeValue;
  "warning-active": ModeValue;
  "warning-negative": ModeValue;
  "warning-negative-hover": ModeValue;
  "warning-negative-active": ModeValue;
  "warning-subtle": ModeValue;
  "warning-subtle-hover": ModeValue;
  "warning-subtle-active": ModeValue;
  danger: ModeValue;
  "danger-hover": ModeValue;
  "danger-active": ModeValue;
  "danger-negative": ModeValue;
  "danger-negative-hover": ModeValue;
  "danger-negative-active": ModeValue;
  "danger-subtle": ModeValue;
  "danger-subtle-hover": ModeValue;
  "danger-subtle-active": ModeValue;
}

export type BorderColorsPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof BorderColors]: string;
};

export interface BaseBorderColors {
  neutral: ModeValue;
  "neutral-negative": ModeValue;
  primary: ModeValue;
  "primary-negative": ModeValue;
  secondary: ModeValue;
  "secondary-negative": ModeValue;
  success: ModeValue;
  "success-negative": ModeValue;
  warning: ModeValue;
  "warning-negative": ModeValue;
  danger: ModeValue;
  "danger-negative": ModeValue;
}

export interface TextColors {
  default: ModeValue;
  subtle: ModeValue;
  disabled: ModeValue;
  inverse: ModeValue;
  link: ModeValue;
  "link-hover": ModeValue;
  "link-active": ModeValue;
  "link-visited": ModeValue;
  "link-disabled": ModeValue;
  neutral: ModeValue;
  "neutral-hover": ModeValue;
  "neutral-active": ModeValue;
  "on-neutral": ModeValue;
  "on-neutral-hover": ModeValue;
  "on-neutral-active": ModeValue;
  "on-neutral-disabled": ModeValue;
  "on-neutral-subtle": ModeValue;
  "on-neutral-subtle-subtle": ModeValue;
  "on-neutral-negative": ModeValue;
  "on-neutral-negative-hover": ModeValue;
  "on-neutral-negative-active": ModeValue;
  primary: ModeValue;
  "primary-hover": ModeValue;
  "primary-active": ModeValue;
  "on-primary": ModeValue;
  "on-primary-hover": ModeValue;
  "on-primary-active": ModeValue;
  "on-primary-disabled": ModeValue;
  "on-primary-subtle": ModeValue;
  "on-primary-subtle-subtle": ModeValue;
  "on-primary-negative": ModeValue;
  "on-primary-negative-hover": ModeValue;
  "on-primary-negative-active": ModeValue;
  secondary: ModeValue;
  "secondary-hover": ModeValue;
  "secondary-active": ModeValue;
  "on-secondary": ModeValue;
  "on-secondary-hover": ModeValue;
  "on-secondary-active": ModeValue;
  "on-secondary-disabled": ModeValue;
  "on-secondary-subtle": ModeValue;
  "on-secondary-subtle-subtle": ModeValue;
  "on-secondary-negative": ModeValue;
  "on-secondary-negative-hover": ModeValue;
  "on-secondary-negative-active": ModeValue;
  success: ModeValue;
  "success-hover": ModeValue;
  "success-active": ModeValue;
  "on-success": ModeValue;
  "on-success-hover": ModeValue;
  "on-success-active": ModeValue;
  "on-success-disabled": ModeValue;
  "on-success-subtle": ModeValue;
  "on-success-subtle-subtle": ModeValue;
  "on-success-negative": ModeValue;
  "on-success-negative-hover": ModeValue;
  "on-success-negative-active": ModeValue;
  warning: ModeValue;
  "warning-hover": ModeValue;
  "warning-active": ModeValue;
  "on-warning": ModeValue;
  "on-warning-hover": ModeValue;
  "on-warning-active": ModeValue;
  "on-warning-disabled": ModeValue;
  "on-warning-subtle": ModeValue;
  "on-warning-subtle-subtle": ModeValue;
  "on-warning-negative": ModeValue;
  "on-warning-negative-hover": ModeValue;
  "on-warning-negative-active": ModeValue;
  danger: ModeValue;
  "danger-hover": ModeValue;
  "danger-active": ModeValue;
  "on-danger": ModeValue;
  "on-danger-hover": ModeValue;
  "on-danger-active": ModeValue;
  "on-danger-disabled": ModeValue;
  "on-danger-subtle": ModeValue;
  "on-danger-subtle-subtle": ModeValue;
  "on-danger-negative": ModeValue;
  "on-danger-negative-hover": ModeValue;
  "on-danger-negative-active": ModeValue;
}

export type TextColorsPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof TextColors]: string;
};

export interface BaseTextColors {
  neutral: ModeValue;
  "on-neutral": ModeValue;
  primary: ModeValue;
  "on-primary": ModeValue;
  secondary: ModeValue;
  "on-secondary": ModeValue;
  success: ModeValue;
  "on-success": ModeValue;
  warning: ModeValue;
  "on-warning": ModeValue;
  danger: ModeValue;
  "on-danger": ModeValue;
}

export interface Opacity {
  disabled?: string;
}

export type OpacityPlugin = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof Opacity]: string;
};
