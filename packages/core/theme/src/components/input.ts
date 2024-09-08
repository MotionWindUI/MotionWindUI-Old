import { tv } from "tailwind-variants";
import { groupDataFocusRing } from "../utils/focusRing";

export const inputStyles = tv({
  slots: {
    root: ["group", "inline-flex", "flex-col", "data-[hidden=true]:hidden"],
    label: ["block", "font-medium", "text-neutral", "cursor-pointer", "pb-2"],
    labelWrapper: ["flex", "items-center", "gap-2"],
    helpContentWrapper: [
      "group-data-[has-help-content=false]:hidden",
      "flex",
      "flex-col",
      "items-start",
    ],
    description: ["text-neutral", "text-sm", "opacity-90"],
    errorMessage: ["text-danger", "text-sm"],
    inputContentWrapper: [
      "flex",
      "items-center",
      "justify-between",
      "bg-transparent",
      "group-data-[has-start-content=true]:ps-1.5",
      "group-data-[has-end-content=true]:pe-1.5",
      ...groupDataFocusRing,
    ],
    inputWrapper: ["flex", "flex-col", "w-full", "gap-3"],
    input: [
      "w-full",
      "min-w-48",
      "min-h-10",
      "!bg-transparent",
      "!outline-none",
      "border-none",
      "p-2",
      "font-normal",
    ],
    startContent: ["text-current"],
    endContent: ["text-current"],
  },
  variants: {
    labelPlacement: {
      top: {
        root: ["flex-col"],
        labelWrapper: ["flex-col", "items-start"],
        label: ["pb-2"],
      },
      left: {
        root: [
          "flex-row",
          "items-center",
          "flex-nowrap",
          "group-data-[has-help-content=true]:!items-start",
        ],
        labelWrapper: [
          "flex-row",
          "items-center",
          "group-data-[has-help-content=true]:items-start",
        ],
        inputWrapper: ["flex-1"],
        label: [
          "pr-2",
          "relative",
          "rtl:pr-0",
          "rtl:pl-2",
          "pointer-events-auto",
          "group-data-[has-help-content=true]:pt-3",
        ],
      },
    },
    radius: {
      none: {
        inputContentWrapper: ["rounded-none"],
        inputWrapper: ["rounded-none"],
      },
      sm: {
        inputContentWrapper: ["rounded-sm"],
        inputWrapper: ["rounded-sm"],
      },
      md: {
        inputContentWrapper: ["rounded-md"],
        inputWrapper: ["rounded-md"],
      },
      lg: {
        inputContentWrapper: ["rounded-lg"],
        inputWrapper: ["rounded-lg"],
      },
      full: {
        inputContentWrapper: ["rounded-full", "group-data-[is-multiline=true]:!rounded-lg"],
        inputWrapper: ["rounded-full", "group-data-[is-multiline=true]:!rounded-lg"],
      },
    },
    variant: {
      flat: {},
      outline: {
        inputContentWrapper: ["border", "border-solid"],
      },
      underlined: {
        inputContentWrapper: [
          "relative",
          "box-border",
          "border-b-2",
          "border-neutral-200",
          "!px-1",
          "!pb-0",
          "group-data-[hover=true]:border-neutral-300",
          "!rounded-none",
          "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",

          // Animation for underlined input
          // Moves an underline from 0 (from the left if LTR, from the right if RTL) to full width
          "after:content-['']",
          "after:absolute",
          "after:-bottom-0.5",
          "after:left-0",
          "after:w-0",
          "after:h-0.5",
          "after:transition-width",
          "after:motion-reduce:transition-none",
          "after:duration-500",
          "group-data-[focus=true]:after:w-full",
          "after:bg-neutral-500",

          // RTL Support
          "rtl:after:!left-auto",
          "rtl:after:right-0",
        ],
        input: ["!shadow-none", "!drop-shadow-none"],
        inputWrapper: ["!shadow-none", "!drop-shadow-none", "!rounded-none"],
      },
      bordered: {
        inputContentWrapper: ["border", "border-solid", "bg-transparent"],
        inputWrapper: ["bg-transparent", "h-full"],
        input: ["h-full", "!bg-transparent"],
      },
    },
    color: {
      neutral: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {
        label: ["text-tiny"],
        inputContentWrapper: ["h-8", "min-h-8"],
        input: ["text-sm", "!px-1"],
      },
      md: {
        label: ["text-sm"],
        inputContentWrapper: ["h-10", "min-h-10"],
        input: ["text-base", "!px-1.5"],
      },
      lg: {
        label: ["text-base"],
        inputContentWrapper: ["h-12", "min-h-12"],
        input: ["text-lg", "!px-2"],
      },
    },
    disableAnimations: {
      true: {
        root: ["transition-none"],
        inputContentWrapper: ["after:transition-none"],
        input: ["transition-none"],
        label: ["transition-none"],
        labelWrapper: ["transition-none"],
      },
    },
    isInvalid: {
      true: {},
    },
    isDisabled: {
      true: {
        root: ["opacity-disabled", "pointer-events-none"],
      },
    },
    isReadOnly: {
      true: {
        root: ["pointer-events-none"],
        inputWrapper: ["opacity-disabled"],
      },
    },
    isRequired: {
      true: {
        label: [
          "after:content-['*']",
          "after:text-danger",
          "after:ml-0.5",
          "rtl:ml-0",
          "rtl:mr-0.5",
        ],
      },
    },
    isMultiLine: {
      true: {
        inputWrapper: ["!h-auto"],
        input: ["resize-none", "data-[hide-scrollbar=true]:!scrollbar-none"],
      },
    },
  },
  compoundVariants: [
    // Label Placement / Size
    // For small size, with label on the left, we need to tweak the top padding of the label
    {
      labelPlacement: "left",
      size: "sm",
      className: {
        label: ["group-data-[has-help-content=true]:!pt-2.5"],
      },
    },
    // Flat / Color
    {
      color: "neutral",
      variant: "flat",
      className: {
        input: [
          "text-neutral-800",
          "group-data-[hover=true]:text-neutral-900",
          "group-data-[focus=true]:!text-neutral-800",
          "placeholder:text-neutral-500",
        ],
        inputContentWrapper: [
          "bg-neutral-200",
          "group-data-[hover=true]:bg-neutral-300",
          "group-data-[focus=true]:!bg-neutral-200",
        ],
        startContent: ["text-neutral-800"],
        endContent: ["text-neutral-800"],
      },
    },
    {
      color: "primary",
      variant: "flat",
      className: {
        input: [
          "text-primary-800",
          "group-data-[hover=true]:text-primary-900",
          "group-data-[focus=true]:!text-primary-800",
          "placeholder:text-primary-500",
        ],
        inputContentWrapper: [
          "bg-primary-200",
          "group-data-[hover=true]:bg-primary-300",
          "group-data-[focus=true]:!bg-primary-200",
        ],
        startContent: ["text-primary-800"],
        endContent: ["text-primary-800"],
      },
    },
    {
      color: "secondary",
      variant: "flat",
      className: {
        input: [
          "text-secondary-800",
          "group-data-[hover=true]:text-secondary-900",
          "group-data-[focus=true]:!text-secondary-800",
          "placeholder:text-secondary-500",
        ],
        inputContentWrapper: [
          "bg-secondary-200",
          "group-data-[hover=true]:bg-secondary-300",
          "group-data-[focus=true]:!bg-secondary-200",
        ],
        startContent: ["text-secondary-800"],
        endContent: ["text-secondary-800"],
      },
    },
    {
      color: "success",
      variant: "flat",
      className: {
        input: [
          "text-success-800",
          "group-data-[hover=true]:text-success-900",
          "group-data-[focus=true]:!text-success-800",
          "placeholder:text-success-500",
        ],
        inputContentWrapper: [
          "bg-success-200",
          "group-data-[hover=true]:bg-success-300",
          "group-data-[focus=true]:!bg-success-200",
        ],
        startContent: ["text-success-800"],
        endContent: ["text-success-800"],
      },
    },
    {
      color: "warning",
      variant: "flat",
      className: {
        input: [
          "text-warning-800",
          "group-data-[hover=true]:text-warning-900",
          "group-data-[focus=true]:!text-warning-800",
          "placeholder:text-warning-500",
        ],
        inputContentWrapper: [
          "bg-warning-200",
          "group-data-[hover=true]:bg-warning-300",
          "group-data-[focus=true]:!bg-warning-200",
        ],
        startContent: ["text-warning-800"],
        endContent: ["text-warning-800"],
      },
    },
    {
      color: "danger",
      variant: "flat",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "group-data-[focus=true]:!text-danger-800",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "bg-danger-200",
          "group-data-[hover=true]:bg-danger-300",
          "group-data-[focus=true]:!bg-danger-200",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
    // Outline / Color
    {
      color: "neutral",
      variant: "outline",
      className: {
        input: [
          "text-neutral-800",
          "group-data-[hover=true]:text-neutral-900",
          "placeholder:text-neutral-500",
        ],
        inputContentWrapper: [
          "bg-neutral-200",
          "border-neutral-300",
          "group-data-[hover=true]:border-neutral-400",
        ],
        startContent: ["text-neutral-800"],
        endContent: ["text-neutral-800"],
      },
    },
    {
      color: "primary",
      variant: "outline",
      className: {
        input: [
          "text-primary-800",
          "group-data-[hover=true]:text-primary-900",
          "placeholder:text-primary-500",
        ],
        inputContentWrapper: [
          "bg-primary-200",
          "border-primary-300",
          "group-data-[hover=true]:border-primary-400",
        ],
        startContent: ["text-primary-800"],
        endContent: ["text-primary-800"],
      },
    },
    {
      color: "secondary",
      variant: "outline",
      className: {
        input: [
          "text-secondary-800",
          "group-data-[hover=true]:text-secondary-900",
          "placeholder:text-secondary-500",
        ],
        inputContentWrapper: [
          "bg-secondary-200",
          "border-secondary-300",
          "group-data-[hover=true]:border-secondary-400",
        ],
        startContent: ["text-secondary-800"],
        endContent: ["text-secondary-800"],
      },
    },
    {
      color: "success",
      variant: "outline",
      className: {
        input: [
          "text-success-800",
          "group-data-[hover=true]:text-success-900",
          "placeholder:text-success-500",
        ],
        inputContentWrapper: [
          "bg-success-200",
          "border-success-300",
          "group-data-[hover=true]:border-success-400",
        ],
        startContent: ["text-success-800"],
        endContent: ["text-success-800"],
      },
    },
    {
      color: "warning",
      variant: "outline",
      className: {
        input: [
          "text-warning-800",
          "group-data-[hover=true]:text-warning-900",
          "placeholder:text-warning-500",
        ],
        inputContentWrapper: [
          "bg-warning-200",
          "border-warning-300",
          "group-data-[hover=true]:border-warning-400",
        ],
        startContent: ["text-warning-800"],
        endContent: ["text-warning-800"],
      },
    },
    {
      color: "danger",
      variant: "outline",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "bg-danger-200",
          "border-danger-300",
          "group-data-[hover=true]:border-danger-400",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
    // Outline Variant / Size
    {
      variant: "outline",
      size: "sm",
      className: {
        input: ["border-1"],
      },
    },
    {
      variant: "outline",
      size: "md",
      className: {
        input: ["border-1.5"],
      },
    },
    {
      variant: "outline",
      size: "lg",
      className: {
        input: ["border-2"],
      },
    },
    // Underlined / Color
    {
      variant: "underlined",
      color: "neutral",
      className: {
        input: [
          "text-neutral-800",
          "group-data-[hover=true]:text-neutral-900",
          "group-data-[focus=true]:!text-neutral-800",
          "placeholder:text-neutral-500",
        ],
        inputContentWrapper: [
          "border-neutral-200",
          "group-data-[hover=true]:border-neutral-300",
          "after:bg-neutral-500",
        ],
        startContent: ["text-neutral-800"],
        endContent: ["text-neutral-800"],
      },
    },
    {
      variant: "underlined",
      color: "primary",
      className: {
        input: [
          "text-primary-800",
          "group-data-[hover=true]:text-primary-900",
          "group-data-[focus=true]:!text-primary-800",
          "placeholder:text-primary-500",
        ],
        inputContentWrapper: [
          "border-primary-200",
          "group-data-[hover=true]:border-primary-300",
          "after:bg-primary-500",
        ],
        startContent: ["text-primary-800"],
        endContent: ["text-primary-800"],
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      className: {
        input: [
          "text-secondary-800",
          "group-data-[hover=true]:text-secondary-900",
          "group-data-[focus=true]:!text-secondary-800",
          "placeholder:text-secondary-500",
        ],
        inputContentWrapper: [
          "border-secondary-200",
          "group-data-[hover=true]:border-secondary-300",
          "after:bg-secondary-500",
        ],
        startContent: ["text-secondary-800"],
        endContent: ["text-secondary-800"],
      },
    },
    {
      variant: "underlined",
      color: "success",
      className: {
        input: [
          "text-success-800",
          "group-data-[hover=true]:text-success-900",
          "group-data-[focus=true]:!text-success-800",
          "placeholder:text-success-500",
        ],
        inputContentWrapper: [
          "border-success-200",
          "group-data-[hover=true]:border-success-300",
          "after:bg-success-500",
        ],
        startContent: ["text-success-800"],
        endContent: ["text-success-800"],
      },
    },
    {
      variant: "underlined",
      color: "warning",
      className: {
        input: [
          "text-warning-800",
          "group-data-[hover=true]:text-warning-900",
          "group-data-[focus=true]:!text-warning-800",
          "placeholder:text-warning-500",
        ],
        inputContentWrapper: [
          "border-warning-200",
          "group-data-[hover=true]:border-warning-300",
          "after:bg-warning-500",
        ],
        startContent: ["text-warning-800"],
        endContent: ["text-warning-800"],
      },
    },
    {
      variant: "underlined",
      color: "danger",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "group-data-[focus=true]:!text-danger-800",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "border-danger-200",
          "group-data-[hover=true]:border-danger-300",
          "after:bg-danger-500",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
    // Underlined / Size
    {
      variant: "underlined",
      size: "sm",
      className: {
        inputContentWrapper: ["after:h-0.5", "after:-bottom-0", "border-b-1", "h-full"],
      },
    },
    {
      variant: "underlined",
      size: "md",
      className: {
        inputContentWrapper: ["after:h-0.5", "after:-bottom-0.5", "border-b-2"],
      },
    },
    {
      variant: "underlined",
      size: "lg",
      className: {
        inputContentWrapper: ["border-b-4", "after:h-1", "after:-bottom-1"],
      },
    },
    // Bordered / Color
    {
      variant: "bordered",
      color: "neutral",
      className: {
        input: [
          "text-neutral",
          "group-data-[hover=true]:text-neutral-hover",
          "placeholder:text-neutral-500",
        ],
        inputContentWrapper: [
          "border-neutral-200",
          "group-data-[hover=true]:border-neutral-300",
          "group-data-[focus=true]:!border-neutral-600",
        ],
        startContent: ["text-neutral-600"],
        endContent: ["text-neutral-600"],
      },
    },
    {
      variant: "bordered",
      color: "primary",
      className: {
        input: [
          "text-primary",
          "group-data-[hover=true]:text-primary-hover",
          "placeholder:text-primary-500",
        ],
        inputContentWrapper: [
          "border-primary-200",
          "group-data-[hover=true]:border-primary-300",
          "group-data-[focus=true]:!border-primary-600",
        ],
        startContent: ["text-primary-600"],
        endContent: ["text-primary-600"],
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      className: {
        input: [
          "text-secondary",
          "group-data-[hover=true]:text-secondary-hover",
          "placeholder:text-secondary-500",
        ],
        inputContentWrapper: [
          "border-secondary-200",
          "group-data-[hover=true]:border-secondary-300",
          "group-data-[focus=true]:!border-secondary-600",
        ],
        startContent: ["text-secondary-600"],
        endContent: ["text-secondary-600"],
      },
    },
    {
      variant: "bordered",
      color: "success",
      className: {
        input: [
          "text-success",
          "group-data-[hover=true]:text-success-hover",
          "placeholder:text-success-500",
        ],
        inputContentWrapper: [
          "border-success-200",
          "group-data-[hover=true]:border-success-300",
          "group-data-[focus=true]:!border-success-600",
        ],
        startContent: ["text-success-600"],
        endContent: ["text-success-600"],
      },
    },
    {
      variant: "bordered",
      color: "warning",
      className: {
        input: [
          "text-warning",
          "group-data-[hover=true]:text-warning-hover",
          "placeholder:text-warning-500",
        ],
        inputContentWrapper: [
          "border-warning-200",
          "group-data-[hover=true]:border-warning-300",
          "group-data-[focus=true]:!border-warning-600",
        ],
        startContent: ["text-warning-600"],
        endContent: ["text-warning-600"],
      },
    },
    {
      variant: "bordered",
      color: "danger",
      className: {
        input: [
          "text-danger",
          "group-data-[hover=true]:text-danger-hover",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "border-danger-200",
          "group-data-[hover=true]:border-danger-300",
          "group-data-[focus=true]:!border-danger-600",
        ],
        startContent: ["text-danger-600"],
        endContent: ["text-danger-600"],
      },
    },
    // Invalid / Variant
    {
      isInvalid: true,
      variant: "flat",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "group-data-[focus=true]:!text-danger-800",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "bg-danger-200",
          "group-data-[hover=true]:bg-danger-300",
          "group-data-[focus=true]:!bg-danger-200",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
    {
      isInvalid: true,
      variant: "outline",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "bg-danger-200",
          "border-danger-300",
          "group-data-[hover=true]:border-danger-400",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
    {
      isInvalid: true,
      variant: "underlined",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "group-data-[focus=true]:!text-danger-800",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "border-danger-200",
          "group-data-[hover=true]:border-danger-300",
          "after:bg-danger-500",
        ],
      },
    },
    {
      isInvalid: true,
      variant: "bordered",
      className: {
        input: [
          "text-danger-800",
          "group-data-[hover=true]:text-danger-900",
          "group-data-[focus=true]:!text-danger-800",
          "placeholder:text-danger-500",
        ],
        inputContentWrapper: [
          "border-danger-200",
          "group-data-[hover=true]:border-danger-300",
          "after:bg-danger-500",
        ],
        startContent: ["text-danger-800"],
        endContent: ["text-danger-800"],
      },
    },
  ],
});

export type InputSlots = keyof ReturnType<typeof inputStyles>;
