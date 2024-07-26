import { BellSnoozeIcon as IconFilled } from "@heroicons/react/24/solid";
import { BellSnoozeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BellSnoozeIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BellSnoozeIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BellSnoozeIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
