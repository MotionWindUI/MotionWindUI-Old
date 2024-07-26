import { TagIcon as IconFilled } from "@heroicons/react/24/solid";
import { TagIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TagIconProps = IconSvgProps & {
  filled?: boolean;
};

export const TagIcon = ({ filled = false, color = "currentColor", ...props }: TagIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
