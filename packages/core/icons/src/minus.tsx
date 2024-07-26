import { MinusIcon as IconFilled } from "@heroicons/react/24/solid";
import { MinusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MinusIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MinusIcon = ({ filled = false, color = "currentColor", ...props }: MinusIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
