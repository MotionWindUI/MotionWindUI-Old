import { PhoneXMarkIcon as IconFilled } from "@heroicons/react/24/solid";
import { PhoneXMarkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PhoneXMarkIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PhoneXMarkIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: PhoneXMarkIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
