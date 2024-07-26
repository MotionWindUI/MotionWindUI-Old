import { EllipsisHorizontalCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { EllipsisHorizontalCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EllipsisHorizontalCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const EllipsisHorizontalCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: EllipsisHorizontalCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
