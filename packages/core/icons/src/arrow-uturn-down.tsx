import { ArrowUturnDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUturnDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUturnDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowUturnDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowUturnDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
