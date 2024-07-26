import { TrashIcon as IconFilled } from "@heroicons/react/24/solid";
import { TrashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TrashIconProps = IconSvgProps & {
  filled?: boolean;
};

export const TrashIcon = ({ filled = false, color = "currentColor", ...props }: TrashIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
