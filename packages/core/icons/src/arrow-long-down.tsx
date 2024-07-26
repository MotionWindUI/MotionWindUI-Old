import { ArrowLongDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLongDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLongDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowLongDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowLongDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
