import { ArrowsPointingInIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowsPointingInIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowsPointingInIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowsPointingInIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowsPointingInIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
