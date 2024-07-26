import { HeartIcon as IconFilled } from "@heroicons/react/24/solid";
import { HeartIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HeartIconProps = IconSvgProps & {
  filled?: boolean;
};

export const HeartIcon = ({ filled = false, color = "currentColor", ...props }: HeartIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
