import { tv } from "tailwind-variants";
import { groupDataFocusRing } from "../utils/focusRing";

export const inputStyles = tv({
  slots: {
    root: ["group", "inline-flex", "flex-col", "data-[hidden=true]:hidden"],
    label: ["block", "font-medium", "text-neutral", "cursor-pointer"],
    labelWrapper: [
      "grid",
      "items-start",
      "grid-rows-[auto_1fr]",
      "gap-2",
      "group-data-[label-placement='left']:grid-cols-[auto_1fr]",
      "group-data-[label-placement='left']:items-center",
      "group-data-[label-placement='left']:gap-4",
    ],
    helpContentWrapper: [
      "flex",
      "flex-col",
      "items-center",
      "gap-1",
      "items-start",
      "col-span-2",
      "group-data-[label-placement='left']:col-start-2",
    ],
    description: ["text-neutral", "text-sm", "opacity-90"],
    errorMessage: ["text-danger", "text-sm"],
    inputContentWrapper: [
      "flex",
      "items-center",
      "gap-2",
      "justify-between",
      "border-none",
      ...groupDataFocusRing,
    ],
    inputWrapper: ["flex", "flex-col"],
    input: [
      "w-full",
      "min-w-48",
      "min-h-9",
      "bg-transparent",
      "outline-none",
      "border-none",
      "p-2",
    ],
    startContent: [],
    endContent: [],
  },
  variants: {
    radius: {
      none: {
        inputContentWrapper: ["rounded-none"],
      },
      sm: {
        inputContentWrapper: ["rounded-sm"],
      },
      md: {
        inputContentWrapper: ["rounded-md"],
      },
      lg: {
        inputContentWrapper: ["rounded-lg"],
      },
      full: {
        inputContentWrapper: ["rounded-full"],
      },
    },
    variant: {
      flat: {},
      outline: {
        inputContentWrapper: ["border", "border-md", "border-solid"],
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
  },
  compoundVariants: [
    // Flat / Color
    {
      color: "neutral",
      variant: "flat",
      className: {
        input: [
          "text-on-neutral-negative",
          "group-data-[hover=true]:text-on-neutral-negative-hover",
          "group-data-[focus=true]:!text-on-neutral-negative",
          "placeholder-neutral",
        ],
        inputContentWrapper: [
          "bg-input-neutral-subtle",
          "group-data-[focus=true]:!bg-input-neutral-subtle",
          "group-data-[hover=true]:bg-input-neutral-subtle-hover",
        ],
      },
    },
    {
      color: "primary",
      variant: "flat",
      className: {
        input: [
          "text-on-primary-negative",
          "group-data-[hover=true]:text-on-primary-negative-hover",
          "group-data-[focus=true]:!text-on-primary-negative",
          "placeholder-primary",
        ],
        inputContentWrapper: [
          "bg-input-primary-subtle",
          "group-data-[hover=true]:bg-input-primary-subtle-hover",
          "group-data-[focus=true]:!bg-input-primary-subtle",
        ],
      },
    },
    {
      color: "secondary",
      variant: "flat",
      className: {
        input: [
          "text-on-secondary-negative",
          "group-data-[hover=true]:text-on-secondary-negative-hover",
          "group-data-[focus=true]:!text-on-secondary-negative",
          "placeholder-secondary",
        ],
        inputContentWrapper: [
          "bg-input-secondary-subtle",
          "group-data-[hover=true]:bg-input-secondary-subtle-hover",
          "group-data-[focus=true]:!bg-input-secondary-subtle",
        ],
      },
    },
    {
      color: "success",
      variant: "flat",
      className: {
        input: [
          "text-on-success-negative",
          "group-data-[hover=true]:text-on-success-negative-hover",
          "group-data-[focus=true]:!text-on-success-negative",
          "placeholder-success",
        ],
        inputContentWrapper: [
          "bg-input-success-subtle",
          "group-data-[hover=true]:bg-input-success-subtle-hover",
          "group-data-[focus=true]:!bg-input-success-subtle",
        ],
      },
    },
    {
      color: "warning",
      variant: "flat",
      className: {
        input: [
          "text-on-warning-negative",
          "group-data-[hover=true]:text-on-warning-negative-hover",
          "group-data-[focus=true]:!text-on-warning-negative",
          "placeholder-warning",
        ],
        inputContentWrapper: [
          "bg-input-warning-subtle",
          "group-data-[hover=true]:bg-input-warning-subtle-hover",
          "group-data-[focus=true]:!bg-input-warning-subtle",
        ],
      },
    },
    {
      color: "danger",
      variant: "flat",
      className: {
        input: [
          "text-on-danger-negative",
          "group-data-[hover=true]:text-on-danger-negative-hover",
          "group-data-[focus=true]:!text-on-danger-negative",
          "placeholder-danger",
        ],
        inputContentWrapper: [
          "bg-input-danger-subtle",
          "group-data-[hover=true]:bg-input-danger-subtle-hover",
          "group-data-[focus=true]:!bg-input-danger-subtle",
        ],
      },
    },
    // Outline / Color
    {
      color: "neutral",
      variant: "outline",
      className: {
        input: [
          "text-on-neutral-negative",
          "group-data-[hover=true]:text-on-neutral-negative-hover",
          "group-data-[focus=true]:text-on-neutral-negative",
          "placeholder-neutral",
        ],
        inputContentWrapper: [
          "bg-input-neutral-subtle",
          "border-neutral-subtle",
          "group-data-[hover=true]:border-neutral-subtle-hover",
          "group-data-[focus=true]:border-neutral-subtle",
        ],
      },
    },
  ],
});

export type InputSlots = keyof ReturnType<typeof inputStyles>;
