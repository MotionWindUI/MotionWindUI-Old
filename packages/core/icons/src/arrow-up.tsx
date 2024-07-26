import { ArrowUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
