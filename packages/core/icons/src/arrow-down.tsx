import { ArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
