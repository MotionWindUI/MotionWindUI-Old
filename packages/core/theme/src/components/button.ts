import { cva } from "class-variance-authority";
import { combineStyles } from "../utils/components";

export interface ButtonVariantStateStyles {
    default: string;
    hover: string;
    active: string;
    disabled: string;
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
            hover: "hover:bg-neutral-hover hover:text-on-neutral-hover",
            active: "active:bg-neutral-active active:text-on-neutral-active",
            disabled:
                "disabled:bg-neutral-disabled disabled:text-on-neutral-disabled",
        },
        faded: {
            default: "text-neutral",
            hover: "hover:text-neutral-hover hover:bg-neutral-subtle",
            active: "active:text-neutral-active active:bg-neutral-subtle-hover",
            disabled: "disabled:text-neutral",
        },
        bordered: {
            default: "border-neutral text-neutral",
            hover: "hover:border-neutral-hover hover:text-neutral-hover",
            active: "active:border-neutral-active active:text-neutral-active",
            disabled: "disabled:border-neutral disabled:text-neutral",
        },
        ghost: {
            default: "border-neutral text-neutral",
            hover: "hover:bg-neutral-hover hover:text-on-neutral-hover",
            active: "active:bg-neutral-active active:text-on-neutral-active",
            disabled: "disabled:border-neutral disabled:text-neutral",
        },
    },
    primary: {
        solid: {
            default: "bg-primary text-on-primary",
            hover: "hover:bg-primary-hover hover:text-on-primary-hover",
            active: "active:bg-primary-active active:text-on-primary-active",
            disabled:
                "disabled:bg-primary-disabled disabled:text-on-primary-disabled",
        },
        faded: {
            default: "text-primary",
            hover: "hover:text-primary-hover hover:bg-primary-subtle",
            active: "active:text-primary-active active:bg-primary-subtle-hover",
            disabled: "disabled:text-primary",
        },
        bordered: {
            default: "border-primary text-primary",
            hover: "hover:border-primary-hover hover:text-primary-hover",
            active: "active:border-primary-active active:text-primary-active",
            disabled: "disabled:border-primary disabled:text-primary",
        },
        ghost: {
            default: "border-primary text-primary",
            hover: "hover:bg-primary-hover hover:text-on-primary-hover",
            active: "active:bg-primary-active active:text-on-primary-active",
            disabled: "disabled:border-primary disabled:text-primary",
        },
    },
    secondary: {
        solid: {
            default: "bg-secondary text-on-secondary",
            hover: "hover:bg-secondary-hover hover:text-on-secondary-hover",
            active: "active:bg-secondary-active active:text-on-secondary-active",
            disabled:
                "disabled:bg-secondary-disabled disabled:text-on-secondary-disabled",
        },
        faded: {
            default: "text-secondary",
            hover: "hover:text-secondary-hover hover:bg-secondary-subtle",
            active: "active:text-secondary-active active:bg-secondary-subtle-hover",
            disabled: "disabled:text-secondary",
        },
        bordered: {
            default: "border-secondary text-secondary",
            hover: "hover:border-secondary-hover hover:text-secondary-hover",
            active: "active:border-secondary-active active:text-secondary-active",
            disabled: "disabled:border-secondary disabled:text-secondary",
        },
        ghost: {
            default: "border-secondary text-secondary",
            hover: "hover:bg-secondary-hover hover:text-on-secondary-hover",
            active: "active:bg-secondary-active active:text-on-secondary-active",
            disabled: "disabled:border-secondary disabled:text-secondary",
        },
    },
    success: {
        solid: {
            default: "bg-success text-on-success",
            hover: "hover:bg-success-hover hover:text-on-success-hover",
            active: "active:bg-success-active active:text-on-success-active",
            disabled:
                "disabled:bg-success-disabled disabled:text-on-success-disabled",
        },
        faded: {
            default: "text-success",
            hover: "hover:text-success-hover hover:bg-success-subtle",
            active: "active:text-success-active active:bg-success-subtle-hover",
            disabled: "disabled:text-success",
        },
        bordered: {
            default: "border-success text-success",
            hover: "hover:border-success-hover hover:text-success-hover",
            active: "active:border-success-active active:text-success-active",
            disabled: "disabled:border-success disabled:text-success",
        },
        ghost: {
            default: "border-success text-success",
            hover: "hover:bg-success-hover hover:text-on-success-hover",
            active: "active:bg-success-active active:text-on-success-active",
            disabled: "disabled:border-success disabled:text-success",
        },
    },
    warning: {
        solid: {
            default: "bg-warning text-on-warning",
            hover: "hover:bg-warning-hover hover:text-on-warning-hover",
            active: "active:bg-warning-active active:text-on-warning-active",
            disabled:
                "disabled:bg-warning-disabled disabled:text-on-warning-disabled",
        },
        faded: {
            default: "text-warning",
            hover: "hover:text-warning-hover hover:bg-warning-subtle",
            active: "active:text-warning-active active:bg-warning-subtle-hover",
            disabled: "disabled:text-warning",
        },
        bordered: {
            default: "border-warning text-warning",
            hover: "hover:border-warning-hover hover:text-warning-hover",
            active: "active:border-warning-active active:text-warning-active",
            disabled: "disabled:border-warning disabled:text-warning",
        },
        ghost: {
            default: "border-warning text-warning",
            hover: "hover:bg-warning-hover hover:text-on-warning-hover",
            active: "active:bg-warning-active active:text-on-warning-active",
            disabled: "disabled:border-warning disabled:text-warning",
        },
    },
    danger: {
        solid: {
            default: "bg-danger text-on-danger",
            hover: "hover:bg-danger-hover hover:text-on-danger-hover",
            active: "active:bg-danger-active active:text-on-danger-active",
            disabled:
                "disabled:bg-danger-disabled disabled:text-on-danger-disabled",
        },
        faded: {
            default: "text-danger",
            hover: "hover:text-danger-hover hover:bg-danger-subtle",
            active: "active:text-danger-active active:bg-danger-subtle-hover",
            disabled: "disabled:text-danger",
        },
        bordered: {
            default: "border-danger text-danger",
            hover: "hover:border-danger-hover hover:text-danger-hover",
            active: "active:border-danger-active active:text-danger-active",
            disabled: "disabled:border-danger disabled:text-danger",
        },
        ghost: {
            default: "border-danger text-danger",
            hover: "hover:bg-danger-hover hover:text-on-danger-hover",
            active: "active:bg-danger-active active:text-on-danger-active",
            disabled: "disabled:border-danger disabled:text-danger",
        },
    },
};

