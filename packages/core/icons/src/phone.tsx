import { PhoneIcon as IconFilled } from "@heroicons/react/24/solid";
import { PhoneIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PhoneIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PhoneIcon = ({ filled = false, color = "currentColor", ...props }: PhoneIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
