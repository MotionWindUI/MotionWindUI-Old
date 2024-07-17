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

const buttonVariantStyles: ButtonVariants = {
    neutral: {
        solid: {
            default:
                "bg-[--button-neutral-solid-background] text-[--button-neutral-solid-text]",
            hover: "hover:bg-[--button-neutral-solid-hover-background] hover:text-[--button-neutral-solid-hover-text]",
            active: "active:bg-[--button-neutral-solid-active-background] active:text-[--button-neutral-solid-active-text]",
            disabled:
                "disabled:bg-[--button-neutral-solid-background] disabled:text-[--button-neutral-solid-text]",
        },
        faded: {
            default: "text-[--button-neutral-faded-text]",
            hover: "hover:bg-[--button-neutral-faded-hover-background] hover:text-[--button-neutral-faded-hover-text]",
            active: "active:bg-[--button-neutral-faded-active-background] active:text-[--button-neutral-faded-active-text]",
            disabled: "disabled:text-[--button-neutral-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-neutral-bordered-border] text-[--button-neutral-bordered-text]",
            hover: "hover:bg-[--button-neutral-bordered-hover-background] hover:text-[--button-neutral-bordered-hover-text]",
            active: "active:bg-[--button-neutral-bordered-active-background] active:text-[--button-neutral-bordered-active-text]",
            disabled:
                "disabled:border-[--button-neutral-bordered-border] disabled:text-[--button-neutral-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-neutral-ghost-border] text-[--button-neutral-ghost-text]",
            hover: "hover:bg-[--button-neutral-ghost-hover-background] hover:text-[--button-neutral-ghost-hover-text]",
            active: "active:bg-[--button-neutral-ghost-active-background] active:text-[--button-neutral-ghost-active-text]",
            disabled:
                "disabled:border-[--button-neutral-ghost-border] disabled:text-[--button-neutral-ghost-text]",
        },
    },
    primary: {
        solid: {
            default:
                "bg-[--button-primary-solid-background] text-[--button-primary-solid-text]",
            hover: "hover:bg-[--button-primary-solid-hover-background] hover:text-[--button-primary-solid-hover-text]",
            active: "active:bg-[--button-primary-solid-active-background] active:text-[--button-primary-solid-active-text]",
            disabled:
                "disabled:bg-[--button-primary-solid-background] disabled:text-[--button-primary-solid-text]",
        },
        faded: {
            default: "text-[--button-primary-faded-text]",
            hover: "hover:bg-[--button-primary-faded-hover-background] hover:text-[--button-primary-faded-hover-text]",
            active: "active:bg-[--button-primary-faded-active-background] active:text-[--button-primary-faded-active-text]",
            disabled: "disabled:text-[--button-primary-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-primary-bordered-border] text-[--button-primary-bordered-text]",
            hover: "hover:bg-[--button-primary-bordered-hover-background] hover:text-[--button-primary-bordered-hover-text]",
            active: "active:bg-[--button-primary-bordered-active-background] active:text-[--button-primary-bordered-active-text]",
            disabled:
                "disabled:border-[--button-primary-bordered-border] disabled:text-[--button-primary-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-primary-ghost-border] text-[--button-primary-ghost-text]",
            hover: "hover:bg-[--button-primary-ghost-hover-background] hover:text-[--button-primary-ghost-hover-text]",
            active: "active:bg-[--button-primary-ghost-active-background] active:text-[--button-primary-ghost-active-text]",
            disabled:
                "disabled:border-[--button-primary-ghost-border] disabled:text-[--button-primary-ghost-text]",
        },
    },
    secondary: {
        solid: {
            default:
                "bg-[--button-secondary-solid-background] text-[--button-secondary-solid-text]",
            hover: "hover:bg-[--button-secondary-solid-hover-background] hover:text-[--button-secondary-solid-hover-text]",
            active: "active:bg-[--button-secondary-solid-active-background] active:text-[--button-secondary-solid-active-text]",
            disabled:
                "disabled:bg-[--button-secondary-solid-background] disabled:text-[--button-secondary-solid-text]",
        },
        faded: {
            default: "text-[--button-secondary-faded-text]",
            hover: "hover:bg-[--button-secondary-faded-hover-background] hover:text-[--button-secondary-faded-hover-text]",
            active: "active:bg-[--button-secondary-faded-active-background] active:text-[--button-secondary-faded-active-text]",
            disabled: "disabled:text-[--button-secondary-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-secondary-bordered-border] text-[--button-secondary-bordered-text]",
            hover: "hover:bg-[--button-secondary-bordered-hover-background] hover:text-[--button-secondary-bordered-hover-text]",
            active: "active:bg-[--button-secondary-bordered-active-background] active:text-[--button-secondary-bordered-active-text]",
            disabled:
                "disabled:border-[--button-secondary-bordered-border] disabled:text-[--button-secondary-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-secondary-ghost-border] text-[--button-secondary-ghost-text]",
            hover: "hover:bg-[--button-secondary-ghost-hover-background] hover:text-[--button-secondary-ghost-hover-text]",
            active: "active:bg-[--button-secondary-ghost-active-background] active:text-[--button-secondary-ghost-active-text]",
            disabled:
                "disabled:border-[--button-secondary-ghost-border] disabled:text-[--button-secondary-ghost-text]",
        },
    },
    success: {
        solid: {
            default:
                "bg-[--button-success-solid-background] text-[--button-success-solid-text]",
            hover: "hover:bg-[--button-success-solid-hover-background] hover:text-[--button-success-solid-hover-text]",
            active: "active:bg-[--button-success-solid-active-background] active:text-[--button-success-solid-active-text]",
            disabled:
                "disabled:bg-[--button-success-solid-background] disabled:text-[--button-success-solid-text]",
        },
        faded: {
            default: "text-[--button-success-faded-text]",
            hover: "hover:bg-[--button-success-faded-hover-background] hover:text-[--button-success-faded-hover-text]",
            active: "active:bg-[--button-success-faded-active-background] active:text-[--button-success-faded-active-text]",
            disabled: "disabled:text-[--button-success-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-success-bordered-border] text-[--button-success-bordered-text]",
            hover: "hover:bg-[--button-success-bordered-hover-background] hover:text-[--button-success-bordered-hover-text]",
            active: "active:bg-[--button-success-bordered-active-background] active:text-[--button-success-bordered-active-text]",
            disabled:
                "disabled:border-[--button-success-bordered-border] disabled:text-[--button-success-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-success-ghost-border] text-[--button-success-ghost-text]",
            hover: "hover:bg-[--button-success-ghost-hover-background] hover:text-[--button-success-ghost-hover-text]",
            active: "active:bg-[--button-success-ghost-active-background] active:text-[--button-success-ghost-active-text]",
            disabled:
                "disabled:border-[--button-success-ghost-border] disabled:text-[--button-success-ghost-text]",
        },
    },
    warning: {
        solid: {
            default:
                "bg-[--button-warning-solid-background] text-[--button-warning-solid-text]",
            hover: "hover:bg-[--button-warning-solid-hover-background] hover:text-[--button-warning-solid-hover-text]",
            active: "active:bg-[--button-warning-solid-active-background] active:text-[--button-warning-solid-active-text]",
            disabled:
                "disabled:bg-[--button-warning-solid-background] disabled:text-[--button-warning-solid-text]",
        },
        faded: {
            default: "text-[--button-warning-faded-text]",
            hover: "hover:bg-[--button-warning-faded-hover-background] hover:text-[--button-warning-faded-hover-text]",
            active: "active:bg-[--button-warning-faded-active-background] active:text-[--button-warning-faded-active-text]",
            disabled: "disabled:text-[--button-warning-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-warning-bordered-border] text-[--button-warning-bordered-text]",
            hover: "hover:bg-[--button-warning-bordered-hover-background] hover:text-[--button-warning-bordered-hover-text]",
            active: "active:bg-[--button-warning-bordered-active-background] active:text-[--button-warning-bordered-active-text]",
            disabled:
                "disabled:border-[--button-warning-bordered-border] disabled:text-[--button-warning-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-warning-ghost-border] text-[--button-warning-ghost-text]",
            hover: "hover:bg-[--button-warning-ghost-hover-background] hover:text-[--button-warning-ghost-hover-text]",
            active: "active:bg-[--button-warning-ghost-active-background] active:text-[--button-warning-ghost-active-text]",
            disabled:
                "disabled:border-[--button-warning-ghost-border] disabled:text-[--button-warning-ghost-text]",
        },
    },
    danger: {
        solid: {
            default:
                "bg-[--button-danger-solid-background] text-[--button-danger-solid-text]",
            hover: "hover:bg-[--button-danger-solid-hover-background] hover:text-[--button-danger-solid-hover-text]",
            active: "active:bg-[--button-danger-solid-active-background] active:text-[--button-danger-solid-active-text]",
            disabled:
                "disabled:bg-[--button-danger-solid-background] disabled:text-[--button-danger-solid-text]",
        },
        faded: {
            default: "text-[--button-danger-faded-text]",
            hover: "hover:bg-[--button-danger-faded-hover-background] hover:text-[--button-danger-faded-hover-text]",
            active: "active:bg-[--button-danger-faded-active-background] active:text-[--button-danger-faded-active-text]",
            disabled: "disabled:text-[--button-danger-faded-text]",
        },
        bordered: {
            default:
                "border-[--button-danger-bordered-border] text-[--button-danger-bordered-text]",
            hover: "hover:bg-[--button-danger-bordered-hover-background] hover:text-[--button-danger-bordered-hover-text]",
            active: "active:bg-[--button-danger-bordered-active-background] active:text-[--button-danger-bordered-active-text]",
            disabled:
                "disabled:border-[--button-danger-bordered-border] disabled:text-[--button-danger-bordered-text]",
        },
        ghost: {
            default:
                "border-[--button-danger-ghost-border] text-[--button-danger-ghost-text]",
            hover: "hover:bg-[--button-danger-ghost-hover-background] hover:text-[--button-danger-ghost-hover-text]",
            active: "active:bg-[--button-danger-ghost-active-background] active:text-[--button-danger-ghost-active-text]",
            disabled:
                "disabled:border-[--button-danger-ghost-border] disabled:text-[--button-danger-ghost-text]",
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
                bordered: "border-[length:--button-border-width] border-solid",
                ghost: "border-[length:--button-border-width] border-solid hover:border-0 active:border-0",
            },
            color: {
                neutral: "pb-",
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
                sm: "rounded",
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
                variant: "solid",
                color: "neutral",
                className: combineStyles(
                    buttonVariantStyles.neutral.solid.default,
                    buttonVariantStyles.neutral.solid.hover,
                    buttonVariantStyles.neutral.solid.active,
                    buttonVariantStyles.neutral.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "neutral",
                className: combineStyles(
                    buttonVariantStyles.neutral.faded.default,
                    buttonVariantStyles.neutral.faded.hover,
                    buttonVariantStyles.neutral.faded.active,
                    buttonVariantStyles.neutral.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "neutral",
                className: combineStyles(
                    buttonVariantStyles.neutral.bordered.default,
                    buttonVariantStyles.neutral.bordered.hover,
                    buttonVariantStyles.neutral.bordered.active,
                    buttonVariantStyles.neutral.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "neutral",
                className: combineStyles(
                    buttonVariantStyles.neutral.ghost.default,
                    buttonVariantStyles.neutral.ghost.hover,
                    buttonVariantStyles.neutral.ghost.active,
                    buttonVariantStyles.neutral.ghost.disabled,
                ),
            },
            {
                variant: "solid",
                color: "primary",
                className: combineStyles(
                    buttonVariantStyles.primary.solid.default,
                    buttonVariantStyles.primary.solid.hover,
                    buttonVariantStyles.primary.solid.active,
                    buttonVariantStyles.primary.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "primary",
                className: combineStyles(
                    buttonVariantStyles.primary.faded.default,
                    buttonVariantStyles.primary.faded.hover,
                    buttonVariantStyles.primary.faded.active,
                    buttonVariantStyles.primary.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "primary",
                className: combineStyles(
                    buttonVariantStyles.primary.bordered.default,
                    buttonVariantStyles.primary.bordered.hover,
                    buttonVariantStyles.primary.bordered.active,
                    buttonVariantStyles.primary.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "primary",
                className: combineStyles(
                    buttonVariantStyles.primary.ghost.default,
                    buttonVariantStyles.primary.ghost.hover,
                    buttonVariantStyles.primary.ghost.active,
                    buttonVariantStyles.primary.ghost.disabled,
                ),
            },
            {
                variant: "solid",
                color: "secondary",
                className: combineStyles(
                    buttonVariantStyles.secondary.solid.default,
                    buttonVariantStyles.secondary.solid.hover,
                    buttonVariantStyles.secondary.solid.active,
                    buttonVariantStyles.secondary.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "secondary",
                className: combineStyles(
                    buttonVariantStyles.secondary.faded.default,
                    buttonVariantStyles.secondary.faded.hover,
                    buttonVariantStyles.secondary.faded.active,
                    buttonVariantStyles.secondary.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "secondary",
                className: combineStyles(
                    buttonVariantStyles.secondary.bordered.default,
                    buttonVariantStyles.secondary.bordered.hover,
                    buttonVariantStyles.secondary.bordered.active,
                    buttonVariantStyles.secondary.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "secondary",
                className: combineStyles(
                    buttonVariantStyles.secondary.ghost.default,
                    buttonVariantStyles.secondary.ghost.hover,
                    buttonVariantStyles.secondary.ghost.active,
                    buttonVariantStyles.secondary.ghost.disabled,
                ),
            },
            {
                variant: "solid",
                color: "success",
                className: combineStyles(
                    buttonVariantStyles.success.solid.default,
                    buttonVariantStyles.success.solid.hover,
                    buttonVariantStyles.success.solid.active,
                    buttonVariantStyles.success.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "success",
                className: combineStyles(
                    buttonVariantStyles.success.faded.default,
                    buttonVariantStyles.success.faded.hover,
                    buttonVariantStyles.success.faded.active,
                    buttonVariantStyles.success.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "success",
                className: combineStyles(
                    buttonVariantStyles.success.bordered.default,
                    buttonVariantStyles.success.bordered.hover,
                    buttonVariantStyles.success.bordered.active,
                    buttonVariantStyles.success.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "success",
                className: combineStyles(
                    buttonVariantStyles.success.ghost.default,
                    buttonVariantStyles.success.ghost.hover,
                    buttonVariantStyles.success.ghost.active,
                    buttonVariantStyles.success.ghost.disabled,
                ),
            },
            {
                variant: "solid",
                color: "warning",
                className: combineStyles(
                    buttonVariantStyles.warning.solid.default,
                    buttonVariantStyles.warning.solid.hover,
                    buttonVariantStyles.warning.solid.active,
                    buttonVariantStyles.warning.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "warning",
                className: combineStyles(
                    buttonVariantStyles.warning.faded.default,
                    buttonVariantStyles.warning.faded.hover,
                    buttonVariantStyles.warning.faded.active,
                    buttonVariantStyles.warning.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "warning",
                className: combineStyles(
                    buttonVariantStyles.warning.bordered.default,
                    buttonVariantStyles.warning.bordered.hover,
                    buttonVariantStyles.warning.bordered.active,
                    buttonVariantStyles.warning.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "warning",
                className: combineStyles(
                    buttonVariantStyles.warning.ghost.default,
                    buttonVariantStyles.warning.ghost.hover,
                    buttonVariantStyles.warning.ghost.active,
                    buttonVariantStyles.warning.ghost.disabled,
                ),
            },
            {
                variant: "solid",
                color: "danger",
                className: combineStyles(
                    buttonVariantStyles.danger.solid.default,
                    buttonVariantStyles.danger.solid.hover,
                    buttonVariantStyles.danger.solid.active,
                    buttonVariantStyles.danger.solid.disabled,
                ),
            },
            {
                variant: "faded",
                color: "danger",
                className: combineStyles(
                    buttonVariantStyles.danger.faded.default,
                    buttonVariantStyles.danger.faded.hover,
                    buttonVariantStyles.danger.faded.active,
                    buttonVariantStyles.danger.faded.disabled,
                ),
            },
            {
                variant: "bordered",
                color: "danger",
                className: combineStyles(
                    buttonVariantStyles.danger.bordered.default,
                    buttonVariantStyles.danger.bordered.hover,
                    buttonVariantStyles.danger.bordered.active,
                    buttonVariantStyles.danger.bordered.disabled,
                ),
            },
            {
                variant: "ghost",
                color: "danger",
                className: combineStyles(
                    buttonVariantStyles.danger.ghost.default,
                    buttonVariantStyles.danger.ghost.hover,
                    buttonVariantStyles.danger.ghost.active,
                    buttonVariantStyles.danger.ghost.disabled,
                ),
            },
        ],
    },
);
