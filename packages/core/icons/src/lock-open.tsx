import { LockOpenIcon as IconFilled } from "@heroicons/react/24/solid";
import { LockOpenIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LockOpenIconProps = IconSvgProps & {
  filled?: boolean;
};

export const LockOpenIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: LockOpenIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
