import { ModeValue } from "../../types";
import { neutral } from "../../colors/neutral";

export type BackgroundColorsKeys = ["subtle", "default"];

export interface BackgroundColors {
  subtle: ModeValue;
  default: ModeValue;
}

export type BackgroundColorsPlugin = {
  [K in keyof BackgroundColors]: string;
};

export interface SurfaceColors {
  subtle: ModeValue;
  default: ModeValue;
}

export type SurfaceColorsPlugin = {
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
}

export type AccentColorsPlugin = {
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
};

export interface BorderColors {
  neutral: ModeValue;
  "neutral-hover": ModeValue;
  "neutral-active": ModeValue;
  "neutral-negative": ModeValue;
  "neutral-negative-hover": ModeValue;
  "neutral-negative-active": ModeValue;
  primary: ModeValue;
  "primary-hover": ModeValue;
  "primary-active": ModeValue;
  "primary-negative": ModeValue;
  "primary-negative-hover": ModeValue;
  "primary-negative-active": ModeValue;
  secondary: ModeValue;
  "secondary-hover": ModeValue;
  "secondary-active": ModeValue;
  "secondary-negative": ModeValue;
  "secondary-negative-hover": ModeValue;
  "secondary-negative-active": ModeValue;
  success: ModeValue;
  "success-hover": ModeValue;
  "success-active": ModeValue;
  "success-negative": ModeValue;
  "success-negative-hover": ModeValue;
  "success-negative-active": ModeValue;
  warning: ModeValue;
  "warning-hover": ModeValue;
  "warning-active": ModeValue;
  "warning-negative": ModeValue;
  "warning-negative-hover": ModeValue;
  "warning-negative-active": ModeValue;
  danger: ModeValue;
  "danger-hover": ModeValue;
  "danger-active": ModeValue;
  "danger-negative": ModeValue;
  "danger-negative-hover": ModeValue;
  "danger-negative-active": ModeValue;
}

export type BorderColorsPlugin = {
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
  primary: ModeValue;
  "primary-hover": ModeValue;
  "primary-active": ModeValue;
  "on-primary": ModeValue;
  "on-primary-hover": ModeValue;
  "on-primary-active": ModeValue;
  "on-primary-disabled": ModeValue;
  "on-primary-subtle": ModeValue;
  "on-primary-subtle-subtle": ModeValue;
  secondary: ModeValue;
  "secondary-hover": ModeValue;
  "secondary-active": ModeValue;
  "on-secondary": ModeValue;
  "on-secondary-hover": ModeValue;
  "on-secondary-active": ModeValue;
  "on-secondary-disabled": ModeValue;
  "on-secondary-subtle": ModeValue;
  "on-secondary-subtle-subtle": ModeValue;
  success: ModeValue;
  "success-hover": ModeValue;
  "success-active": ModeValue;
  "on-success": ModeValue;
  "on-success-hover": ModeValue;
  "on-success-active": ModeValue;
  "on-success-disabled": ModeValue;
  "on-success-subtle": ModeValue;
  "on-success-subtle-subtle": ModeValue;
  warning: ModeValue;
  "warning-hover": ModeValue;
  "warning-active": ModeValue;
  "on-warning": ModeValue;
  "on-warning-hover": ModeValue;
  "on-warning-active": ModeValue;
  "on-warning-disabled": ModeValue;
  "on-warning-subtle": ModeValue;
  "on-warning-subtle-subtle": ModeValue;
  danger: ModeValue;
  "danger-hover": ModeValue;
  "danger-active": ModeValue;
  "on-danger": ModeValue;
  "on-danger-hover": ModeValue;
  "on-danger-active": ModeValue;
  "on-danger-disabled": ModeValue;
  "on-danger-subtle": ModeValue;
  "on-danger-subtle-subtle": ModeValue;
}

export type TextColorsPlugin = {
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
  [K in keyof Opacity]: string;
};
