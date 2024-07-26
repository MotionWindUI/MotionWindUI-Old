import { CalendarIcon as IconFilled } from "@heroicons/react/24/solid";
import { CalendarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CalendarIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CalendarIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CalendarIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
