import { tv } from "tailwind-variants";

export const inputStyles = tv({
  slots: {
    root: ["group", "inline-flex", "flex-col", "data-[hidden=true]:hidden"],
    label: ["block", "font-medium", "group-data-[label-placement='left']:pr-4"],
    labelWrapper: [
      "grid",
      "items-start",
      "grid-rows-[auto_1fr]",
      "group-data-[label-placement='left']:grid-cols-[auto_1fr]",
      "group-data-[label-placement='left']:items-center",
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
    inputContentWrapper: ["flex", "items-center", "gap-2", "justify-between"],
    inputWrapper: ["flex", "flex-col"],
    input: ["w-full", "min-w-48", "bg-transparent", "outline-none", "border-none", "p-1"],
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
    color: {
      neutral: {
        input: ["text-neutral", "placeholder-neutral"],
        inputContentWrapper: ["bg-neutral-subtle"],
      },
      primary: {
        input: ["text-primary", "placeholder-primary"],
        inputContentWrapper: ["bg-primary-subtle"],
      },
      secondary: {
        input: ["text-secondary", "placeholder-secondary"],
        inputContentWrapper: ["bg-secondary-subtle"],
      },
      success: {
        input: ["text-success", "placeholder-success"],
        inputContentWrapper: ["bg-success-subtle"],
      },
      warning: {
        input: ["text-warning", "placeholder-warning"],
        inputContentWrapper: ["bg-warning-subtle"],
      },
      danger: {
        input: ["text-danger", "placeholder-danger"],
        inputContentWrapper: ["bg-danger-subtle"],
      },
    },
  },
});

export type InputSlots = keyof ReturnType<typeof inputStyles>;
