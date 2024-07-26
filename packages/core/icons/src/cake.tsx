import { CakeIcon as IconFilled } from "@heroicons/react/24/solid";
import { CakeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CakeIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CakeIcon = ({ filled = false, color = "currentColor", ...props }: CakeIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
