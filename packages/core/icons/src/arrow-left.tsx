import { ArrowLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLeftIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowLeftIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowLeftIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
