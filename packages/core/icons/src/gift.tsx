import { GiftIcon as IconFilled } from "@heroicons/react/24/solid";
import { GiftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GiftIconProps = IconSvgProps & {
  filled?: boolean;
};

export const GiftIcon = ({ filled = false, color = "currentColor", ...props }: GiftIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
