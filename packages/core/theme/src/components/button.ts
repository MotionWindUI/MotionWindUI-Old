import { cva } from "class-variance-authority";
import { combineStyles } from "../utils/components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils/focusRing";

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
            hover: "hover:bg-neutral-hover hover:text-on-neutral-hover",
            active: "aria-pressed:bg-neutral-active aria-pressed:border-neutral-active",
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
            active: "active:text-primary-active active:bg-primary-subtle-hover",
        },
        bordered: {
            default: "border-primary text-primary",
            hover: "hover:border-primary-hover hover:text-primary-hover",
            active: "active:border-primary-active active:text-primary-active",
        },
        ghost: {
            default: "border-primary text-primary",
            hover: "hover:bg-primary-hover hover:text-on-primary-hover hover:border-primary-hover",
            active: "active:bg-primary-active active:text-on-primary-hover active:border-primary-active",
        },
    },
    secondary: {
        solid: {
            default: "bg-secondary text-on-secondary",
            hover: "hover:bg-secondary-hover hover:text-on-secondary-hover",
            active: "active:bg-secondary-active active:text-on-secondary-active",
        },
        faded: {
            default: "text-secondary",
            hover: "hover:text-secondary-hover hover:bg-secondary-subtle",
            active: "active:text-secondary-active active:bg-secondary-subtle-hover",
        },
        bordered: {
            default: "border-secondary text-secondary",
            hover: "hover:border-secondary-hover hover:text-secondary-hover",
            active: "active:border-secondary-active active:text-secondary-active",
        },
        ghost: {
            default: "border-secondary text-secondary",
            hover: "hover:bg-secondary-hover hover:text-on-secondary-hover",
            active: "active:bg-secondary-active active:text-on-secondary-active",
        },
    },
    success: {
        solid: {
            default: "bg-success text-on-success",
            hover: "hover:bg-success-hover hover:text-on-success-hover",
            active: "active:bg-success-active active:text-on-success-active",
        },
        faded: {
            default: "text-success",
            hover: "hover:text-success-hover hover:bg-success-subtle",
            active: "active:text-success-active active:bg-success-subtle-hover",
        },
        bordered: {
            default: "border-success text-success",
            hover: "hover:border-success-hover hover:text-success-hover",
            active: "active:border-success-active active:text-success-active",
        },
        ghost: {
            default: "border-success text-success",
            hover: "hover:bg-success-hover hover:text-on-success-hover",
            active: "active:bg-success-active active:text-on-success-active",
        },
    },
    warning: {
        solid: {
            default: "bg-warning text-on-warning",
            hover: "hover:bg-warning-hover hover:text-on-warning-hover",
            active: "active:bg-warning-active active:text-on-warning-active",
        },
        faded: {
            default: "text-warning",
            hover: "hover:text-warning-hover hover:bg-warning-subtle",
            active: "active:text-warning-active active:bg-warning-subtle-hover",
        },
        bordered: {
            default: "border-warning text-warning",
            hover: "hover:border-warning-hover hover:text-warning-hover",
            active: "active:border-warning-active active:text-warning-active",
        },
        ghost: {
            default: "border-warning text-warning",
            hover: "hover:bg-warning-hover hover:text-on-warning-hover",
            active: "active:bg-warning-active active:text-on-warning-active",
        },
    },
    danger: {
        solid: {
            default: "bg-danger text-on-danger",
            hover: "hover:bg-danger-hover hover:text-on-danger-hover",
            active: "active:bg-danger-active active:text-on-danger-active",
        },
        faded: {
            default: "text-danger",
            hover: "hover:text-danger-hover hover:bg-danger-subtle",
            active: "active:text-danger-active active:bg-danger-subtle-hover",
        },
        bordered: {
            default: "border-danger text-danger",
            hover: "hover:border-danger-hover hover:text-danger-hover",
            active: "active:border-danger-active active:text-danger-active",
        },
        ghost: {
            default: "border-danger text-danger",
            hover: "hover:bg-danger-hover hover:text-on-danger-hover",
            active: "active:bg-danger-active active:text-on-danger-active",
        },
    },
};

export const buttonStyles = tv({
    base: [
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "min-w-max",
        "outline-none",
        "select-none",
        "data-[pressed=true]:scale-95",
        "data-[focus-visible=true]:z-10",
        "data-[focus-visible=true]:outline-2",
        "data-[focus-visible=true]:outline-primary-600",
        "data-[focus-visible=true]:outline-offset-2",
    ],
    variants: {
        variant: {
            solid: "",
            faded: "bg-transparent",
            bordered: "bg-transparent border border-solid",
            ghost: "bg-transparent border border-solid",
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
            sm: "px-2 py-1 gap-2 text-small",
            md: "px-3 py-2 gap-3 text-base",
            lg: "px-4 py-3 gap-4 text-large",
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
        isDisabled: {
            true: "opacity-disabled pointer-events-none",
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
    ],
});

export type ButtonStyles = typeof buttonStyles;
