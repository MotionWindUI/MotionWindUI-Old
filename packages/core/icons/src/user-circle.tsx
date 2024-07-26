import { UserCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { UserCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UserCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const UserCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: UserCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