export const buttonStyles = cva(
    [
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "min-w-max",
        "focus-visible:outline-[length:--focus-outline-width]",
        "focus-visible::outline[--focus-outline-color]",
        "focus-visible:outline-offset-[--focus-outline-offset]",
        "disabled:opacity-[--disabled-opacity]",
        "disabled:cursor-not-allowed",
        "data-[pressed=true]:scale-95",
    ],
    {
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
                sm: "",
                md: "",
                lg: "",
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
        },
        compoundVariants: [
            {
                color: "neutral",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.neutral.solid.default,
                    buttonVariants.neutral.solid.hover,
                    buttonVariants.neutral.solid.active,
                    buttonVariants.neutral.solid.disabled,
                ),
            },
            {
                color: "neutral",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.neutral.faded.default,
                    buttonVariants.neutral.faded.hover,
                    buttonVariants.neutral.faded.active,
                    buttonVariants.neutral.faded.disabled,
                ),
            },
            {
                color: "neutral",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.neutral.bordered.default,
                    buttonVariants.neutral.bordered.hover,
                    buttonVariants.neutral.bordered.active,
                    buttonVariants.neutral.bordered.disabled,
                ),
            },
            {
                color: "neutral",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.neutral.ghost.default,
                    buttonVariants.neutral.ghost.hover,
                    buttonVariants.neutral.ghost.active,
                    buttonVariants.neutral.ghost.disabled,
                ),
            },
            {
                color: "primary",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.primary.solid.default,
                    buttonVariants.primary.solid.hover,
                    buttonVariants.primary.solid.active,
                    buttonVariants.primary.solid.disabled,
                ),
            },
            {
                color: "primary",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.primary.faded.default,
                    buttonVariants.primary.faded.hover,
                    buttonVariants.primary.faded.active,
                    buttonVariants.primary.faded.disabled,
                ),
            },
            {
                color: "primary",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.primary.bordered.default,
                    buttonVariants.primary.bordered.hover,
                    buttonVariants.primary.bordered.active,
                    buttonVariants.primary.bordered.disabled,
                ),
            },
            {
                color: "primary",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.primary.ghost.default,
                    buttonVariants.primary.ghost.hover,
                    buttonVariants.primary.ghost.active,
                    buttonVariants.primary.ghost.disabled,
                ),
            },
            {
                color: "secondary",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.secondary.solid.default,
                    buttonVariants.secondary.solid.hover,
                    buttonVariants.secondary.solid.active,
                    buttonVariants.secondary.solid.disabled,
                ),
            },
            {
                color: "secondary",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.secondary.faded.default,
                    buttonVariants.secondary.faded.hover,
                    buttonVariants.secondary.faded.active,
                    buttonVariants.secondary.faded.disabled,
                ),
            },
            {
                color: "secondary",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.secondary.bordered.default,
                    buttonVariants.secondary.bordered.hover,
                    buttonVariants.secondary.bordered.active,
                    buttonVariants.secondary.bordered.disabled,
                ),
            },
            {
                color: "secondary",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.secondary.ghost.default,
                    buttonVariants.secondary.ghost.hover,
                    buttonVariants.secondary.ghost.active,
                    buttonVariants.secondary.ghost.disabled,
                ),
            },
            {
                color: "success",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.success.solid.default,
                    buttonVariants.success.solid.hover,
                    buttonVariants.success.solid.active,
                    buttonVariants.success.solid.disabled,
                ),
            },
            {
                color: "success",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.success.faded.default,
                    buttonVariants.success.faded.hover,
                    buttonVariants.success.faded.active,
                    buttonVariants.success.faded.disabled,
                ),
            },
            {
                color: "success",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.success.bordered.default,
                    buttonVariants.success.bordered.hover,
                    buttonVariants.success.bordered.active,
                    buttonVariants.success.bordered.disabled,
                ),
            },
            {
                color: "success",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.success.ghost.default,
                    buttonVariants.success.ghost.hover,
                    buttonVariants.success.ghost.active,
                    buttonVariants.success.ghost.disabled,
                ),
            },
            {
                color: "warning",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.warning.solid.default,
                    buttonVariants.warning.solid.hover,
                    buttonVariants.warning.solid.active,
                    buttonVariants.warning.solid.disabled,
                ),
            },
            {
                color: "warning",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.warning.faded.default,
                    buttonVariants.warning.faded.hover,
                    buttonVariants.warning.faded.active,
                    buttonVariants.warning.faded.disabled,
                ),
            },
            {
                color: "warning",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.warning.bordered.default,
                    buttonVariants.warning.bordered.hover,
                    buttonVariants.warning.bordered.active,
                    buttonVariants.warning.bordered.disabled,
                ),
            },
            {
                color: "warning",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.warning.ghost.default,
                    buttonVariants.warning.ghost.hover,
                    buttonVariants.warning.ghost.active,
                    buttonVariants.warning.ghost.disabled,
                ),
            },
            {
                color: "danger",
                variant: "solid",
                className: combineStyles(
                    buttonVariants.danger.solid.default,
                    buttonVariants.danger.solid.hover,
                    buttonVariants.danger.solid.active,
                    buttonVariants.danger.solid.disabled,
                ),
            },
            {
                color: "danger",
                variant: "faded",
                className: combineStyles(
                    buttonVariants.danger.faded.default,
                    buttonVariants.danger.faded.hover,
                    buttonVariants.danger.faded.active,
                    buttonVariants.danger.faded.disabled,
                ),
            },
            {
                color: "danger",
                variant: "bordered",
                className: combineStyles(
                    buttonVariants.danger.bordered.default,
                    buttonVariants.danger.bordered.hover,
                    buttonVariants.danger.bordered.active,
                    buttonVariants.danger.bordered.disabled,
                ),
            },
            {
                color: "danger",
                variant: "ghost",
                className: combineStyles(
                    buttonVariants.danger.ghost.default,
                    buttonVariants.danger.ghost.hover,
                    buttonVariants.danger.ghost.active,
                    buttonVariants.danger.ghost.disabled,
                ),
            },
        ],
    },
);
