import { PowerIcon as IconFilled } from "@heroicons/react/24/solid";
import { PowerIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PowerIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PowerIcon = ({ filled = false, color = "currentColor", ...props }: PowerIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
