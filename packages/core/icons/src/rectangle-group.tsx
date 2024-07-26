import { RectangleGroupIcon as IconFilled } from "@heroicons/react/24/solid";
import { RectangleGroupIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type RectangleGroupIconProps = IconSvgProps & {
  filled?: boolean;
};

export const RectangleGroupIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: RectangleGroupIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
