import { ShieldExclamationIcon as IconFilled } from "@heroicons/react/24/solid";
import { ShieldExclamationIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ShieldExclamationIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ShieldExclamationIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ShieldExclamationIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
