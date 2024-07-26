import { UserPlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { UserPlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UserPlusIconProps = IconSvgProps & {
  filled?: boolean;
};

export const UserPlusIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: UserPlusIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
