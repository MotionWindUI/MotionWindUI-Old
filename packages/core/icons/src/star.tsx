import { StarIcon as IconFilled } from "@heroicons/react/24/solid";
import { StarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type StarIconProps = IconSvgProps & {
  filled?: boolean;
};

export const StarIcon = ({ filled = false, color = "currentColor", ...props }: StarIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
