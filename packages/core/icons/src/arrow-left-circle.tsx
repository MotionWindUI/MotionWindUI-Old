import { ArrowLeftCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLeftCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLeftCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowLeftCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowLeftCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
