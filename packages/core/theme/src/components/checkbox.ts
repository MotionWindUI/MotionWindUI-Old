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
    outsideWraper: "border-neutral border-2 border-solid box-border inset-0",
    wrapper: "transition-all origin-center w-full h-full",
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",
    label: "select-none relative",
  },
  variants: {
    size: {
      sm: {
        outsideWraper: "w-4 h-4",
      },
      md: {
        outsideWraper: "w-5 h-5",
      },
      lg: {
        outsideWraper: "w-6 h-6",
      },
    },
    radius: {
      none: {
        outsideWraper: "rounded-none",
      },
      sm: {
        outsideWraper: "rounded-[calc(theme(borderRadius.small)*0.5)]",
      },
      md: {
        outsideWraper: "rounded-[calc(theme(borderRadius.medium)*0.5)]",
      },
      lg: {
        outsideWraper: "rounded-[calc(theme(borderRadius.large)*0.5)]",
      },
      xl: {
        outsideWraper: "rounded-[calc(theme(borderRadius.xlarge)*0.5)]",
      },
      full: {
        outsideWraper: "rounded-[calc(theme(borderRadius.full)*0.5)]",
      },
    },
    color: {
      neutral: {
        wrapper: "bg-neutral",
      },
      primary: {
        wrapper: "bg-primary",
      },
      secondary: {
        wrapper: "bg-secondary",
      },
      success: {
        wrapper: "bg-success",
      },
      warning: {
        wrapper: "bg-warning",
      },
      danger: {
        wrapper: "bg-danger",
      },
    },
    isSelected: {
      false: {
        wrapper: "scale-50 opacity-0 bg-neutral-subtle",
      },
      true: {
        wrapper: "scale-100 opacity-100",
      },
    },
  },
});
