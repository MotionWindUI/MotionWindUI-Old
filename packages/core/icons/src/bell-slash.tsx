import { BellSlashIcon as IconFilled } from "@heroicons/react/24/solid";
import { BellSlashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BellSlashIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BellSlashIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BellSlashIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
