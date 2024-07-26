import { FireIcon as IconFilled } from "@heroicons/react/24/solid";
import { FireIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FireIconProps = IconSvgProps & {
  filled?: boolean;
};

export const FireIcon = ({ filled = false, color = "currentColor", ...props }: FireIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
