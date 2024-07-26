import { StopCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { StopCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type StopCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const StopCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: StopCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
