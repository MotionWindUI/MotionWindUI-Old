import { tv } from "tailwind-variants";
import { groupDataFocusRing } from "../utils/focusRing";

export const radioStyles = tv({
  slots: {
    // The root element of the radio component
    base: [
      "group",
      "relative",
      "max-w-fit",
      "flex-shrink-0",
      "overflow-hidden",
      "inline-flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "p-2",
      "-m-2",
      "select-none",
    ],
    // The wrapper of the control element. This holds the radio styles
    wrapper: [
      "relative",
      "rounded-full",
      "inline-flex",
      "justify-center",
      "items-center",
      "border-2",
      "border-neutral-negative",
      "box-border",
      "w-4",
      "h-4",
      ...groupDataFocusRing,
    ],
    // The radio control element. This is the actual radio input element
    control: [
      "rounded-full",
      "opacity-0",
      "scale-0",
      "z-10",
      "origin-center",
      "group-data-[selected=true]:opacity-100",
      "group-data-[selected=true]:scale-100",
    ],
    // The wrapper for the radio label and description
    labelWrapper: ["inline-flex", "flex-col", "pl-2"],
    // The radio label
    label: ["select-none", "relative", "!text-neutral"],
    // The radio description
    description: ["!text-subtle", "opacity-90", "text-small"],
  },
  variants: {
    size: {
      sm: {
        base: "gap-2",
        wrapper: "w-4 h-4",
        control: "w-2 h-2",
        labelWrapper: "gap-0.5",
        label: "text-small",
        description: "text-tiny",
      },
      md: {
        base: "gap-2",
        wrapper: "w-5 h-5",
        control: "w-2.5 h-2.5",
        labelWrapper: "gap-0.5",
        label: "text-base",
        description: "text-small",
      },
      lg: {
        base: "gap-2",
        wrapper: "w-6 h-6",
        control: "w-3 h-3",
        labelWrapper: "gap-1",
        label: "text-lg",
        description: "text-base",
      },
    },
    color: {
      neutral: {
        wrapper: "group-data-[selected=true]:border-neutral",
        control: "bg-neutral",
      },
      primary: {
        wrapper: "group-data-[selected=true]:border-primary",
        control: "bg-primary",
      },
      secondary: {
        wrapper: "group-data-[selected=true]:border-secondary",
        control: "bg-secondary",
      },
      success: {
        wrapper: "group-data-[selected=true]:border-success",
        control: "bg-success",
      },
      warning: {
        wrapper: "group-data-[selected=true]:border-warning",
        control: "bg-warning",
      },
      danger: {
        wrapper: "group-data-[selected=true]:border-danger",
        control: "bg-danger",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isReadOnly: {
      true: {
        base: "pointer-events-none cursor-default",
      },
    },
    disableAnimations: {
      true: {
        control: "transition-none",
        wrapper: "transition-none",
      },
      false: {
        control: "transition-all motion-reduce:transition-none",
        wrapper: "transition-colors motion-reduce:transition-none",
      },
    },
  },
});

export const radioGroupStyles = tv({
  slots: {
    base: ["inline-flex", "flex-col", "gap-2"],
    label: ["!text-neutral", "text-base", "font-semibold"],
    description: ["!text-subtle", "text-small", "opacity-90"],
    errorMessage: ["!text-danger", "text-small"],
  },
  variants: {
    size: {
      sm: {
        base: "gap-1",
        label: "text-small",
        description: "text-tiny",
        errorMessage: "text-tiny",
      },
      md: {
        base: "gap-2",
        label: "text-base",
        description: "text-small",
        errorMessage: "text-small",
      },
      lg: {
        base: "gap-3",
        label: "text-lg",
        description: "text-base",
        errorMessage: "text-base",
      },
    },
    isRequired: {
      true: {
        label: 'after:content-["*"] after:text-danger after:ml-0.5',
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled",
      },
    },
  },
});

export type RadioGroupSlots = keyof ReturnType<typeof radioGroupStyles>;

export type RadioSlots = keyof ReturnType<typeof radioStyles>;
