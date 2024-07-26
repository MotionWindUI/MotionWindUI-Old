import { ArrowRightEndOnRectangleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowRightEndOnRectangleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowRightEndOnRectangleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowRightEndOnRectangleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowRightEndOnRectangleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
