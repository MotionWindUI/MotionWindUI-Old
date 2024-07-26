import { UserMinusIcon as IconFilled } from "@heroicons/react/24/solid";
import { UserMinusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UserMinusIconProps = IconSvgProps & {
  filled?: boolean;
};

export const UserMinusIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: UserMinusIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
