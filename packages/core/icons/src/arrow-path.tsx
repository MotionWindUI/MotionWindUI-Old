import { ArrowPathIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowPathIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowPathIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowPathIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowPathIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
