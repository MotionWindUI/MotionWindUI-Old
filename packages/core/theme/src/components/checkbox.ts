import { tv } from "tailwind-variants";
import { groupDataFocusOnlyRing, groupDataFocusRing } from "../utils/focusRing";

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
      "select-none",
    ],
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "align-middle",
      "flex-shrink-0",
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-2",
      "before:border-neutral-negative",
      "before:border-solid",
      "before:box-border",
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[hovered=true]:bg-neutral-subtle",
      "before:group-data-[pressed=true]:border-neutral-negative-hover",
      ...groupDataFocusRing,
      ...groupDataFocusOnlyRing,
    ],
    icon: "z-10 w-4 h-4 opacity-0 inset-0",
    label: "select-none relative !text-neutral",
    description: "!text-subtle opacity-90 text-small pt-1",
    fieldError: "!text-danger text-small",
  },
  variants: {
    size: {
      sm: {
        base: "gap-2",
        wrapper: "w-4 h-4",
        label: "text-small",
        icon: "w-3 h-3",
        description: "text-tiny",
        fieldError: "text-tiny",
      },
      md: {
        base: "gap-2",
        wrapper: "w-5 h-5",
        label: "text-base",
        icon: "w-5 h-5",
        description: "text-small",
        fieldError: "text-small",
      },
      lg: {
        base: "gap-3",
        wrapper: "w-6 h-6",
        label: "text-large",
        icon: "w-5 h-5",
        description: "text-base",
        fieldError: "text-base",
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
    isReadOnly: {
      true: {
        base: "pointer-events-none cursor-default",
      },
    },
    isInvalid: {
      true: {
        wrapper: [
          "before:border-danger",
          "after:bg-danger",
          "group-data-[hovered=true]:bg-danger-subtle",
        ],
      },
    },
    isRequired: {
      true: {
        label: ["after:content-['*']", "after:text-danger", "after:ml-0.5"],
      },
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
      },
      false: {
        wrapper: [
          "before:transition-colors",
          "group-data-[pressed=true]:scale-95",
          "transition-transform",
          "after:transition-transform-opacity",
          "after:!ease-linear",
          "after:!duration-200",
          "motion-reduce:transition-none",
        ],
        icon: "transition-opacity motion-reduce:transition-none",
      },
    },
  },
});

export const checkBoxGroupStyles = tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-medium !text-neutral",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "!text-subtle opacity-90 text-small",
    errorMessage: "!text-danger text-small",
  },
  variants: {
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    size: {
      sm: {
        label: "text-small",
        description: "text-tiny",
        errorMessage: "text-tiny",
      },
      md: {
        label: "text-base",
        description: "text-small",
        errorMessage: "text-small",
      },
      lg: {
        label: "text-large",
        description: "text-base",
        errorMessage: "text-base",
      },
    },
  },
  defaultVariants: {
    isInvalid: false,
    isRequired: false,
  },
});

export type CheckboxGroupSlots = keyof ReturnType<typeof checkBoxGroupStyles>;

export type CheckboxSlots = keyof ReturnType<typeof checkBoxStyles>;
