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
    root: ["group", "inline-flex", "items-center", "flex-row", "relative", "select-none"],
    wrapper: ["relative", "inline-flex", "items-center", "flex-row"],
    track: [
      "relative",
      "inline-flex",
      "items-center",
      "flex-row",
      "flex-shrink-0",
      "justify-start",
      "px-1",
      "overflow-hidden",
      "bg-neutral-subtle",
      ...groupDataFocusRing,
    ],
    thumb: ["z-10", "bg-white"],
    label: [],
    startContent: [],
    endContent: [],
    thumbContent: [],
    description: [],
  },
  variants: {
    color: {
      neutral: {
        track: ["bg-neutral"],
      },
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {},
      md: {
        track: ["w-6", "h-4"],
      },
      lg: {},
    },
    radius: {
      none: {},
      sm: {},
      md: {},
      lg: {},
      full: {},
    },
    isDisabled: {
      true: {},
    },
    isReadOnly: {
      true: {},
    },
    disableAnimations: {
      true: {},
    },
  },
});

export type SwitchSlots = keyof ReturnType<typeof switchStyles>;
