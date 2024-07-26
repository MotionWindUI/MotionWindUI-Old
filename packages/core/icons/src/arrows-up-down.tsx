import { ArrowsUpDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowsUpDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowsUpDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowsUpDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowsUpDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
