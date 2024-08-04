import { combineStyles } from "../utils/components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils/focusRing";
import { collapsedBorderStyle } from "../utils/borderStyle";

export interface ButtonVariantStateStyles {
  default: string;
  hover: string;
  active: string;
}

export interface ButtonVariantStyles {
  solid: ButtonVariantStateStyles;
  faded: ButtonVariantStateStyles;
  bordered: ButtonVariantStateStyles;
  ghost: ButtonVariantStateStyles;
  light: ButtonVariantStateStyles;
}

export interface ButtonVariants {
  neutral: ButtonVariantStyles;
  primary: ButtonVariantStyles;
  secondary: ButtonVariantStyles;
  success: ButtonVariantStyles;
  warning: ButtonVariantStyles;
  danger: ButtonVariantStyles;
}

const buttonVariants: ButtonVariants = {
  neutral: {
    solid: {
      default: "bg-neutral text-on-neutral",
      hover: "hover:bg-neutral-hover",
      active: "aria-pressed:bg-neutral-active",
    },
    faded: {
      default: "text-neutral",
      hover: "hover:text-neutral-hover hover:bg-neutral-subtle",
      active: "aria-pressed:text-neutral-active aria-pressed:bg-neutral-subtle-hover",
    },
    bordered: {
      default: "border-neutral text-neutral",
      hover: "hover:border-neutral-hover hover:text-neutral-hover",
      active: "aria-pressed:border-neutral-active aria-pressed:text-neutral-active",
    },
    ghost: {
      default: "border-neutral text-neutral",
      hover: "hover:bg-neutral-hover hover:text-on-neutral-hover hover:border-neutral-hover",
      active: "aria-pressed:bg-neutral-active aria-pressed:border-neutral-active",
    },
    light: {
      default: "bg-neutral-subtle text-neutral",
      hover: "hover:bg-neutral-subtle-hover",
      active: "aria-pressed:bg-neutral-subtle-active",
    },
  },
  primary: {
    solid: {
      default: "bg-primary text-on-primary",
      hover: "hover:bg-primary-hover",
      active: "aria-pressed:bg-primary-active",
    },
    faded: {
      default: "text-primary",
      hover: "hover:text-primary-hover hover:bg-primary-subtle",
      active: "aria-pressed:text-primary-active aria-pressed:bg-primary-subtle-hover",
    },
    bordered: {
      default: "border-primary text-primary",
      hover: "hover:border-primary-hover hover:text-primary-hover",
      active: "aria-pressed:border-primary-active aria-pressed:text-primary-active",
    },
    ghost: {
      default: "border-primary text-primary",
      hover: "hover:bg-primary-hover hover:text-on-primary-hover hover:border-primary-hover",
      active:
        "aria-pressed:bg-primary-active aria-pressed:text-on-primary-hover aria-pressed:border-primary-active",
    },
    light: {
      default: "bg-primary-subtle text-primary",
      hover: "hover:bg-primary-subtle-hover",
      active: "aria-pressed:bg-primary-subtle-active",
    },
  },
  secondary: {
    solid: {
      default: "bg-secondary text-on-secondary",
      hover: "hover:bg-secondary-hover hover:text-on-secondary-hover",
      active: "aria-pressed:bg-secondary-active aria-pressed:text-on-secondary-active",
    },
    faded: {
      default: "text-secondary",
      hover: "hover:text-secondary-hover hover:bg-secondary-subtle",
      active: "aria-pressed:text-secondary-active aria-pressed:bg-secondary-subtle-hover",
    },
    bordered: {
      default: "border-secondary text-secondary",
      hover: "hover:border-secondary-hover hover:text-secondary-hover",
      active: "aria-pressed:border-secondary-active aria-pressed:text-secondary-active",
    },
    ghost: {
      default: "border-secondary text-secondary",
      hover: "hover:bg-secondary-hover hover:text-on-secondary-hover hover:border-secondary-hover",
      active:
        "aria-pressed:bg-secondary-active aria-pressed:text-on-secondary-active aria-pressed:border-secondary-active",
    },
    light: {
      default: "bg-secondary-subtle text-secondary",
      hover: "hover:bg-secondary-subtle-hover",
      active: "aria-pressed:bg-secondary-subtle-active",
    },
  },
  success: {
    solid: {
      default: "bg-success text-on-success",
      hover: "hover:bg-success-hover hover:text-on-success-hover",
      active: "aria-pressed:bg-success-active aria-pressed:text-on-success-active",
    },
    faded: {
      default: "text-success",
      hover: "hover:text-success-hover hover:bg-success-subtle",
      active: "aria-pressed:text-success-active aria-pressed:bg-success-subtle-hover",
    },
    bordered: {
      default: "border-success text-success",
      hover: "hover:border-success-hover hover:text-success-hover",
      active: "aria-pressed:border-success-active aria-pressed:text-success-active",
    },
    ghost: {
      default: "border-success text-success",
      hover: "hover:bg-success-hover hover:text-on-success-hover hover:border-success-hover",
      active:
        "aria-pressed:bg-success-active aria-pressed:text-on-success-active aria-pressed:border-success-active",
    },
    light: {
      default: "bg-success-subtle text-success",
      hover: "hover:bg-success-subtle-hover",
      active: "aria-pressed:bg-success-subtle-active",
    },
  },
  warning: {
    solid: {
      default: "bg-warning text-on-warning",
      hover: "hover:bg-warning-hover hover:text-on-warning-hover",
      active: "aria-pressed:bg-warning-active aria-pressed:text-on-warning-active",
    },
    faded: {
      default: "text-warning",
      hover: "hover:text-warning-hover hover:bg-warning-subtle",
      active: "aria-pressed:text-warning-active aria-pressed:bg-warning-subtle-hover",
    },
    bordered: {
      default: "border-warning text-warning",
      hover: "hover:border-warning-hover hover:text-warning-hover",
      active: "aria-pressed:border-warning-active aria-pressed:text-warning-active",
    },
    ghost: {
      default: "border-warning text-warning",
      hover: "hover:bg-warning-hover hover:text-on-warning-hover hover:border-warning-hover",
      active:
        "aria-pressed:bg-warning-active aria-pressed:text-on-warning-active aria-pressed:border-warning-active",
    },
    light: {
      default: "bg-warning-subtle text-warning",
      hover: "hover:bg-warning-subtle-hover",
      active: "aria-pressed:bg-warning-subtle-active",
    },
  },
  danger: {
    solid: {
      default: "bg-danger text-on-danger",
      hover: "hover:bg-danger-hover hover:text-on-danger-hover",
      active: "aria-pressed:bg-danger-active aria-pressed:text-on-danger-active",
    },
    faded: {
      default: "text-danger",
      hover: "hover:text-danger-hover hover:bg-danger-subtle",
      active: "aria-pressed:text-danger-active aria-pressed:bg-danger-subtle-hover",
    },
    bordered: {
      default: "border-danger text-danger",
      hover: "hover:border-danger-hover hover:text-danger-hover",
      active: "aria-pressed:border-danger-active aria-pressed:text-danger-active",
    },
    ghost: {
      default: "border-danger text-danger",
      hover: "hover:bg-danger-hover hover:text-on-danger-hover hover:border-danger-hover",
      active:
        "aria-pressed:bg-danger-active aria-pressed:text-on-danger-active aria-pressed:border-danger-active",
    },
    light: {
      default: "bg-danger-subtle text-danger",
      hover: "hover:bg-danger-subtle-hover",
      active: "aria-pressed:bg-danger-subtle-active",
    },
  },
};

