import { tv } from "tailwind-variants";
import { focusRing } from "../utils/focusRing";

export const checkBoxStyles = tv({
  slots: {
    base: [
      "group",
      "max-w-fit",
      "inline-flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "p-2",
      "-m-2",
      ...focusRing,
    ],
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "align-middle",
      "flex-shrink-0",
      "overflow-hidden",
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-solid",
      "before:border-2",
      "before:box-border",
      "before:border-neutral",
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[focus-visible=true]:z-10",
      "group-data-[focus-visible=true]:outline-2",
      "group-data-[focus-visible=true]:outline-offset-2",
      "group-data-[focus-visible=true]:outline-primary-600",
      ...focusRing,
    ],
    icon: "z-10 w-4 h-3 opacity-0 inset-0",
    label: "select-none relative text-neutral",
  },
  variants: {
    size: {
      sm: {
        base: "gap-2",
        wrapper: "w-4 h-4",
        label: "text-small",
        icon: "w-3 h-2",
      },
      md: {
        base: "gap-2",
        wrapper: "w-5 h-5",
        label: "text-base",
        icon: "w-4 h-3",
      },
      lg: {
        base: "gap-3",
        wrapper: "w-6 h-6",
        label: "text-large",
        icon: "w-5 h-4",
      },
    },
    color: {
      neutral: {
        wrapper: "after:bg-neutral after:text-on-neutral",
        icon: "text-on-neutral",
      },
      primary: {
        wrapper: "after:bg-primary after:text-on-primary",
        icon: "text-on-primary",
      },
      secondary: {
        wrapper: "after:bg-secondary after:text-on-secondary",
        icon: "text-on-secondary",
      },
      success: {
        wrapper: "after:bg-success after:text-on-success",
        icon: "text-on-success",
      },
      warning: {
        wrapper: "after:bg-warning after:text-on-warning",
        icon: "text-on-warning",
      },
      danger: {
        wrapper: "after:bg-danger after:text-on-danger",
        icon: "text-on-danger",
      },
    },
    radius: {
      none: {
        wrapper: ["rounded-none", "before:rounded-none", "after:rounded-none"],
      },
      sm: {
        wrapper: ["rounded-small", "before:rounded-small", "after:rounded-small"],
      },
      md: {
        wrapper: ["rounded-medium", "before:rounded-medium", "after:rounded-medium"],
      },
      lg: {
        wrapper: ["rounded-large", "before:rounded-large", "after:rounded-large"],
      },
      xl: {
        wrapper: ["rounded-xlarge", "before:rounded-xlarge", "after:rounded-xlarge"],
      },
      full: {
        wrapper: ["rounded-full", "before:rounded-full", "after:rounded-full"],
      },
    },
    isSelected: {
      true: {
        wrapper: "after:scale-100 after:opacity-100",
        icon: "opacity-100",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
      },
      false: {
        wrapper: [
          "before:transition-all after:transition-all duration-200 motion-reduce:transition-none",
        ],
        icon: "transition-all duration-200 motion-reduce:transition-none",
      },
    },
  },
  compoundVariants: [
    {
      isPressed: true,
      disableAnimation: false,
      className: {
        wrapper: "scale-95",
      },
    },
  ],
});
