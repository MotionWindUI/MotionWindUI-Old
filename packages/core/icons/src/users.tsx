import { UsersIcon as IconFilled } from "@heroicons/react/24/solid";
import { UsersIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UsersIconProps = IconSvgProps & {
  filled?: boolean;
};

export const UsersIcon = ({ filled = false, color = "currentColor", ...props }: UsersIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
