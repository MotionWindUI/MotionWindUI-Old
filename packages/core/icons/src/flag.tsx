import { FlagIcon as IconFilled } from "@heroicons/react/24/solid";
import { FlagIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FlagIconProps = IconSvgProps & {
  filled?: boolean;
};

export const FlagIcon = ({ filled = false, color = "currentColor", ...props }: FlagIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