export const buttonStyles = tv({
  base: [
    "z0",
    "group",
    "inline-flex",
    "relative",
    "flex-row",
    "items-center",
    "justify-center",
    "min-w-max",
    "outline-none",
    "select-none",
    "text-wrap",
    "overflow-hidden",
    "data-[pressed=true]:scale-95",
    ...focusRing,
  ],
  variants: {
    variant: {
      solid: "",
      faded: "bg-transparent",
      bordered: "bg-transparent border border-solid",
      ghost: "bg-transparent border border-solid",
      light: "",
    },
    color: {
      neutral: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    size: {
      sm: "text-[length:--font-size-small] leading-[--line-height-small] px-3 min-w-16 min-h-8 gap-2",
      md: "text-[length:--font-size-medium] leading-[--line-height-medium] px-4 min-w-20 min-h-10 gap-2",
      lg: "text-[length:--font-size-large] leading-[--line-height-large] px-6 min-w-24 min-h-12 gap-3",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      xl: "rounded-xlarge",
      full: "rounded-full",
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none",
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
    animateDisable: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "motion-reduce:transition-none",
    },
    shadow: {
      true: "shadow-md drop-shadow-xl",
      false: "shadow-none",
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "solid",
      className: combineStyles(
        buttonVariants.neutral.solid.default,
        buttonVariants.neutral.solid.hover,
        buttonVariants.neutral.solid.active,
      ),
    },
    {
      color: "neutral",
      variant: "faded",
      className: combineStyles(
        buttonVariants.neutral.faded.default,
        buttonVariants.neutral.faded.hover,
        buttonVariants.neutral.faded.active,
      ),
    },
    {
      color: "neutral",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.neutral.bordered.default,
        buttonVariants.neutral.bordered.hover,
        buttonVariants.neutral.bordered.active,
      ),
    },
    {
      color: "neutral",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.neutral.ghost.default,
        buttonVariants.neutral.ghost.hover,
        buttonVariants.neutral.ghost.active,
      ),
    },
    {
      color: "neutral",
      variant: "light",
      className: combineStyles(
        buttonVariants.neutral.light.default,
        buttonVariants.neutral.light.hover,
        buttonVariants.neutral.light.active,
      ),
    },
    {
      color: "primary",
      variant: "solid",
      className: combineStyles(
        buttonVariants.primary.solid.default,
        buttonVariants.primary.solid.hover,
        buttonVariants.primary.solid.active,
      ),
    },
    {
      color: "primary",
      variant: "faded",
      className: combineStyles(
        buttonVariants.primary.faded.default,
        buttonVariants.primary.faded.hover,
        buttonVariants.primary.faded.active,
      ),
    },
    {
      color: "primary",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.primary.bordered.default,
        buttonVariants.primary.bordered.hover,
        buttonVariants.primary.bordered.active,
      ),
    },
    {
      color: "primary",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.primary.ghost.default,
        buttonVariants.primary.ghost.hover,
        buttonVariants.primary.ghost.active,
      ),
    },
    {
      color: "primary",
      variant: "light",
      className: combineStyles(
        buttonVariants.primary.light.default,
        buttonVariants.primary.light.hover,
        buttonVariants.primary.light.active,
      ),
    },
    {
      color: "secondary",
      variant: "solid",
      className: combineStyles(
        buttonVariants.secondary.solid.default,
        buttonVariants.secondary.solid.hover,
        buttonVariants.secondary.solid.active,
      ),
    },
    {
      color: "secondary",
      variant: "faded",
      className: combineStyles(
        buttonVariants.secondary.faded.default,
        buttonVariants.secondary.faded.hover,
        buttonVariants.secondary.faded.active,
      ),
    },
    {
      color: "secondary",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.secondary.bordered.default,
        buttonVariants.secondary.bordered.hover,
        buttonVariants.secondary.bordered.active,
      ),
    },
    {
      color: "secondary",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.secondary.ghost.default,
        buttonVariants.secondary.ghost.hover,
        buttonVariants.secondary.ghost.active,
      ),
    },
    {
      color: "secondary",
      variant: "light",
      className: combineStyles(
        buttonVariants.secondary.light.default,
        buttonVariants.secondary.light.hover,
        buttonVariants.secondary.light.active,
      ),
    },
    {
      color: "success",
      variant: "solid",
      className: combineStyles(
        buttonVariants.success.solid.default,
        buttonVariants.success.solid.hover,
        buttonVariants.success.solid.active,
      ),
    },
    {
      color: "success",
      variant: "faded",
      className: combineStyles(
        buttonVariants.success.faded.default,
        buttonVariants.success.faded.hover,
        buttonVariants.success.faded.active,
      ),
    },
    {
      color: "success",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.success.bordered.default,
        buttonVariants.success.bordered.hover,
        buttonVariants.success.bordered.active,
      ),
    },
    {
      color: "success",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.success.ghost.default,
        buttonVariants.success.ghost.hover,
        buttonVariants.success.ghost.active,
      ),
    },
    {
      color: "success",
      variant: "light",
      className: combineStyles(
        buttonVariants.success.light.default,
        buttonVariants.success.light.hover,
        buttonVariants.success.light.active,
      ),
    },
    {
      color: "warning",
      variant: "solid",
      className: combineStyles(
        buttonVariants.warning.solid.default,
        buttonVariants.warning.solid.hover,
        buttonVariants.warning.solid.active,
      ),
    },
    {
      color: "warning",
      variant: "faded",
      className: combineStyles(
        buttonVariants.warning.faded.default,
        buttonVariants.warning.faded.hover,
        buttonVariants.warning.faded.active,
      ),
    },
    {
      color: "warning",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.warning.bordered.default,
        buttonVariants.warning.bordered.hover,
        buttonVariants.warning.bordered.active,
      ),
    },
    {
      color: "warning",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.warning.ghost.default,
        buttonVariants.warning.ghost.hover,
        buttonVariants.warning.ghost.active,
      ),
    },
    {
      color: "warning",
      variant: "light",
      className: combineStyles(
        buttonVariants.warning.light.default,
        buttonVariants.warning.light.hover,
        buttonVariants.warning.light.active,
      ),
    },
    {
      color: "danger",
      variant: "solid",
      className: combineStyles(
        buttonVariants.danger.solid.default,
        buttonVariants.danger.solid.hover,
        buttonVariants.danger.solid.active,
      ),
    },
    {
      color: "danger",
      variant: "faded",
      className: combineStyles(
        buttonVariants.danger.faded.default,
        buttonVariants.danger.faded.hover,
        buttonVariants.danger.faded.active,
      ),
    },
    {
      color: "danger",
      variant: "bordered",
      className: combineStyles(
        buttonVariants.danger.bordered.default,
        buttonVariants.danger.bordered.hover,
        buttonVariants.danger.bordered.active,
      ),
    },
    {
      color: "danger",
      variant: "ghost",
      className: combineStyles(
        buttonVariants.danger.ghost.default,
        buttonVariants.danger.ghost.hover,
        buttonVariants.danger.ghost.active,
      ),
    },
    {
      color: "danger",
      variant: "light",
      className: combineStyles(
        buttonVariants.danger.light.default,
        buttonVariants.danger.light.hover,
        buttonVariants.danger.light.active,
      ),
    },
    {
      isInGroup: true,
      radius: "none",
      className: "rounded-none",
    },
    {
      isInGroup: true,
      radius: "sm",
      className: "rounded-none first:rounded-s-small last:rounded-e-small",
    },
    {
      isInGroup: true,
      radius: "md",
      className: "rounded-none first:rounded-s-medium last:rounded-e-medium",
    },
    {
      isInGroup: true,
      radius: "lg",
      className: "rounded-none first:rounded-s-large last:rounded-e-large",
    },
    {
      isInGroup: true,
      radius: "xl",
      className: "rounded-none first:rounded-s-xlarge last:rounded-e-xlarge",
    },
    {
      isInGroup: true,
      radius: "full",
      className: "rounded-none first:rounded-s-full last:rounded-e-full",
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "neutral",
      className: collapsedBorderStyle.neutral,
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "primary",
      className: "[&+.border.border-primary]:ms-[calc(theme(borderWidth.md)*-1)]",
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "secondary",
      className: "[&+.border.border-secondary]:ms-[calc(theme(borderWidth.md)*-1)]",
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "success",
      className: "[&+.border.border-success]:ms-[calc(theme(borderWidth.md)*-1)]",
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "warning",
      className: "[&+.border.border-warning]:ms-[calc(theme(borderWidth.md)*-1)]",
    },
    {
      isInGroup: true,
      variant: ["bordered", "ghost"],
      color: "danger",
      className: "[&+.border.border-danger]:ms-[calc(theme(borderWidth.md)*-1)]",
    },
    {
      isIconOnly: true,
      size: "sm",
      className: "min-w-8 w-8 h-8",
    },
    {
      isIconOnly: true,
      size: "md",
      className: "min-w-10 w-10 h-10",
    },
    {
      isIconOnly: true,
      size: "lg",
      className: "min-w-12 w-12 h-12",
    },
  ],
  defaultVariants: {
    color: "neutral",
    variant: "solid",
    size: "md",
    radius: "md",
    isDisabled: false,
    isInGroup: false,
    isIconOnly: false,
  },
});

export type ButtonStyles = typeof buttonStyles;
