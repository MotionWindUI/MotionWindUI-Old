import { tv } from "tailwind-variants";
import { groupDataFocusRing } from "../utils/focusRing";

/**
 * The switch layout uses the following slots:
 *
 * - `root`: The base or root of the switch.
 * - `wrapper`: Wraps the switch input, label, track, and description.
 * - `track`: The track of the switch. Wraps the thumb, with the start and end content with any thumb content.
 * - `thumb`: The thumb of the switch.
 * - `label`: The label of the switch.
 * - `startContent`: The start content of the switch.
 * - `endContent`: The end content of the switch.
 * - `thumbContent`: The thumb content of the switch.
 * - `description`: The description of the switch.
 */
export const switchStyles = tv({
  slots: {
    root: [
      "group/toggle",
      "inline-flex",
      "items-center",
      "flex-row",
      "relative",
      "select-none",
      "hover:cursor-pointer",
    ],
    wrapper: ["relative", "inline-flex", "items-center", "flex-row"],
    track: [
      "relative",
      "inline-flex",
      "items-center",
      "flex-shrink-0",
      "justify-start",
      "px-1",
      "overflow-hidden",
      "bg-neutral-subtle",
      ...groupDataFocusRing,
    ],
    thumb: ["z-10", "bg-white", "shadow-sm", "inline-flex", "items-center", "justify-center"],
    label: [],
    startContent: [
      "scale-50",
      "opacity-0",
      "pointer-events-none",
      "group-data-[selected=true]/toggle:opacity-100",
      "group-data-[selected=true]/toggle:scale-100",
      "bg-transparent",
      "text-current",
      "z-0",
      "absolute",
      "top-1/2",
      "left-1.5",
      "-translate-y-1/2",
      "rtl:right-1.5",
      "rtl:left-0",
    ],
    endContent: [
      "opacity-100",
      "pointer-events-none",
      "group-data-[selected=true]/toggle:opacity-0",
      "group-data-[selected=true]/toggle:scale-50",
      "bg-transparent",
      "text-current",
      "z-0",
      "absolute",
      "top-1/2",
      "right-1.5",
      "-translate-y-1/2",
      "rtl:left-1.5",
      "rtl:right-0",
    ],
    thumbContent: [],
    description: ["text-sm", "text-neutral", "mt-1"],
  },
  variants: {
    color: {
      neutral: {
        track: ["group-data-[selected=true]/toggle:bg-neutral"],
        startContent: ["text-on-neutral"],
        endContent: ["text-neutral"],
      },
      primary: {
        track: ["group-data-[selected=true]/toggle:bg-primary"],
        startContent: ["text-on-primary"],
        endContent: ["text-primary"],
      },
      secondary: {
        track: ["group-data-[selected=true]/toggle:bg-secondary"],
        startContent: ["text-on-secondary"],
        endContent: ["text-secondary"],
      },
      success: {
        track: ["group-data-[selected=true]/toggle:bg-success"],
        startContent: ["text-on-success"],
        endContent: ["text-success"],
      },
      warning: {
        track: ["group-data-[selected=true]/toggle:bg-warning"],
        startContent: ["text-on-warning"],
        endContent: ["text-warning"],
      },
      danger: {
        track: ["group-data-[selected=true]/toggle:bg-danger"],
        startContent: ["text-on-danger"],
        endContent: ["text-danger"],
      },
    },
    size: {
      sm: {
        thumb: [
          "w-4",
          "h-4",
          "text-xs",
          "group-data-[selected=true]/toggle:ml-4",
          "group-data-[selected=true]/toggle:mr-0",
        ],
        track: ["w-10", "h-5", "mr-1", "rtl:mr-0", "rtl:ml-1"],
        startContent: ["w-4", "h-4"],
        endContent: ["w-4", "h-4"],
      },
      md: {
        thumb: [
          "w-5",
          "h-5",
          "text-sm",
          "group-data-[selected=true]/toggle:ml-5",
          "group-data-[selected=true]/toggle:mr-0",
          "rtl:group-data-[selected=true]/toggle:ml-0",
          "rtl:group-data-[selected=true]/toggle:mr-5",
        ],
        track: ["w-12", "h-7", "mr-2", "rtl:mr-0", "rtl:ml-2"],
        startContent: ["w-4", "h-4"],
        endContent: ["w-4", "h-4"],
      },
      lg: {
        thumb: [
          "w-6",
          "h-6",
          "text-base",
          "group-data-[selected=true]/toggle:ml-6",
          "group-data-[selected=true]/toggle:mr-0",
          "rtl:group-data-[selected=true]/toggle:ml-0",
          "rtl:group-data-[selected=true]/toggle:mr-6",
        ],
        track: ["w-14", "h-8", "mr-3", "rtl:mr-0", "rtl:ml-3"],
        startContent: ["w-5", "h-5"],
        endContent: ["w-5", "h-5"],
      },
    },
    radius: {
      none: {
        track: ["rounded-none"],
        thumb: ["rounded-none"],
      },
      sm: {
        track: ["rounded-sm"],
        thumb: ["rounded-sm"],
      },
      md: {
        track: ["rounded-md"],
        thumb: ["rounded-md"],
      },
      lg: {
        track: ["rounded-lg"],
        thumb: ["rounded-lg"],
      },
      full: {
        track: ["rounded-full"],
        thumb: ["rounded-full"],
      },
    },
    isDisabled: {
      true: {
        root: ["pointer-events-none"],
        track: ["opacity-disabled"],
      },
    },
    isReadOnly: {
      true: {
        root: ["pointer-events-none"],
      },
    },
    disableAnimations: {
      false: {
        thumb: ["transition-all", "duration-300", "motion-reduce:transition-none"],
        track: ["transition-all", "duration-300", "motion-reduce:transition-none"],
        startContent: ["transition-all", "duration-300", "motion-reduce:transition-none"],
        endContent: ["transition-all", "duration-300", "motion-reduce:transition-none"],
      },
      true: {
        thumb: ["transition-none"],
        track: ["transition-none"],
        startContent: ["transition-none"],
        endContent: ["transition-none"],
      },
    },
  },
});

export type SwitchSlots = keyof ReturnType<typeof switchStyles>;
