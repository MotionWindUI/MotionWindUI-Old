import { BoltIcon as IconFilled } from "@heroicons/react/24/solid";
import { BoltIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BoltIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BoltIcon = ({ filled = false, color = "currentColor", ...props }: BoltIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
