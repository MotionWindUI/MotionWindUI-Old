import { BellAlertIcon as IconFilled } from "@heroicons/react/24/solid";
import { BellAlertIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BellAlertIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BellAlertIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BellAlertIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
