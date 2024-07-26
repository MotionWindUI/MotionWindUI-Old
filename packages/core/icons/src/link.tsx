import { LinkIcon as IconFilled } from "@heroicons/react/24/solid";
import { LinkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LinkIconProps = IconSvgProps & {
  filled?: boolean;
};

export const LinkIcon = ({ filled = false, color = "currentColor", ...props }: LinkIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
