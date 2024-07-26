import { ArrowLongUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLongUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLongUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowLongUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowLongUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
