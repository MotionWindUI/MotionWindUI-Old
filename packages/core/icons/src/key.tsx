import { KeyIcon as IconFilled } from "@heroicons/react/24/solid";
import { KeyIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type KeyIconProps = IconSvgProps & {
  filled?: boolean;
};

export const KeyIcon = ({ filled = false, color = "currentColor", ...props }: KeyIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
